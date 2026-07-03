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
  },
  {
    id: 2,
    title: "Битрикс24 CRM",
    subtitle: "Настройка и сопровождение",
    description:
      "Внедрение CRM, воронки продаж, автоматизация задач, интеграции с телефонией и сайтом. Обучаем сотрудников работать в системе.",
    icon: "Users",
    link: "/uslugi/bitrix24-crm",
  },
  {
    id: 3,
    title: "1С-Битрикс: Сайты",
    subtitle: "Разработка и поддержка",
    description:
      "Разработка сайтов и интернет-магазинов на «1С-Битрикс: Управление сайтом». Дизайн, каталог, интеграция с 1С и CRM.",
    icon: "Globe",
    link: "/uslugi/razrabotka-saitov",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Наши услуги по
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">автоматизации</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Полный цикл работ с продуктами 1С и Битрикс: от установки и настройки до сопровождения и развития. Берём на себя
        всю техническую часть, чтобы вы занимались бизнесом.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            to={service.link}
            key={service.id}
            className="card p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group flex flex-col"
          >
            <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Icon name={service.icon} className="w-6 h-6 text-white" fallback="Zap" />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">{service.title}</h3>
            <p className="text-sm text-[#7A7FEE] font-medium mb-3">{service.subtitle}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{service.description}</p>
            <span className="inline-flex items-center text-[#7A7FEE] text-sm font-medium">
              Подробнее
              <Icon
                name="ArrowUpRight"
                className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
