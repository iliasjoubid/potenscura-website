import Dienst from '@/components/Dienst';
import Formulier from '@/components/Formulier';
import JsonLd from '@/components/JsonLd';
import { PaginaKop, Werkwijze } from '@/components/Blokken';
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
        zin={`Je begeleidt ${doelgroep.tekst} die kleinschalig wonen, elk in een eigen studio. ${werktijden.zin}`}
        className="pagina-kop--boven"
        naast={
          <div className="kop-dienst kop-dienst--foto" id="diensten">
            <Dienst solliciteer="#solliciteren" fotos={DIENSTFOTOS} p rand voorrang kop="Wat je doet" sizes="(min-width: 1100px) 50vw, calc(100vw - 40px)" />
          </div>
        }
      />

      <Werkwijze />

      <section className="band band--vlak" id="solliciteren" aria-labelledby="solliciteren-kop">
        <div className="raster solliciteren">
          <div className="solliciteren__kop">
            <h2 id="solliciteren-kop">Solliciteren</h2>
            <p>Vertel kort wie je bent. Een paar zinnen is genoeg.</p>
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
