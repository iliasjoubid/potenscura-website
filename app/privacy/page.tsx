import JsonLd from '@/components/JsonLd';
import { PaginaKop } from '@/components/Blokken';
import { KopFoto } from '@/components/Beelden';
import { PRIVACY } from '@/lib/beeld';
import { paginas } from '@/lib/gegevens';
import { email } from '@/lib/site';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('privacy');

export default function Privacy() {
  const p = paginas.privacy;
  return (
    <>
      <PaginaKop h1={p.h1} zin="We gaan zorgvuldig om met persoonsgegevens. Op deze pagina lees je welke gegevens via deze website worden verwerkt en waarvoor." naast={<KopFoto foto={PRIVACY} />} />
      <section className="band band--vlak" aria-label="Privacy">
        <div className="raster">
          <div className="vakken vakken--twee">
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-verantwoordelijke">
              <h2 id="privacy-verantwoordelijke">Wie is verantwoordelijk?</h2>
              <p>Potens Cura B.V. is verantwoordelijk voor de verwerking van persoonsgegevens via deze website. Voor vragen over privacy kun je contact opnemen via <a href={email.link}>{email.tekst}</a>.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-cookies">
              <h2 id="privacy-cookies">Cookies en bezoekstatistieken</h2>
              <p>Deze website gebruikt geen trackingcookies en bevat geen ingebouwde advertentie- of socialmediatrackers. De hostingprovider kan technische gegevens verwerken die nodig zijn om de website veilig en beschikbaar te houden.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-formulieren">
              <h2 id="privacy-formulieren">Contact- en sollicitatieformulier</h2>
              <p>Als je een formulier verstuurt, worden de ingevulde gegevens via de e-maildienst Resend doorgestuurd naar Potens Cura. De website slaat de inhoud niet op in een eigen klantendatabase. De gegevens komen terecht in de mailbox van Potens Cura en worden niet langer bewaard dan nodig is voor het doel van het contact en eventuele wettelijke verplichtingen.</p>
              <p>Vermeld in deze formulieren geen gegevens over de gezondheid of de persoonlijke situatie van een jongere. Voor een aanmelding gebruiken we telefonisch contact en, wanneer nodig, een afgesproken beveiligde manier om informatie te delen.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-delen">
              <h2 id="privacy-delen">Delen met andere partijen</h2>
              <p>De gegevens die je via een formulier verstuurt, worden alleen verwerkt om op je bericht of sollicitatie te reageren. Resend verwerkt de e-mail namens Potens Cura. Hosting en technisch beheer van de website verlopen via Vercel. We verkopen persoonsgegevens niet.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-rechten">
              <h2 id="privacy-rechten">Je rechten</h2>
              <p>Je kunt vragen om inzage, correctie of verwijdering van je persoonsgegevens en je kunt bezwaar maken tegen de verwerking. Stuur je verzoek naar <a href={email.link}>{email.tekst}</a>. Je hebt ook het recht een klacht in te dienen bij de <a href="https://autoriteitpersoonsgegevens.nl">Autoriteit Persoonsgegevens</a>.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="privacy-zorg">
              <h2 id="privacy-zorg">Gegevens tijdens de begeleiding</h2>
              <p>Als een jongere begeleiding ontvangt, gelden aanvullende afspraken en wettelijke bewaartermijnen voor het zorgdossier. Die informatie wordt niet via deze website verzameld. De jongere en/of diens vertegenwoordiger ontvangt hierover informatie bij de start van de begeleiding.</p>
            </section>
          </div>
        </div>
      </section>
      <JsonLd data={kruimelsLd('Privacy', p.pad)} />
    </>
  );
}
