import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "1С Предприятие",
    subtitle: "Обслуживание и сопровождение",
    description:
      "Установка, обновление и настройка конфигураций 1С. Доработка под ваши процессы, консультации бухгалтеров и линия техподдержки.",
    icon: "Calculator",
    link: "/uslugi/1c",
    gradient: "from-blue-500 to-indigo-500",
    glow: "bg-blue-500/25",
  },
  {
    id: 2,
    title: "Битрикс24 CRM",
    subtitle: "Настройка и сопровождение",
    description:
      "Внедрение CRM, воронки продаж, автоматизация задач, интеграции с телефонией и сайтом. Обучаем сотрудников работать в системе.",
    icon: "Users",
    link: "/uslugi/bitrix24-crm",
    gradient: "from-emerald-500 to-teal-500",
    glow: "bg-emerald-500/25",
  },
  {
    id: 3,
    title: "1С-Битрикс: Сайты",
    subtitle: "Разработка и поддержка",
    description:
      "Разработка сайтов и интернет-магазинов на «1С-Битрикс: Управление сайтом». Дизайн, каталог, интеграция с 1С и CRM.",
    icon: "Globe",
    link: "/uslugi/razrabotka-saitov",
    gradient: "from-fuchsia-500 to-pink-500",
    glow: "bg-fuchsia-500/25",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-slate-900 dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Наши услуги по
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#6366f1]">
          автоматизации
        </span>
      </h2>
      <p className="mb-12 max-w-2xl text-slate-600 dark:text-slate-300">
        Полный цикл работ с продуктами 1С и Битрикс: от установки и настройки до сопровождения и развития. Выберите
        услугу, чтобы узнать подробности.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            to={service.link}
            key={service.id}
            className="card p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col relative overflow-hidden"
          >
            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${service.glow} blur-2xl pointer-events-none`} />
            <div
              className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg relative z-10`}
            >
              <Icon name={service.icon} className="w-7 h-7 text-white" fallback="Zap" />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white relative z-10">{service.title}</h3>
            <p
              className={`text-sm font-medium mb-3 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text relative z-10`}
            >
              {service.subtitle}
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-5 flex-1 relative z-10">{service.description}</p>
            <span className="inline-flex items-center text-[#2563eb] dark:text-[#3B82F6] text-sm font-medium relative z-10">
              Подробнее об услуге
              <Icon name="ArrowRight" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}