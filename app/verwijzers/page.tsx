import Link from 'next/link';
import Aanmeldkaart from '@/components/Aanmeldkaart';
import JsonLd from '@/components/JsonLd';
import { Stadhuis } from '@/components/Beelden';
import { Pijl } from '@/components/Iconen';
import { openbaar, paginas } from '@/lib/gegevens';
import { datum } from '@/lib/site';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('verwijzers');

export default function Verwijzers() {
  const p = paginas.verwijzers;
  const { tot23 } = openbaar;
  return (
    <>
      <section className="route-kop" aria-labelledby="pagina-h1">
        <div className="raster route-kop__binnen">
          <h1 id="pagina-h1">{p.h1}</h1>
          <p className="route-kop__zin">Bel of mail Potens Cura, en stuur stukken met persoonsgegevens via beveiligde mail. In een intakegesprek kijken we samen of het past. Past het, dan spreken we af wanneer de jongere komt wonen.</p>
        </div>
      </section>

      <section className="band band--navy print-kaart" id="kaart" aria-label="De aanmeldkaart en tot 23 jaar">
        <div className="raster kaart-rij">
          <div className="kaart-rij__kaart">
            <Aanmeldkaart groot />
          </div>
          <div className="kaart-rij__naast niet-printen">
            <Stadhuis sizes="(min-width: 1100px) 520px, calc(100vw - 40px)" />
            <div className="kaart-rij__tekst">
              <h2 className="kop-klein">Tot 23 jaar</h2>
              <p>{tot23.tekst}</p>
              <p className="vakken__bron">Bron: <a href={tot23.link}>{tot23.bron}</a>, nagelezen op {datum(tot23.nagelezen)}.</p>
              <Link className="pijl-link" href="/#route">De weg van een jongere bij ons <Pijl /></Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={kruimelsLd('Voor verwijzers', p.pad)} />
    </>
  );
}
