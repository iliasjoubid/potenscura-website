import Link from 'next/link';
import Held from '@/components/Held';
import Weg from '@/components/Weg';
import Dienst from '@/components/Dienst';
import VragenKeuze from '@/components/VragenKeuze';
import Aanmeldkaart from '@/components/Aanmeldkaart';
import { Huis, Slot } from '@/components/Blokken';
import { meta } from '@/lib/meta';
import { doel, werktijden } from '@/lib/gegevens';
import { DIENSTFOTOS } from '@/lib/beeld';

export const metadata = meta('home');

export default function Home() {
  return (
    <>
      <Held />
      <Huis />
      <section className="band band--navy band--weg" id="route" aria-labelledby="route-kop">
        <div className="raster">
          <div className="blok__kop">
            <h2 id="route-kop">Stappen in de begeleiding</h2>
            <p className="blok__intro">{doel.jongere}<span className="alleen-js"> Kies een halte op de weg.</span></p>
          </div>
          <Weg />
        </div>
      </section>
      <section className="band band--vlak" aria-label="Aanmelden en werken bij Potens Cura">
        <div className="raster duo">
          <div className="duo__vak" id="aanmelden">
            <h2>Een jongere aanmelden</h2>
            <p>Wilt u weten of Potens Cura passend is voor een jongere? Bekijk onze informatie voor verwijzers en neem contact op voor overleg.</p>
            <Aanmeldkaart />
            <Link className="knop" href="/verwijzers">Meer informatie voor verwijzers</Link>
          </div>
          <div className="duo__vak" id="werken">
            <h2>Werken bij Potens&nbsp;Cura</h2>
            <p>{werktijden.kort}</p>
            <Dienst fotos={DIENSTFOTOS} rand />
          </div>
        </div>
      </section>
      <section className="blok" id="vragen" aria-labelledby="vragen-kop">
        <VragenKeuze sleutels={['familie', 'skj', 'voor-wie', 'financiering']} />
      </section>
      <Slot />
    </>
  );
}
