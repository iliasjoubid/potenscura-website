import { aanmelden, bijgewerkt, dagbesteding, doelgroep, plaats, financiering, begeleiding } from '@/lib/gegevens';
import { datum, email, hoofdletter, telefoon } from '@/lib/site';
import { Voorbeeld } from './Iconen';
import PrintKnop from './PrintKnop';

export const kaartRijen: [string, React.ReactNode][] = [
  ['Voor wie', `${hoofdletter(doelgroep.tekst)} ${doelgroep.situatie}, die met passende ondersteuning willen groeien in zelfstandigheid en eigen regie.`],
  ['Voorwaarde', `${dagbesteding.kort}.`],
  ['Plaatsing', <><a href="/in-en-exclusiecriteria">Bekijk de inclusie- en exclusiecriteria</a>. Iedere aanmelding wordt individueel beoordeeld.</>],
  ['Wonen', 'Vier studio\'s met eigen keuken, (semi)zelfstandig en niet in een groep. Badkamer en toiletten gedeeld.'],
  ['Begeleiding', `${hoofdletter(begeleiding.waarde)}.`],
  ['Werkwijze', 'Vertrouwensband, begeleiding op maat en een perspectiefplan met jongere en netwerk, op vaste momenten geëvalueerd.'],
  ['Methodieken', 'Presentiebenadering, systeemgericht en cultuursensitief.'],
  ['Financiering', financiering.kort],
  ['Regio', plaats.waarde!],
  ['Plek', aanmelden.beschikbaarheid],
  ['Aanmelden', 'Bellen of mailen, veilige gegevensuitwisseling afstemmen en een intakegesprek.'],
];

export default function Aanmeldkaart({ groot = false }: { groot?: boolean }) {
  const klein: [string, React.ReactNode][] = [
    ['Financiering', financiering.kort],
    ['Voorwaarde', dagbesteding.kort],
    ['Plek', aanmelden.beschikbaarheid.replace(/\.$/, '')],
    ['Aanmelden', 'Bellen of mailen, dan een intakegesprek'],
  ];
  const contact: [string, React.ReactNode] = ['Contact', (
    <>
      {telefoon.tekst}<br />{email.tekst}
      {(telefoon.voorbeeld || email.voorbeeld) && <><br /><Voorbeeld className="kaart__voorbeeld" /></>}
    </>
  )];
  const rijen = groot ? [...kaartRijen, contact] : klein;
  return (
    <article className={`kaart${groot ? ' kaart--groot' : ''}`} aria-labelledby={groot ? 'kaart-naam' : undefined} aria-label={groot ? undefined : 'Aanmeldkaart in het klein'}>
      {groot && <img className="print-alleen kaart__logo" src="/beeld/logo-800.png" alt="Potens Cura" width={800} height={270} />}
      <header className="kaart__kop">
        {groot ? <h2 className="kaart__naam" id="kaart-naam">Aanmeldkaart Potens Cura</h2> : <span className="kaart__naam">Aanmeldkaart</span>}
        {groot && <span className="kaart__datum">Bijgewerkt op {datum(bijgewerkt)}</span>}
      </header>
      <dl className="kaart__feiten">
        {rijen.map(([dt, dd]) => (
          <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
        ))}
      </dl>
      {groot && (
        <div className="kaart__knoppen niet-printen">
          <PrintKnop />
          <a className="knop knop--rand-licht" href="/aanmeldkaart-potens-cura.pdf" download>Download als pdf</a>
        </div>
      )}
    </article>
  );
}
