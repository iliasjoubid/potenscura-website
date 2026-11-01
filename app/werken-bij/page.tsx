import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Formulier from '@/components/Formulier';
import { PaginaKop, Slot } from '@/components/Blokken';
import { KopFoto } from '@/components/Beelden';
import { doelgroep, paginas, werktijden } from '@/lib/gegevens';
import { DIENSTFOTOS } from '@/lib/beeld';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('werken');

export default function WerkenBij() {
  const p = paginas.werken;
  return (
    <>
      <PaginaKop
        h1={p.h1}
        zin={`Wil je bijdragen aan een kleinschalige woonplek voor ${doelgroep.tekst}? Bij Potens Cura staat persoonlijke begeleiding en werken aan zelfstandigheid centraal.`}
        naast={<KopFoto foto={DIENSTFOTOS[0]} />}
      />
      <section className="band band--vlak" aria-labelledby="werken-aanpak">
        <div className="raster werken-intro">
          <div><p className="home-overline">Werken bij Potens Cura</p><h2 id="werken-aanpak">Aandacht voor de jongere, oog voor ontwikkeling.</h2></div>
          <div><p>In onze kleinschalige woonvorm is er ruimte om jongeren echt te leren kennen. De begeleiding sluit aan bij hun mogelijkheden, vragen en doelen. We vinden het belangrijk dat je zorgvuldig werkt, betrouwbaar bent en oog hebt voor de mens achter de hulpvraag.</p><p>{werktijden.zin} De precieze functie, inzet en voorwaarden bespreken we tijdens een kennismaking.</p></div>
        </div>
      </section>
      <section className="band band--navy" aria-labelledby="werken-waarden">
        <div className="raster werken-waarden">
          <div><p className="home-overline home-overline--licht">Onze manier van werken</p><h2 id="werken-waarden">Professioneel en menselijk.</h2></div>
          <ul><li>Je bouwt aan een respectvolle en betrouwbare relatie.</li><li>Je stimuleert eigen regie en dagelijkse zelfstandigheid.</li><li>Je werkt samen met het netwerk en betrokken professionals.</li><li>Je reflecteert op je handelen en blijft leren.</li></ul>
        </div>
      </section>
      <section className="band band--vlak" id="solliciteren" aria-labelledby="solliciteren-kop">
        <div className="raster solliciteren">
          <div className="solliciteren__kop">
            <p className="home-overline">Interesse?</p>
            <h2 id="solliciteren-kop">Maak kennis met Potens Cura.</h2>
            <p>Vertel kort wie je bent, wat je ervaring is en waarom je belangstelling hebt. Je kunt ook eerst <Link href="/contact">contact opnemen</Link>.</p>
          </div>
          <Formulier
            breed
            id="sollicitatie"
            knop="Verstuur je interesse"
            letOp="Vermeld geen bijzondere persoonsgegevens of vertrouwelijke informatie over cliënten."
            velden={[
              { naam: 'naam', label: 'Je naam', verplicht: true, autocomplete: 'name' },
              { naam: 'email', label: 'Je e-mailadres', soort: 'email', verplicht: true, autocomplete: 'email' },
              { naam: 'telefoon', label: 'Je telefoonnummer', soort: 'tel', autocomplete: 'tel' },
              { naam: 'over', label: 'Vertel iets over jezelf', soort: 'textarea', verplicht: true, hint: 'Je opleiding, ervaring en waarom je belangstelling hebt.' },
            ]}
          />
        </div>
      </section>
      <Slot />
      <JsonLd data={kruimelsLd('Werken bij', p.pad)} />
    </>
  );
}
