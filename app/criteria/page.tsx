import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In- en exclusiecriteria | Potens Cura',
  description: 'Lees voor welke jongeren Potens Cura passende begeleiding kan bieden, wanneer een andere voorziening beter past en hoe we een aanmelding beoordelen.',
  alternates: { canonical: '/criteria' },
};

export default function Criteria() {
  return <>
    <section className="band"><div className="raster criteria-pagina">
      <div className="criteria-intro">
        <p className="criteria-label">Voor jongeren, ouders en verwijzers</p>
        <h1>In- en exclusiecriteria</h1>
        <p className="blok__intro">Niet iedere vorm van begeleiding past bij iedere situatie. Met onze in- en exclusiecriteria beoordelen we samen met de jongere, de gemeente en betrokken hulpverleners of Potens Cura een passende en veilige woonplek kan bieden.</p>
        <p>We kijken altijd naar de volledige situatie. Een criterium is niet automatisch een afwijzing: een zorgvuldige intake bepaalt of de begeleiding verantwoord aansluit bij de hulpvraag.</p>
        <p><a className="knop" href="/in-en-exclusiecriteria-potens-cura.pdf" target="_blank" rel="noopener noreferrer">Download de criteria (PDF)</a></p>
      </div>
    </div></section>
    <section className="band band--vlak"><div className="raster criteria-pagina">
      <h2>Voor wie is Potens Cura er?</h2>
      <p>Potens Cura biedt begeleiding aan jongeren van 16 tot 23 jaar die ondersteuning nodig hebben bij bijvoorbeeld psychisch welzijn, wonen, gedrag, relaties, leren, werken of financiën. Een zinvolle daginvulling, zoals school, werk of dagbesteding, maakt deel uit van het begeleidingstraject.</p>
      <h3>Ondersteuningsvragen die passend kunnen zijn</h3>
      <ul><li>Psychische klachten of psychiatrische problematiek die stabiel genoeg is voor begeleiding.</li><li>Een licht verstandelijke beperking of zwakbegaafdheid.</li><li>Gedragsproblemen.</li><li>Psychosociale problemen op het gebied van wonen, school, werk, netwerk of financiën.</li></ul>
      <p>Wij bieden begeleiding, geen behandeling. Wanneer behandeling nodig is, stemmen we waar passend vooraf af met de behandelaar.</p>
    </div></section>
    <section className="band"><div className="raster criteria-pagina">
      <h2>Wanneer past onze begeleiding doorgaans niet?</h2>
      <p>In onderstaande situaties is een andere vorm van zorg of ondersteuning vaak geschikter. Het zijn richtlijnen; we beoordelen iedere aanmelding afzonderlijk.</p>
      <ul><li>De jongere is jonger dan 16 jaar.</li><li>Er is geen bereidheid tot begeleiding en er is ook geen dwingend kader waarbinnen we contact kunnen opbouwen.</li><li>Er is ernstige psychiatrische problematiek waarvoor behandeling of opname in de ggz passender is.</li><li>Er is sprake van ernstige agressie of seksueel grensoverschrijdend gedrag.</li><li>Verslaving staat op de voorgrond.</li><li>Er zijn ernstige lichamelijke beperkingen waarvoor de locatie niet de juiste voorzieningen heeft.</li><li>Er is veelvuldig crimineel gedrag of een netwerk dat de veiligheid of leefomgeving ernstig kan verstoren.</li><li>Er is een behoefte aan zeer intensieve individuele begeleiding, voortdurend direct toezicht of specialistische 24-uurszorg die wij niet kunnen bieden.</li><li>De jongere kan ook voor korte tijd niet zonder direct toezicht zijn.</li><li>Er is acuut suïcidaal gedrag of ernstige zelfbeschadiging.</li><li>Er zijn schulden, maar de jongere staat niet open voor passende hulp daarbij.</li></ul>
      <p><strong>Goed om te weten:</strong> bij Potens Cura is begeleiding 24 uur per dag op de woonlocatie aanwezig, met een slaapdienst in de nacht. Dit is geen voortdurend individueel toezicht of specialistische behandeling.</p>
    </div></section>
    <section className="band band--vlak"><div className="raster criteria-pagina">
      <h2>Voorwaarden voor plaatsing en financiering</h2>
      <p>Voor een plaatsing is passende financiering nodig. De begeleiding en het verblijf kunnen worden gefinancierd vanuit de Jeugdwet. De betrokken gemeente beoordeelt of financiering mogelijk is. Potens Cura heeft op dit moment geen gemeentelijk contract; een afzonderlijke maatwerkafspraak kan met de gemeente worden besproken.</p>
      <p>In het beleidsdocument worden daarnaast een passende beschikking of indicatie en een bij voorkeur resterende looptijd van minimaal zes maanden genoemd. Een kortere looptijd leidt niet automatisch tot afwijzing.</p>
      <h2>Hoe beoordelen we een aanmelding?</h2>
      <p>Na het eerste contact volgt een kennismaking. We bespreken de hulpvraag, veiligheid, wensen, benodigde ondersteuning en het perspectief van de jongere. Waar nodig betrekken we de gemeente, een behandelaar of andere professionals. Daarna beoordelen we of Potens Cura een passende plek kan bieden.</p>
      <p>Twijfelt u of een jongere bij Potens Cura past? <Link href="/contact">Neem contact met ons op</Link>. Deel geen medische of andere gevoelige cliëntgegevens via het openbare contactformulier.</p>
      <p className="criteria-noot">De criteria zijn afgestemd op het huidige aanbod van Potens Cura. Bij twijfel bespreken we altijd de individuele situatie.</p>
    </div></section>
  </>;
}
