import { SERVICES } from '../data/site'

export function Services() {
  return (
    <section id="services" className="bg-surface px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Услуги
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Производственный хаб: от прототипа и печати до брендированного тиража.
        </p>

        <ul className="mt-12 divide-y divide-surface-alt border-y border-surface-alt">
          {SERVICES.map((service) => (
            <li
              key={service.id}
              className="grid gap-2 py-7 md:grid-cols-[minmax(12rem,1fr)_2fr] md:gap-10 md:py-9"
            >
              <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                {service.title}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-muted">{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
