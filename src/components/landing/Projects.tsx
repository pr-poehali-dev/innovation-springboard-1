import Icon from "@/components/ui/icon"

const benefits = [
  {
    id: 1,
    icon: "Clock",
    title: "Реакция за 15 минут",
    description: "Отвечаем на заявки быстро. Критичные сбои в 1С и Битрикс решаем в приоритетном порядке.",
  },
  {
    id: 2,
    icon: "ShieldCheck",
    title: "Сертифицированные специалисты",
    description: "Команда с опытом внедрения 1С и Битрикс24 в компаниях разного масштаба — от ИП до холдингов.",
  },
  {
    id: 3,
    icon: "FileText",
    title: "Работаем по договору",
    description: "Прозрачные условия, фиксированные тарифы на сопровождение и закрывающие документы.",
  },
  {
    id: 4,
    icon: "Headphones",
    title: "Персональный менеджер",
    description: "Один ответственный специалист знает вашу инфраструктуру и ведёт задачи от начала до конца.",
  },
  {
    id: 5,
    icon: "TrendingUp",
    title: "Рост эффективности",
    description: "Автоматизируем рутину: учёт, продажи, документооборот. Меньше ручной работы — больше результата.",
  },
  {
    id: 6,
    icon: "RefreshCw",
    title: "Регулярные обновления",
    description: "Следим за релизами, обновляем конфигурации и следим за безопасностью ваших систем.",
  },
]

export default function Projects() {
  return (
    <section id="benefits" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Почему выбирают
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">именно нас</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Мы отвечаем за результат, а не за часы. Наводим порядок в системах учёта и продаж, чтобы ваш бизнес работал
        стабильно и без простоев.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="bg-[#7A7FEE]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Icon name={item.icon} className="w-6 h-6 text-[#7A7FEE]" fallback="Star" />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a href="#contact" className="btn-primary">
          Получить консультацию
        </a>
      </div>
    </section>
  )
}
