import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import Logo from "@/components/Logo"

const navItems = [
  { to: "/uslugi/1c", label: "1С Предприятие" },
  { to: "/uslugi/bitrix24-crm", label: "Битрикс24 CRM" },
  { to: "/uslugi/razrabotka-saitov", label: "Разработка сайтов" },
  { to: "/kontakty", label: "Контакты" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/60 dark:bg-[#070b18]/60 backdrop-blur-xl border-b border-white/40 dark:border-white/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>

            <div className="flex items-center space-x-4">
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`transition-colors ${
                          location.pathname === item.to
                            ? "text-[#2563eb] dark:text-[#3B82F6] font-medium"
                            : "text-slate-800 dark:text-slate-200 hover:text-[#2563eb] dark:hover:text-[#3B82F6]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <ThemeToggle />

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Меню"
              >
                <Menu className="h-6 w-6 text-slate-900 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white/80 dark:bg-[#070b18]/90 backdrop-blur-2xl shadow-xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-white/40 dark:border-white/10">
              <Logo size={28} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Закрыть меню"
              >
                <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-white/60 dark:hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </Link>
                </li>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-white/60 dark:hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 mt-4 border-t border-white/40 dark:border-white/10">
              <Link
                to="/kontakty"
                className="flex items-center justify-center w-full btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
