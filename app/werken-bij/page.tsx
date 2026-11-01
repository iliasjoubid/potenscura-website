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

      <section className="band"><div className="raster"><div className="blok__kop"><h2>Werken in een kleinschalige woonomgeving</h2><p className="blok__intro">Je ondersteunt jongeren bij hun dagelijkse leven en persoonlijke doelen. Je werkt samen met collega’s, ouders en betrokken professionals, met aandacht voor veiligheid, vertrouwen en duidelijke afspraken.</p></div><p>Het werk vraagt om een professionele houding, zorgvuldig rapporteren, samenwerken en kunnen omgaan met wisselende situaties. Voor begeleidingsfuncties kijken we naar een passende zorg- of sociaalwerkopleiding en relevante ervaring. Waar de functie dit vereist, is een SKJ-registratie nodig. De precieze eisen bespreken we per functie.</p><p>Er is niet altijd een vacature beschikbaar. Neem gerust contact op als je interesse hebt in werken bij Potens Cura.</p></div></section><Werkwijze />

      <section className="band band--vlak" id="solliciteren" aria-labelledby="solliciteren-kop">
        <div className="raster solliciteren">
          <div className="solliciteren__kop">
            <h2 id="solliciteren-kop">Interesse om bij ons te werken?</h2>
            <p>Stel jezelf kort voor en vertel welke opleiding en ervaring je meebrengt. We nemen contact op als er passende mogelijkheden zijn. Stuur geen gevoelige persoonsgegevens via dit formulier.</p>
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
