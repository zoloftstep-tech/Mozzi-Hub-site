# HANDOFF — Mozzi Hub site

**Дата:** 2026-10-09  
**Для агента:** в начале чата прочитай `@HANDOFF.md` и `@Mozzi-Website-TZ.md`. Правила: `.cursor/rules/`. Дизайн: `design-system/MASTER.md`.

## Роль

Публичный лендинг производственного хаба Mozzi Hub (Минск): 3D-печать, полиграфия, брендирование, сувенирка.

## Стек

- Vite + React 19 + TypeScript + Tailwind 4
- Контент SoT: `src/data/site.ts`
- Деплой: static (`dist/`) → Vercel / любой host

## Что сделано

- Скопированы rules (01–04) и skill `ui-ux-pro-max`
- ТЗ `Mozzi-Website-TZ.md`
- Vite + React + TS + Tailwind 4 каркас
- Design SoT: `design-system/MASTER.md` (Outfit / Work Sans, ink + filament accent)
- Лендинг: Header, Hero, Services, Business, Works, FAQ, Footer
- SEO: `lang=ru`, meta/OG, JSON-LD в `index.html`, `robots.txt`, `sitemap.xml`
- Контент SoT: `src/data/site.ts`


## Продуктовые решения v1

1. CTA = WhatsApp + Instagram Direct + телефон (без формы/CRM).
2. Тексты/контакты только из `src/data/site.ts`.
3. Нет прайса и калькулятора — тираж «от 10 шт» как месседж.
4. Юр. адрес в футере/контактах, не в hero.

## Дальше

- Подставить реальные фото работ в `public/works/`
- При необходимости: форма заявки → email/Telegram
- Поднять DNS `mozzihub.by` на новый хостинг (сейчас сайт в архиве kvitly)
