import JsonLd from '@/components/JsonLd';
import { PaginaKop } from '@/components/Blokken';
import { KopFoto } from '@/components/Beelden';
import { PRIVACY } from '@/lib/beeld';
import { concept, paginas } from '@/lib/gegevens';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('privacy');

export default function Privacy() {
  const p = paginas.privacy;
  return (
    <>
      <PaginaKop h1={p.h1} zin="Welke gegevens deze website verwerkt, en wat je rechten zijn." naast={<KopFoto foto={PRIVACY} />} />
      <section className="band band--vlak" aria-label="Privacy">
        <div className="raster">
          <div className="vakken vakken--twee">
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-cookies">
              <h2 id="privacy-cookies">Geen cookies, geen statistieken</h2>
              <p>Deze website plaatst geen cookies en houdt niet bij wie er komt. Er staan geen knoppen of filmpjes van andere diensten op. De letters en de foto&apos;s komen van deze website zelf.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-formulieren">
              <h2 id="privacy-formulieren">Formulieren</h2>
              {concept ? (
                <p>Dit is een concept van de nieuwe website. Het contactformulier en het sollicitatieformulier versturen en bewaren hier niets: wat je invult, blijft in je eigen browser.</p>
              ) : (
                <p>Wat je invult in het contactformulier of het sollicitatieformulier, gaat per e-mail naar Potens Cura, via de maildienst Resend. De website zelf bewaart het niet. De website staat bij Vercel.</p>
              )}
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-aanmelden">
              <h2 id="privacy-aanmelden">Aanmelden gaat niet via de website</h2>
              <p>Gegevens over de gezondheid en de situatie van een jongere zijn bijzondere persoonsgegevens. Die horen niet in een gewoon webformulier. Bel of mail ons, en stuur stukken via beveiligde mail.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-rechten">
              <h2 id="privacy-rechten">Je rechten</h2>
              <p>Je mag Potens Cura altijd vragen welke gegevens we van je hebben, en vragen om ze aan te passen of te verwijderen. Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de <a href="https://autoriteitpersoonsgegevens.nl">Autoriteit Persoonsgegevens</a>.</p>
            </section>
          </div>
        </div>
      </section>
      <JsonLd data={kruimelsLd('Privacy', p.pad)} />
    </>
  );
}
