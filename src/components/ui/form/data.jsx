import React from 'react';

const daftarMateri = [
    {
        id: 1,
        judul: "Pengenalan HTML & CSS",
        deskripsi: "Belajar struktur dasar web dan cara mempercantik tampilan halaman.",
        tingkat: "Pemula"
    },
    {
        id: 2,
        judul: "Dasar-Dasar JavaScript",
        deskripsi: "Memahami logika pemrograman, variabel, fungsi, dan manipulasi DOM.",
        tingkat: "Pemula"
    },
    {
        id: 3,
        judul: "React JS untuk Pemula",
        deskripsi: "Belajar membuat komponen interaktif, props, state, dan JSX.",
        tingkat: "Menengah"
    },
    {
        id: 4,
        judul: "REST API & Node.js",
        deskripsi: "Membuat server backend dan menghubungkannya dengan database.",
        tingkat: "Lanjutan"
    }
];

// 2. Komponen Card yang menerima data lewat props
function Card({ judul, deskripsi, tingkat }) {
    return (
        <div style={styles.card}>
            <span style={styles.badge}>{tingkat}</span>
            <h3 style={styles.title}>{judul}</h3>
            <p style={styles.description}>{deskripsi}</p>
            <button style={styles.button}>Pelajari Materi</button>
        </div>
    );
}

export default function App() {
    return (
        <div style={styles.container}>
            <h2>Daftar Materi Pembelajaran</h2>

            <div style={styles.grid}>
                {daftarMateri.map((materi) => (
                    <Card
                        key={materi.id}
                        judul={materi.judul}
                        deskripsi={materi.deskripsi}
                        tingkat={materi.tingkat}
                    />
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
    },
    card: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    badge: {
        backgroundColor: '#e0f2fe',
        color: '#0369a1',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 'bold',
        width: 'fit-content'
    },
    title: {
        margin: '12px 0 8px 0',
        fontSize: '18px'
    },
    description: {
        color: '#666',
        fontSize: '14px',
        lineHeight: '1.4'
    },
    button: {
        marginTop: '16px',
        padding: '8px 12px',
        backgroundColor: '#0284c7',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};
