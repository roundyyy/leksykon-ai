// Funkcje tekstowe wspólne dla serwera i przeglądarki.

/** Małe litery, bez polskich znaków i akcentów: „Źródło” → „zrodlo”. */
export const fold = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l');

export const slugify = (s: string) => fold(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Pierwsza litera hasła do grupowania A–Z. */
export const litera = (termin: string) => {
  const c = fold(termin).replace(/[^a-z0-9]/g, '').charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : '#';
};

export const porownajTerminy = (a: string, b: string) => fold(a).localeCompare(fold(b), 'pl');

/** Usuwa znaczniki Markdown — do indeksu wyszukiwarki i opisów meta. */
export const bezMarkdown = (md = '') =>
  md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`#>]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const wielka = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const liczbaForm = (n: number, [jedna, kilka, wiele]: [string, string, string]) => {
  if (n === 1) return jedna;
  const d = n % 10, s = n % 100;
  return d >= 2 && d <= 4 && (s < 12 || s > 14) ? kilka : wiele;
};
export const ileHasel = (n: number) => `${n} ${liczbaForm(n, ['hasło', 'hasła', 'haseł'])}`;
