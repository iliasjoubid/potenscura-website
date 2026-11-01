# Website Potens Cura

De broncode van de website van Potens Cura, gemaakt met Next.js. Vercel bouwt de site bij elke wijziging op GitHub opnieuw en zet hem online. In de code staan geen wachtwoorden of sleutels.

De site staat nu als concept: hij is niet te vinden in Google, de voet zegt dat het een concept is, en de formulieren versturen niets. Eén regel zet dat om naar live (zie Live zetten).

## Online zetten

- Zet deze map als privérepo op GitHub.
- Maak in Vercel een nieuw project van die repo (vercel.com/new). Vercel herkent Next.js; de standaardinstellingen kloppen.
- Na de eerste bouw staat de site op een adres dat eindigt op .vercel.app. Bekijk hem daar.

## Live zetten en in Google komen

Eerst nalezen, want live staat alles in Google:

- Alle teksten. Blokken met het label Voorbeeld (de weg van aankomst tot eigen benen, wat je doet per moment op Werken bij, een dag op Wonen, de route op Voor verwijzers) en de missie en visie (label Voorstel) moet Potens Cura nog vaststellen. Klopt een tekst, haal dan het label weg (zie Zelf aanpassen).
- De foto van het pand: mag die online? Zo niet, vervang hem.
- De privacypagina: vul aan hoe lang berichten uit de formulieren bewaard blijven en wie verantwoordelijk is.
- De formulieren: stel Resend in (zie Formulieren). Zonder Resend zegt een formulier na versturen dat het niet lukt, met het e-mailadres en het telefoonnummer erbij.

Dan live:

- Zet in `lib/gegevens.ts` de regel `export const concept = true;` op `false` en sla de wijziging op in GitHub. Vercel bouwt de site opnieuw. De site mag dan in Google, robots.txt laat zoekmachines toe, en de conceptregels in de voet en bij de formulieren verdwijnen.
- Koppel het domein (zie Koppelen aan potenscura.nl).
- Google Search Console (search.google.com/search-console): voeg het domein potenscura.nl toe, bevestig het met het TXT-record dat Google geeft, en dien `https://potenscura.nl/sitemap.xml` in.
- Bing Webmaster Tools (bing.com/webmasters) kan de site uit Search Console overnemen. Bing voedt ook zoekmachines met AI-antwoorden.

## Koppelen aan potenscura.nl

- In Vercel: het project, Settings, Domains. Voeg potenscura.nl en www.potenscura.nl toe, met potenscura.nl als hoofdadres; www stuurt dan door.
- Vercel toont welke DNS-records nodig zijn, meestal een A-record voor potenscura.nl en een CNAME voor www. Zet die bij de partij waar het domein geregistreerd is. Nu toont potenscura.nl een pagina van Squarespace; de DNS-instellingen staan dan waarschijnlijk daar.
- Verander alleen die records. Het e-mailadres info@potenscura.nl draait op hetzelfde domein: laat de MX-records en de TXT-records voor de mail staan, en verhuis de nameservers niet zonder de mailrecords mee te nemen.
- Na een paar minuten tot een paar uur zet Vercel zelf een beveiligd certificaat (https) op het domein.

## Formulieren

Het contactformulier en het sollicitatieformulier versturen live via Resend naar de mailbox van Potens Cura.

- Maak een account bij resend.com, voeg het domein potenscura.nl toe en zet de DNS-records die Resend geeft. Die komen naast de mailrecords en vervangen niets.
- Zet in Vercel (Settings, Environment Variables, voor Production) drie waarden:
  - `RESEND_API_KEY`: de sleutel van Resend
  - `BERICHT_AAN`: waar berichten heen gaan, bijvoorbeeld info@potenscura.nl
  - `BERICHT_VAN`: de afzender, bijvoorbeeld `Website Potens Cura <website@potenscura.nl>`
- Bouw daarna opnieuw (Deployments, Redeploy) en stuur beide formulieren één keer als test.
- Aanmelden van een jongere gaat bewust niet via een formulier: gegevens over gezondheid en situatie horen niet in een webformulier. De site zegt: bellen of mailen, stukken via beveiligde mail.

## Zelf aanpassen

Een wijziging op GitHub (ook in de browser, met het potloodje bij een bestand) zet Vercel vanzelf online.

- Feiten, vragen en antwoorden, paginatitels en omschrijvingen voor Google: `lib/gegevens.ts`. Elke pagina en de gegevens voor zoekmachines lezen daaruit, zodat alles overal gelijk blijft.
- Telefoonnummer en e-mailadres: `lib/site.ts`.
- Teksten per pagina: `app/page.tsx` (de home) en `app/<pagina>/page.tsx`, bijvoorbeeld `app/wonen/page.tsx`.
- Het label Voorbeeld weghalen: in `components/Weg.tsx`, `components/Dienst.tsx`, `components/Etmaal.tsx` en `app/verwijzers/page.tsx`. Het label Voorstel bij missie en visie verdwijnt als in `lib/gegevens.ts` bij `koers` de status `bevestigd` wordt.
- Foto's: welke foto waar staat, met maker, bron en licentie, staat in `lib/beeld.ts`. De bestanden staan in `public/beeld`, elke foto in meerdere breedtes als .avif en .webp. Een nieuwe foto zet je in dezelfde namen en breedtes.
- Apart bijwerken als feiten veranderen: `public/llms.txt` (de feiten voor AI-zoekmachines, gewone tekst) en `public/aanmeldkaart-potens-cura.pdf` (maak die opnieuw door op Voor verwijzers de kaart te printen als pdf).
- Lokaal bekijken: installeer Node.js 20 of nieuwer, dan `npm install` en `npm run dev`, en open http://localhost:3000.

## Licenties

- De letter Commissioner: SIL Open Font License, zie `public/fonts/OFL-commissioner.txt`.
- De foto's: maker, bron en licentie staan bij elke foto op de site en in `lib/beeld.ts`. Een foto onder CC BY-SA moet die vermelding houden.
- De logo's van Klachtenportaal Zorg, Jeugdstem en Adviespunt Zorgbelang zijn van die organisaties.
