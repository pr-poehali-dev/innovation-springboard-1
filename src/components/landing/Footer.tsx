import { Link } from "react-router-dom"
import Logo from "@/components/Logo"

export default function Footer() {
  return (
    <footer className="container py-12 mt-10">
      <div className="glass p-8 md:p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              Автоматизация бизнеса под ключ: обслуживание 1С, внедрение Битрикс24 CRM и разработка сайтов на 1С-Битрикс.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/uslugi/1c" className="text-slate-600 dark:text-slate-400 hover:text-[#2563eb] dark:hover:text-[#3B82F6] transition-colors">
                  1С Предприятие
                </Link>
              </li>
              <li>
                <Link to="/uslugi/bitrix24-crm" className="text-slate-600 dark:text-slate-400 hover:text-[#2563eb] dark:hover:text-[#3B82F6] transition-colors">
                  Битрикс24 CRM
                </Link>
              </li>
              <li>
                <Link to="/uslugi/razrabotka-saitov" className="text-slate-600 dark:text-slate-400 hover:text-[#2563eb] dark:hover:text-[#3B82F6] transition-colors">
                  Разработка сайтов
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>+7 (900) 000-00-00</li>
              <li>hello@omnybox.ru</li>
              <li>
                <Link to="/kontakty" className="text-[#2563eb] dark:text-[#3B82F6] hover:underline">
                  Оставить заявку
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/40 dark:border-white/10 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Omnybox. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
