import Link from 'next/link';
import { PaginaKop, Slot } from '@/components/Blokken';
import { paginas } from '@/lib/gegevens';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';
import JsonLd from '@/components/JsonLd';

export const metadata = meta('criteria');

const inclusief = [
  ['Leeftijd en hulpvraag', 'De jongere is in beginsel 16 tot en met 23 jaar en heeft een ondersteuningsvraag op het gebied van wonen, ontwikkeling en (toenemende) zelfstandigheid. De passende wettelijke grondslag en financiering worden vooraf met de verwijzer en gemeente afgestemd.'],
  ['Passend bij de woonvorm', 'De jongere kan, met begeleiding en duidelijke afspraken, in een eigen studio wonen en gebruikmaken van gedeelde sanitaire voorzieningen. De jongere kan rekening houden met medebewoners en gezamenlijke huisregels.'],
  ['Ontwikkeling en samenwerking', 'De jongere staat open voor contact en begeleiding, of er is voldoende ruimte om samen aan vertrouwen en betrokkenheid te werken. De jongere wil, op een passend niveau, werken aan persoonlijke doelen en dagelijkse vaardigheden.'],
  ['Dagstructuur', 'Er is een passende invulling van de dag, zoals onderwijs, werk, stage, dagbesteding of een concreet plan om dit op te bouwen.'],
  ['Veiligheid en passende ondersteuning', 'De ondersteuningsvraag kan binnen de mogelijkheden, deskundigheid en personele bezetting van Potens Cura verantwoord worden begeleid. Risico’s en benodigde afspraken zijn vooraf bespreekbaar en uitvoerbaar.'],
  ['Samenwerking met betrokkenen', 'Er is bereidheid om waar passend samen te werken met de verwijzer, gemeente, ouders of andere belangrijke personen uit het netwerk en betrokken behandelaren.'],
];
const exclusief = [
  ['Zorg die buiten onze mogelijkheden valt', 'Wanneer de jongere voortdurend individueel toezicht, intensieve medische of verpleegkundige zorg, structurele overname van persoonlijke verzorging of een behandelsetting nodig heeft die Potens Cura niet kan bieden.'],
  ['Acute psychiatrische crisis', 'Wanneer sprake is van een acute psychiatrische crisis of een veiligheidsrisico dat eerst specialistische beoordeling, stabilisatie of behandeling vraagt. Een aanmelding kan opnieuw worden besproken zodra de situatie voldoende stabiel is.'],
  ['Ernstige en actuele onveiligheid', 'Wanneer er sprake is van ernstig, aanhoudend agressief of grensoverschrijdend gedrag waardoor de veiligheid van de jongere, medebewoners of medewerkers niet voldoende kan worden gewaarborgd, ook niet met redelijke aanvullende afspraken.'],
  ['Onvoldoende aansluiting bij de woonvorm', 'Wanneer de jongere op dit moment niet in staat is om, ook met passende ondersteuning, in een kleinschalige woonomgeving met gedeelde voorzieningen te verblijven of wanneer de benodigde begeleiding structureel intensiever is dan wij kunnen organiseren.'],
  ['Geen passende basis voor begeleiding', 'Wanneer noodzakelijke samenwerking, daginvulling of afspraken over veiligheid en begeleiding niet tot stand kunnen komen en daardoor geen verantwoord begeleidingstraject mogelijk is. We onderzoeken eerst of ondersteuning of aanvullende afspraken dit kunnen oplossen.'],
];

export default function Criteria() {
  const p = paginas.verwijzers;
  return <>
    <PaginaKop h1="Wanneer past wonen bij Potens Cura?" zin="Heldere uitgangspunten voor een zorgvuldige en passende plaatsing. Iedere aanmelding bekijken we individueel, samen met de jongere en de betrokken verwijzer." />
    <section className="band band--vlak"><div className="raster">
      <div className="home-sectie-kop"><p className="home-overline">Onze uitgangspunten</p><h2>Niet het label, maar de passende ondersteuning staat centraal.</h2><p>Een diagnose of achtergrond bepaalt niet op zichzelf of iemand bij Potens Cura kan wonen. We kijken naar de totale situatie, de doelen van de jongere, wat nodig is om veilig samen te wonen en of wij de gevraagde ondersteuning verantwoord kunnen bieden.</p></div>
      <div className="criteria-grid">
        <section className="criteria-paneel"><p className="home-overline">Inclusie</p><h2>Wanneer kan een jongere bij ons wonen?</h2><p>Een aanmelding kan passend zijn wanneer de volgende uitgangspunten aansluiten:</p><ol>{inclusief.map(([kop, tekst], i) => <li key={kop}><span>0{i+1}</span><div><h3>{kop}</h3><p>{tekst}</p></div></li>)}</ol></section>
        <section className="criteria-paneel criteria-paneel--licht"><p className="home-overline">Exclusie</p><h2>Wanneer is een andere plek passender?</h2><p>Potens Cura kan niet iedere zorgvraag beantwoorden. Een plaatsing is niet passend wanneer bijvoorbeeld sprake is van:</p><ol>{exclusief.map(([kop, tekst], i) => <li key={kop}><span>0{i+1}</span><div><h3>{kop}</h3><p>{tekst}</p></div></li>)}</ol></section>
      </div>
      <p className="criteria-noot">Deze uitgangspunten zijn geen automatische uitsluitingslijst. Een eventuele contra-indicatie wordt altijd in samenhang met de individuele situatie beoordeeld. Waar mogelijk bespreken we welke aanvullende ondersteuning, veiligheidsafspraken of samenwerking een plaatsing alsnog haalbaar kunnen maken.</p>
      <div className="criteria-acties"><a className="knop" href="/in-en-exclusiecriteria-potens-cura.pdf" download>Download de criteria als PDF</a><Link className="knop knop--rand" href="/verwijzers">Naar informatie voor verwijzers</Link></div>
    </div></section>
    <section className="band band--navy"><div className="raster verwijzers-contact"><div><h2>Twijfel je of de woonvorm aansluit?</h2><p>Neem contact op voor overleg. We bespreken de ondersteuningsvraag en bekijken samen of een kennismaking zinvol is.</p></div><div><a className="knop" href="tel:+31643534242">Bel 06 43 53 42 42</a><Link className="knop knop--rand-licht" href="/contact">Contact</Link></div></div></section>
    <Slot /><JsonLd data={kruimelsLd('Inclusie- en exclusiecriteria', '/in-en-exclusiecriteria')} />
  </>;
}
