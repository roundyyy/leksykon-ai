// Zamknięte listy wartości. Zmiana tutaj = zmiana w formularzu, filtrach i walidacji haseł.

export const KATEGORIE = {
  'kultura-slang': {
    nazwa: 'Kultura i slang',
    opis: 'Internetowy język, memy i etykiety z debaty o AI.',
  },
  modele: {
    nazwa: 'Modele i architektura',
    opis: 'Z czego zbudowane są modele i jak działają.',
  },
  trening: {
    nazwa: 'Trening i optymalizacja',
    opis: 'Jak modele się uczy, dostraja i odchudza.',
  },
  'prompty-agenci': {
    nazwa: 'Prompty, RAG i agenci',
    opis: 'Budowanie aplikacji: od promptu po autonomicznego agenta.',
  },
  bezpieczenstwo: {
    nazwa: 'Bezpieczeństwo i kontrola',
    opis: 'Ataki, zabezpieczenia, deepfaki i dopasowanie zachowania AI.',
  },
  'biznes-prawo': {
    nazwa: 'Biznes, prawo i praca',
    opis: 'AI w firmach, rynek i regulacje: od AI Act po shadow AI.',
  },
} as const;

export const STATUSY = {
  fundamentalny: { nazwa: 'fundamentalny', opis: 'Podstawa; bez tego trudno rozmawiać o AI.' },
  utrwalony: { nazwa: 'utrwalony', opis: 'Stabilne, powszechnie rozumiane znaczenie.' },
  nowy: { nazwa: 'nowy', opis: 'Świeży termin, znaczenie jeszcze się kształtuje.' },
  sporny: { nazwa: 'sporny', opis: 'Używany powszechnie, ale zakres znaczenia budzi spory.' },
  marketingowy: { nazwa: 'marketingowy', opis: 'Mocno nadużywany w marketingu; dopytaj, co dokładnie znaczy.' },
  niszowy: { nazwa: 'niszowy', opis: 'Znany głównie w wąskim środowisku.' },
} as const;

export const REJESTRY = {
  techniczny: 'techniczny',
  naukowy: 'naukowy',
  biznesowy: 'biznesowy',
  prawny: 'prawny',
  marketingowy: 'marketingowy',
  publicystyczny: 'publicystyczny',
  potoczny: 'potoczny',
  slang: 'slang',
  mem: 'mem',
} as const;

export type Kategoria = keyof typeof KATEGORIE;
export type Status = keyof typeof STATUSY;
export type Rejestr = keyof typeof REJESTRY;

export const klucze = <T extends object>(o: T) => Object.keys(o) as [keyof T & string, ...(keyof T & string)[]];

/** Hasła startowe wyszukiwarki i strony głównej */
export const POPULARNE = ['rag', 'agent', 'hallucination', 'token', 'mcp', 'vibe-coding', 'ai-slop', 'prompt-injection'];

/** Data, na którą aktualny jest raport źródłowy */
export const STAN_NA = '17 listopada 2026';
