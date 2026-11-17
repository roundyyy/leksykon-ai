// Wyszukiwarka po stronie przeglądarki: indeks ładowany raz, przy pierwszym użyciu.
import MiniSearch from 'minisearch';
import { fold } from '../lib/tekst';

export interface Wpis {
  id: string;
  termin: string;
  rozwiniecie: string;
  aliasy: string;
  pl: string;
  skrot: string;
  kategoria: string;
  status: string;
  tekst: string;
}

const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const adres = (sciezka: string) => BASE + sciezka.replace(/^\//, '');
export const adresHasla = (id: string) => adres(`haslo/${id}/`);

const tokenize = (s: string) => s.split(/[^\p{L}\p{N}]+/u).filter(Boolean);

let ladowanie: Promise<{ ms: MiniSearch<Wpis>; mapa: Map<string, Wpis> }> | undefined;

export function zaladuj() {
  ladowanie ??= fetch(adres('szukaj.json'))
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json() as Promise<Wpis[]>;
    })
    .then((dane) => {
      const ms = new MiniSearch<Wpis>({
        fields: ['termin', 'aliasy', 'rozwiniecie', 'pl', 'skrot', 'tekst'],
        tokenize,
        processTerm: (t) => fold(t),
        searchOptions: {
          boost: { termin: 8, aliasy: 5, rozwiniecie: 3, pl: 3, skrot: 1.5, tekst: 0.4 },
          prefix: true,
          fuzzy: (t) => (t.length > 3 ? 0.2 : false),
        },
      });
      ms.addAll(dane);
      return { ms, mapa: new Map(dane.map((d) => [d.id, d])) };
    })
    .catch((e) => {
      ladowanie = undefined; // pozwól spróbować ponownie
      throw e;
    });
  return ladowanie;
}

/** Zwraca hasła pasujące do zapytania — dokładne trafienia w nazwę/alias na początku. */
export async function szukaj(q: string, limit = 60): Promise<Wpis[]> {
  const fq = fold(q.trim());
  if (!fq) return [];
  const { ms, mapa } = await zaladuj();
  let wyniki = ms.search(q, { combineWith: 'AND' });
  if (!wyniki.length) wyniki = ms.search(q, { combineWith: 'OR' });
  const dokladne = (w: Wpis) =>
    [w.termin, w.rozwiniecie, w.pl, ...w.aliasy.split(' · ')].some((x) => x && fold(x) === fq);
  const poczatek = (w: Wpis) => fold(w.termin).startsWith(fq);
  const lista = wyniki.map((r) => mapa.get(r.id as string)!).filter(Boolean);
  const waga = (w: Wpis) => (dokladne(w) ? 2 : poczatek(w) ? 1 : 0);
  return lista
    .map((w, i) => ({ w, i, s: waga(w) }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, limit)
    .map((x) => x.w);
}
