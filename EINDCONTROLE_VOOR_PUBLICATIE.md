# Eindcontrole vóór publicatie — Potens Cura

Dit pakket is een **conceptversie**: `concept = true` in `lib/gegevens.ts`. Hierdoor zijn zoekmachine-indexering en contactformulier uitgeschakeld. Publiceer niet zonder onderstaande controles.

- [ ] Controleer alle teksten met directie en verantwoordelijke zorgprofessional, met name kwaliteit, SKJ, klachten, doelgroep, uitsluitingscriteria en veiligheid.
- [ ] Controleer het actuele aantal beschikbare studio’s, startdatum en adrespublicatie.
- [ ] Beoordeel rechten en licenties van **alle bestaande foto’s** in `public/beeld` en vermeld bron waar de licentie dit vereist. Nieuwe eigen foto's kunnen later worden toegevoegd.
- [ ] Controleer alle bestaande verwijzingen, partners, logo’s en externe links op toestemming en actualiteit.
- [ ] Controleer of privacyverklaring, klachtenregeling, brandveiligheid en plaatsingsproces overeenkomen met de praktijk.
- [ ] Configureer en test `RESEND_API_KEY`, `BERICHT_AAN`, `BERICHT_VAN` voor het contactformulier; test verzending naar info@potenscura.nl en foutmeldingen.
- [ ] Laat beveiliging en spambeveiliging van het formulier toetsen vóór livegang.
- [ ] Controleer responsiviteit, toetsenbordnavigatie, leesbaarheid en WCAG met echte browsers.
- [ ] Controleer SEO, titles, sitemap en Search Console; pas na akkoord `concept = false` aan.
- [ ] Test `npm install` en `npm run build`, en inspecteer de preview op een aparte branch.
- [ ] Vercel-abonnement toetsen aan zakelijk gebruik; geen productie-update zonder expliciet akkoord.

**Geen garantie op foutloze livegang:** externe diensten, licenties, wet- en regelgeving en feitelijke organisatie-informatie moeten onafhankelijk worden geverifieerd.
