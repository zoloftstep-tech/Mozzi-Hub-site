/** Site-wide content SoT — edit texts and contacts here */

export const SITE_URL = 'https://mozzihub.by'

export const SITE_NAME = 'Mozzi Hub'

export const SITE_LEGAL_NAME = 'ООО «Моззи Хаб»'

export const SITE_TITLE =
  'Mozzi Hub — 3D-печать, полиграфия и брендирование в Минске'

export const SITE_DESCRIPTION =
  'Производственный хаб в Минске: 3D-печать, полиграфия, брендирование и сувенирная продукция для бизнеса и мероприятий. Тиражи от 10 шт.'

export const SITE_PHONE = '+375292909968'
export const SITE_PHONE_DISPLAY = '+375 (29) 290-99-68'
export const SITE_EMAIL = 'martinlundar@gmail.com'

export const SITE_UNP = '193959426'

export const SITE_ADDRESS = {
  street: 'ул. Жореса Алфёрова, д. 7, пом. 389, офис 7А',
  city: 'Минск',
  country: 'Республика Беларусь',
  countryCode: 'BY',
} as const

export const SITE_TAGLINE = 'От идеи до изделия'

export const SITE_HERO_LINE =
  '3D-печать, полиграфия и брендирование для бизнеса и мероприятий — малыми тиражами без лишней бюрократии.'

export const MESSENGERS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/375292909968`,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/mozzihub.by/',
  },
] as const

export const NAV_LINKS = [
  { href: '#services', label: 'Услуги' },
  { href: '#business', label: 'Для бизнеса' },
  { href: '#works', label: 'Работы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
] as const

export const SERVICES = [
  {
    id: '3d',
    title: '3D-печать',
    body: 'Прототипы, детали и готовые изделия. От одной штуки до серии под задачу.',
  },
  {
    id: 'print',
    title: 'Полиграфия',
    body: 'Печатная продукция для бизнеса и событий — чисто, быстро, по макету.',
  },
  {
    id: 'brand',
    title: 'Брендирование',
    body: 'Нанесение логотипа и фирменного стиля на носители и готовые изделия.',
  },
  {
    id: 'souvenir',
    title: 'Сувенирная продукция',
    body: 'Мерч и подарки для команд, партнёров и мероприятий — тиражи от 10 шт.',
  },
] as const

export const BUSINESS = {
  title: 'Для бизнеса и мероприятий',
  body: 'Собираем партии под корпоративный мерч, запуски и ивенты. Минимум от 10 штук — удобно тестировать идею или закрыть точечный заказ без склада.',
} as const

export const WORKS = [
  { id: 'w1', label: '3D-детали', tone: 'a' },
  { id: 'w2', label: 'Брендирование', tone: 'b' },
  { id: 'w3', label: 'Сувенирка', tone: 'c' },
  { id: 'w4', label: 'Полиграфия', tone: 'd' },
  { id: 'w5', label: 'Прототип', tone: 'a' },
  { id: 'w6', label: 'Мерч', tone: 'b' },
] as const

export const FAQ_ITEMS = [
  {
    q: 'Какой минимальный тираж?',
    a: 'От 10 штук — удобно для пилота, мерча на событие или небольшого корпоративного заказа.',
  },
  {
    q: 'Как оформить заказ?',
    a: 'Напишите в WhatsApp или Instagram Direct: опишите задачу, количество и сроки. При необходимости прикрепите макет или референс.',
  },
  {
    q: 'Что входит в брендирование?',
    a: 'Подбор носителя и способа нанесения под ваш логотип и задачу — от единичных образцов до серии.',
  },
  {
    q: 'Где вы находитесь?',
    a: 'Минск, ул. Жореса Алфёрова, 7 (офис 7А). Точную логистику самовывоза или доставки согласуем при заказе.',
  },
] as const
