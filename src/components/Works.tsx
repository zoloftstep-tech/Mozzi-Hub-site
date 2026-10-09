import { useEffect, useRef, useState } from 'react'
import { WORKS } from '../data/site'

const tones: Record<string, string> = {
  a: 'from-[#2a2f3a] to-[#1a1d26]',
  b: 'from-[#3a2a22] to-[#1f1714]',
  c: 'from-[#243038] to-[#151a1e]',
  d: 'from-[#2e2a38] to-[#18161f]',
}

export function Works() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="works" ref={ref} className="bg-surface-alt px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Работы
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Плейсхолдеры под реальные фото изделий — замените файлами в{' '}
          <code className="text-sm text-ink">public/works/</code>.
        </p>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {WORKS.map((work, i) => (
            <li
              key={work.id}
              className={`aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br ${tones[work.tone]} transition duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: visible ? `${i * 70}ms` : '0ms' }}
            >
              <div className="flex h-full items-end p-4">
                <span className="font-display text-sm font-semibold text-white/90 md:text-base">
                  {work.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
