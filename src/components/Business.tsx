import { BUSINESS, MESSENGERS } from '../data/site'

export function Business() {
  const whatsapp = MESSENGERS.find((m) => m.id === 'whatsapp')!

  return (
    <section id="business" className="bg-ink px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {BUSINESS.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            {BUSINESS.body}
          </p>
        </div>
        <a
          href={whatsapp.href}
          className="inline-flex w-fit cursor-pointer items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition duration-200 hover:-translate-y-px hover:bg-accent-hover"
        >
          Обсудить тираж
        </a>
      </div>
    </section>
  )
}
