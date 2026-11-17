---
termin: MoE
rozwiniecie: Mixture of Experts
aliasy: []
pl: mieszanka ekspertów
skrot: "model, który aktywuje różne „eksperckie” części sieci zależnie od wejścia"
kategoria: modele
rejestr: [techniczny]
status: utrwalony
przyklad: "Model ma 500 mld parametrów, ale dzięki MoE aktywuje tylko część z nich naraz."
powiazane: [parameter, transformer]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Architektura, w której dla danego tokenu aktywowana jest tylko część specjalizowanych bloków („ekspertów”), zamiast używania wszystkich parametrów modelu przy każdym kroku.

Switch Transformer pokazał, jak takie rzadko aktywowane modele mogą skalować liczbę parametrów bez proporcjonalnego wzrostu kosztu każdego przykładu.
