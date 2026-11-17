---
termin: contamination
aliasy: [training data contamination, zanieczyszczenie danych]
pl: zanieczyszczenie danych treningowych testami
skrot: "zadania z benchmarku trafiły do danych treningowych, więc wynik jest zawyżony"
kategoria: trening
rejestr: [techniczny]
status: utrwalony
status_uwagi: bardzo ważny
przyklad: "Wysoki wynik może wynikać z contamination, jeśli pytania z benchmarku były w crawlu."
powiazane: [benchmark-leakage, decontamination, benchmark, overfitting]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Przypadek, w którym model widział podczas treningu zadania lub odpowiedzi później używane do oceny, przez co wynik benchmarku może być zawyżony. Badania nad benchmarkami wprost traktują leakage z pretrainingu jako problem dla wiarygodności ocen.
