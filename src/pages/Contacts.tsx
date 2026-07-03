import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import { useToast } from "@/hooks/use-toast"

const accent = "text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#6366f1]"

const contactCards = [
  { icon: "Phone", title: "Телефон", value: "+7 (900) 000-00-00", href: "tel:+79000000000", gradient: "from-emerald-400 to-teal-500", glow: "bg-emerald-500/20" },
  { icon: "Mail", title: "Почта", value: "hello@omnybox.ru", href: "mailto:hello@omnybox.ru", gradient: "from-blue-400 to-indigo-500", glow: "bg-blue-500/20" },
  { icon: "MessageCircle", title: "Telegram", value: "@omnybox", href: "https://t.me/omnybox", gradient: "from-cyan-400 to-sky-500", glow: "bg-cyan-500/20" },
  { icon: "Clock", title: "Режим работы", value: "Пн–Пт, 9:00–19:00", href: undefined, gradient: "from-amber-400 to-orange-500", glow: "bg-orange-500/20" },
]

const services = ["1С Предприятие", "Битрикс24 CRM", "Разработка сайтов", "Другое"]

export default function Contacts() {
  const { toast } = useToast()
  const [form, setForm] = useState({ name: "", phone: "", service: services[0], message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    })
    setForm({ name: "", phone: "", service: services[0], message: "" })
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container pt-4">
        <nav className="my-4 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <Link to="/" className="hover:text-[#2563eb] dark:hover:text-[#3B82F6] transition-colors">
            Главная
          </Link>
          <Icon name="ChevronRight" className="w-4 h-4" />
          <span className="text-slate-900 dark:text-white">Контакты</span>
        </nav>

        <section className="card my-8 relative overflow-hidden shadow-md">
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 bottom-0 w-56 h-56 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
          <div className="p-8 md:p-12 lg:p-14 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-medium leading-tight mb-4">
                Свяжитесь с <span className={accent}>Omnybox</span>
              </h1>
              <p className="max-w-2xl text-slate-600 dark:text-slate-300">
                Оставьте заявку — проведём бесплатный аудит ваших систем и предложим план автоматизации. Или свяжитесь
                удобным способом.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 blur-2xl rounded-3xl" />
              <img
                src="https://cdn.poehali.dev/projects/fb2a1602-a01f-4a6b-9e2e-c4b982da0b91/files/26c7b147-8dc4-4363-9746-240590c2e8e1.jpg"
                alt="Свяжитесь с Omnybox"
                className="relative w-full rounded-3xl shadow-2xl border border-white/40 dark:border-white/10"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
          <div className="card p-8 md:p-10 shadow-md relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 relative z-10">
              Оставить заявку
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Имя</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="w-full glass px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Телефон</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full glass px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Услуга</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full glass px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="text-slate-900">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Комментарий
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Опишите вашу задачу"
                  className="w-full glass px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full text-center">
                Отправить заявку
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((c) => {
                const inner = (
                  <div className="card p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full relative overflow-hidden">
                    <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full ${c.glow} blur-2xl pointer-events-none`} />
                    <div
                      className={`bg-gradient-to-br ${c.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg relative z-10`}
                    >
                      <Icon name={c.icon} className="w-6 h-6 text-white" fallback="Info" />
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 relative z-10">{c.title}</div>
                    <div className="font-semibold text-slate-900 dark:text-white mt-1 relative z-10">{c.value}</div>
                  </div>
                )
                return c.href ? (
                  <a key={c.title} href={c.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={c.title}>{inner}</div>
                )
              })}
            </div>

            <div className="card p-8 shadow-md relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 relative z-10">
                Бесплатный аудит
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm relative z-10">
                Проведём диагностику ваших 1С и Битрикс24, найдём узкие места и предложим план оптимизации — без
                обязательств.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}