import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"

export interface ServicePageData {
  eyebrow: string
  title: string
  titleAccent: string
  intro: string
  heroPoints: string[]
  features: { icon: string; title: string; description: string }[]
  worksTitle: string
  works: string[]
  process: { step: string; title: string; description: string }[]
  plans: { name: string; price: string; period: string; features: string[]; highlighted?: boolean }[]
  faq: { question: string; answer: string }[]
}

const accent = "text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#6366f1]"

export default function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container pt-4">
        <nav className="my-4 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <Link to="/" className="hover:text-[#2563eb] dark:hover:text-[#3B82F6] transition-colors">
            Главная
          </Link>
          <Icon name="ChevronRight" className="w-4 h-4" />
          <span className="text-slate-900 dark:text-white">{data.title}</span>
        </nav>

        <section className="card my-6 relative overflow-hidden shadow-md">
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 bottom-0 w-56 h-56 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
          <div className="p-8 md:p-12 lg:p-16 relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full glass text-[#2563eb] dark:text-[#3B82F6] text-xs font-semibold mb-4">
              {data.eyebrow}
            </span>
            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-medium leading-tight">
              {data.title}
              <span className={`block ${accent}`}>{data.titleAccent}</span>
            </h1>
            <p className="my-6 text-base max-w-lg text-slate-600 dark:text-slate-300">{data.intro}</p>
            <ul className="space-y-2 mb-6">
              {data.heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <Icon name="CircleCheck" className="w-5 h-5 text-[#2563eb] dark:text-[#3B82F6] mt-0.5 shrink-0" fallback="Check" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link to="/kontakty" className="btn-primary">
              Оставить заявку
            </Link>
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-slate-900 dark:text-white mb-10 text-3xl md:text-4xl font-medium leading-tight">
            Что вы <span className={accent}>получаете</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f) => (
              <div key={f.title} className="card p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-blue-500/15 to-indigo-500/15 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={f.icon} className="w-6 h-6 text-[#2563eb] dark:text-[#3B82F6]" fallback="Star" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20">
          <div className="card p-8 md:p-10 shadow-lg">
            <h2 className="text-slate-900 dark:text-white mb-8 text-3xl md:text-4xl font-medium leading-tight">
              {data.worksTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {data.works.map((w) => (
                <div key={w} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <Icon name="CircleCheck" className="w-5 h-5 text-[#2563eb] dark:text-[#3B82F6] mt-0.5 shrink-0" fallback="Check" />
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-slate-900 dark:text-white mb-10 text-3xl md:text-4xl font-medium leading-tight">
            Как мы <span className={accent}>работаем</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.process.map((p) => (
              <div key={p.step} className="card p-6 shadow-md">
                <div className="text-4xl font-bold text-[#2563eb]/25 dark:text-[#3B82F6]/30 mb-3">{p.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-slate-900 dark:text-white mb-10 text-3xl md:text-4xl font-medium leading-tight">
            Тарифы и <span className={accent}>стоимость</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.plans.map((plan) => (
              <div
                key={plan.name}
                className={`card p-8 shadow-md flex flex-col ${
                  plan.highlighted ? "ring-2 ring-[#2563eb] dark:ring-[#3B82F6] relative" : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-white text-xs font-semibold">
                    Популярный
                  </span>
                )}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#2563eb] dark:text-[#3B82F6]">{plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm"> {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                      <Icon name="Check" className="w-4 h-4 text-[#2563eb] dark:text-[#3B82F6] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakty"
                  className={plan.highlighted ? "btn-primary text-center" : "btn-secondary text-center text-slate-900 dark:text-white"}
                >
                  Выбрать
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20">
          <div className="card p-8 md:p-10 shadow-lg">
            <h2 className="text-slate-900 dark:text-white mb-8 text-3xl md:text-4xl font-medium leading-tight">
              Частые <span className={accent}>вопросы</span>
            </h2>
            <div className="space-y-6">
              {data.faq.map((item) => (
                <div key={item.question} className="border-b pb-6 border-slate-200 dark:border-white/10 last:border-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="card my-20 relative overflow-hidden shadow-md">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="p-8 md:p-12 lg:p-16 relative z-10">
            <h2 className="text-slate-900 dark:text-white mb-4 text-3xl md:text-4xl font-medium leading-tight">
              Готовы <span className={accent}>начать</span>?
            </h2>
            <p className="mb-6 max-w-lg text-slate-600 dark:text-slate-300">
              Оставьте заявку — проведём бесплатный аудит и предложим решение под вашу задачу.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kontakty" className="btn-primary">
                Оставить заявку
              </Link>
              <Link to="/" className="btn-secondary text-slate-900 dark:text-white">
                Все услуги
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
