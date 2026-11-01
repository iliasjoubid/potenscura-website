import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Koers from '@/components/Koers';
import { PaginaKop, Slot, Werkwijze } from '@/components/Blokken';
import { Bedstee } from '@/components/Beelden';
import { Pijl } from '@/components/Iconen';
import { BEDSTEE } from '@/lib/beeld';
import { begeleiding, dagbesteding, doelgroep, openbaar, paginas, partijen } from '@/lib/gegevens';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('over');

export default function OverOns() {
  const p = paginas.over;
  const { skj } = openbaar;
  return (
    <>
      <PaginaKop
        h1={p.h1}
        zin={`Kleinschalig wonen in vier studio's, voor ${doelgroep.tekst}, met ${begeleiding.naam}.`}
        naast={
          <figure className="held__beeld held__beeld--bedstee held__beeld--half">
            <Bedstee voorrang half />
            <span className="horizon" aria-hidden="true" />
          </figure>
        }
      />

      <section className="band band--vlak" aria-label="Missie, visie en doel, kleinschalig wonen, kwaliteit en klachten">
        <div className="raster">
          <div className="vakken">
            <section className="vakken__vak vakken__vak--zeven vakken__vak--koers" aria-labelledby="koers-kop">
              <Koers />
            </section>
            <section className="vakken__vak vakken__vak--vijf" id="klein" aria-labelledby="klein-kop">
              <h2 id="klein-kop">Voor wie</h2>
              <p>Potens Cura is een kleinschalige woonvorm in Arnhem, voor {doelgroep.tekst} {doelgroep.situatie}, {doelgroep.problematiek}.</p>
              <p>{doelgroep.waarom} {dagbesteding.zin}</p>
            </section>
            <section className="vakken__vak vakken__vak--vijf vakken__vak--navy" id="kwaliteit" aria-labelledby="kwaliteit-kop">
              <h2 id="kwaliteit-kop">Kwaliteit</h2>
              <p>{partijen.skj.tekst}</p>
              <p>{skj.tekst}</p>
              
            </section>
            <section className="vakken__vak vakken__vak--zeven" id="klachten" aria-labelledby="klachten-kop">
              <h2 id="klachten-kop">Vertrouwenspersoon en klachten</h2>
              <p>Wil je hulp van iemand die niet bij Potens Cura werkt? Een vertrouwenspersoon van Jeugdstem of Adviespunt Zorgbelang helpt je gratis en onafhankelijk.</p>
              <p>Potens Cura is aangesloten bij {partijen.klachten.naam}. Daar zoekt een onafhankelijke klachtenfunctionaris met jou en met ons naar een oplossing. Een klacht indienen kost je niets.</p>
              <Link className="pijl-link" href="/klachten">Zo dien je een klacht in <Pijl /></Link>
            </section>
          </div>
        </div>
      </section>

      <Werkwijze />
      <Slot grond="vlak" />
      <JsonLd data={kruimelsLd('Over ons', p.pad)} />
    </>
  );
}
