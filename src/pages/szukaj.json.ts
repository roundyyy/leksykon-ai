import { wszystkieHasla } from '../lib/hasla';
import { bezMarkdown } from '../lib/tekst';

export async function GET() {
  const hasla = await wszystkieHasla();
  const dane = hasla.map((h) => ({
    id: h.id,
    termin: h.data.termin,
    rozwiniecie: h.data.rozwiniecie ?? '',
    aliasy: h.data.aliasy.join(' · '),
    pl: h.data.pl,
    skrot: h.data.skrot,
    kategoria: h.data.kategoria,
    status: h.data.status,
    tekst: bezMarkdown([h.data.przyklad, h.body].filter(Boolean).join(' ')),
  }));
  return new Response(JSON.stringify(dane), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
