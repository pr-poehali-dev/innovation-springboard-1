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
    image: "https://cdn.poehali.dev/projects/fb2a1602-a01f-4a6b-9e2e-c4b982da0b91/files/f944fdc7-39e5-4b0b-9c11-daa57dbc251c.jpg",
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
    image: "https://cdn.poehali.dev/projects/fb2a1602-a01f-4a6b-9e2e-c4b982da0b91/files/e01734b4-579c-4c38-bf42-a3d7f9ed4c77.jpg",
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
    image: "https://cdn.poehali.dev/projects/fb2a1602-a01f-4a6b-9e2e-c4b982da0b91/files/76973506-90dc-432d-a2c8-4e7f99a9a830.jpg",
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
            className="card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col relative overflow-hidden"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent dark:from-slate-900/90" />
              <div
                className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg absolute bottom-4 left-6 z-10`}
              >
                <Icon name={service.icon} className="w-7 h-7 text-white" fallback="Zap" />
              </div>
            </div>
            <div className="p-8 pt-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">{service.title}</h3>
              <p
                className={`text-sm font-medium mb-3 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}
              >
                {service.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-5 flex-1">{service.description}</p>
              <span className="inline-flex items-center text-[#2563eb] dark:text-[#3B82F6] text-sm font-medium">
                Подробнее об услуге
                <Icon name="ArrowRight" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}