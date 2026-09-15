<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history - force pushing, or rebasing/amending/squashing commits
> that are already pushed - as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Regras do projeto

### Pontuação: nada de travessão

**Nunca use travessão `—` (em dash) nem en dash `–` em lugar nenhum do projeto** — nem na copy visível, nem em títulos/meta/alt/aria, nem em comentários de código. Eles têm cara de texto gerado por IA.

Use, conforme o caso:
- vírgula, ponto ou dois-pontos no corpo do texto;
- parênteses para apostos;
- `|` como separador em títulos (ex.: `Sobre | Nummo`);
- hífen comum `-` quando for hifenização/nome (ex.: `LTDA. - ME`).

Há um check automático que falha se encontrar qualquer travessão/en dash em `src/` e `public/`:

```
npm run check:dashes
```

Rode antes de commitar (ideal: no CI ou num pre-commit hook).
