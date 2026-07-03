import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-10 bottom-0 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
      <div className="p-8 md:p-12 lg:p-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[#2563eb] dark:text-[#3B82F6] text-xs font-semibold mb-5">
            <Icon name="Sparkles" className="w-4 h-4" />
            Автоматизация бизнеса под ключ
          </span>
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Наводим порядок в{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#6366f1]">
              1С, Битрикс24 и сайтах
            </span>
          </h1>
          <p className="my-6 text-base max-w-xl text-slate-600 dark:text-slate-300">
            Omnybox — команда по автоматизации бизнеса. Обслуживаем 1С, внедряем Битрикс24 CRM и разрабатываем сайты на
            1С-Битрикс. Всю техническую часть берём на себя.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/kontakty" className="btn-primary">
              Оставить заявку
            </Link>
            <a href="#services" className="btn-secondary text-slate-900 dark:text-white">
              Наши услуги
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { value: "10+", label: "лет опыта" },
              { value: "500+", label: "проектов" },
              { value: "15 мин", label: "реакция" },
              { value: "24/7", label: "поддержка" },
            ].map((stat) => (
              <div key={stat.label} className="glass p-4 text-center">
                <div className="text-2xl font-bold text-[#2563eb] dark:text-[#3B82F6]">{stat.value}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 blur-2xl rounded-3xl" />
          <img
            src="https://cdn.poehali.dev/projects/fb2a1602-a01f-4a6b-9e2e-c4b982da0b91/bucket/991d90f6-fad3-4dfd-a060-b7d92ff015a8.jpg"
            alt="Умный город — автоматизация бизнеса"
            className="relative w-full rounded-3xl shadow-2xl border border-white/40 dark:border-white/10"
          />
        </div>
      </div>
    </section>
  )
}