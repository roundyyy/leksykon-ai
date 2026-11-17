import type { APIContext } from 'astro';
import { wszystkieHasla } from '../lib/hasla';

export async function GET({ site }: APIContext) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const abs = (p: string) => new URL(`${base}${p}`, site).href;
  const hasla = await wszystkieHasla();
  const adresy = [
    { loc: abs('/') },
    { loc: abs('/slownik/') },
    { loc: abs('/nie-myl/') },
    { loc: abs('/sciagawka/') },
    { loc: abs('/o-projekcie/') },
    { loc: abs('/dodaj/') },
    ...hasla.map((h) => ({
      loc: abs(`/haslo/${h.id}/`),
      lastmod: (h.data.aktualne_na ?? h.data.dodano).toISOString().slice(0, 10),
    })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${adresy.map((a) => `  <url><loc>${a.loc}</loc>${'lastmod' in a && a.lastmod ? `<lastmod>${a.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
