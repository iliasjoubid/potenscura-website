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
              <h2 id="privacy-cookies">Cookies en technisch bezoek</h2>
              <p>Deze website gebruikt zelf geen advertentie- of analysecookies. De hostingpartij kan technische gegevens, zoals IP-adressen en foutmeldingen, verwerken om de website veilig en beschikbaar te houden.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-formulieren">
              <h2 id="privacy-formulieren">Formulieren</h2>
              {concept ? (
                <p>Dit is een concept van de nieuwe website. Het contactformulier en het sollicitatieformulier versturen en bewaren hier niets: wat je invult, blijft in je eigen browser.</p>
              ) : (
                <p>Als het formulier technisch is ingesteld, versturen we de ingevulde gegevens via Resend naar Potens Cura om je bericht of sollicitatie te behandelen. De website wordt gehost bij Vercel. Is de verzenddienst niet ingesteld of tijdelijk onbereikbaar, dan krijg je een foutmelding en wordt je bericht niet als verzonden bevestigd.</p>
              )}
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-aanmelden">
              <h2 id="privacy-aanmelden">Aanmelden gaat niet via de website</h2>
              <p>Gegevens over de gezondheid en de situatie van een jongere zijn bijzondere persoonsgegevens. Die horen niet in een gewoon webformulier. Neem voor het uitwisselen van vertrouwelijke stukken eerst contact met ons op, zodat we samen een veilige overdrachtswijze afspreken.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-verantwoordelijke">
              <h2 id="privacy-verantwoordelijke">Wie is verantwoordelijk?</h2>
              <p>Potens Cura B.V., Johan de Wittlaan 75, 6828 XD Arnhem, is verantwoordelijk voor de gegevens die je via deze website aan ons doorgeeft. Je kunt ons bereiken via <a href="mailto:info@potenscura.nl">info@potenscura.nl</a>.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-bewaartermijn">
              <h2 id="privacy-bewaartermijn">Doel en bewaren</h2>
              <p>We gebruiken contactgegevens en de inhoud van je bericht alleen om je vraag, aanmeldingsoverleg of sollicitatie te behandelen. We bewaren gegevens niet langer dan daarvoor noodzakelijk is, tenzij een wettelijke bewaarplicht geldt. Vraag ons gerust naar de bewaartermijn voor jouw gegevens.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-rechten">
              <h2 id="privacy-rechten">Je rechten</h2>
              <p>Je kunt ons vragen welke persoonsgegevens we verwerken en verzoeken om inzage, verbetering, verwijdering of beperking van de verwerking, voor zover de wet dat toestaat. Ook kun je bezwaar maken. Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de <a href="https://autoriteitpersoonsgegevens.nl">Autoriteit Persoonsgegevens</a>.</p>
            </section>
          </div>
        </div>
      </section>
      <JsonLd data={kruimelsLd('Privacy', p.pad)} />
    </>
  );
}
