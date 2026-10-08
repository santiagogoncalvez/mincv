# Pendientes / Notas del proyecto

> Guardado para después. **Nada de esto se toca hasta que Santiago lo pida.**
> Contexto: el CV está enfocado en PDF, minimalista. Muchas cosas heredadas del repo base (BartoszJarocki/cv).

## Pendientes identificados (análisis Oct 2026)

1. **GraphQL/Apollo sobra** — dependencias `@apollo/server`, `type-graphql`, `graphql`, `graphql-scalars`, `reflect-metadata`, `class-validator` + carpetas `src/apollo/` y `src/app/graphql/route.ts`. No se usa en `page.tsx`. Peso muerto para un CV estático. Candidato a eliminación completa.
2. **Metadatos rotos (heredados del repo base)** — en `src/app/page.tsx`, `openGraph.images` y `twitter.images` apuntan a `https://cv.jarocki.me/opengraph-image`. Si se publica, los previews de LinkedIn/Twitter muestran la URL del proyecto original.
3. **`Header.tsx` duplicado/hardcodeado** — `ContactButtons` y `PrintContact` repiten la misma lógica; filtran `social.name === "LinkedIn"` / `"GitHub"` hardcodeado con doble `.map` anidado (devuelve fragmentos sin key). Es el candidato #1 a simplificar: una sola lista ordenada, render condicional por print.
4. **Comandos/opciones heredados sin usar** — `CommandMenu` está importado pero comentado en `page.tsx`; `getCommandMenuLinks` tiene una lógica rara (pushea `personalWebsiteUrl` como `{url, title}` pero espera objetos con `.name`).
5. **GraphQL types en `types.ts`** — `GraphQLMe`, `resumeDataToGraphQL`, `reactToString`... solo `reactToString` es útil (servirá para exportar JSON con `summary` como string). El resto depende del punto 1.
6. **`apollo`/`class-validator`/`type-graphql`** en `package.json` también entraron por lo mismo.

## Cosas confirmadas (no pendientes, contexto)

- `avatarUrl` sale de GitHub (`https://github.com/santiagogoncalvez.png`) → cambiarlo a subida de imagen = solo reemplazar ese string con data URL.
- `summary: string | ReactNode` — para JSON alcanza con string. Resaltado con `*`/`**` está pospuesto.
- Templates base: `src/data/resume-data.tsx` = fullstack (activo) · `src/data/resume-data-2.tsx` = frontend (backup).
- Print/PDF ya está bien resuelto con clases `print:` de Tailwind.
