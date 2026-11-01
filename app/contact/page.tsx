import Link from 'next/link';
import Formulier from '@/components/Formulier';
import JsonLd from '@/components/JsonLd';
import { PaginaKop } from '@/components/Blokken';
import { KopFoto } from '@/components/Beelden';
import { Pijl, Voorbeeld } from '@/components/Iconen';
import { CONTACT } from '@/lib/beeld';
import { paginas, partijen, plaats } from '@/lib/gegevens';
import { email, telefoon } from '@/lib/site';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('contact');

export default function Contact() {
  const p = paginas.contact;
  return (
    <>
      <PaginaKop
        h1={p.h1}
        zin="Voor een aanmelding, een vraag, een sollicitatie of een klacht."
        className="pagina-kop--contact"
        naast={<KopFoto foto={CONTACT} />}
      >
        <dl className="contact">
          <div><dt>Telefoon</dt><dd><a href={telefoon.link}>{telefoon.tekst}</a></dd></div>
          <div><dt>E-mail</dt><dd><a href={email.link}>{email.tekst}</a></dd></div>
          <div><dt>Plaats</dt><dd>{plaats.waarde}</dd></div>
        </dl>
        {(telefoon.voorbeeld || email.voorbeeld) && <Voorbeeld className="blok__voorbeeld" />}
      </PaginaKop>

      <section className="band band--vlak" id="bericht" aria-labelledby="bericht-kop">
        <div className="raster bericht">
          <div className="bericht__formulier">
            <h2 className="kop-klein formulier__kop" id="bericht-kop">Stuur een bericht</h2>
            <Formulier
              id="bericht-formulier"
              knop="Verstuur je bericht"
              letOp="Zet geen gegevens over de gezondheid of de situatie van een jongere in dit formulier. Wil je een jongere aanmelden, bel of mail ons dan, en stuur stukken via beveiligde mail."
              velden={[
                { naam: 'naam', label: 'Je naam', verplicht: true, autocomplete: 'name' },
                { naam: 'email', label: 'Je e-mailadres', soort: 'email', verplicht: true, autocomplete: 'email' },
                { naam: 'onderwerp', label: 'Waarover gaat het?', soort: 'select', verplicht: true, opties: ['Een vraag', 'Een sollicitatie', 'Een klacht', 'Iets anders'] },
                { naam: 'bericht', label: 'Je bericht', soort: 'textarea', verplicht: true },
              ]}
            />
          </div>
          <nav className="bericht__wegen" aria-labelledby="wegen-kop">
            <h2 className="kop-klein" id="wegen-kop">Waar je ook terechtkunt</h2>
            <ul>
              <li><Link href="/verwijzers"><strong>Een jongere aanmelden</strong><span>De route en de aanmeldkaart, ook als pdf.</span><Pijl /></Link></li>
              <li><Link href="/werken-bij#solliciteren"><strong>Solliciteren</strong><span>Wat je doet als begeleider, en het formulier.</span><Pijl /></Link></li>
              <li><Link href="/klachten"><strong>Een klacht indienen</strong><span>Gratis, via {partijen.klachten.naam}.</span><Pijl /></Link></li>
              <li><Link href="/vragen"><strong>Vragen</strong><span>Voor jongeren, ouders en verwijzers.</span><Pijl /></Link></li>
            </ul>
          </nav>
        </div>
      </section>

      <JsonLd data={kruimelsLd('Contact', p.pad)} />
    </>
  );
}
