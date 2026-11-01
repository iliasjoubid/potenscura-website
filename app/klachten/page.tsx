import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PaginaKop, Slot } from '@/components/Blokken';
import { KopFoto } from '@/components/Beelden';
import { KLACHTEN } from '@/lib/beeld';
import { paginas } from '@/lib/gegevens';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('klachten');

export default function Klachten() {
  const p = paginas.klachten;
  return (
    <>
      <PaginaKop h1={p.h1} zin="Ben je ontevreden over de begeleiding of over hoe het gaat? Bespreek het met ons, of met iemand die er los van staat." naast={<KopFoto foto={KLACHTEN} />} />
      <section className="band band--vlak" aria-label="Een klacht indienen">
        <div className="raster">
          <div className="vakken vakken--twee">
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="klacht-ons">
              <h2 id="klacht-ons">Zeg het tegen ons</h2>
              <p>Vertel het je begeleider, of neem <Link href="/contact">contact</Link> op met Potens Cura. Dat kan ook als ouder of als verwijzer.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="klacht-privacy">
              <h2 id="klacht-privacy">Een klacht over privacy</h2>
              <p>Ben je het niet eens met hoe Potens Cura met je gegevens omgaat? Dan kun je een klacht indienen bij de <a href="https://autoriteitpersoonsgegevens.nl">Autoriteit Persoonsgegevens</a>.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="klacht-kpz">
              <h2 id="klacht-kpz">Klachtenportaal Zorg</h2>
              <p>Komen we er samen niet uit, of bespreek je het liever niet met ons? Potens Cura is aangesloten bij Klachtenportaal Zorg. Daar zoekt een onafhankelijke klachtenfunctionaris met jou en met ons naar een oplossing. Bij jeugdhulp kan een klacht ook naar de Klachtencommissie Jeugdzorg van Klachtenportaal Zorg. Een klacht indienen kost je niets.</p>
              <p>Dien je klacht in met het formulier op <a href="https://klachtenportaalzorg.nl/klacht-indienen/">klachtenportaalzorg.nl</a> of mail naar <a href="mailto:info@klachtenportaalzorg.nl">info@klachtenportaalzorg.nl</a>.</p>
            </section>
            <section className="vakken__vak vakken__vak--tekst" aria-labelledby="klacht-vertrouwen">
              <h2 id="klacht-vertrouwen">Een vertrouwenspersoon</h2>
              <p>Wil je hulp van iemand die niet bij Potens Cura werkt? Een vertrouwenspersoon van Jeugdstem of Adviespunt Zorgbelang helpt je gratis en onafhankelijk, met advies of bij een klacht. Ze zijn er voor jongeren, ouders, pleegouders en verzorgers in de jeugdzorg.</p>
              <p>Bel <a href="tel:+31885551000">088 555 1000</a> op werkdagen, of kijk op <a href="https://jeugdstem.nl">jeugdstem.nl</a>.</p>
            </section>
          </div>
          <p className="bron vakken__onder">De gegevens van Klachtenportaal Zorg, Jeugdstem en Adviespunt Zorgbelang zijn gecontroleerd op 29 oktober 2026.</p>
        </div>
      </section>
      <Slot />
      <JsonLd data={kruimelsLd('Klachten', p.pad)} />
    </>
  );
}
