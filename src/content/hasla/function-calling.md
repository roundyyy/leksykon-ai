---
termin: function calling
aliasy: [tool calling, tool call, tool use]
pl: wywoływanie funkcji / narzędzi
skrot: model prosi aplikację o wykonanie funkcji
kategoria: prompty-agenci
rejestr: [techniczny]
status: fundamentalny
status_uwagi: fundamentalny dla agentów
przyklad: "Model nie zna bieżącego salda, więc robi tool call do systemu bankowego."
powiazane: [mcp, structured-output, agent]
zrodla: []
dodano: 2026-11-17
aktualne_na: 2026-11-17
---

Model generuje strukturalne żądanie uruchomienia zewnętrznej funkcji, np. `get_weather(city)` czy `create_invoice(...)`, a aplikacja wykonuje operację i zwraca wynik modelowi.

W dokumentacji OpenAI function calling jest mechanizmem łączenia modeli z zewnętrznymi systemami i danymi.
