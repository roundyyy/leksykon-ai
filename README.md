# Leksykon AI

Polski leksykon pojęć sztucznej inteligencji — technika, biznes, slang i memy.

**Strona:** https://roundyyy.github.io/leksykon-ai/

## Jak dodać hasło

- **Najprościej:** formularz [Dodaj hasło](https://roundyyy.github.io/leksykon-ai/dodaj/) przygotuje plik i otworzy GitHuba — zostaje kliknąć „Commit changes”.
- **Tylko pomysł:** [zaproponuj hasło](https://github.com/roundyyy/leksykon-ai/issues/new?template=nowe-haslo.yml).
- **Poprawka:** przycisk „Edytuj” lub „Zgłoś błąd” na dole każdego hasła.

Każde hasło to jeden plik w [`src/content/hasla/`](src/content/hasla/). Po zmianie strona przebudowuje się sama (GitHub Actions) w 1–2 minuty. Błędne pole zatrzymuje publikację, a strona zostaje w poprzedniej wersji.

## Format hasła

```markdown
---
termin: RAG
rozwiniecie: Retrieval-Augmented Generation
aliasy: [retrieval augmented generation]
pl: generowanie wspomagane wyszukiwaniem
skrot: wyszukaj dane, potem daj je modelowi do odpowiedzi
kategoria: prompty-agenci        # kultura-slang | modele | trening | prompty-agenci | bezpieczenstwo
rejestr: [techniczny]            # techniczny | naukowy | biznesowy | prawny | marketingowy | publicystyczny | potoczny | slang | mem
status: utrwalony                # fundamentalny | utrwalony | nowy | sporny | marketingowy | niszowy
przyklad: Chatbot HR robi RAG po regulaminach firmy.
powiazane: [retrieval, embedding]   # nazwy plików innych haseł
zrodla: []
dodano: 2026-11-17
---
Pełna definicja w Markdownie…
```

## Uruchomienie lokalne (opcjonalne)

```sh
npm install
npm run dev
```
