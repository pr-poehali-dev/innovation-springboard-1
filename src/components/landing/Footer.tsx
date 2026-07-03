import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <a href="/" className="flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-black dark:text-white">
            АйТи<span className="text-[#7A7FEE]">Партнёр</span>
          </span>
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Обслуживание и сопровождение 1С, внедрение Битрикс24 CRM и разработка сайтов на 1С-Битрикс.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().getFullYear()} АйТиПартнёр. Все права защищены.
        </p>
      </div>
    </footer>
  )
}