export const reeks = (naam: string, breedtes: number[], soort: 'avif' | 'webp') =>
  breedtes.map((b) => `/beeld/${naam}-${b}.${soort} ${b}w`).join(', ');

export type Bron = { alt: string; tekst: string; maker: string; bron: string; licentie: string; licentieLink: string };

export const RIJNKADE: Bron = {
  alt: 'De Rijnkade in Arnhem in avondlicht, met de Eusebiustoren links en de John Frostbrug in de verte',
  tekst: 'De Rijnkade in Arnhem, niet de woonlocatie.',
  maker: 'Michielverbeek',
  bron: 'https://commons.wikimedia.org/wiki/File:Arnhem,_stadszicht_vanaf_de_Mandelabrug_in_de_avond_IMG_5002_2020-04-23_20.05.jpg',
  licentie: 'CC BY-SA 4.0',
  licentieLink: 'https://creativecommons.org/licenses/by-sa/4.0/deed.nl',
};

export const BEDSTEE: Bron = {
  alt: 'Een zandpad door de weilanden van Park Mariëndaal in Arnhem naar de bomen aan de horizon, met rechts de Groene Bedstee, een lange gang van geleide bomen',
  tekst: 'Park Mariëndaal in Arnhem, met de Groene Bedstee.',
  maker: 'MartinD',
  bron: 'https://commons.wikimedia.org/wiki/File:Arnhem_Groene_Bedstee_panorama.jpg',
  licentie: 'CC BY-SA 3.0',
  licentieLink: 'https://creativecommons.org/licenses/by-sa/3.0/deed.nl',
};

export type Foto = Bron & { naam: string; f: number };
const UNSPLASH = { licentie: 'Unsplash-licentie', licentieLink: 'https://unsplash.com/license' };
const CC_BY_SA_2 = { licentie: 'CC BY-SA 2.0', licentieLink: 'https://creativecommons.org/licenses/by-sa/2.0/deed.nl' };
const CC_BY_SA_4 = { licentie: 'CC BY-SA 4.0', licentieLink: 'https://creativecommons.org/licenses/by-sa/4.0/deed.nl' };

export const OCHTEND: Foto = {
  naam: 'ochtend', f: 0.65, maker: 'Sies Kranen', bron: 'https://unsplash.com/photos/Zv80SKB9Wb4', ...UNSPLASH,
  alt: 'Een weiland in de ochtendmist, met koeien bij het hek en de zon die door de mist breekt',
  tekst: 'Ochtendmist in een weiland.',
};
export const MIDDAG: Foto = {
  naam: 'middag', f: 0.65, maker: 'Robin van Holst', bron: 'https://unsplash.com/photos/BcEeY6Uh30A', ...UNSPLASH,
  alt: 'Een polder met een sloot onder een blauwe lucht, met in de verte de torens van Rotterdam',
  tekst: 'Een polder bij Rotterdam.',
};
export const AVOND: Foto = {
  naam: 'avond', f: 0.65, maker: 'Fredseigenkijksewereld', bron: 'https://commons.wikimedia.org/wiki/File:Moon_landscape_-_Overijssel.jpg', ...CC_BY_SA_2,
  alt: 'Heide in de schemering met een grote eik, en de maan vlak boven de bomen',
  tekst: 'Heide in Overijssel in de schemering.',
};
export const NACHT: Foto = {
  naam: 'nacht', f: 0.65, maker: 'IIVQ / Tijmen Stam', bron: 'https://commons.wikimedia.org/wiki/File:Lichtvervuiling_kassengebied_Luttelgeest.JPG', ...CC_BY_SA_4,
  alt: 'Een donker veld onder een nachtblauwe lucht, met aan de horizon het oranje licht van kassen',
  tekst: 'Het licht van de kassen bij Luttelgeest, gezien vanuit Bant.',
};
export const DAGFOTOS = [OCHTEND, MIDDAG, AVOND, NACHT];

