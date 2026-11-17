---
termin: backpropagation
aliasy: [backprop, propagacja wsteczna]
pl: propagacja wsteczna błędu
skrot: "algorytm liczący, jak każdy parametr sieci wpływa na błąd"
kategoria: trening
rejestr: [techniczny]
status: fundamentalny
status_uwagi: podstawowy termin techniczny
przyklad: "Backpropagation oblicza gradienty, a optymalizator wykorzystuje je do aktualizacji wag modelu"
powiazane: [gradient-descent, loss-function, neural-network]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Algorytm efektywnego obliczania pochodnych funkcji straty względem parametrów sieci neuronowej, wykorzystujący regułę łańcuchową rachunku różniczkowego.

Informacja o wpływie poszczególnych parametrów na błąd jest obliczana w kierunku od końcowych warstw do wcześniejszych.

Backpropagation samo nie aktualizuje wag; dostarcza gradienty, które wykorzystuje optymalizator.
