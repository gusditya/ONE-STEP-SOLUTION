import { Card } from "@/components/ui/card";
import "./CardCountry.css";
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';


export default function CardCountry() {
    return (
        <div className="CardCountry">
            <div className="flex flex-col gap-2">
                <h2 className="text1-cardcountry font-bold text-3xl">Destinasi Studi Populer</h2>
                <h4 className="text1-cardcountry text-lg">Temukan negara terbaik untuk masa depanmu</h4>
            </div>

            <div className="AllCountry">
                <div>
                    <Card className="countrycard w-70 h-60">

                        <div className="flex-1">
                        </div>

                        <div className="subtitle-card">
                            <div className="Materi">
                                <h2 className="text-xl font-bold text-white">Australia</h2>

                                <div style={{ gap: "5px", display: "flex", flexDirection: "column" }}>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">250+ universitas</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">Part Time Work</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">PR Oportunity</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="arrow-country">
                                <ArrowRight size={24} className="Icon-next" />
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card className="countrycard1 w-70 h-60">

                        <div className="flex-1">
                        </div>

                        <div className="subtitle-card">
                            <div className="Materi">
                                <h2 className="text-xl font-bold text-white">Canada</h2>

                                <div style={{ gap: "5px", display: "flex", flexDirection: "column" }}>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">200+ Universitas</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">Post Study Work</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">PR Oportunity</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="arrow-country">
                                <ArrowRight size={24} className="Icon-next" />
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card className="countrycard2 w-70 h-60">

                        <div className="flex-1">
                        </div>

                        <div className="subtitle-card">
                            <div className="Materi">
                                <h2 className="text-xl font-bold text-white">Jepang</h2>

                                <div style={{ gap: "5px", display: "flex", flexDirection: "column" }}>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">120+ universitas</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">Budaya Unik</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">Teknologi Maju</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="arrow-country">
                                <ArrowRight size={24} className="Icon-next" />
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card className="countrycard3 w-70 h-60">

                        <div className="flex-1">
                        </div>

                        <div className="subtitle-card">
                            <div className="Materi">
                                <h2 className="text-xl font-bold text-white">United Kingdom</h2>

                                <div style={{ gap: "5px", display: "flex", flexDirection: "column" }}>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">100+ universitas</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">Shorter Duration</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">Global Recognition</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="arrow-country">
                                <ArrowRight size={24} className="Icon-next" />
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card className="countrycard4 w-70 h-60">

                        <div className="flex-1">
                        </div>

                        <div className="subtitle-card">
                            <div className="Materi">
                                <h2 className="text-xl font-bold text-white">New Zealand</h2>

                                <div style={{ gap: "5px", display: "flex", flexDirection: "column" }}>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">100+ universitas</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">Quality Education</h4>
                                    </div>

                                    <div className="text-card">
                                        <Check color="#2563EB" size={12} />
                                        <h4 className="listCountry text-white">Work While Study</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="arrow-country">
                                <ArrowRight size={24} className="Icon-next" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
