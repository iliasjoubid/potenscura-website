import Link from 'next/link';
import { RIJNKADE } from '@/lib/beeld';
import { begeleiding, doelgroep } from '@/lib/gegevens';
import { Rijnkade } from './Beelden';

export default function Held() {
  return (
    <section className="held" aria-labelledby="kernzin">
      <figure className="held__beeld">
        <Rijnkade voorrang />
        <span className="horizon" aria-hidden="true" />
      </figure>
      <div className="held__tekst">
        <h1 id="kernzin" className="kernzin">Wonen met&nbsp;perspectief.</h1>
        <p className="held__zin">Potens Cura biedt jongeren van 16 tot 23 jaar een eigen plek om te wonen, met persoonlijke begeleiding en aandacht voor hun ontwikkeling en toekomst.</p>
        <Link className="knop knop--goud held__knop" href="/wonen">Zo woon je hier</Link>
      </div>
    </section>
  );
}
