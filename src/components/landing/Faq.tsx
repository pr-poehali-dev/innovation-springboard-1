import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Работаете ли вы с любыми конфигурациями 1С?",
    answer:
      "Да. Обслуживаем типовые конфигурации (Бухгалтерия, ЗУП, Управление торговлей, УНФ, ERP) и доработанные под ваш бизнес решения. Проводим обновления, исправляем ошибки и вносим изменения по вашим задачам.",
  },
  {
    id: 2,
    question: "Как быстро вы реагируете на обращения?",
    answer:
      "На стандартные обращения отвечаем в течение рабочего дня, на критичные сбои — в течение 15 минут в приоритетном порядке. Условия реакции фиксируются в договоре на сопровождение.",
  },
  {
    id: 3,
    question: "Можно ли подключить Битрикс24 к телефонии и сайту?",
    answer:
      "Да. Настраиваем интеграции Битрикс24 с IP-телефонией, почтой, сайтом, мессенджерами и 1С. Все заявки и звонки автоматически попадают в CRM, а данные синхронизируются между системами.",
  },
  {
    id: 4,
    question: "Сколько стоит сопровождение?",
    answer:
      "Стоимость зависит от количества пользователей и объёма задач. Есть пакеты с фиксированной абонплатой и почасовая оплата. После короткого аудита мы предложим оптимальный тариф под ваш бизнес.",
  },
  {
    id: 5,
    question: "Разрабатываете ли вы интернет-магазины на Битрикс?",
    answer:
      "Да. Создаём сайты и интернет-магазины на «1С-Битрикс: Управление сайтом» — с каталогом, корзиной, оплатой, доставкой и обменом данными с 1С. Также занимаемся редизайном и поддержкой существующих сайтов.",
  },
  {
    id: 6,
    question: "Что входит в сопровождение?",
    answer:
      "Обновления и настройка систем, консультации сотрудников, исправление ошибок, доработки, мониторинг и резервное копирование. Персональный специалист знает вашу инфраструктуру и ведёт задачи от начала до конца.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Есть вопросы о наших услугах? Найдите ответы на самые распространенные вопросы и узнайте, как наша команда
          может помочь в реализации вашего проекта.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}