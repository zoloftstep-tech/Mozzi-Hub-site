import { FAQ_ITEMS } from '../data/site'

export function Faq() {
  return (
    <section id="faq" className="bg-surface px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Вопросы
        </h2>
        <dl className="mt-12 max-w-3xl divide-y divide-surface-alt border-y border-surface-alt">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="py-7">
              <dt className="font-display text-lg font-semibold text-ink md:text-xl">{item.q}</dt>
              <dd className="mt-2 text-base leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
