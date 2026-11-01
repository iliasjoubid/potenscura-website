import Aanmeldkaart from '@/components/Aanmeldkaart';
import JsonLd from '@/components/JsonLd';
import { PaginaKop } from '@/components/Blokken';
import { Voorbeeld } from '@/components/Iconen';
import { StrookFoto } from '@/components/Beelden';
import { ROUTE } from '@/lib/beeld';
import { aanmelden, haltes, openbaar, paginas } from '@/lib/gegevens';
import { datum } from '@/lib/site';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('verwijzers');

export default function Verwijzers() {
  const p = paginas.verwijzers;
  const { tot23 } = openbaar;
  return (
    <>
      <PaginaKop
        h1={p.h1}
        zin="Alle feiten op één kaart, om te printen of als pdf te bewaren."
        naast={<Aanmeldkaart groot />}
        className="print-kaart"
      >
        <div className="kop-route niet-printen" id="route">
          <h2 className="kop-klein">Van eerste telefoontje tot plaatsing</h2>
          <dl className="kop-route__stappen">
            {aanmelden.route.map((r, i) => (
              <div key={aanmelden.stappen[i]}><dt>{aanmelden.stappen[i]}</dt><dd>{r}</dd></div>
            ))}
          </dl>
          {aanmelden.routeStatus === 'voorbeeld' && <Voorbeeld />}
        </div>
        <div className="kop-noot niet-printen">
          <h2 className="kop-klein">Waarom geen formulier</h2>
          <p>{aanmelden.geenFormulier}</p>
        </div>
      </PaginaKop>

      <section className="band band--vlak" id="weg" aria-labelledby="weg-kop">
        <div className="raster">
          <div className="vakken">
            <div className="vakken__vak vakken__vak--navy vakken__vak--fotostrook">
              <StrookFoto foto={ROUTE} sizes="(min-width: 1100px) 55vw, calc(100vw - 40px)" />
              <div className="vakken__tekst">
                <h2 className="vakken__groot">Tot 23 jaar</h2>
                <p>{tot23.tekst}</p>
                <p className="vakken__bron">Bron: <a href={tot23.link}>{tot23.bron}</a>, nagelezen op {datum(tot23.nagelezen)}.</p>
              </div>
            </div>
            <div className="vakken__vak vakken__vak--tabel">
              <div className="tabel-kop">
                <h2 id="weg-kop">Van aankomst tot eigen benen</h2>
                <Voorbeeld />
              </div>
              <div className="tabel-schuif">
                <table className="tabel">
                  <thead>
                    <tr><th scope="col">Halte</th><th scope="col">Wonen</th><th scope="col">Begeleiding</th><th scope="col">De jongere werkt aan</th></tr>
                  </thead>
                  <tbody>
                    {haltes.map((h) => (
                      <tr key={h.sleutel}>
                        <th scope="row">{h.naam}</th>
                        <td data-kop="Wonen">{h.wonen}</td>
                        <td data-kop="Begeleiding">{h.begeleiding}</td>
                        <td data-kop="De jongere werkt aan">{h.jij}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={kruimelsLd('Voor verwijzers', p.pad)} />
    </>
  );
}
