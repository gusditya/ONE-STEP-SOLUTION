import "./video.css";

export default function video() {
    return (
        <section className="video-section">
            <div className="video-header">
                <span>Video Edukasi</span>
                <h2>Belajar Bersama One Step Solution</h2>
                <p>
                    Temukan berbagai panduan mengenai studi,
                    persiapan keberangkatan,
                    hingga peluang karier di luar negeri.
                </p>
            </div>

            <div className="video-grid">
                <div className="video-card">
                    <iframe src="https://www.youtube.com/embed/xKatx3USazQ"
                        allowFullScreen></iframe>
                    <div className="video-content">
                        <h3>Siapa Bilang Kuliah Luar Negeri Susah?</h3>
                        <p>
                            Mungkin mereka belum tahu caranya yang benar. Temukan langkahmu bersama kami.
                        </p>
                        <a href="https://www.youtube.com/watch?v=xKatx3USazQ" target="_blank" className="watch-btn">
                            ▶ Tonton Video
                        </a>
                    </div>
                </div>

                <div className="video-card">
                    <iframe src="https://www.youtube.com/embed/BdcyBPoG-kY"
                        allowFullScreen></iframe>
                    <div className="video-content">
                        <h3>Langkah pertamamu menuju Study & Karir Luar Negeri</h3>
                        <p>
                            Jangan khawatir kami akan menuntunmu dari awal hingga berhasil kuliah dan karier di luar negeri.
                        </p>
                        <a href="https://www.youtube.com/watch?v=BdcyBPoG-kY" target="_blank" className="watch-btn">
                            ▶ Tonton Video
                        </a>
                    </div>
                </div>
                <div className="video-card">
                    <iframe src="https://www.youtube.com/embed/Py1jA2EjCmk"
                        allowFullScreen></iframe>
                    <div className="video-content">
                        <h3>Kesuksesan Itu 80%-Nya Adalah Memulai</h3>
                        <p>
                            Pertimbangkan dalam memilih negara tujuan, mulai dari kualitas pendidikan, biaya hidup, dan peluang kerja.
                        </p>
                        <a href="https://www.youtube.com/watch?v=Py1jA2EjCmk" target="_blank" className="watch-btn">
                            ▶ Tonton Video
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
