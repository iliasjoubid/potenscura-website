import Link from 'next/link';
import Formulier from '@/components/Formulier';
import JsonLd from '@/components/JsonLd';
import { PaginaKop } from '@/components/Blokken';
import { KopFoto } from '@/components/Beelden';
import { Pijl, Voorbeeld } from '@/components/Iconen';
import { CONTACT } from '@/lib/beeld';
import { aanmelden, paginas, plaats } from '@/lib/gegevens';
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
        <div className="raster twee twee--breed">
          <div className="twee__links">
            <h2 className="kop-klein">Een jongere aanmelden</h2>
            <p className="contact__tekst">{aanmelden.geenFormulier} Bel of mail ons; stukken met persoonsgegevens stuur je via beveiligde mail.</p>
            <ul className="contact__links">
              <li><Link className="pijl-link" href="/verwijzers">De aanmeldkaart <Pijl /></Link></li>
              <li><Link className="pijl-link" href="/werken-bij#solliciteren">Solliciteren <Pijl /></Link></li>
              <li><Link className="pijl-link" href="/klachten">Een klacht indienen <Pijl /></Link></li>
            </ul>
          </div>
          <div className="twee__rechts">
            <h2 className="kop-klein formulier__kop" id="bericht-kop">Stuur een bericht</h2>
            <Formulier
              id="bericht-formulier"
              knop="Verstuur je bericht"
              letOp="Zet geen gegevens over de gezondheid of de situatie van een jongere in dit formulier. Een aanmelding gaat per telefoon of beveiligde mail."
              velden={[
                { naam: 'naam', label: 'Je naam', verplicht: true, autocomplete: 'name' },
                { naam: 'email', label: 'Je e-mailadres', soort: 'email', verplicht: true, autocomplete: 'email' },
                { naam: 'onderwerp', label: 'Waarover gaat het?', soort: 'select', verplicht: true, opties: ['Een vraag', 'Een sollicitatie', 'Een klacht', 'Iets anders'] },
                { naam: 'bericht', label: 'Je bericht', soort: 'textarea', verplicht: true },
              ]}
            />
          </div>
        </div>
      </section>

      <JsonLd data={kruimelsLd('Contact', p.pad)} />
    </>
  );
}
