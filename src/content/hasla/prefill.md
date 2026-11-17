---
termin: prefill
aliasy: []
pl: faza wstępnego przetwarzania promptu
skrot: "faza, w której model przetwarza cały prompt przed pierwszym tokenem"
kategoria: modele
rejestr: [techniczny]
status: utrwalony
status_uwagi: ważny
przyklad: Przy 100 tysiącach tokenów problemem jest długi prefill.
powiazane: [decode, ttft, kv-cache]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Model przetwarza całe wejście przed wygenerowaniem pierwszego tokenu; odróżnia się ją od późniejszego *decode*. Systemy servingowe mierzą czas prefill osobno.
