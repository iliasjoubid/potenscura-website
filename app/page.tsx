import Link from 'next/link';
import Held from '@/components/Held';
import Weg from '@/components/Weg';
import VragenKeuze from '@/components/VragenKeuze';
import Aanmeldkaart from '@/components/Aanmeldkaart';
import { Huis, Slot } from '@/components/Blokken';
import { Pijl } from '@/components/Iconen';
import { meta } from '@/lib/meta';
import { doel, werktijden } from '@/lib/gegevens';
import { WEEKEND } from '@/lib/beeld';
import { BronRegel, Horizonfoto } from '@/components/Beelden';

export const metadata = meta('home');

export default function Home() {
  return (
    <>
      <Held />
      <section className="band band--navy band--weg" id="route" aria-labelledby="route-kop">
        <div className="raster">
          <div className="blok__kop">
            <h2 id="route-kop">Van aankomst tot eigen benen</h2>
            <p className="blok__intro">{doel.jongere}<span className="alleen-js"> Kies een halte op de weg.</span></p>
          </div>
          <Weg />
        </div>
      </section>
      <Huis />
      <section className="band band--vlak" aria-label="Een jongere aanmelden en werken bij Potens Cura">
        <div className="raster duo">
          <div className="duo__vak" id="aanmelden">
            <h2>Een jongere aanmelden</h2>
            <p>Bel of mail ons, en stuur stukken via beveiligde mail. Na een intakegesprek spreken we af wanneer de jongere komt wonen.</p>
            <Aanmeldkaart />
            <Link className="pijl-link" href="/verwijzers">De hele aanmeldkaart <Pijl /></Link>
          </div>
          <div className="duo__vak" id="werken">
            <h2>Werken bij Potens&nbsp;Cura</h2>
            <p>{werktijden.kort} Overdag, &apos;s&nbsp;avonds, &apos;s&nbsp;nachts en in het weekend.</p>
            <figure className="duo__foto">
              <Horizonfoto foto={WEEKEND} sizes="(min-width: 1100px) 560px, calc(100vw - 40px)" />
              <figcaption className="foto-bron"><BronRegel bron={WEEKEND} /></figcaption>
            </figure>
            <Link className="pijl-link" href="/werken-bij">Wat je doet als begeleider <Pijl /></Link>
          </div>
        </div>
      </section>
      <section className="blok" id="vragen" aria-labelledby="vragen-kop">
        <VragenKeuze sleutels={['cultuur', 'familie', 'skj']} />
      </section>
      <Slot />
    </>
  );
}
