import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Voor ouders en netwerk | Potens Cura', description: 'Betrokken blijven, met ruimte voor zelfstandigheid in Arnhem. Lees hoe Potens Cura jongeren van 16 tot 23 jaar ondersteunt.' };
export default function Pagina() { return <>
  <section className="band band--vlak"><div className="raster"><div className="blok__kop"><h1>Voor ouders en netwerk</h1><p className="blok__intro">Wanneer een jongere niet langer thuis kan wonen, brengt dat vaak vragen en zorgen met zich mee. We vinden het belangrijk om ouders en andere betrokkenen, waar passend, bij de begeleiding te betrekken.</p></div></div></section>
  <section className="band"><div className="raster duo">        <article className="duo__vak"><h2>Samenwerken</h2><p>Ouders en andere belangrijke personen kunnen een waardevolle rol spelen. We bespreken met de jongere wie betrokken wordt en hoe we samenwerken, met respect voor privacy en persoonlijke grenzen.</p></article>
        <article className="duo__vak"><h2>Een eigen woonplek</h2><p>De jongere woont in een eigen studio met een keukenblok. Badkamer en toiletten zijn gedeeld. Er is begeleiding op de locatie aanwezig.</p></article>
        <article className="duo__vak"><h2>Contact en voortgang</h2><p>We maken afspraken over contact, het bespreken van voortgang en de betrokkenheid van het netwerk. Dat gebeurt passend bij de leeftijd, situatie en rechten van de jongere.</p></article>
        <article className="duo__vak"><h2>Een vraag stellen</h2><p>Wilt u weten of deze woonvorm passend kan zijn? Neem contact op voor een eerste gesprek.</p></article>
  </div></section>
  <section className="band band--vlak"><div className="raster"><h2>Meer weten?</h2><p>Neem contact met ons op voor vragen of een eerste afstemming.</p><Link className="knop" href="/contact">Contact opnemen</Link></div></section>
</>; }
