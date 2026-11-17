import { getCollection, type CollectionEntry } from 'astro:content';
import { porownajTerminy } from './tekst';

export type Haslo = CollectionEntry<'hasla'>;
export type Porownanie = CollectionEntry<'porownania'>;

export const url = (sciezka = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${sciezka.replace(/^\//, '')}`;
};

export const urlHasla = (id: string) => url(`/haslo/${id}/`);

export async function wszystkieHasla() {
  const lista = await getCollection('hasla');
  return lista.sort((a, b) => porownajTerminy(a.data.termin, b.data.termin));
}

export async function wszystkiePorownania() {
  const lista = await getCollection('porownania');
  return lista.sort((a, b) => a.data.kolejnosc - b.data.kolejnosc || a.data.tytul.localeCompare(b.data.tytul, 'pl'));
}

/** Powiązane = wskazane w haśle + hasła, które wskazują na to hasło. Nieistniejące są pomijane. */
export function powiazane(h: Haslo, wszystkie: Haslo[]) {
  const mapa = new Map(wszystkie.map((x) => [x.id, x]));
  const ids = new Set(h.data.powiazane.filter((id) => mapa.has(id) && id !== h.id));
  for (const x of wszystkie) if (x.id !== h.id && x.data.powiazane.includes(h.id)) ids.add(x.id);
  return [...ids].map((id) => mapa.get(id)!);
}

export const formatDaty = (d: Date) =>
  d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
