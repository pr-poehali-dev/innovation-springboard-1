import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Автоматизация
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">бизнеса</span>
            под ключ
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Обслуживание и сопровождение 1С, внедрение и настройка Битрикс24 CRM, разработка сайтов на 1С-Битрикс. Наводим порядок в учёте, продажах и процессах — чтобы бизнес работал быстрее и прозрачнее.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton>Оставить заявку</ContactFormButton>
            <a href="#services" className="btn-secondary text-black dark:text-white">
              Наши услуги
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <img
            src="/purple-circle-wave-static.png"
            alt="Purple Wave"
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}