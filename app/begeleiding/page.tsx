import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Persoonlijke begeleiding | Potens Cura', description: 'Begeleiding die aansluit bij de jongere in Arnhem. Lees hoe Potens Cura jongeren van 16 tot 23 jaar ondersteunt.' };
export default function Pagina() { return <>
  <section className="band band--vlak"><div className="raster"><div className="blok__kop"><h1>Persoonlijke begeleiding</h1><p className="blok__intro">Begeleiding die aansluit bij de jongere</p></div></div></section>
  <section className="band"><div className="raster duo">        <article className="duo__vak"><h2>Samen doelen stellen</h2><p>Iedere jongere heeft een persoonlijk begeleider. Samen bespreken zij wat goed gaat, waar ondersteuning nodig is en aan welke doelen de jongere wil werken. Waar passend worden ouders, het netwerk en betrokken professionals hierbij betrokken.</p></article>
        <article className="duo__vak"><h2>Perspectiefplan</h2><p>De afspraken en doelen worden vastgelegd in een perspectiefplan. We besteden aandacht aan wonen, school of dagbesteding, financiën, sociale contacten en de stap naar zelfstandigheid.</p></article>
        <article className="duo__vak"><h2>Evalueren en bijstellen</h2><p>We bespreken regelmatig hoe het gaat. Doelen en begeleiding worden waar nodig aangepast aan de ontwikkeling en situatie van de jongere.</p></article>
        <article className="duo__vak"><h2>Aanwezigheid</h2><p>Er is 24 uur per dag, zeven dagen per week begeleiding aanwezig op de woonlocatie. Dit betekent niet automatisch dat er de hele nacht een wakende dienst is.</p></article>
  </div></section>
  <section className="band band--vlak"><div className="raster"><h2>Meer weten?</h2><p>Neem contact met ons op voor vragen of een eerste afstemming.</p><Link className="knop" href="/contact">Contact opnemen</Link></div></section>
</>; }
