import { MESSENGERS, NAV_LINKS, SITE_NAME, SITE_PHONE, SITE_PHONE_DISPLAY } from '../data/site'

export function Header() {
  const whatsapp = MESSENGERS.find((m) => m.id === 'whatsapp')!

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-white md:text-xl"
        >
          {SITE_NAME}
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE_PHONE}`}
            className="hidden text-sm font-medium text-white/90 transition-colors hover:text-white sm:inline"
          >
            {SITE_PHONE_DISPLAY}
          </a>
          <a
            href={whatsapp.href}
            className="inline-flex cursor-pointer items-center rounded-md bg-accent px-3.5 py-2 text-sm font-semibold text-on-accent transition duration-200 hover:-translate-y-px hover:bg-accent-hover"
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  )
}
