import Link from 'next/link';
import { RIJNKADE } from '@/lib/beeld';
import { begeleiding, doelgroep } from '@/lib/gegevens';
import { Rijnkade, BronRegel } from './Beelden';

export default function Held() {
  return (
    <section className="held" aria-labelledby="kernzin">
      <figure className="held__beeld">
        <Rijnkade voorrang />
        <span className="horizon" aria-hidden="true" />
        <figcaption className="held__bron"><BronRegel bron={RIJNKADE} /></figcaption>
      </figure>
      <div className="held__tekst">
        <h1 id="kernzin" className="kernzin">Wonen met&nbsp;perspectief.</h1>
        <p className="held__zin">Kleinschalig wonen in een eigen studio, met {begeleiding.naam}. Voor {doelgroep.tekst} in Arnhem.</p>
        <Link className="knop knop--goud held__knop" href="/wonen">Zo woon je hier</Link>
      </div>
    </section>
  );
}
