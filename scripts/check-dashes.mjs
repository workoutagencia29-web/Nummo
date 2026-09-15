#!/usr/bin/env node
/*
 * Regra do projeto: NENHUM travessão (— U+2014) ou en dash (– U+2013) em
 * lugar nenhum do código/conteúdo. Eles têm "cara de texto gerado por IA".
 * Use vírgula, ponto, dois-pontos, parênteses ou "|" (em títulos).
 *
 * Este check varre src/ e public/ e falha (exit 1) se achar qualquer um.
 * Rode com: npm run check:dashes
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOTS = ["src", "public"];
const EXTS = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".css", ".html", ".md", ".txt", ".xml", ".json", ".webmanifest", ".svg",
]);
const BANNED = /[—–]/; // — em dash, – en dash

function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const name of entries) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (EXTS.has(extname(p))) out.push(p);
  }
  return out;
}

const hits = [];
for (const root of ROOTS) {
  for (const file of walk(root)) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (BANNED.test(line)) {
        hits.push(`${file}:${i + 1}: ${line.trim().slice(0, 120)}`);
      }
    });
  }
}

if (hits.length) {
  console.error(`\n✖ Travessão/en dash proibido encontrado em ${hits.length} linha(s):\n`);
  for (const h of hits) console.error("  " + h);
  console.error(`\nSubstitua "—" / "–" por vírgula, ponto, dois-pontos, parênteses ou "|" (títulos).`);
  process.exit(1);
}

console.log("✓ Sem travessão (—) nem en dash (–) em src/ e public/.");
