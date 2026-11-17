---
termin: recall
aliasy: [czułość, sensitivity, pełność]
pl: "czułość, pełność wykrywania"
skrot: jaki odsetek rzeczywistych przypadków model wykrył
kategoria: prompty-agenci
rejestr: [techniczny]
status: fundamentalny
status_uwagi: podstawowy termin ewaluacyjny
przyklad: "System wykrywa 95% rzeczywistych usterek, więc jego recall wynosi 0,95"
powiazane: [precision, f1-score, recall-at-k]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Odsetek rzeczywiście pozytywnych przypadków, które model poprawnie wykrył.

`Recall = TP / (TP + FN)`

Wysoki recall oznacza, że system pomija niewiele faktycznie występujących przypadków danej klasy.

W klasyfikacji recall nie jest tym samym co recall@k stosowane przy ocenie wyszukiwania informacji.
