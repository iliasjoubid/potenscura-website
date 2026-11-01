import Link from 'next/link';
import Held from '@/components/Held';
import { Slot } from '@/components/Blokken';
import { meta } from '@/lib/meta';
import { doelgroep, methodieken, werkwijzen, financiering } from '@/lib/gegevens';
import { Pand } from '@/components/Beelden';

export const metadata = meta('home');

export default function Home() {
  return (
    <>
      <Held />

      <section className="home-intro band band--vlak" aria-labelledby="home-intro-kop">
        <div className="raster home-intro__grid">
          <div className="home-intro__tekst">
            <p className="home-overline">Potens Cura · Arnhem</p>
            <h2 id="home-intro-kop">Klein wonen. Persoonlijke aandacht.</h2>
            <p>Een vertrouwde woonomgeving kan het verschil maken. Bij Potens Cura woont iedere jongere in een eigen studio, met ruimte voor privacy en een eigen ritme. De begeleiding sluit aan bij de jongere en de stappen die hij of zij wil zetten.</p>
            <Link className="pijl-link" href="/over-ons">Leer Potens Cura kennen <span aria-hidden="true">→</span></Link>
          </div>
          <figure className="home-intro__beeld">
            <Pand sizes="(min-width: 1000px) 42vw, calc(100vw - 40px)" />
            <figcaption>De woonlocatie van Potens Cura in Arnhem</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-feiten band" aria-labelledby="home-feiten-kop">
        <div className="raster">
          <div className="home-sectie-kop">
            <p className="home-overline">De woonplek</p>
            <h2 id="home-feiten-kop">Een eigen studio, met begeleiding dichtbij.</h2>
            <p>De woonvorm is kleinschalig en overzichtelijk. Er zijn vier studio’s, ieder met een eigen keuken. De badkamer en toiletten worden gedeeld.</p>
          </div>
          <div className="home-feiten__grid">
            <article className="home-feit">
              <span className="home-feit__nummer">01</span>
              <h3>Een eigen studio</h3>
              <p>Een eigen plek om te wonen, tot rust te komen en dagelijkse vaardigheden te oefenen.</p>
            </article>
            <article className="home-feit">
              <span className="home-feit__nummer">02</span>
              <h3>Kleinschalig</h3>
              <p>Met vier studio’s blijft de woonomgeving klein en persoonlijk.</p>
            </article>
            <article className="home-feit">
              <span className="home-feit__nummer">03</span>
              <h3>Begeleiding op maat</h3>
              <p>We sluiten aan bij wat de jongere nodig heeft en werken aan doelen die bij hem of haar passen.</p>
            </article>
          </div>
          <Link className="knop home-feiten__knop" href="/wonen">Meer over wonen</Link>
        </div>
      </section>

      <section className="home-aanpak band band--navy" aria-labelledby="home-aanpak-kop">
        <div className="raster">
          <div className="home-sectie-kop home-sectie-kop--licht">
            <p className="home-overline">Onze aanpak</p>
            <h2 id="home-aanpak-kop">In verbinding naar zelfredzaamheid.</h2>
            <p>Een goede begeleiding begint met contact. Vanuit vertrouwen werken we samen aan haalbare stappen, met oog voor de jongere en de mensen om hem of haar heen.</p>
          </div>
          <div className="home-aanpak__grid">
            {werkwijzen.map((w, i) => (
              <article className="home-aanpak__item" key={w.sleutel}>
                <span className="home-aanpak__nummer">0{i + 1}</span>
                <h3>{w.naam}</h3>
                <p>{w.kort}</p>
              </article>
            ))}
          </div>
          <p className="home-aanpak__methoden">{methodieken.zin}</p>
        </div>
      </section>

      <section className="home-doelgroep band band--vlak" aria-labelledby="home-doelgroep-kop">
        <div className="raster home-doelgroep__grid">
          <div>
            <p className="home-overline">Voor wie</p>
            <h2 id="home-doelgroep-kop">Een plek voor jongeren die niet thuis kunnen wonen.</h2>
          </div>
          <div className="home-doelgroep__tekst">
            <p>Potens Cura is er voor jongeren van {doelgroep.leeftijdVan} tot {doelgroep.leeftijdTot} jaar met psychische, sociale of verstandelijke problematiek, die toe zijn aan (semi)zelfstandig wonen met begeleiding.</p>
            <p>Een passende daginvulling, zoals school of werk, hoort bij het traject. Tijdens een kennismaking bespreken we samen wat de jongere nodig heeft en of onze woonvorm passend is.</p>
            <Link className="pijl-link" href="/vragen">Bekijk veelgestelde vragen <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="home-verwijzers band" aria-labelledby="home-verwijzers-kop">
        <div className="raster home-verwijzers__binnen">
          <div>
            <p className="home-overline">Samenwerken</p>
            <h2 id="home-verwijzers-kop">Ben je ouder, verwijzer of professional?</h2>
            <p>We denken graag mee over de mogelijkheden. {financiering.gemeente}</p>
          </div>
          <div className="home-verwijzers__acties">
            <Link className="knop knop--goud" href="/verwijzers">Informatie voor verwijzers</Link>
            <Link className="knop knop--rand-licht" href="/contact">Neem contact op</Link>
          </div>
        </div>
      </section>
      <Slot />
    </>
  );
}
