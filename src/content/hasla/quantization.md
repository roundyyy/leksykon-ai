---
termin: quantization
aliasy: [kwantyzacja, quantisation]
pl: kwantyzacja
skrot: "zmniejszanie precyzji liczbowej modelu, by był lżejszy/szybszy"
kategoria: trening
rejestr: [techniczny]
status: utrwalony
status_uwagi: bardzo utrwalony
przyklad: Wersja 4-bitowa mieści się na laptopie.
powiazane: [inference, distillation, parameter]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Reprezentowanie wag, aktywacji lub innych wartości z mniejszą precyzją liczbową - np. zamiast 16 bitów używanie 8 lub 4 - aby zmniejszyć pamięć i często przyspieszyć inferencję, zwykle kosztem pewnego ryzyka utraty jakości.

Kwantyzacja jest standardową klasą technik optymalizacji inferencji Transformerów.
