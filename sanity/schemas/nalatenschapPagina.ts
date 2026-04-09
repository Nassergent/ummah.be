import { defineType, defineField } from 'sanity';

export const nalatenschapPagina = defineType({
  name: 'nalatenschapPagina',
  title: 'Nalatenschap Pagina',
  type: 'document',
  groups: [
    { name: 'hero', title: '🏛️ Hero', default: true },
    { name: 'traditie', title: '📖 Traditie' },
    { name: 'scenarios', title: '🎯 Scenarios' },
    { name: 'proces', title: '📋 Proces' },
    { name: 'criteria', title: '✅ Criteria' },
    { name: 'faq', title: '❓ FAQ' },
    { name: 'contact', title: '📞 Contact' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroTitle', title: 'Hero Titel', type: 'string', group: 'hero',
      initialValue: 'Een huis. Een stuk grond. Een stuk van je nalatenschap.',
    }),
    defineField({
      name: 'heroSubtitle', title: 'Hero Ondertitel', type: 'text', rows: 3, group: 'hero',
      initialValue: 'Sinds de tijd van Umar ibn al-Khattab (raḍiya Allāhu ʿanhu) hebben moslims hun meest waardevolle bezittingen omgezet in sadaqah jariyah. Als jouw hart Allah op die manier wil dienen, zijn wij er om te luisteren.',
    }),

    // Traditie
    defineField({
      name: 'traditieTitle', title: 'Traditie Titel', type: 'string', group: 'traditie',
      initialValue: 'De oorsprong van de waqf',
    }),
    defineField({
      name: 'hadithArabisch', title: 'Hadith (Arabisch)', type: 'text', rows: 3, group: 'traditie',
      initialValue: 'إِنْ شِئْتَ حَبَّسْتَ أَصْلَهَا وَتَصَدَّقْتَ بِهَا',
    }),
    defineField({
      name: 'hadithVertaling', title: 'Hadith (Nederlandse vertaling)', type: 'text', rows: 4, group: 'traditie',
      initialValue: '"Als je wilt, houd het kapitaal vast en geef de opbrengsten in liefdadigheid." — Dit zei de Profeet ﷺ tegen Umar ibn al-Khattab (raḍiya Allāhu ʿanhu) toen hij hem vroeg wat hij moest doen met een stuk land in Khaybar. Dit moment markeerde het ontstaan van de waqf-traditie. (Sahih al-Bukhari 2737)',
    }),
    defineField({
      name: 'traditieText', title: 'Traditie Tekst', type: 'text', rows: 6, group: 'traditie',
      initialValue: 'Umar schonk zijn land. Het bleef zijn eigendom niet — het werd Gods eigendom, beheerd voor de Ummah. De opbrengsten voedden de armen, de reizigers, en de leerlingen van kennis. Dit eerste waqf werd een model voor alles wat volgde: Al-Azhar Universiteit, de Süleymaniye moskee, de waterput van Uthman ibn Affan. Vandaag mag jij dezelfde traditie voortzetten.',
    }),

    // Scenarios
    defineField({
      name: 'scenariosTitle', title: 'Scenarios Titel', type: 'string', group: 'scenarios',
      initialValue: 'Vier manieren om je vastgoed aan de waqf te geven',
    }),
    defineField({
      name: 'scenariosIntro', title: 'Scenarios Intro', type: 'text', rows: 3, group: 'scenarios',
      initialValue: 'Elke situatie is uniek. Hier zijn de vier meest voorkomende vormen — met hun fiqh-grondslag en juridische implicaties in België.',
    }),
    defineField({
      name: 'scenarios',
      title: 'Scenarios',
      type: 'array',
      group: 'scenarios',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'titel', title: 'Titel', type: 'string' }),
          defineField({ name: 'fiqhNaam', title: 'Fiqh benaming', type: 'string' }),
          defineField({ name: 'kort', title: 'Korte beschrijving', type: 'text', rows: 2 }),
          defineField({ name: 'uitleg', title: 'Volledige uitleg', type: 'array', of: [{ type: 'block' }] }),
          defineField({ name: 'voorbeeld', title: 'Voorbeeld', type: 'text', rows: 3 }),
          defineField({ name: 'belgischRecht', title: 'Belgisch recht', type: 'text', rows: 3 }),
          defineField({ name: 'fiqhNoot', title: 'Fiqh noot', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titel', subtitle: 'fiqhNaam' } },
      }],
      initialValue: [
        {
          _type: 'object',
          titel: 'Schenking tijdens leven',
          fiqhNaam: 'Hibah wāqifah / Waqf muʾabbad',
          kort: 'U schenkt het vastgoed nu direct aan de waqf. Definitief en onschendbaar.',
          voorbeeld: 'U bent 65, u heeft een appartement dat u niet meer gebruikt. U schenkt het volledig aan Ummah.be Waqf. Vanaf dat moment is het waqf-eigendom.',
          belgischRecht: 'Notariële akte verplicht. In Vlaanderen: 0% schenkingsrechten aan erkende filantropische VZW (sinds 1 juli 2021). Let op het reservatair erfdeel van kinderen.',
          fiqhNoot: 'Alle vier madhabs (Hanafi, Maliki, Shafi\'i, Hanbali) aanvaarden deze vorm als volledig geldig.',
        },
        {
          _type: 'object',
          titel: 'Via testament (wasiyyah)',
          fiqhNaam: 'Waṣiyyah',
          kort: 'U legt in uw testament vast dat (een deel van) uw nalatenschap naar de waqf gaat.',
          voorbeeld: 'U heeft kinderen. Via uw notaris bepaalt u dat maximaal 1/3 van uw nalatenschap naar Ummah.be Waqf gaat. Uw kinderen behouden hun reservatair deel.',
          belgischRecht: 'Notarieel testament verplicht voor vastgoed. Reservatair erfrecht (kinderen, echtgenoot) moet gerespecteerd. Verlaagde successierechten voor erkende VZW.',
          fiqhNoot: 'Sahih al-Bukhari 2744: "Een derde, en een derde is veel." Waṣiyyah boven 1/3 vereist uitdrukkelijke toestemming van alle erfgenamen na uw overlijden.',
        },
        {
          _type: 'object',
          titel: 'Tijdelijk gebruik (bruikleen)',
          fiqhNaam: 'Waqf muʾaqqat / Waqf al-manfaʿah',
          kort: 'U geeft het vruchtgebruik van uw vastgoed voor een bepaalde periode. Daarna keert het terug naar u of uw erfgenamen.',
          voorbeeld: 'U bezit een huis dat 20 jaar verhuurd kan worden. U geeft het vruchtgebruik voor 20 jaar aan de waqf — de huurinkomsten gaan naar de programma\'s. Na 20 jaar krijgen u of uw erfgenamen het volle eigendom terug.',
          belgischRecht: 'Vruchtgebruik-schenking via notariële akte. U behoudt de naakte eigendom. Fiscaal gunstiger dan volledige overdracht.',
          fiqhNoot: 'Tijdelijke waqf is alleen toegestaan in de Hanafi madhab. De andere madhabs vereisen eeuwigheid (ta\'bid). Raadpleeg uw geleerde voor advies.',
        },
        {
          _type: 'object',
          titel: 'Geen erfgenamen',
          fiqhNaam: 'Waṣiyyah kāmilah',
          kort: 'Als u geen islamitische erfgenamen heeft, mag u tot 100% van uw nalatenschap aan de waqf geven.',
          voorbeeld: 'U heeft geen kinderen, geen echtgeno(o)t(e), en geen naaste familie die onder het islamitisch erfrecht valt. U mag uw volledige nalatenschap — inclusief vastgoed — als waqf schenken via testament.',
          belgischRecht: 'Belgisch erfrecht kent ook reservatair erfdeel voor sommige familieleden. De beperking van 1/3 uit de fiqh is mogelijk ruimer dan wat het Belgisch recht toelaat. Notaris-advies essentieel.',
          fiqhNoot: 'De klassieke fiqh-regel "max 1/3" beschermt erfgenamen. Zonder erfgenamen vervalt die bescherming en mag alles naar een charitatief doel.',
        },
      ],
    }),

    // Proces
    defineField({
      name: 'procesTitle', title: 'Proces Titel', type: 'string', group: 'proces',
      initialValue: 'Hoe het praktisch werkt',
    }),
    defineField({
      name: 'procesIntro', title: 'Proces Intro', type: 'text', rows: 2, group: 'proces',
      initialValue: 'Van eerste gesprek tot de notariële akte — in vijf stappen, op uw tempo.',
    }),
    defineField({
      name: 'processtappen',
      title: 'Processtappen',
      type: 'array',
      group: 'proces',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'nummer', title: 'Nummer', type: 'number' }),
          defineField({ name: 'titel', title: 'Titel', type: 'string' }),
          defineField({ name: 'beschrijving', title: 'Beschrijving', type: 'text', rows: 3 }),
        ],
      }],
      initialValue: [
        { _type: 'object', nummer: 1, titel: 'Vertrouwelijk gesprek', beschrijving: 'U neemt contact met ons op. We plannen een rustig gesprek — fysiek, telefonisch of online. Geen druk, enkel luisteren.' },
        { _type: 'object', nummer: 2, titel: 'Juridische & fiqh-toets', beschrijving: 'Samen met uw notaris en onze Shariah Advisory Board bekijken we wat mogelijk en wenselijk is. We verwijzen u door naar onafhankelijk advies indien nodig.' },
        { _type: 'object', nummer: 3, titel: 'Due diligence', beschrijving: 'Voor vastgoed voeren wij een technische en juridische controle uit. Niet elk vastgoed is geschikt — we zijn transparant over wat we wel en niet accepteren.' },
        { _type: 'object', nummer: 4, titel: 'Notariële akte', beschrijving: 'Uw notaris stelt de akte op. Onze Trustee tekent namens de waqf. Alles legaal, definitief en transparant vastgelegd.' },
        { _type: 'object', nummer: 5, titel: 'Beheer & rapportage', beschrijving: 'Het vastgoed wordt beheerd volgens de statuten. De opbrengsten verschijnen in de maandelijkse hisab. U (of uw nabestaanden) blijven welkom om mee te volgen.' },
      ],
    }),

    // Criteria
    defineField({
      name: 'criteriaTitle', title: 'Criteria Titel', type: 'string', group: 'criteria',
      initialValue: 'Wat we wel en niet accepteren',
    }),
    defineField({
      name: 'criteriaIntro', title: 'Criteria Intro', type: 'text', rows: 2, group: 'criteria',
      initialValue: 'Transparantie is belangrijk. Niet elk vastgoed of elke nalatenschap past binnen de waqf-missie.',
    }),
    defineField({
      name: 'welCriteria',
      title: 'Wel criteria',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'criteria',
      initialValue: [
        'Vastgoed met heldere eigendomstitel en geen juridische geschillen',
        'Onroerend goed met stabiel rendementspotentieel (verhuur, gebruik)',
        'Goederen waarvan de herkomst halal en legaal is',
        'Schenkingen die het reservatair erfrecht van familie respecteren',
        'Nalatenschappen met duidelijk schriftelijk testament',
      ],
    }),
    defineField({
      name: 'nietCriteria',
      title: 'Niet criteria',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'criteria',
      initialValue: [
        'Vastgoed met structurele problemen zonder budget voor renovatie',
        'Goederen met onduidelijke eigendomsgeschiedenis',
        'Bronnen die niet shariah-conform zijn (rente, haram handel)',
        'Schenkingen die het erfrecht van familieleden schenden',
        'Vastgoed waarover onenigheid bestaat binnen de familie',
      ],
    }),

    // FAQ
    defineField({
      name: 'faqTitle', title: 'FAQ Titel', type: 'string', group: 'faq',
      initialValue: 'Veelgestelde vragen',
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      group: 'faq',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'vraag', title: 'Vraag', type: 'string' }),
          defineField({ name: 'antwoord', title: 'Antwoord', type: 'text', rows: 5 }),
        ],
      }],
      initialValue: [
        { _type: 'object', vraag: 'Kan ik mijn schenking later herroepen?', antwoord: 'Bij een definitieve waqf (muʾabbad): nee, het is onomkeerbaar. Bij een tijdelijke waqf (muʾaqqat) of vruchtgebruik: het vastgoed komt na de afgesproken periode automatisch terug bij u of uw erfgenamen.' },
        { _type: 'object', vraag: 'Wat gebeurt er met het vastgoed na de schenking?', antwoord: 'Het wordt beheerd door de Trustee (mutawalli) volgens de statuten. Indien het voor verhuur geschikt is, komen de huurinkomsten ten goede aan de programma\'s. Maandelijks publiceren we de hisab zodat u alles kunt volgen.' },
        { _type: 'object', vraag: 'Wat als mijn kinderen het er niet mee eens zijn?', antwoord: 'Dit is een belangrijk punt. Belgisch erfrecht beschermt de reservatair portie van kinderen. We raden ten zeerste aan om in alle openheid met uw familie te spreken voordat u een beslissing neemt. Wij willen nooit tussen familiebanden staan.' },
        { _type: 'object', vraag: 'Moet ik islamitisch recht volgen of Belgisch recht?', antwoord: 'Beide. Belgisch recht is bindend in België. Wij faciliteren binnen de grenzen van het Belgisch recht, op een manier die zo goed mogelijk aansluit bij de islamitische waqf-traditie. Waar er conflict is, respecteren we de wet én informeren we u over de fiqh-implicaties.' },
        { _type: 'object', vraag: 'Kan ik mijn huis schenken maar er blijven wonen?', antwoord: 'Ja, via een constructie waarbij u de naakte eigendom schenkt maar het vruchtgebruik behoudt. U blijft er wonen tot uw overlijden; daarna gaat het volledig naar de waqf. Dit vereist een specifieke notariële akte.' },
        { _type: 'object', vraag: 'Zijn er fiscale voordelen?', antwoord: 'Sinds 1 juli 2021 gelden in Vlaanderen verlaagde (tot 0%) schenkings- en successierechten voor schenkingen aan erkende filantropische instellingen. Ummah.be Waqf werkt aan deze erkenning. Vraag uw notaris om de exacte situatie op het moment van uw beslissing te toetsen.' },
      ],
    }),

    // Contact
    defineField({
      name: 'contactTitle', title: 'Contact Titel', type: 'string', group: 'contact',
      initialValue: 'Plan een vertrouwelijk gesprek',
    }),
    defineField({
      name: 'contactText', title: 'Contact Tekst', type: 'text', rows: 4, group: 'contact',
      initialValue: 'Dit is geen beslissing die u overhaast neemt — en die mogen we ook niet van u vragen. Als u erover wilt praten, zonder enige verplichting, zijn wij er. Wij luisteren, wij informeren, en wij verwijzen u door waar nodig. U beslist.',
    }),
    defineField({
      name: 'contactKnopLabel', title: 'Contact knop label', type: 'string', group: 'contact',
      initialValue: 'Neem vertrouwelijk contact op',
    }),
  ],
  preview: { prepare: () => ({ title: 'Nalatenschap Pagina' }) },
});
