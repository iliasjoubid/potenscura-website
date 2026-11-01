import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Het traject | Potens Cura', description: 'Van eerste contact tot een volgende stap in Arnhem. Lees hoe Potens Cura jongeren van 16 tot 23 jaar ondersteunt.' };
export default function Pagina() { return <>
  <section className="band band--vlak"><div className="raster"><div className="blok__kop"><h1>Het traject</h1><p className="blok__intro">Van eerste contact tot een volgende stap</p></div></div></section>
  <section className="band"><div className="raster duo">        <article className="duo__vak"><h2>1. Eerste contact</h2><p>De jongere, ouder of verwijzer neemt contact op. We bespreken de hulpvraag en de mogelijkheden van de woonvorm, zonder direct een plaatsing toe te zeggen.</p></article>
        <article className="duo__vak"><h2>2. Kennismaking en intake</h2><p>We onderzoeken samen of de ondersteuning en woonomgeving aansluiten bij de behoeften, veiligheid en ontwikkeldoelen van de jongere.</p></article>
        <article className="duo__vak"><h2>3. Afstemming en besluit</h2><p>Met de betrokken verwijzer en gemeente wordt bekeken welke verwijzing, toestemming en financiering nodig zijn. De gemeente beslist over eventuele financiering.</p></article>
        <article className="duo__vak"><h2>4. Start en perspectiefplan</h2><p>Bij een passende plaatsing maken we afspraken over wonen en begeleiding. De jongere stelt met de persoonlijk begeleider doelen op, waar passend met betrokkenen.</p></article>
        <article className="duo__vak"><h2>5. Begeleiding en evaluatie</h2><p>We bespreken de voortgang en stellen doelen bij als dat nodig is. De duur en intensiteit verschillen per jongere.</p></article>
        <article className="duo__vak"><h2>6. Vervolg en uitstroom</h2><p>We bereiden tijdig de volgende stap voor, bijvoorbeeld zelfstandiger wonen of een andere passende vorm van ondersteuning.</p></article>
  </div></section>
  <section className="band band--vlak"><div className="raster"><h2>Meer weten?</h2><p>Neem contact met ons op voor vragen of een eerste afstemming.</p><Link className="knop" href="/contact">Contact opnemen</Link></div></section>
</>; }
