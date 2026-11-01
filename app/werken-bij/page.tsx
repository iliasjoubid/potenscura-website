import Link from 'next/link';
import Dienst from '@/components/Dienst';
import Formulier from '@/components/Formulier';
import JsonLd from '@/components/JsonLd';
import { doelgroep, methodieken, paginas, partijen, werktijden } from '@/lib/gegevens';
import { DIENSTFOTOS } from '@/lib/beeld';
import { telefoon } from '@/lib/site';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('werken');

export default function WerkenBij() {
  const p = paginas.werken;
  return (
    <>
      <section className="werk-kop" aria-labelledby="pagina-h1">
        <div className="raster werk-kop__binnen">
          <h1 id="pagina-h1">{p.h1}</h1>
          <p className="werk-kop__zin">{`Je begeleidt ${doelgroep.tekst} die kleinschalig wonen, elk in een eigen studio. ${werktijden.zin}`}</p>
        </div>
        <div className="raster">
          <Dienst groot solliciteer="#solliciteren" fotos={DIENSTFOTOS} p voorrang kop="Wat je doet" sizes="(min-width: 1100px) 56vw, calc(100vw - 40px)" />
        </div>
      </section>

      <section className="band band--vlak" id="solliciteren" aria-labelledby="solliciteren-kop">
        <div className="raster solliciteren">
          <div className="solliciteren__kop">
            <h2 id="solliciteren-kop">Solliciteren</h2>
            <p>Vertel kort wie je bent. Een paar zinnen is genoeg.</p>
            <dl className="solliciteren__feiten">
              <div><dt>Collega&apos;s</dt><dd>{partijen.skj.tekst}</dd></div>
              <div><dt>Methodieken</dt><dd>{methodieken.zin}</dd></div>
            </dl>
            <p className="solliciteren__bel">Liever eerst praten? Bel <a href={telefoon.link}>{telefoon.tekst}</a>.</p>
          </div>
          <Formulier
            breed
            id="sollicitatie"
            knop="Verstuur je sollicitatie"
            velden={[
              { naam: 'naam', label: 'Je naam', verplicht: true, autocomplete: 'name' },
              { naam: 'email', label: 'Je e-mailadres', soort: 'email', verplicht: true, autocomplete: 'email' },
              { naam: 'telefoon', label: 'Je telefoonnummer', soort: 'tel', autocomplete: 'tel' },
              { naam: 'over', label: 'Over jou', soort: 'textarea', verplicht: true, hint: 'Je opleiding, je ervaring en waarom je hier wilt werken.' },
            ]}
          />
        </div>
      </section>

      <JsonLd data={kruimelsLd('Werken bij', p.pad)} />
    </>
  );
}
