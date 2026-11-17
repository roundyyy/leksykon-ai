export const REPO = 'roundyyy/leksykon-ai';
export const GALAZ = 'main';
export const KATALOG_HASEL = 'src/content/hasla';

export const REPO_URL = `https://github.com/${REPO}`;

/** Edytor GitHuba z nowym, wypełnionym plikiem hasła (bez uprawnień GitHub sam zaproponuje fork + pull request). */
export const nowyPlikUrl = (slug: string, tresc?: string) => {
  const p = new URLSearchParams({ filename: `${slug}.md` });
  if (tresc) p.set('value', tresc);
  return `${REPO_URL}/new/${GALAZ}/${KATALOG_HASEL}?${p.toString()}`;
};

export const edycjaUrl = (slug: string) => `${REPO_URL}/edit/${GALAZ}/${KATALOG_HASEL}/${slug}.md`;

export const zgloszenieUrl = (szablon: 'nowe-haslo.yml' | 'poprawka.yml', pola: Record<string, string> = {}) => {
  const p = new URLSearchParams({ template: szablon, ...pola });
  return `${REPO_URL}/issues/new?${p.toString()}`;
};

/** Rejestracja konta: potrzebna do dodawania, edycji i zgłaszania haseł */
export const GITHUB_REJESTRACJA = 'https://github.com/signup';

export const LICENCJA = 'CC BY 4.0';
export const LICENCJA_URL = 'https://creativecommons.org/licenses/by/4.0/deed.pl';
