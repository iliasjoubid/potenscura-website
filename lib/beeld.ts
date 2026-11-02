export const reeks = (naam: string, breedtes: number[], soort: 'avif' | 'webp') =>
  breedtes.map((b) => `/beeld/${naam}-${b}.${soort} ${b}w`).join(', ');

export type Bron = { alt: string; tekst: string; maker: string; bron: string; licentie: string; licentieLink: string };

export const RIJNKADE: Bron = {
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
  maker: 'AI-illustratie voor Potens Cura',
  bron: '',
  licentie: 'AI-gegenereerd',
  licentieLink: '',
};

export const BEDSTEE: Bron = {
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
  maker: 'AI-illustratie voor Potens Cura',
  bron: '',
  licentie: 'AI-gegenereerd',
  licentieLink: '',
};

export type Foto = Bron & { naam: string; f: number };
const AI_BEELD = { licentie: 'AI-gegenereerd', licentieLink: '' };

export const OCHTEND: Foto = {
  naam: 'ochtend', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const MIDDAG: Foto = {
  naam: 'middag', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const AVOND: Foto = {
  naam: 'avond', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const NACHT: Foto = {
  naam: 'nacht', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const DAGFOTOS = [OCHTEND, MIDDAG, AVOND, NACHT];

export const DAG: Foto = {
  naam: 'dag', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const AVONDSTAD: Foto = {
  naam: 'avondstad', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const SLAAP: Foto = {
  naam: 'slaap', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const WEEKEND: Foto = {
  naam: 'weekend', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const DIENSTFOTOS = [DAG, AVONDSTAD, SLAAP, WEEKEND];

export const ROUTE: Foto = {
  naam: 'route', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const PRIVACY: Foto = {
  naam: 'privacy', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const KLACHTEN: Foto = {
  naam: 'klachten', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};
export const CONTACT: Foto = {
  naam: 'contact', f: 0.65, maker: 'AI-illustratie voor Potens Cura', bron: '', ...AI_BEELD,
  alt: 'Sfeerbeeld ter illustratie van wonen en begeleiding; AI-gegenereerd, geen echte bewoner of locatie',
  tekst: 'Illustratief sfeerbeeld, geen foto van de woonlocatie.',
};

export const PAND = {
  alt: 'Foto van de woonlocatie van Potens Cura',
};
