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
    "text": "Vilken mat luktar värst i förhållande till hur gott den smakar?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest självklara ingrediensen i en tacos?"
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
    "text": "Vad köper du om du bara får välja en sak i en godisbutik?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken är den näst godaste glassmaken?"
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
    "text": "Vilken maträtt behöver egentligen mest ketchup?"
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
    "text": "Vilken hushållssyssla är lättast att skjuta upp?"
  },
  {
    "category": "Vardag",
    "text": "Vad glömmer folk oftast när de lämnar hemmet?"
  },
  {
    "category": "Vardag",
    "text": "Vilken veckodag känns längst?"
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
    "text": "Vilken möbel är jobbigast att flytta?"
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
    "text": "Vilken månad känns som längst?"
  },
  {
    "category": "Vardag",
    "text": "Vilken badrumspryl skulle du sakna mest?"
  },
  {
    "category": "Vardag",
    "text": "Vilken vara glömmer man oftast att köpa?"
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
    "text": "Vilken möbel är värst att få vattenskadad?"
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
    "text": "Vilket klockslag är bäst att lämna en fest?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken dryck brukar någon ta med för mycket av?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket ämne leder oftast till diskussion vid middagsbordet?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad skulle du helst slippa på ett bröllop?"
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
    "text": "Vilket ord ropar någon alltid under ett gruppfoto?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilket spel borde alla förfester ha?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vilken maträtt är mest opraktisk att servera på mingel?"
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
    "text": "Vad är den näst viktigaste saken på ett kräftskivebord?"
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
    "text": "Vilken tv-serie tål flest att se en gång till?"
  },
  {
    "category": "Popkultur",
    "text": "Vilken superhjälte skulle vara sämst på ett kontorsjobb?"
  },
  {
    "category": "Popkultur",
    "text": "Vilket tv-spel har nästan alla testat?"
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
    "text": "Vilket tv-program skulle du vilja tävla i?"
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
    "text": "Vilket djur skulle vara den sämsta rumskamraten?"
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
    "text": "Vad vore konstigast att ha i kylskåpet?"
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
    "text": "Vad vore den värsta smaken på tandkräm?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle vinna en danstävling?"
  },
  {
    "category": "Knasigt",
    "text": "Vad är det konstigaste man kan ha som hatt?"
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
    "text": "Vad skulle vara det mest onödiga att ta med till månen?"
  },
  {
    "category": "Knasigt",
    "text": "Vilket djur skulle se mest skrämmande ut i människostorlek?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle du helst vilja att en robot gjorde hemma?"
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
    "text": "Var vore det pinsammast att bli påkommen med att hångla?"
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
    "text": "Vilken veckodag är sämst för en andra dejt?"
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
    "text": "Vilken högtid är mest stressig med släkten?"
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
    "text": "Vad skulle vara det sämsta samtalsämnet på en första dejt?"
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
    "text": "Vilket land förknippar du mest med semester?"
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
    "text": "Vilken souvenir ångrar folk snabbast att de köpt?"
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
    "text": "Vilket land förknippar du med tropiska stränder?"
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
    "text": "Vad är det jobbigaste med att åka nattåg?"
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
    "text": "Vilket land förknippar du med stora berg?"
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
    "text": "Vilket land förknippar du med exotiska djur?"
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
    "text": "Vilken veckodag vill flest slippa möten?"
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
    "text": "Vilken veckodag är det svårast att boka möten?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken veckodag går folk hem tidigast?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken kontorspryl låter mest irriterande?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken pryl krånglar oftast under en presentation?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är den vanligaste anledningen till att ett möte drar över tiden?"
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
    "text": "Vilken veckodag borde vara helt mötesfri?"
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
    "text": "Vilken kontorspryl tar längst tid att beställa?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket mått är lättast att missa på en ritning?"
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
    "text": "Vad är den näst värsta tiden att få ett möte inbokat?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket ljud stör mest i ett öppet kontor?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket klädesplagg förknippar flest med hemarbete?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken månad är kontoret som tommast?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken veckodag är sämst för en deadline?"
  },
  {
    "category": "Film",
    "text": "Vilken film har den mest igenkännbara musiken?"
  },
  {
    "category": "Film",
    "text": "Vilken filmskurk är mest skrämmande?"
  },
  {
    "category": "Film",
    "text": "Vilken film har det bästa slutet?"
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
    "text": "Vilken film skulle du helst se på bio igen?"
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
    "text": "Vilken tecknad film är mest sorglig?"
  },
  {
    "category": "Film",
    "text": "Vilken film är bäst att se när man är sjuk?"
  },
  {
    "category": "Film",
    "text": "Vilken film har det mest kända monstret?"
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
    "text": "Vilken film är den bästa uppföljaren?"
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
    "text": "Vilken filmgenre passar bäst på en första dejt?"
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
          <div className="question-text">{current ? current.text : "Tryck på knappen för att dra en fråga!"}</div>
          <span className="question-number">{count ? "Fråga " + count : "🐄"}</span>
        </div>
        <button type="button" className="next-button" onClick={nextQuestion}>🎲 Ny fråga</button>
        <p className="hint">Svara med högst två ord, ett namn eller en siffra. Frågorna slumpas utan upprepning.</p>
      </section>
    </main>
  );
}
