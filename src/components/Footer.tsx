import {
  MESSENGERS,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
  SITE_UNP,
} from '../data/site'

export function Footer() {
  return (
    <footer id="contacts" className="bg-ink px-5 py-16 text-white md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">{SITE_NAME}</p>
          <p className="mt-3 max-w-md text-white/70">
            Производственный хаб в Минске — 3D-печать, полиграфия, брендирование и сувенирка.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {MESSENGERS.map((m) => (
              <a
                key={m.id}
                href={m.href}
                target={m.id === 'instagram' ? '_blank' : undefined}
                rel={m.id === 'instagram' ? 'noreferrer' : undefined}
                className="inline-flex cursor-pointer rounded-md border border-white/25 px-4 py-2 text-sm font-semibold transition hover:border-white hover:bg-white/5"
              >
                {m.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm text-white/75">
          <p>
            <a href={`tel:${SITE_PHONE}`} className="font-medium text-white hover:text-accent">
              {SITE_PHONE_DISPLAY}
            </a>
          </p>
          <p>
            <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white">
              {SITE_EMAIL}
            </a>
          </p>
          <p>
            {SITE_ADDRESS.city}, {SITE_ADDRESS.street}
            <br />
            {SITE_ADDRESS.country}
          </p>
          <p className="pt-4 text-white/55">
            {SITE_LEGAL_NAME}
            <br />
            УНП {SITE_UNP}
          </p>
        </div>
      </div>
    </footer>
  )
}
