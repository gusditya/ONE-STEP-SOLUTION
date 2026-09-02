import { MessageCircleMore } from 'lucide-react';
import { SearchCheck } from 'lucide-react';
import { FileText } from 'lucide-react';
import { FolderBookmark } from 'lucide-react';
import { Plane } from 'lucide-react';
import "./Tatacara.css";

export default function Tatacara() {
    return (
        <div className="Tatacara">
            <div className="Title-Tatacara">
                <span className="Title-span1">Perjalanan Anda <h3 className="Title-span2">Bersama OSS</h3></span>
            </div>

            <div className="Container-Card">

                <div className="timeline">
                    <div className="timeline-line" />

                    <div className="Card-Tatacara">
                        <div className="Number">
                            <div className="timeline-dot">1</div>
                            <div className="circle">
                                <div className="SubCard-Tatacara">
                                    <MessageCircleMore color="White" size={36} />
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="Subtitle-Tatacara">
                                <h3 className="font-bold text-xl">Konsultasi</h3>
                                <h4>Diskusi gratis untuk memahami tujuan dan kebutuhan anda.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="Card-Tatacara">
                        <div className="Number">
                            <div className="timeline-dot">2</div>
                            <div className="circle">
                                <div className="SubCard-Tatacara">
                                    <SearchCheck color="White" size={36} />
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="Subtitle-Tatacara">
                                <h3 className="font-bold text-xl w-60">Pilih Negara & Kampus</h3>
                                <h4>Kami bantu memilih negara dan kampus terbaik untuk anda.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="Card-Tatacara">
                        <div className="Number">
                            <div className="timeline-dot">3</div>
                            <div className="circle">
                                <div className="SubCard-Tatacara">
                                    <FileText color="White" size={36} />
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="Subtitle-Tatacara">
                                <h3 className="font-bold text-xl">Persiapan Dokumen</h3>
                                <h4>Bimbingan lengkap dalam menyiapkan semua dokumen.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="Card-Tatacara">
                        <div className="Number">
                            <div className="timeline-dot">4</div>
                            <div className="circle">
                                <div className="SubCard-Tatacara">
                                    <FolderBookmark color="White" size={36} />
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="Subtitle-Tatacara">
                                <h3 className="font-bold text-xl">Proses Visa</h3>
                                <h4>Tim Ahli kami membantu proses visa hingga approved.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="Card-Tatacara">
                        <div className="Number">
                            <div className="timeline-dot">5</div>
                            <div className="circle">
                                <div className="SubCard-Tatacara">
                                    <Plane color="White" size={36} />
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="Subtitle-Tatacara">
                                <h3 className="font-bold text-xl">Berangkat & Sukses</h3>
                                <h4>Siap terbang dan memulai masa yang global Anda.</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
