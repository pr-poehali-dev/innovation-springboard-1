import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const benefits = [
  {
    id: 1,
    icon: "Clock",
    title: "Реакция за 15 минут",
    description: "Отвечаем на заявки быстро. Критичные сбои в 1С и Битрикс решаем в приоритетном порядке.",
    gradient: "from-amber-400 to-orange-500",
    glow: "bg-orange-500/20",
  },
  {
    id: 2,
    icon: "ShieldCheck",
    title: "Сертифицированные специалисты",
    description: "Команда с опытом внедрения 1С и Битрикс24 в компаниях разного масштаба — от ИП до холдингов.",
    gradient: "from-emerald-400 to-teal-500",
    glow: "bg-emerald-500/20",
  },
  {
    id: 3,
    icon: "FileText",
    title: "Работаем по договору",
    description: "Прозрачные условия, фиксированные тарифы на сопровождение и закрывающие документы.",
    gradient: "from-blue-400 to-indigo-500",
    glow: "bg-blue-500/20",
  },
  {
    id: 4,
    icon: "Headphones",
    title: "Персональный менеджер",
    description: "Один ответственный специалист знает вашу инфраструктуру и ведёт задачи от начала до конца.",
    gradient: "from-fuchsia-400 to-purple-500",
    glow: "bg-purple-500/20",
  },
  {
    id: 5,
    icon: "TrendingUp",
    title: "Рост эффективности",
    description: "Автоматизируем рутину: учёт, продажи, документооборот. Меньше ручной работы — больше результата.",
    gradient: "from-rose-400 to-pink-500",
    glow: "bg-pink-500/20",
  },
  {
    id: 6,
    icon: "RefreshCw",
    title: "Регулярные обновления",
    description: "Следим за релизами, обновляем конфигурации и следим за безопасностью ваших систем.",
    gradient: "from-cyan-400 to-sky-500",
    glow: "bg-cyan-500/20",
  },
]

export default function Projects() {
  return (
    <section id="benefits" className="my-20">
      <h2 className="text-slate-900 dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Почему выбирают
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#6366f1]">
          именно нас
        </span>
      </h2>
      <p className="mb-8 max-w-2xl text-slate-600 dark:text-slate-300">
        Мы отвечаем за результат, а не за часы. Наводим порядок в системах учёта и продаж, чтобы ваш бизнес работал
        стабильно и без простоев.
      </p>

      <div className="relative rounded-3xl overflow-hidden mb-8 h-64 md:h-80 shadow-md">
        <img
          src="https://cdn.poehali.dev/projects/fb2a1602-a01f-4a6b-9e2e-c4b982da0b91/files/05f605a1-ad65-41db-a7c8-7bf9a33eb699.jpg"
          alt="Наша команда за работой"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/80 via-[#2563eb]/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-lg">
          <p className="text-white/90 text-sm font-medium mb-2">Команда Omnybox</p>
          <p className="text-white text-2xl md:text-3xl font-medium leading-snug">
            Более 10 лет наводим порядок в 1С и Битрикс для бизнеса
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="card p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col relative overflow-hidden"
          >
            <div className={`absolute -right-8 -top-8 w-28 h-28 rounded-full ${item.glow} blur-2xl pointer-events-none`} />
            <div
              className={`bg-gradient-to-br ${item.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg relative z-10`}
            >
              <Icon name={item.icon} className="w-6 h-6 text-white" fallback="Star" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 relative z-10">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm relative z-10">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/kontakty" className="btn-primary">
          Получить консультацию
        </Link>
      </div>
    </section>
  )
}