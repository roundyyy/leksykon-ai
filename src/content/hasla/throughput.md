---
termin: throughput
aliasy: [przepustowość]
pl: przepustowość
skrot: ile pracy infrastruktura wykonuje w jednostce czasu
kategoria: modele
rejestr: [techniczny]
status: fundamentalny
przyklad: "Batching zwiększył throughput, choć pojedyncza odpowiedź nie stała się szybsza."
powiazane: [latency, tokens-per-second]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Ilość pracy wykonywana na jednostkę czasu, np. tokenów/s lub żądań/s. Większa współbieżność może poprawiać throughput kosztem latency. Dokumentacja vLLM wprost wskazuje zależność rozmiaru KV cache i concurrency od przepustowości.
