---
termin: KV cache
aliasy: []
pl: pamięć podręczna kluczy i wartości attention
skrot: "pamięć podręczna attention, dzięki której model nie przelicza całej historii"
kategoria: modele
rejestr: [techniczny]
status: utrwalony
status_uwagi: bardzo ważny
przyklad: Długi kontekst zjada KV cache i zmniejsza liczbę równoległych żądań.
powiazane: [attention, prefill, context-window, prefix-caching]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Przechowuje wyniki wcześniejszych obliczeń attention, żeby przy generowaniu kolejnych tokenów nie przeliczać całej historii od początku. W systemach servingowych zajmuje istotną część pamięci GPU.
