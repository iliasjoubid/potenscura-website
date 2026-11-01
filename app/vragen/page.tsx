import JsonLd from '@/components/JsonLd';
import { PaginaKop, Slot } from '@/components/Blokken';
import { KopFoto } from '@/components/Beelden';
import VraagGroepen from '@/components/VraagGroepen';
import { VRAGEN } from '@/lib/beeld';
import { paginas, type Lezer } from '@/lib/gegevens';
import { meta } from '@/lib/meta';
import { bevestigdeVragen, kruimelsLd, vragenLd } from '@/lib/structured';

export const metadata = meta('vragen');

const groepen: { lezer: Lezer; kop: string; tab: string }[] = [
  { lezer: 'jongere', kop: 'Voor jongeren', tab: 'Jongeren' },
  { lezer: 'ouder', kop: 'Voor ouders', tab: 'Ouders' },
  { lezer: 'verwijzer', kop: 'Voor verwijzers', tab: 'Verwijzers' },
];

const breedtes = (n: number) =>
  n === 5 ? [4, 4, 4, 6, 6] : n === 7 ? [3, 3, 3, 3, 4, 4, 4] : n % 4 === 0 ? Array(n).fill(3) : n === 2 ? [6, 6] : n === 1 ? [12] : Array(n).fill(4);

export default function Vragen() {
  const p = paginas.vragen;
  const metVragen = groepen
    .map((g) => ({ ...g, lijst: bevestigdeVragen.filter((v) => v.lezer === g.lezer) }))
    .filter((g) => g.lijst.length)
    .map((g) => ({ ...g, lijst: g.lijst.map(({ sleutel, vraag, feit, uitleg }) => ({ sleutel, vraag, feit, uitleg })), breedtes: breedtes(g.lijst.length) }));
  return (
    <>
      <PaginaKop h1={p.h1} zin="Voor jongeren, ouders en verwijzers: eerst het korte antwoord, daaronder de uitleg." naast={<KopFoto foto={VRAGEN} />} />
      <section className="band band--vlak vragenpagina" aria-label="Alle vragen">
        <VraagGroepen groepen={metVragen} />
      </section>
      <Slot />
      <JsonLd data={[vragenLd(), kruimelsLd('Vragen', p.pad)]} />
    </>
  );
}
