import Link from 'next/link';
import { concept, partijen } from '@/lib/gegevens';

const paginas = [
  { pad: '/wonen', naam: 'Wonen' },
  { pad: '/begeleiding', naam: 'Begeleiding' },
  { pad: '/traject', naam: 'Het traject' },
  { pad: '/ouders', naam: 'Voor ouders' },
  { pad: '/verwijzers', naam: 'Voor verwijzers' },
  { pad: '/kwaliteit', naam: 'Kwaliteit & veiligheid' },
  { pad: '/werken-bij', naam: 'Werken bij' },
  { pad: '/over-ons', naam: 'Over ons' },
  { pad: '/vragen', naam: 'Vragen' },
  { pad: '/contact', naam: 'Contact' },
  { pad: '/privacy', naam: 'Privacy' },
  { pad: '/klachten', naam: 'Klachten' },
];

export default function Voet() {
  const { skj, klachten, vertrouwen } = partijen;
  return (
    <footer className="voet">
      <div className="raster voet__binnen">
        <img className="voet__logo" src="/beeld/logo-400.png" alt="Potens Cura" width={400} height={135} loading="lazy" />
        <nav aria-label="Alle pagina's">
          <ul className="voet__links">
            {paginas.map((p) => (
              <li key={p.pad}><Link href={p.pad}>{p.naam}</Link></li>
            ))}
          </ul>
        </nav>
        <dl className="voet__partijen" aria-label="Kwaliteit en klachten">
          <div>
            <dt>Registratie</dt>
            <dd><p className="voet__skj">Bij Potens Cura werken begeleiders die <a href={skj.link}>geregistreerd zijn bij SKJ</a>, het Kwaliteitsregister Jeugd.</p></dd>
          </div>
          <div>
            <dt>Klachtenregeling</dt>
            <dd>
              <a className="voet__partij" href={klachten.link}>
                <img src={klachten.logo} alt={klachten.naam} width={klachten.breed} height={klachten.hoog} loading="lazy" className="voet__partij-kpz" />
              </a>
            </dd>
          </div>
          <div>
            <dt>Vertrouwenspersoon jeugd</dt>
            <dd className="voet__partij-rij">
              {vertrouwen.map((v) => (
                <a key={v.naam} className="voet__partij" href={v.link}>
                  <img src={v.logo} alt={v.naam} width={v.breed} height={v.hoog} loading="lazy" className={`voet__partij-${v.naam === 'Jeugdstem' ? 'js' : 'azb'}`} />
                </a>
              ))}
            </dd>
          </div>
        </dl>
        <p className="voet__concept">Potens Cura B.V. · KvK 96742933 · Johan de Wittlaan 75, 6828 XD Arnhem · <a href="mailto:info@potenscura.nl">info@potenscura.nl</a></p>
        {concept && <p className="voet__concept">Conceptwebsite: nog niet publiceren of gebruiken voor het ontvangen van aanmeldingen.</p>}
      </div>
    </footer>
  );
}
