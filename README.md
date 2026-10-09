# Mozzi Hub site

Лендинг производственного хаба **Mozzi Hub** (Минск): 3D-печать, полиграфия, брендирование, сувенирка.

## Быстрый старт

```bash
npm install
npm run dev
```

Сборка: `npm run build` → папка `dist/`.

## Документы

| Файл | Назначение |
|------|------------|
| [`Mozzi-Website-TZ.md`](Mozzi-Website-TZ.md) | ТЗ лендинга |
| [`HANDOFF.md`](HANDOFF.md) | Актуальный контракт для агента |
| [`design-system/MASTER.md`](design-system/MASTER.md) | Дизайн SoT |
| `.cursor/rules/` | Правила проекта |
| `.cursor/skills/ui-ux-pro-max/` | UI/UX skill |

## Контент

Тексты, контакты, FAQ — только в [`src/data/site.ts`](src/data/site.ts).

Фото работ → `public/works/` (сейчас плейсхолдеры в секции «Работы»).

## Деплой

Vercel: Framework **Vite**, output `dist`. В корне есть `vercel.json`.
