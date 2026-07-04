import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />
      <div className="p-8 md:p-12 lg:p-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-slate-900 dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Наведём порядок в{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#6366f1]">
              ваших системах
            </span>
          </h2>
          <p className="mb-8 text-base text-slate-600 dark:text-slate-300">
            Оставьте заявку — проведём бесплатный аудит, покажем узкие места и предложим план автоматизации под ваш
            бизнес.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/kontakty" className="btn-primary inline-flex items-center gap-2">
              Оставить заявку
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
            <a
              href="tel:+79000000000"
              className="btn-secondary inline-flex items-center gap-2 text-slate-900 dark:text-white"
            >
              <Icon name="Phone" className="w-4 h-4" />
              +7 (900) 000-00-00
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 blur-2xl rounded-3xl" />
          <img
            src="https://cdn.poehali.dev/projects/fb2a1602-a01f-4a6b-9e2e-c4b982da0b91/files/76973506-90dc-432d-a2c8-4e7f99a9a830.jpg"
            alt="Автоматизация бизнеса"
            className="relative w-full rounded-3xl shadow-2xl border border-white/60 dark:border-white/10"
          />
        </div>
      </div>
    </section>
  )
}