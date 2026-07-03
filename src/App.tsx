import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "next-themes"
import Index from "./pages/Index"
import Service1C from "./pages/Service1C"
import ServiceBitrix24 from "./pages/ServiceBitrix24"
import ServiceSites from "./pages/ServiceSites"
import Contacts from "./pages/Contacts"
import ScrollToTop from "./components/ScrollToTop"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/uslugi/1c" element={<Service1C />} />
            <Route path="/uslugi/bitrix24-crm" element={<ServiceBitrix24 />} />
            <Route path="/uslugi/razrabotka-saitov" element={<ServiceSites />} />
            <Route path="/kontakty" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
)

export default App