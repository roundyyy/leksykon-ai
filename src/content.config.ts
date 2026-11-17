import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { KATEGORIE, STATUSY, REJESTRY, klucze } from './data/taksonomia';

const hasla = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hasla' }),
  schema: z.object({
    termin: z.string().min(1),
    rozwiniecie: z.string().optional(),
    aliasy: z.array(z.string()).default([]),
    pl: z.string().min(1),
    skrot: z.string().min(1),
    kategoria: z.enum(klucze(KATEGORIE)),
    rejestr: z.array(z.enum(klucze(REJESTRY))).default([]),
    status: z.enum(klucze(STATUSY)),
    status_uwagi: z.string().optional(),
    przyklad: z.string().optional(),
    // Celowo zwykłe teksty: literówka w powiązaniu nie blokuje publikacji, nieznane hasła są pomijane.
    powiazane: z.array(z.string()).default([]),
    zrodla: z.array(z.object({ tytul: z.string(), url: z.url() })).default([]),
    dodano: z.coerce.date(),
    aktualne_na: z.coerce.date().optional(),
  }),
});

const porownania = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/porownania' }),
  schema: z.object({
    tytul: z.string(),
    hasla: z.array(z.string()).default([]),
    kolejnosc: z.number().default(100),
  }),
});

export const collections = { hasla, porownania };
