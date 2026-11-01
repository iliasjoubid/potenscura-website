import { organisatie, plaats, doel, doelgroep, begeleiding, vragen, methodieken, paginas, zonderWj } from './gegevens';
import { SITE, email, telefoon, volledig } from './site';

const ORG_ID = `${SITE}/#organisatie`;

export function organisatieLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: organisatie.naam,
    slogan: organisatie.motto,
    url: SITE,
    logo: volledig('/beeld/logo-800.png'),
    image: volledig('/beeld/logo-800.png'),
    address: { '@type': 'PostalAddress', addressLocality: plaats.waarde, addressCountry: 'NL' },
    description: zonderWj(`Kleinschalig wonen in een eigen studio met ${begeleiding.naam}, voor ${doelgroep.tekst} in ${plaats.waarde} ${doelgroep.situatie}. Het doel: ${doel.kort}.`),
    telephone: telefoon.schema,
    email: email.tekst,
    areaServed: { '@type': 'City', name: plaats.waarde },
    knowsAbout: methodieken.namen,
    location: {
      '@type': 'Place',
      name: `Woonlocatie van ${organisatie.naam} in ${plaats.waarde}`,
      address: { '@type': 'PostalAddress', addressLocality: plaats.waarde, addressCountry: 'NL' },
    },
  };
}

export function websiteLd() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', name: organisatie.naam, url: SITE, inLanguage: 'nl', publisher: { '@id': ORG_ID } };
}

export function kruimelsLd(naam: string, pad: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: volledig('/') },
      { '@type': 'ListItem', position: 2, name: naam, item: volledig(pad) },
    ],
  };
}

export const bevestigdeVragen = vragen.filter((v) => v.status === 'bevestigd' && v.lezer !== 'collega');

export function vragenLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: volledig(paginas.vragen.pad),
    mainEntity: bevestigdeVragen.map((v) => ({
      '@type': 'Question',
      name: v.vraag,
      acceptedAnswer: { '@type': 'Answer', text: zonderWj(`${v.feit} ${v.uitleg}`) },
    })),
  };
}
