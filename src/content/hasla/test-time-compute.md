---
termin: test-time compute
aliasy: [inference-time compute, test-time scaling]
pl: dodatkowe obliczenia w czasie rozwiązywania zadania
skrot: więcej obliczeń przy rozwiązywaniu konkretnego zadania zamiast większego modelu
kategoria: prompty-agenci
rejestr: [naukowy, marketingowy]
status: nowy
status_uwagi: bardzo ważny dla reasoning models
przyklad: Trudniejsze pytania dostają większy budżet test-time compute.
powiazane: [reasoning, best-of-n, grpo, inference]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Zamiast tylko zwiększać model podczas treningu, system poświęca więcej obliczeń na konkretny problem - np. generuje wiele kandydatów, używa verifiera lub dłużej poszukuje rozwiązania. Badania pokazują, że optymalny przydział test-time compute może istotnie poprawić wyniki.
