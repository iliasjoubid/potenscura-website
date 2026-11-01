# Eindcontrole Potens Cura — 2 november 2026

## Uitgevoerde controles

- Meest recente website-ZIP als uitgangspunt genomen, inclusief de criteriapagina.
- Teksten afgestemd op de overeengekomen missie, visie, doel, leeftijd 16–23, eigen studio’s, begeleiding 24/7 met slaapdienst en financiering vanuit de Jeugdwet.
- Aparte FAQ-pagina blijft buiten het menu; enkele belangrijke vragen staan op de homepage. Een oude `/vragen`-link leidt bezoekers door naar de homepage.
- Overlapgevoelige dubbele CSS-regels voor `.duo` verwijderd; één consistente mobiele omschakeling op 1099 px. Gesloten dropdownmenu's worden daadwerkelijk verborgen.
- Dubbele `<main>` in de pagina In- en exclusiecriteria verwijderd.
- Onnodige labels en oude FAQ-voorbeeldantwoorden uit het zichtbare pad verwijderd.
- Privacytekst zorgvuldiger afgestemd op daadwerkelijke verwerking en de voorwaardelijke werking van Resend.
- De twee downloadbare PDF’s opnieuw opgemaakt en visueel gecontroleerd. De aanmeldkaart heeft geen datum; de criteria-PDF maakt onderscheid tussen aanwezigheid 24/7 en intensief toezicht en beschrijft de Jeugdwet-route.
- Verwijzerspagina, kaart, criteria en overige hoofdpagina’s op onderlinge consistentie gecontroleerd.
- Google-indexering op Vercel-previewdeployments uitgeschakeld; production-instelling `concept=false` behouden.
- 45 TypeScript-/TSX-bestanden syntactisch geparseerd zonder fouten.
- Stylesheet door PostCSS geparseerd zonder syntaxisfouten.
- Statische links, lokale importpaden en 315 publieke afbeeldingen gecontroleerd: geen gebroken verwijzingen of corrupte afbeeldingen gevonden.
- Beide PDF’s gerenderd en bekeken; aanmeldkaart één A4, criteria twee A4.
- ZIP-integriteit wordt bij het opleveren opnieuw getest.

## Niet volledig te verifiëren in deze omgeving

- `npm ci` kon niet afronden: een pakket was niet beschikbaar in de lokale npm-cache en de online installatie bleef hangen. Daarom konden `npm run build` en een echte volledige browsertest op desktop en mobiel niet worden voltooid.
- De verzending via Resend vereist de juiste Vercel-omgevingsvariabelen en een echte inbox-test; niet bewezen dat er e-mails worden afgeleverd.
- Voor externe partnerlogo’s moeten de publicatierechten en de feitelijke organisatiesamenwerking worden bevestigd.
- De oorspronkelijke criteria noemden ook Wmo. De website en vernieuwde PDF zijn redactioneel afgestemd op het **huidige Jeugdwet-aanbod** en de concrete 24/7-begeleiding met slaapdienst. Dit is geen juridische of beleidsmatige vaststelling: laat de aangepaste criteria door Potens Cura formeel goedkeuren.
- Controleer de feitelijke locatie, openingsgereedheid, veiligheid, privacy, klachtenregeling en alle verstrekte diensten vóór livegang.

**Advies:** plaats deze versie eerst op de bestaande aparte testbranch en voer daar de build, responsive browserchecks en beide formulierverzendtests uit. Merge niet naar de productiebranch zonder akkoord.
