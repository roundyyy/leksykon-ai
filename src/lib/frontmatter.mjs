// Generowanie nagłówka YAML hasła (formularz „Dodaj hasło”). Wartości są cytowane tylko wtedy,
// gdy to konieczne, żeby pliki dobrze się czytało i edytowało w przeglądarce.

const ZAREZERWOWANE = /^(true|false|yes|no|on|off|null|~|y|n)$/i;
const BEZPIECZNY = /^[\p{L}\p{N}„(][^:#\n"'[\]{},&*!|>%@`\\]*$/u;
const DATA = /^\d{4}-\d{2}-\d{2}$/;

export function yamlScalar(value) {
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  const s = String(value);
  if (DATA.test(s)) return s;
  if (s === '' || ZAREZERWOWANE.test(s) || /^[\d.+-]+$/.test(s) || /\s$/.test(s) || !BEZPIECZNY.test(s)) {
    return JSON.stringify(s);
  }
  return s;
}

function yamlValue(value) {
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    if (value.every((v) => typeof v !== 'object' || v === null)) {
      return `[${value.map((v) => {
        const s = yamlScalar(v);
        return /[,[\]{}]/.test(s) && !s.startsWith('"') ? JSON.stringify(String(v)) : s;
      }).join(', ')}]`;
    }
    return '\n' + value.map((obj) =>
      Object.entries(obj).map(([k, v], i) => `${i === 0 ? '  - ' : '    '}${k}: ${yamlScalar(v)}`).join('\n'),
    ).join('\n');
  }
  return yamlScalar(value);
}

/** Zwraca blok `---\n…\n---` z polami w podanej kolejności (puste pola są pomijane). */
export function toFrontmatter(data, order = Object.keys(data)) {
  const lines = [];
  for (const key of order) {
    const v = data[key];
    if (v === undefined || v === null || v === '') continue;
    const val = yamlValue(v);
    lines.push(val.startsWith('\n') ? `${key}:${val}` : `${key}: ${val}`);
  }
  return `---\n${lines.join('\n')}\n---\n`;
}
