import Link from 'next/link';
import { Pand } from '@/components/Beelden';
import { Pijl } from '@/components/Iconen';
import { meta } from '@/lib/meta';

export const metadata = meta('home');

const stappen = [
  {
    naam: 'Kennismaken',
    uitleg: 'We bespreken de hulpvraag en kijken samen of onze woonvoorziening bij de jongere past.',
  },
  {
    naam: 'Afspraken maken',
    uitleg: 'Met de jongere en betrokkenen stemmen we de start, begeleiding en benodigde financiering af.',
  },
  {
    naam: 'Werken aan doelen',
    uitleg: 'De jongere stelt samen met de persoonlijk begeleider doelen op. We bespreken regelmatig hoe het gaat.',
  },
  {
    naam: 'Een passende vervolgstap',
    uitleg: 'We werken toe naar wat aansluit bij de situatie: zelfstandig wonen, terugkeer naar huis of een andere woonvorm.',
  },
];

export default function Home() {
  return (
    <>
      <section className="thuis-held" aria-labelledby="thuis-titel">
        <div className="raster thuis-held__binnen">
          <div className="thuis-held__tekst">
            <p className="thuis-label">Kleinschalig wonen en begeleiding in Arnhem</p>
            <h1 id="thuis-titel">Wonen met perspectief.</h1>
            <p className="thuis-held__intro">Potens Cura biedt jongeren van 16 tot 23 jaar een eigen plek om te wonen, met persoonlijke begeleiding en aandacht voor hun ontwikkeling en toekomst.</p>
            <div className="thuis-held__acties">
              <Link className="knop knop--goud" href="/wonen">Ontdek het wonen</Link>
              <Link className="thuis-tekstlink" href="/begeleiding">Onze begeleiding <Pijl /></Link>
            </div>
          </div>
          <figure className="thuis-held__foto">
            <Pand sizes="(min-width: 1100px) 43vw, (min-width: 680px) 60vw, calc(100vw - 40px)" voorrang vierkantOpTelefoon />
          </figure>
        </div>
      </section>

      <section className="thuis-sectie" aria-labelledby="thuis-wonen">
        <div className="raster">
          <div className="thuis-sectie__kop">
            <div>
              <p className="thuis-label">Een plek voor jezelf</p>
              <h2 id="thuis-wonen">Een eigen studio, met begeleiding dichtbij</h2>
            </div>
            <p>Jongeren wonen bij Potens Cura in een eigen studio met keukenblok. Zo hebben ze ruimte voor privacy en zelfstandigheid, terwijl ondersteuning dichtbij is wanneer dat nodig is.</p>
          </div>
          <div className="thuis-feiten">
            <div><strong>4 studio’s</strong><span>Een eigen woonruimte en keukenblok</span></div>
            <div><strong>Gedeelde voorzieningen</strong><span>Badkamer en toiletten</span></div>
            <div><strong>24/7 aanwezigheid</strong><span>Begeleiding op de woonlocatie</span></div>
          </div>
          <Link className="pijl-link thuis-sectie__link" href="/wonen">Meer over de woonlocatie <Pijl /></Link>
        </div>
      </section>

      <section className="thuis-begeleiding band--navy" aria-labelledby="thuis-begeleiding">
        <div className="raster thuis-begeleiding__binnen">
          <div>
            <p className="thuis-label">Persoonlijke ondersteuning</p>
            <h2 id="thuis-begeleiding">Begeleiding, dag en nacht</h2>
          </div>
          <div className="thuis-begeleiding__tekst">
            <p>Iedere jongere krijgt een persoonlijk begeleider. Samen kijken zij naar wat goed gaat, waar ondersteuning nodig is en welke doelen belangrijk zijn. De begeleiding sluit aan op het dagelijks leven, zoals school, werk, praktische vaardigheden en het opbouwen van zelfstandigheid.</p>
            <p>Bij Potens Cura is 24 uur per dag, 7 dagen per week begeleiding aanwezig op de woonlocatie. Tijdens de nacht is er een slaapdienst aanwezig, zodat jongeren ook dan een beroep kunnen doen op begeleiding wanneer dat nodig is.</p>
            <Link className="pijl-link" href="/begeleiding">Lees hoe we begeleiden <Pijl /></Link>
          </div>
        </div>
      </section>

      <section className="thuis-sectie thuis-traject" aria-labelledby="thuis-traject">
        <div className="raster">
          <div className="thuis-sectie__kop">
            <div>
              <p className="thuis-label">Onze werkwijze</p>
              <h2 id="thuis-traject">Samen werken aan ontwikkeling</h2>
            </div>
            <p>Een plaatsing en begeleiding worden zorgvuldig afgestemd op de situatie van de jongere. Er is geen vast traject dat voor iedereen hetzelfde is.</p>
          </div>
          <ol className="thuis-stappen">
            {stappen.map((stap, i) => (
              <li key={stap.naam}>
                <span className="thuis-stappen__nummer" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{stap.naam}</h3>
                <p>{stap.uitleg}</p>
              </li>
            ))}
          </ol>
          <Link className="pijl-link thuis-sectie__link" href="/traject">Bekijk het volledige traject <Pijl /></Link>
        </div>
      </section>

      <section className="thuis-contact" aria-labelledby="thuis-contact">
        <div className="raster thuis-contact__binnen">
          <div>
            <p className="thuis-label">Contact en aanmelding</p>
            <h2 id="thuis-contact">Op zoek naar een passende woonplek?</h2>
            <p>Wilt u meer weten over onze woonvoorziening of bespreken of Potens Cura aansluit bij de hulpvraag van een jongere? Neem gerust contact met ons op. We denken graag met u mee.</p>
          </div>
          <Link className="knop knop--goud" href="/contact">Neem contact op</Link>
        </div>
      </section>
    </>
  );
}
