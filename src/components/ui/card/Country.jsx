import background from '@/assets/background/Worldmap.png'

import amerika from '@/assets/country/amerikaflag.jpg'
import australia from '@/assets/country/australiaflag.png'
import belanda from '@/assets/country/belanda.jpg'
import belgia from '@/assets/country/belgiaflag.jpg'
import canada from '@/assets/country/canadaflag.png'
import china from '@/assets/country/chinaflag.jpg'
import denmark from '@/assets/country/denmarkflag.jpg'
import finlandia from '@/assets/country/finlandiaflag.jpg'
import italia from '@/assets/country/italiaflag.jpg'
import jepang from '@/assets/country/jepangflag.jpg'
import jerman from '@/assets/country/jermanflag.jpg'
import korea from '@/assets/country/koreaflag.jpg'
import malaysia from '@/assets/country/malaysiaflag.jpg'
import prancis from '@/assets/country/prancisflag.jpg'
import singapura from '@/assets/country/singaporeflag.png'
import spanyol from '@/assets/country/spanyolflag.jpg'
import swiss from '@/assets/country/swissflag.jpg'
import thailand from '@/assets/country/thailandflag.jpg'
import UK from '@/assets/country/UKflag.png'
import Vietnam from '@/assets/country/vietnamflag.jpg'

const DataCountry = [
    {
        id: 1,
        title: "Amerika",
        image: amerika,
    },
    {
        id: 2,
        title: "Australia",
        image: australia,
    },
    {
        id: 3,
        title: "Belanda",
        image: belanda,
    },
    {
        id: 4,
        title: "Belgia",
        image: belgia,
    },
    {
        id: 5,
        title: "Kanada",
        image: canada,
    },
    {
        id: 6,
        title: "China",
        image: china,
    },
    {
        id: 7,
        title: "Denmark",
        image: denmark,
    },
    {
        id: 8,
        title: "Finlandia",
        image: finlandia,
    },
    {
        id: 9,
        title: "Italia",
        image: italia,
    },
    {
        id: 10,
        title: "Jepang",
        image: jepang,
    },
    {
        id: 11,
        title: "Jerman",
        image: jerman,
    },
    {
        id: 12,
        title: "Korea Selatan",
        image: korea,
    },
    {
        id: 13,
        title: "Malaysia",
        image: malaysia,
    },
    {
        id: 14,
        title: "Prancis",
        image: prancis,
    },
    {
        id: 15,
        title: "Singapura",
        image: singapura,
    },
    {
        id: 16,
        title: "Spanyol",
        image: spanyol,
    },
    {
        id: 17,
        title: "Swiss",
        image: swiss,
    },
    {
        id: 18,
        title: "Thailand",
        image: thailand,
    },
    {
        id: 19,
        title: "United Kingdom",
        image: UK,
    },
    {
        id: 20,
        title: "Vietnam",
        image: Vietnam,
    }
]

export default function Country() {
    return (
        <div className="container">
            {DataCountry.map((item) => (
                <div className="card" key={item.id}>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    )
}
