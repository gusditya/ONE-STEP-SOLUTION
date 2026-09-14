// src/App.jsx
import { Routes, Route } from 'react-router-dom'

// Import semua halaman yang sudah kamu buat
import Beranda from './pages/Beranda/beranda.jsx'
import Event from './pages/Event/event.jsx'
import Mitra from './pages/Mitra/mitra.jsx'
import Kampus from './pages/Kampus/kampus.jsx'
import Berita from './pages/Berita/berita.jsx'
import TentangKami from './pages/TentangKami/tentangkami.jsx'
import Karier from './pages/Karier/karier.jsx'

export default function App() {
    return (
        <div className="app">
            {/* Menentukan path URL dan komponen halaman yang dituju */}
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/event" element={<Event />} />
                <Route path="/mitra" element={<Mitra />} />
                <Route path="/kampus" element={<Kampus />} />
                <Route path="/berita" element={<Berita />} />
                <Route path="/tentang-kami" element={<TentangKami />} />
                <Route path="/karier" element={<Karier />} />
            </Routes>
        </div>
    )
}
