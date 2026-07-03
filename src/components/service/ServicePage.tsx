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

export default function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Header />
      <div className="container pt-4">
        <nav className="my-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <Link to="/" className="hover:text-[#7A7FEE] transition-colors">
            Главная
          </Link>
          <Icon name="ChevronRight" className="w-4 h-4" />
          <span className="text-black dark:text-white">{data.title}</span>
        </nav>

        <section className="card my-6 relative overflow-hidden shadow-md">
          <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/5 z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#7A7FEE]/10 text-[#7A7FEE] text-xs font-semibold mb-4">
                {data.eyebrow}
              </span>
              <h1 className="text-black dark:text-white text-4xl md:text-5xl font-medium leading-tight">
                {data.title}
                <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">{data.titleAccent}</span>
              </h1>
              <p className="my-6 text-sm md:text-base max-w-lg text-gray-700 dark:text-gray-300">{data.intro}</p>
              <ul className="space-y-2 mb-6">
                {data.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <Icon name="CircleCheck" className="w-5 h-5 text-[#7A7FEE] mt-0.5 shrink-0" fallback="Check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href="/#contact" className="btn-primary">
                Оставить заявку
              </a>
            </div>
            <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
              <img
                src="/purple-circle-wave-static.png"
                alt="decoration"
                className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
              />
            </div>
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-black dark:text-white mb-10 text-3xl md:text-4xl font-medium leading-tight">
            Что вы <span className="text-[#7A7FEE]">получаете</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f) => (
              <div key={f.title} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#7A7FEE]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={f.icon} className="w-6 h-6 text-[#7A7FEE]" fallback="Star" />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{f.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20">
          <div className="card p-8 md:p-10 shadow-lg">
            <h2 className="text-black dark:text-white mb-8 text-3xl md:text-4xl font-medium leading-tight">
              {data.worksTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {data.works.map((w) => (
                <div key={w} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <Icon name="CircleCheck" className="w-5 h-5 text-[#7A7FEE] mt-0.5 shrink-0" fallback="Check" />
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-black dark:text-white mb-10 text-3xl md:text-4xl font-medium leading-tight">
            Как мы <span className="text-[#7A7FEE]">работаем</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.process.map((p) => (
              <div key={p.step} className="card p-6 shadow-md">
                <div className="text-4xl font-bold text-[#7A7FEE]/30 mb-3">{p.step}</div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{p.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-black dark:text-white mb-10 text-3xl md:text-4xl font-medium leading-tight">
            Тарифы и <span className="text-[#7A7FEE]">стоимость</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.plans.map((plan) => (
              <div
                key={plan.name}
                className={`card p-8 shadow-md flex flex-col ${
                  plan.highlighted ? "ring-2 ring-[#7A7FEE] relative" : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#7A7FEE] text-white text-xs font-semibold">
                    Популярный
                  </span>
                )}
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#7A7FEE]">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm"> {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                      <Icon name="Check" className="w-4 h-4 text-[#7A7FEE] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="/#contact" className={plan.highlighted ? "btn-primary text-center" : "btn-secondary text-center text-black dark:text-white"}>
                  Выбрать
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20">
          <div className="card p-8 md:p-10 shadow-lg">
            <h2 className="text-black dark:text-white mb-8 text-3xl md:text-4xl font-medium leading-tight">
              Частые <span className="text-[#7A7FEE]">вопросы</span>
            </h2>
            <div className="space-y-6">
              {data.faq.map((item) => (
                <div key={item.question} className="border-b pb-6 border-gray-200 dark:border-gray-700 last:border-0">
                  <h3 className="font-semibold text-black dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="card my-20 relative overflow-hidden shadow-md">
          <div className="p-8 md:p-10 lg:p-12">
            <h2 className="text-black dark:text-white mb-4 text-3xl md:text-4xl font-medium leading-tight">
              Готовы <span className="text-[#7A7FEE]">начать</span>?
            </h2>
            <p className="mb-6 max-w-lg text-gray-700 dark:text-gray-300">
              Оставьте заявку — проведём бесплатный аудит и предложим решение под вашу задачу.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="btn-primary">
                Оставить заявку
              </a>
              <Link to="/" className="btn-secondary text-black dark:text-white">
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
