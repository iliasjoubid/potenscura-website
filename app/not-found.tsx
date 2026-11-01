import type { Metadata } from 'next';
import Link from 'next/link';
import Vloer from '@/components/Vloer';
import { Pijl } from '@/components/Iconen';

export const metadata: Metadata = { title: 'Pagina niet gevonden | Potens Cura', robots: { index: false, follow: true } };

const links = [
  { pad: '/', naam: 'Home' },
  { pad: '/wonen', naam: 'Wonen' },
  { pad: '/verwijzers', naam: 'Voor verwijzers' },
  { pad: '/werken-bij', naam: 'Werken bij' },
  { pad: '/contact', naam: 'Contact' },
];

export default function NietGevonden() {
  return (
    <section className="raster leeg" aria-labelledby="leeg-kop">
      <div className="leeg__tekst">
        <h1 id="leeg-kop">Deze pagina bestaat niet</h1>
        <p>Het adres klopt niet, of de pagina is verhuisd. Hier gaat de weg verder:</p>
        <ul className="leeg__links">
          {links.map((l) => (
            <li key={l.pad}><Link className="pijl-link" href={l.pad}>{l.naam} <Pijl /></Link></li>
          ))}
        </ul>
      </div>
      <Vloer />
    </section>
  );
}
