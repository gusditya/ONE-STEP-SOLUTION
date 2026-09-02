import React, { useState, useEffect } from 'react';

export default function PelacakCuaca() {
    const [Cuaca, setCuaca] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const ambildataCuaca = async () => {
        setLoading(true);
        setError(null);

        const url = "https://api.open-meteo.com/v1/forecast?latitude=-8.4095&longitude=115.1889&current_weather=true";
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setCuaca(data.current_weather);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ambildataCuaca();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2>Cuaca Bali</h2>

                {loading && <p style={styles.loading}>Memuat data cuaca...</p>}
                {error && (
                    <div>
                        <p style={styles.error}>Terjadi kesalahan: {error}</p>
                        <button style={styles.button} onClick={ambildataCuaca}>Coba Lagi</button>
                    </div>)}
                {!loading && !error && Cuaca && (
                    <div>
                        <div style={styles.suhu}>{Cuaca.temperature}°C</div>
                        <div style={styles.info}>
                            Kecepatan Angin: <strong>{Cuaca.windspeed} km/h</strong>
                        </div>
                        <div style={styles.info}>
                            Arah Angin: <strong>{Cuaca.winddirection}°</strong>
                        </div>
                        <button style={styles.button} onClick={ambildataCuaca}>
                            Refresh
                        </button>
                    </div>
                )}
            </div>
        </div>
    )

}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily: "Arial, sans-serif",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        width: "280px",
    },
    suhu: {
        fontSize: "48px",
        fontWeight: "bold",
        color: "#2563eb",
        margin: "16px 0",
    },
    info: {
        color: "#64748b",
        fontSize: "14px",
        marginBottom: "8px",
    },
    loading: {
        color: "#94a3b8",
        fontStyle: "italic",
    },
    error: {
        color: "#ef4444",
        fontSize: "14px",
    },
    button: {
        marginTop: "12px",
        padding: "8px 16px",
        backgroundColor: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
};
