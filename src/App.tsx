import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const queryClient = new QueryClient()

const App = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Navbar />
            <main className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </QueryClientProvider>
)

export default App
