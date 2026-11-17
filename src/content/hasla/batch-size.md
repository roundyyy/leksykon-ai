---
termin: batch size
aliasy: [batch]
pl: rozmiar partii
skrot: ile przykładów model przetwarza naraz w jednym kroku treningu
kategoria: trening
rejestr: [techniczny]
status: fundamentalny
status_uwagi: podstawowy termin techniczny
przyklad: "Musieliśmy zmniejszyć batch size z 64 do 16, ponieważ brakowało pamięci GPU"
powiazane: [hyperparameter, gradient-descent, epoch]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Liczba przykładów przetwarzanych razem podczas jednego kroku obliczeń treningowych.

Wielkość partii wpływa na wykorzystanie pamięci, charakter gradientów, szybkość treningu i niekiedy jakość końcowego modelu.

Należy rozróżniać fizyczny rozmiar mikropartii od efektywnego batch size uzyskanego np. przez akumulację gradientów.
