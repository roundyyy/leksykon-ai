---
termin: accuracy
aliasy: [dokładność, trafność]
pl: dokładność klasyfikacji
skrot: "odsetek wszystkich przewidywań, które były poprawne"
kategoria: prompty-agenci
rejestr: [techniczny]
status: fundamentalny
status_uwagi: podstawowy termin ewaluacyjny
przyklad: "Model osiągnął 98% accuracy, ale prawie nigdy nie wykrywał rzadkich awarii"
powiazane: [precision, recall, f1-score, eval]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Odsetek prawidłowych przewidywań wśród wszystkich ocenianych przypadków.

W klasyfikacji binarnej:

`Accuracy = (TP + TN) / (TP + TN + FP + FN)`

gdzie TP i TN oznaczają odpowiednio prawidłowe wyniki pozytywne i negatywne, a FP i FN oznaczają błędne wyniki pozytywne i negatywne.

Accuracy może wprowadzać w błąd przy mocno niezrównoważonych klasach.