export const DAG: Foto = {
  naam: 'dag', f: 0.65, maker: 'Ries Bosch', bron: 'https://unsplash.com/photos/D9nrnL4BM3w', ...UNSPLASH,
  alt: 'Een gemaaid weiland onder een strakblauwe lucht, met bomen aan de horizon',
  tekst: 'Een weiland bij Wijhe.',
};
export const AVONDSTAD: Foto = {
  naam: 'avondstad', f: 0.65, maker: 'Haberdoedas', bron: 'https://unsplash.com/photos/SL8vnZl3OF0', ...UNSPLASH,
  alt: 'Woontorens met verlichte ramen aan het water in het blauwe uur, gespiegeld in het meer',
  tekst: 'Almere Poort in het blauwe uur.',
};
export const SLAAP: Foto = {
  naam: 'slaap', f: 0.65, maker: 'Hubert Lenkiewicz', bron: 'https://unsplash.com/photos/oE6hK94KVG4', ...UNSPLASH,
  alt: 'Een sterrenhemel boven vlak land, met het silhouet van bomen en een hek',
  tekst: 'Een sterrenhemel boven het land.',
};
export const WEEKEND: Foto = {
  naam: 'weekend', f: 0.65, maker: 'Chloe Christine', bron: 'https://unsplash.com/photos/6TkoXLfnp8o', ...UNSPLASH,
  alt: 'Het strand van Scheveningen met de pier en het reuzenrad, en wandelaars in de verte',
  tekst: 'Het strand van Scheveningen.',
};
export const DIENSTFOTOS = [DAG, AVONDSTAD, SLAAP, WEEKEND];

export const ROUTE: Foto = {
  naam: 'route', f: 0.65, maker: 'Julia Taubitz', bron: 'https://unsplash.com/photos/9O5E2WWm9u0', ...UNSPLASH,
  alt: 'Een fietspad dat rechtdoor door de weilanden loopt, naast een weg en een sloot, onder een blauwe lucht met wolken',
  tekst: 'Een fietspad op Texel.',
};
export const VRAGEN: Foto = {
  naam: 'vragen', f: 0.65, maker: 'Antje Winkler', bron: 'https://unsplash.com/photos/1yzCfmgMOd4', ...UNSPLASH,
  alt: 'Een houten bank in het helmgras aan zee, met uitzicht over het strand bij eb en donkere wolken boven het water',
  tekst: 'Een bank aan zee.',
};
export const PRIVACY: Foto = {
  naam: 'privacy', f: 0.65, maker: 'Dominicus Johannes Bergsma', bron: 'https://commons.wikimedia.org/wiki/File:Zicht_op_het_IJsselmeer._Locatie_Mirnser_Klif_02.jpg', ...CC_BY_SA_4,
  alt: 'Een kale boom aan het IJsselmeer in nevelig licht, met links in de verte twee mensen op de stenen aan het water, van achteren gezien',
  tekst: 'Het IJsselmeer bij het Mirnser Klif.',
};
export const KLACHTEN: Foto = {
  naam: 'klachten', f: 0.65, maker: 'Daniel Houwing', bron: 'https://unsplash.com/photos/uWonY7Ktoj8', ...UNSPLASH,
  alt: 'Vuurtoreneiland in het water: een huis met een rood dak tussen de bomen, en rechts de vuurtoren op een stalen onderstel',
  tekst: 'Vuurtoreneiland bij Durgerdam.',
};
export const CONTACT: Foto = {
  naam: 'contact', f: 0.65, maker: 'Jan van Galen (RCE)', bron: 'https://commons.wikimedia.org/wiki/File:Overzicht_van_de_John_Frostbrug_over_de_Nederrijn_-_Arnhem_-_20420290_-_RCE.jpg', ...CC_BY_SA_4,
  alt: 'De John Frostbrug, een stalen boogbrug over de Nederrijn in Arnhem, gezien vanaf de overkant van de rivier',
  tekst: 'De John Frostbrug in Arnhem.',
};

export const PAND = {
  alt: 'Het pand van Potens Cura in Arnhem: drie woonlagen in gele baksteen met witte erkers en een overdekte voordeur onder een boog.',
};
