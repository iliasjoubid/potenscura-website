import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Kwaliteit en veiligheid | Potens Cura', description: 'Zorgvuldige begeleiding en duidelijke afspraken in Arnhem. Lees hoe Potens Cura jongeren van 16 tot 23 jaar ondersteunt.' };
export default function Pagina() { return <>
  <section className="band band--vlak"><div className="raster"><div className="blok__kop"><h1>Kwaliteit en veiligheid</h1><p className="blok__intro">Zorgvuldige begeleiding en duidelijke afspraken</p></div></div></section>
  <section className="band"><div className="raster duo">        <article className="duo__vak"><h2>Een veilige woonomgeving</h2><p>Een veilige woonomgeving vraagt om duidelijke afspraken, aandacht voor privacy, brandveiligheid en zorgvuldig handelen bij incidenten. Vraag ons gerust hoe deze onderwerpen op de locatie zijn geregeld.</p></article>
        <article className="duo__vak"><h2>Professionele verantwoordelijkheid</h2><p>Jongeren werken samen met hun persoonlijk begeleider aan doelen en een passend perspectief. Waar passend worden ouders, het netwerk en betrokken professionals betrokken. Beroepsregistratie en deskundigheid worden afgestemd op de werkzaamheden en geldende eisen.</p></article>
        <article className="duo__vak"><h2>Klachten en ondersteuning</h2><p>Wie ontevreden is over de begeleiding moet dit kunnen bespreken en weten hoe een klacht kan worden ingediend. Bekijk de aparte klachtenpagina voor de beschikbare informatie.</p></article>
        <article className="duo__vak"><h2>Privacy</h2><p>We vragen bezoekers om geen gevoelige cliëntinformatie via het openbare contactformulier te versturen. Lees de privacyverklaring voor meer informatie.</p></article>
  </div></section>
  <section className="band band--vlak"><div className="raster"><h2>Meer weten?</h2><p>Neem contact met ons op voor vragen of een eerste afstemming.</p><Link className="knop" href="/contact">Contact opnemen</Link></div></section>
</>; }
