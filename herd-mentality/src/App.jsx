import { useMemo, useState } from "react";
import "./App.css";

const categories = [
  "Mat & dryck",
  "Vardag",
  "Fest & socialt",
  "Popkultur",
  "Film",
  "Knasigt",
  "Vuxet",
  "Resor & upplevelser",
  "Kontor & ingenjörsliv"
];
const questions = [
  {
    "category": "Mat & dryck",
    "text": "Vad är den bästa pizzatoppingen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken frukt skulle du helst få i en fruktkorg?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det första man plockar från ett julbord?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är godast att doppa i kaffet?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken sås hör hemma på en korv med bröd?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken glassmak känns mest som barndom?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det första du går på vid hotellfrukosten?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt är svårast att äta snyggt?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur många dagar i rad skulle du kunna äta samma middag?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur många köttbullar är en lagom portion?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilket godis ligger alltid kvar sist i skålen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken mat beställer man efter en sen utekväll?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest typiska maten på ett barnkalas?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilket pålägg skulle du aldrig vilja ha på en pizza?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är lättast att råka bränna vid matlagning?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt passar sämst att äta i bilen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur mycket skulle du betala för en riktigt bra hamburgare, i kronor?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur många pizzabitar är lagom att äta?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken frukt är svårast att skala?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest klassiska smaken på chips?"
  },
  {
    "category": "Mat & dryck",
    "text": "Hur många koppar kaffe är för många på en dag?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken mat är godast dagen efter?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det värsta någon kan lägga på din smörgås?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det första man gör när man kommer hem?"
  },
  {
    "category": "Vardag",
    "text": "Hur ofta borde man egentligen dammsuga hemma, per vecka?"
  },
  {
    "category": "Vardag",
    "text": "Vad glömmer folk oftast när de lämnar hemmet?"
  },
  {
    "category": "Vardag",
    "text": "När på dagen är det svårast att hålla sig vaken?"
  },
  {
    "category": "Vardag",
    "text": "Vilken förbrukningsvara är värst att få slut på hemma?"
  },
  {
    "category": "Vardag",
    "text": "Vad försvinner mystiskt i tvättmaskinen?"
  },
  {
    "category": "Vardag",
    "text": "Vad gör folk när de väntar på bussen?"
  },
  {
    "category": "Vardag",
    "text": "Vilken pryl skulle du sakna mest vid strömavbrott?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det mest självklara föremålet i ett hotellrum?"
  },
  {
    "category": "Vardag",
    "text": "Hur många kuddar ska man ha i en säng?"
  },
  {
    "category": "Vardag",
    "text": "Vilket ljud är det värsta att vakna av?"
  },
  {
    "category": "Vardag",
    "text": "Vilken sak tappar folk bort oftast?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det vanligaste att ha i fickan?"
  },
  {
    "category": "Vardag",
    "text": "Vilket färdmedel blir man oftast sen med?"
  },
  {
    "category": "Vardag",
    "text": "Hur många alarm behöver man på morgonen?"
  },
  {
    "category": "Vardag",
    "text": "Vilken badrumspryl skulle du sakna mest?"
  },
  {
    "category": "Vardag",
    "text": "Var hemma lägger folk oftast sina nycklar?"
  },
  {
    "category": "Vardag",
    "text": "Vilken pryl letar man efter när mobilen dör?"
  },
  {
    "category": "Vardag",
    "text": "Vilken plats i hemmet är lättast att stöka ner?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det mest irriterande att stå i kö till?"
  },
  {
    "category": "Vardag",
    "text": "Hur många minuter är rimligt att duscha?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad tar alltid slut först på festen?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är den vanligaste gå-bort-presenten?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken låt får flest att sjunga med?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det pinsammaste att spilla på en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad glömmer folk oftast att ta med till förfesten?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket sällskapsspel orsakar mest bråk?"
  },
  {
    "category": "Fest & socialt",
    "text": "När borde en hemmafest senast sluta?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken dryck brukar någon ta med för mycket av?"
  },
  {
    "category": "Fest & socialt",
    "text": "Hur många personer är lagom på en middag hemma?"
  },
  {
    "category": "Fest & socialt",
    "text": "Var på ett bröllop vill du helst sitta?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken dans gör folk som inte kan dansa?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det mest klassiska att servera som välkomstdrink?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken dryck förknippar flest med förfest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Hur många försök behövs för ett lyckat gruppfoto?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket spel borde alla förfester ha?"
  },
  {
    "category": "Fest & socialt",
    "text": "Hur sent är det okej att dyka upp till en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken veckodag är sämst för en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken typ av musik passar sämst på en dansfest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Hur många snapsvisor är lagom på en kräftskiva?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket föremål är mest sannolikt att någon använder som mikrofon?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken låt är mest självklar på en kräftskiva?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken filmfigur har mest igenkännbar frisyr?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken låt passar bäst på karaoke?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken svensk artist kan precis alla sjunga med till?"
  },
  {
    "category": "Popkultur",
    "text": "Vem är den mest ikoniska tecknade skurken?"
  },
  {
    "category": "Popkultur",
    "text": "Hur många avsnitt i rad räknas som en tv-maraton?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken superhjälte skulle vara sämst på ett kontorsjobb?"
  },
  {
    "category": "Popkultur",
    "text": "Hur många timmar i sträck är för mycket tv-spel?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken kändis skulle vara roligast som programledare för Melodifestivalen?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det första man tänker på när man hör ordet Disney?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken låt är omöjlig att undvika på ett bröllop?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är den mest igenkännbara tv-signaturen?"
  },
  {
    "category": "Popkultur",
    "text": "Hur många minuter får ett tv-program vara innan det känns för långt?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken kändis skulle passa bäst i en dokusåpa?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det mest klassiska tv-spelet?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken filmhund är mest känd?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken film förknippar du mest med julen?"
  },
  {
    "category": "Popkultur",
    "text": "Vem skulle du helst ha som lagkamrat i På spåret?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken seriefigur har den mest igenkännbara rösten?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det mest klassiska instrumentet i ett rockband?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken tv-karaktär skulle vara sämst som chef?"
  },
  {
    "category": "Popkultur",
    "text": "Vilket föremål förknippar du mest med Harry Potter?"
  },
  {
    "category": "Popkultur",
    "text": "Vilket spel leder snabbast till familjebråk?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken artist skulle dra störst publik på en gratis konsert?"
  },
  {
    "category": "Knasigt",
    "text": "Hur många katter är för många att ha hemma?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur vore värst att hitta under täcket?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken kroppsdel skulle vara jobbigast att ha dubbelt av?"
  },
  {
    "category": "Knasigt",
    "text": "Var skulle du gömma dig om en zombie kom in i huset?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle bli den bästa taxichauffören?"
  },
  {
    "category": "Knasigt",
    "text": "Om alla människor fick svans, vilket djur borde den likna?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken sak borde absolut inte tillverkas i glas?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken vardagspryl skulle vara roligast i jättestorlek?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle passa bäst i kostym?"
  },
  {
    "category": "Knasigt",
    "text": "Hur många gånger om dagen borde man borsta tänderna?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle vinna en danstävling?"
  },
  {
    "category": "Knasigt",
    "text": "Var skulle du helst gömma en skatt?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken sport skulle vara roligast om alla spelare hade simfötter?"
  },
  {
    "category": "Knasigt",
    "text": "Vad är det sämsta man kan använda som paraply?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle bli den sämsta hemliga agenten?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken färg skulle din egen planet ha?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken pryl skulle bli sämre med en touchskärm?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken maträtt skulle vara värst att få kastad på sig?"
  },
  {
    "category": "Knasigt",
    "text": "Hur många personer borde få följa med på första resan till Mars?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle se mest skrämmande ut i människostorlek?"
  },
  {
    "category": "Knasigt",
    "text": "Hur många robotar skulle du vilja ha hemma?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken maträtt är sämst på en första dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken dejtingapp är mest känd?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken kändis skulle du helst gå på dejt med?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken låt passar sämst när man försöker vara romantisk?"
  },
  {
    "category": "Vuxet",
    "text": "Var är det värst att springa på sitt ex?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är den värsta presenten att få av en partner?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken sak är mest avtändande på en dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Hur länge borde en första dejt vara, i timmar?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken emoji vore värst att skicka till chefen?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken dryck beställer någon som vill imponera på en dejt?"
  },
  {
    "category": "Vuxet",
    "text": "När är det för tidigt att börja julpynta?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken kändis skulle vara sämst på att hålla en hemlighet?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken emoji känns mest som ett dåligt raggningsförsök?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken emoji förknippar flest med flirt?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken hobby är mest attraktiv?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken dryck ger värst baksmälla?"
  },
  {
    "category": "Vuxet",
    "text": "Vilket djur vill du minst hitta i någons säng?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken känd person skulle vara mest besvärlig att ha som chef?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är det värsta att hitta i någon annans badrum?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken maträtt är mest överskattad på en dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Hur många dejter ska man gå på innan man blir ett par?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken typ av bild bör man undvika på sin dejtingprofil?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken maträtt är svårast att äta snyggt på en jobbmiddag?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det mest onödiga man ändå köper på flygplatsen?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Hur många dagar är en perfekt semesterresa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det värsta att glömma hemma inför en resa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket djur hoppas man få se på safari?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Hur många timmar före flyget borde man vara på flygplatsen?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land förknippar du med riktigt god mat?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilken aktivitet förknippar du mest med skidsemester?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det värsta att upptäcka i sin resväska?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad fotograferar folk mest på semestern?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Var i världen skulle du helst fira nyår?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det mest klassiska att göra på en charterresa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det mest förutsägbara köpet i taxfreebutiken?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Hur många timmar på ett tåg är för många?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilken symbol letar alla efter på en turistkarta?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilken aktivitet är mest typisk för en möhippa eller svensexa?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad vore värst att tappa bort på ett hotell?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Var skulle du helst ha en sommarstuga?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad är det sista du vill sakna på en campingplats?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilken typ av utflykt är vanligast på en solsemester?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad glömmer man alltid att packa – trots att man borde veta bättre?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Hur många länder borde man ha besökt före 40?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad skulle du helst vilja ha gratis på ett hotell?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken kontorspryl är mest överskattad?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken pryl krånglar oftast i ett mötesrum?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många minuter borde ett vanligt jobbmöte vara?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det första som krånglar när chefen ska presentera?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken sak försvinner oftast från kontorets kök?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket fikabröd är mest populärt på kontoret?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När på dagen är det sämst att boka ett möte?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken veckodag går folk hem tidigast?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många koppar kaffe dricker en genomsnittlig kontorsanställd per dag?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken pryl krånglar oftast under en presentation?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många personer är för många i ett projektmöte?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det första folk gör när fredagsfikat ställs fram?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det absolut värsta att spilla kaffe på?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken sak skulle du helst automatisera på jobbet?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad lånar kollegor och lämnar aldrig tillbaka?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken emoji används mest i Teams?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många möten per dag är för många?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken knapp glömmer flest att trycka på i Teams?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det mest irriterande att upptäcka när man ska skriva ut något?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är den mest typiska prylen på en ingenjörs skrivbord?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket verktyg på datorn skulle vara jobbigast att vara utan på jobbet?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur lång tid är rimligt att vänta på en ny jobbdator, i dagar?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många versioner av en ritning är för många?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken typ av möte är mest onödig?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken är världens näst godaste pizza?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt är mest överskattad?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad borde ingen människa behöva äta på en första dejt?"
  },
  {
    "category": "Vardag",
    "text": "Vilken avdelning i mataffären är jobbigast att handla på?"
  },
  {
    "category": "Vardag",
    "text": "Vilken vardagssyssla känns mest som ett straff?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken drink är mest överskattad?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle vara det näst sämsta husdjuret?"
  },
  {
    "category": "Knasigt",
    "text": "Vilken superkraft låter bra men vore mest opraktisk?"
  },
  {
    "category": "Vuxet",
    "text": "Vad stör sig folk mest på hos någon de dejtar?"
  },
  {
    "category": "Vuxet",
    "text": "Vilken egenskap är viktigast hos en partner?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket turistmål är mest överskattat?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad stör sig folk mest på hos sina kollegor?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När på fredagen borde det vara förbjudet att boka möten?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket ljud stör mest i ett öppet kontor?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många dagar i veckan är lagom att jobba hemifrån?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När på året är kontoret som tommast?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hur många minuter före deadline bör man vara klar?"
  },
  {
    "category": "Film",
    "text": "Vilken film har den mest igenkännbara musiken?"
  },
  {
    "category": "Film",
    "text": "Hur många gånger får man se samma film på bio?"
  },
  {
    "category": "Film",
    "text": "Hur lång får en film vara innan den känns för lång, i minuter?"
  },
  {
    "category": "Film",
    "text": "Vilken skådespelare är mest förknippad med actionfilmer?"
  },
  {
    "category": "Film",
    "text": "Vilken film får flest att gråta?"
  },
  {
    "category": "Film",
    "text": "Hur många filmer i en filmserie är lagom?"
  },
  {
    "category": "Film",
    "text": "Vilken film har den mest kända bilen?"
  },
  {
    "category": "Film",
    "text": "Vilken filmfigur skulle vara sämst som chef?"
  },
  {
    "category": "Film",
    "text": "Vilken filmfigur skulle du helst ha som granne?"
  },
  {
    "category": "Film",
    "text": "Vilken film är roligast att citera?"
  },
  {
    "category": "Film",
    "text": "Hur gammal bör man vara när man ser sin första skräckfilm?"
  },
  {
    "category": "Film",
    "text": "Vilken film är bäst att se när man är sjuk?"
  },
  {
    "category": "Film",
    "text": "Hur många uppföljare borde en succéfilm få?"
  },
  {
    "category": "Film",
    "text": "Vilken film är mest förknippad med dinosaurier?"
  },
  {
    "category": "Film",
    "text": "Vilken filmserie borde ha slutat tidigare?"
  },
  {
    "category": "Film",
    "text": "Vilken filmkaraktär har den coolaste bilen?"
  },
  {
    "category": "Film",
    "text": "Vilken film är mest förknippad med rymden?"
  },
  {
    "category": "Film",
    "text": "Vilken skådespelare skulle passa bäst som James Bond?"
  },
  {
    "category": "Film",
    "text": "Hur många minuter får en film vara innan den känns för kort?"
  },
  {
    "category": "Film",
    "text": "Vilken film är mest förknippad med pirater?"
  },
  {
    "category": "Film",
    "text": "Vilken filmfigur har den mest igenkännbara hatten?"
  },
  {
    "category": "Film",
    "text": "Vilken film är den bästa svenska komedin?"
  },
  {
    "category": "Film",
    "text": "Vilken filmfigur skulle vara värst att sitta bredvid på flyget?"
  },
  {
    "category": "Film",
    "text": "Vilken film är mest förknippad med en haj?"
  },
  {
    "category": "Film",
    "text": "Vilken skådespelare är roligast?"
  },
  {
    "category": "Film",
    "text": "Hur många timmar är lagom för en filmdejt?"
  }
,
  {
    "category": "Mat & dryck",
    "text": "Är ananas gott på pizza?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Mat & dryck",
    "text": "Vad väljer du till frukost?",
    "options": [
      "Gröt",
      "Smörgås",
      "Yoghurt"
    ]
  },
  {
    "category": "Mat & dryck",
    "text": "Är det okej att äta pizza med bestick?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Vardag",
    "text": "Bäddar du sängen varje morgon?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Vardag",
    "text": "Vad är värst att glömma hemma?",
    "options": [
      "Mobilen",
      "Nycklarna",
      "Plånboken"
    ]
  },
  {
    "category": "Vardag",
    "text": "Ska man ta av sig skorna hemma hos andra?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Fest & socialt",
    "text": "Är det okej att gå från en fest utan att säga hej då?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är viktigast på en lyckad fest?",
    "options": [
      "Musiken",
      "Maten",
      "Sällskapet"
    ]
  },
  {
    "category": "Fest & socialt",
    "text": "Är karaoke roligare att sjunga än att lyssna på?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Popkultur",
    "text": "Vad skulle du helst vinna?",
    "options": [
      "Melodifestivalen",
      "På spåret",
      "Robinson"
    ]
  },
  {
    "category": "Popkultur",
    "text": "Är en bok oftast bättre än filmen?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Knasigt",
    "text": "Skulle du vilja kunna prata med djur?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Knasigt",
    "text": "Du måste slåss mot en av dessa. Vad väljer du?",
    "options": [
      "En gås",
      "En kalkon",
      "En svan"
    ]
  },
  {
    "category": "Knasigt",
    "text": "Vilken superkraft väljer du?",
    "options": [
      "Flyga",
      "Bli osynlig",
      "Läsa tankar"
    ]
  },
  {
    "category": "Vuxet",
    "text": "Är det okej att vara vän med sitt ex?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Vuxet",
    "text": "Vad är värst på en första dejt?",
    "options": [
      "Tystnad",
      "Mobilscrollande",
      "Att komma sent"
    ]
  },
  {
    "category": "Vuxet",
    "text": "Ska man dela notan på första dejten?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vad väljer du för en veckas semester?",
    "options": [
      "Storstad",
      "Strand",
      "Fjäll"
    ]
  },
  {
    "category": "Resor & upplevelser",
    "text": "Är det värt att betala extra för fönsterplats på flyget?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Ska kameran vara på under digitala möten?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad väljer du på kontoret?",
    "options": [
      "Eget rum",
      "Öppet landskap",
      "Hemmakontor"
    ]
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Borde arbetsveckan vara fyra dagar?",
    "options": [
      "Ja",
      "Nej"
    ]
  },
  {
    "category": "Film",
    "text": "Vad väljer du på bio?",
    "options": [
      "Komedi",
      "Action",
      "Skräck"
    ]
  },
  {
    "category": "Film",
    "text": "Är det okej att prata under en film hemma hos någon?",
    "options": [
      "Ja",
      "Nej"
    ]
  }
];

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function App() {
  const [selected, setSelected] = useState(categories);
  const [current, setCurrent] = useState(null);
  const [remaining, setRemaining] = useState([]);
  const [count, setCount] = useState(0);

  const available = useMemo(() => questions.filter(q => selected.includes(q.category)), [selected]);
  const allSelected = selected.length === categories.length;

  function changeCategory(category) {
    const next = selected.includes(category) ? selected.filter(x => x !== category) : [...selected, category];
    if (next.length === 0) return;
    setSelected(next);
    setRemaining([]);
    setCurrent(null);
    setCount(0);
  }

  function toggleAll() {
    setSelected(allSelected ? [categories[0]] : categories);
    setRemaining([]);
    setCurrent(null);
    setCount(0);
  }

  function nextQuestion() {
    const pool = remaining.length ? remaining : shuffle(available.map((_, i) => i));
    const index = pool[pool.length - 1];
    setCurrent(available[index]);
    setRemaining(pool.slice(0, -1));
    setCount(n => n + 1);
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        
        <h1>🐄 Herd Mentality Mobil</h1>
        <p>Tänk som flocken – inte som dig själv.</p>
      </header>

      <section className="filters" aria-label="Välj frågekategorier">
        <div className="filters-heading">
          <strong>Kategorier</strong>
          <button className="text-button" onClick={toggleAll}>{allSelected ? "Välj en" : "Välj alla"}</button>
        </div>
        <div className="chips">
          {categories.map(category => (
            <button
              key={category}
              type="button"
              className={selected.includes(category) ? "chip selected" : "chip"}
              aria-pressed={selected.includes(category)}
              onClick={() => changeCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="filter-count">{allSelected ? "🎲 Blandat – alla kategorier" : selected.length + " kategorier valda"} · {available.length} frågor</div>
      </section>

      <section className="game" aria-live="polite">
        <div className="question-card">
          <span className="question-label">{current ? current.category : "REDO ATT SPELA?"}</span>
          <div className="question-content"><div className="question-text">{current ? current.text : "Tryck på knappen för att dra en fråga!"}</div>{current?.options && <div className="answer-options" aria-label="Svarsalternativ">{current.options.map(option => <span className="answer-option" key={option}>{option}</span>)}</div>}</div>
          <span className="question-number">{count ? "Fråga " + count : "🐄"}</span>
        </div>
        <button type="button" className="next-button" onClick={nextQuestion}>🎲 Ny fråga</button>
        <p className="hint">Svara kort eller välj ett av alternativen. Frågorna slumpas utan upprepning.</p>
      </section>
    </main>
  );
}
