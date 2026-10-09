import {
  MESSENGERS,
  SITE_HERO_LINE,
  SITE_NAME,
  SITE_TAGLINE,
} from '../data/site'

export function Hero() {
  const whatsapp = MESSENGERS.find((m) => m.id === 'whatsapp')!
  const instagram = MESSENGERS.find((m) => m.id === 'instagram')!

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-white"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_20%,#3a4254_0%,#1a1d26_45%,#12141a_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40 animate-fade"
        style={{
          backgroundImage:
            'linear-gradient(115deg, transparent 40%, rgba(232,93,4,0.18) 58%, transparent 72%), repeating-linear-gradient(-18deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 14px)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <p className="animate-rise font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent md:text-base">
          {SITE_NAME}
        </p>
        <h1 className="animate-rise-delay font-display mt-4 max-w-4xl text-[clamp(2.6rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight">
          {SITE_TAGLINE}
        </h1>
        <p className="animate-rise-delay-2 mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
          {SITE_HERO_LINE}
        </p>
        <div className="animate-rise-delay-2 mt-9 flex flex-wrap gap-3">
          <a
            href={whatsapp.href}
            className="inline-flex cursor-pointer items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition duration-200 hover:-translate-y-px hover:bg-accent-hover md:text-base"
          >
            Написать в WhatsApp
          </a>
          <a
            href={instagram.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center rounded-md border border-white/35 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:border-white hover:bg-white/5 md:text-base"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
