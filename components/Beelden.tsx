import { reeks, RIJNKADE, BEDSTEE, PAND, type Bron, type Foto } from '@/lib/beeld';

const BREED = [1280, 1920, 2560];
const MIDDEN = [800, 1200, 1600];
const TELEFOON = [480, 640, 800, 1200];
const STAAND = [600, 750, 900, 1200, 1500];
const VIERKANT = [600, 750, 900, 1200, 1500];
const UITSNEDE = { 31: [800, 1280, 1920], 16: [480, 640, 800, 1200, 1600], 125: [480, 640, 800, 1200] } as const;
const KOLOM = 'calc(100vw - 40px)';

const laden = (voorrang: boolean) => (voorrang ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const, decoding: 'async' as const });

function Uitsneden({ naam, bron, voorrang, half = false }: { naam: string; bron: Bron; voorrang: boolean; half?: boolean }) {
  const maat = half ? `(min-width: 1100px) 50vw, ${KOLOM}` : 'calc(100vw - 20px)';
  return (
    <picture>
      {!half && <source media="(min-width: 1100px)" type="image/avif" srcSet={reeks(`${naam}-breed`, BREED, 'avif')} sizes={maat} />}
      {!half && <source media="(min-width: 1100px)" type="image/webp" srcSet={reeks(`${naam}-breed`, BREED, 'webp')} sizes={maat} />}
      <source media="(min-width: 600px)" type="image/avif" srcSet={reeks(`${naam}-midden`, MIDDEN, 'avif')} sizes={maat} />
      <source media="(min-width: 600px)" type="image/webp" srcSet={reeks(`${naam}-midden`, MIDDEN, 'webp')} sizes={maat} />
      <source type="image/avif" srcSet={reeks(`${naam}-telefoon`, TELEFOON, 'avif')} sizes={maat} />
      <img src={`/beeld/${naam}-telefoon-800.webp`} srcSet={reeks(`${naam}-telefoon`, TELEFOON, 'webp')} sizes={maat} width={1200} height={960} alt={bron.alt} {...laden(voorrang)} />
    </picture>
  );
}

export const Rijnkade = ({ voorrang = false }: { voorrang?: boolean }) => <Uitsneden naam="rijnkade" bron={RIJNKADE} voorrang={voorrang} />;
export const Bedstee = ({ voorrang = false, half = false }: { voorrang?: boolean; half?: boolean }) => <Uitsneden naam="bedstee" bron={BEDSTEE} voorrang={voorrang} half={half} />;

export function Pand({ sizes, voorrang = false, vierkantOpTelefoon = false }: { sizes: string; voorrang?: boolean; vierkantOpTelefoon?: boolean }) {
  return (
    <picture>
      {vierkantOpTelefoon && <source media="(max-width: 599px)" type="image/avif" srcSet={reeks('pand-vierkant', VIERKANT, 'avif')} sizes={sizes} />}
      {vierkantOpTelefoon && <source media="(max-width: 599px)" type="image/webp" srcSet={reeks('pand-vierkant', VIERKANT, 'webp')} sizes={sizes} />}
      <source type="image/avif" srcSet={reeks('pand-staand', STAAND, 'avif')} sizes={sizes} />
      <img src="/beeld/pand-staand-900.webp" srcSet={reeks('pand-staand', STAAND, 'webp')} sizes={sizes} width={1500} height={2000} alt={PAND.alt} {...laden(voorrang)} />
    </picture>
  );
}

export function Horizonfoto({ foto, sizes, voorrang = false, actief, strook = false }: { foto: Foto; sizes: string; voorrang?: boolean; actief?: boolean; strook?: boolean }) {
  const [groot, klein] = strook ? ([31, 16] as const) : ([16, 125] as const);
  return (
    <picture data-actief={actief} aria-hidden={actief === false ? true : undefined}>
      <source media="(min-width: 600px)" type="image/avif" srcSet={reeks(`${foto.naam}-${groot}`, [...UITSNEDE[groot]], 'avif')} sizes={sizes} />
      <source media="(min-width: 600px)" type="image/webp" srcSet={reeks(`${foto.naam}-${groot}`, [...UITSNEDE[groot]], 'webp')} sizes={sizes} />
      <source type="image/avif" srcSet={reeks(`${foto.naam}-${klein}`, [...UITSNEDE[klein]], 'avif')} sizes={sizes} />
      <img src={`/beeld/${foto.naam}-${klein}-800.webp`} srcSet={reeks(`${foto.naam}-${klein}`, [...UITSNEDE[klein]], 'webp')} sizes={sizes} width={1600} height={1000} alt={foto.alt} {...laden(voorrang)} />
    </picture>
  );
}

export function StrookFoto({ foto, sizes }: { foto: Foto; sizes: string }) {
  return (
    <figure className="strookfoto" style={{ '--f': foto.f } as React.CSSProperties}>
      <Horizonfoto foto={foto} sizes={sizes} strook />
      <span className="horizon horizon--volg" aria-hidden="true" />
    </figure>
  );
}

export function KopFoto({ foto }: { foto: Foto }) {
  return (
    <figure className="held__beeld held__beeld--half held__beeld--reeks" style={{ '--f': foto.f } as React.CSSProperties}>
      <Horizonfoto foto={foto} sizes={`(min-width: 1100px) 50vw, ${KOLOM}`} voorrang />
      <span className="horizon" aria-hidden="true" />
    </figure>
  );
}

export function Wisselfoto({ fotos, actief, sizes, p = false, voorrang = false, alle = true, className = '' }: { fotos: Foto[]; actief: number; sizes: string; p?: boolean; voorrang?: boolean; alle?: boolean; className?: string }) {
  return (
    <figure className={`wisselfoto${p ? ' wisselfoto--p' : ''} ${className}`.trim()} style={{ '--f': fotos[0].f } as React.CSSProperties}>
      {fotos.map((foto, i) => (alle || i === actief) && <Horizonfoto key={foto.naam} foto={foto} sizes={sizes} actief={i === actief} voorrang={voorrang && i === 0} />)}
      <span className="horizon horizon--volg" aria-hidden="true" />
    </figure>
  );
}

export function PandVierkant({ sizes, voorrang = false }: { sizes: string; voorrang?: boolean }) {
  return (
    <picture>
      <source type="image/avif" srcSet={reeks('pand-vierkant', VIERKANT, 'avif')} sizes={sizes} />
      <img src="/beeld/pand-vierkant-900.webp" srcSet={reeks('pand-vierkant', VIERKANT, 'webp')} sizes={sizes} width={1500} height={1500} alt={PAND.alt} {...laden(voorrang)} />
    </picture>
  );
}
