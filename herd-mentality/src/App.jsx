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
    "text": "Du får bara ta med en frukt till jobbet resten av året. Vad väljer du?"
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
    "text": "Korv med bröd – vilken sås är självklar?"
  },
  {
    "category": "Mat & dryck",
    "text": "Barndomens glassmak nummer ett?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är det första du går på vid hotellfrukosten?"
  },
  {
    "category": "Mat & dryck",
    "text": "Svåraste maträtten att äta snyggt?"
  },
  {
    "category": "Mat & dryck",
    "text": "Surströmming är en kandidat – vilken mat luktar annars värst?"
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
    "text": "Efter krogen: vad beställer du att äta?"
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
    "text": "Sämsta maträtten att äta i bilen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad köper du om du bara får välja en sak i en godisbutik?"
  },
  {
    "category": "Mat & dryck",
    "text": "Silvermedaljen bland glassmaker går till ...?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är jobbigast att skala i fruktdisken?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad är den mest klassiska smaken på chips?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vilken maträtt kräver mest ketchup för att bli god?"
  },
  {
    "category": "Mat & dryck",
    "text": "Rester dagen efter – vilken maträtt vinner?"
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
    "text": "Vad skjuter folk helst upp när de städar hemma?"
  },
  {
    "category": "Vardag",
    "text": "Vad glömmer folk oftast när de lämnar hemmet?"
  },
  {
    "category": "Vardag",
    "text": "Vilken veckodag tar aldrig slut?"
  },
  {
    "category": "Vardag",
    "text": "Toapapper, diskmedel, tvål ... vad är värst att få slut på?"
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
    "text": "Strömavbrott i ett dygn. Vad saknar du mest?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det mest självklara föremålet i ett hotellrum?"
  },
  {
    "category": "Vardag",
    "text": "Flyttdag! Vad är jobbigast att bära?"
  },
  {
    "category": "Vardag",
    "text": "Vilket ljud är det värsta att vakna av?"
  },
  {
    "category": "Vardag",
    "text": "Vad tappar man bort minst en gång i veckan?"
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
    "text": "Årets längsta månad känns som ...?"
  },
  {
    "category": "Vardag",
    "text": "Du får bara behålla en badrumspryl. Vad väljer du?"
  },
  {
    "category": "Vardag",
    "text": "Vad glömmer du oftast på inköpslistan?"
  },
  {
    "category": "Vardag",
    "text": "Mobilen dör – vad letar du efter först?"
  },
  {
    "category": "Vardag",
    "text": "Var hemma samlas stöket snabbast?"
  },
  {
    "category": "Vardag",
    "text": "Vad är det mest irriterande att stå i kö till?"
  },
  {
    "category": "Vardag",
    "text": "Vattenskada! Vilken möbel vill du rädda först?"
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
    "text": "Alla kan refrängen – vilken låt drar igång allsången?"
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
    "text": "Vad tar någon alltid med för mycket av till festen?"
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
    "text": "När dansstegen tar slut – vilken dans återstår?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är det mest klassiska att servera som välkomstdrink?"
  },
  {
    "category": "Fest & socialt",
    "text": "Förfest på fredag: vad dricker flest?"
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
    "text": "Sämsta maten att servera på stående mingel?"
  },
  {
    "category": "Fest & socialt",
    "text": "En fest mitt i veckan – vilken dag är sämst?"
  },
  {
    "category": "Fest & socialt",
    "text": "Vad är den sämsta musikgenren för dansgolvet?"
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
    "text": "Kräftskiva utan den här låten? Otänkbart. Vilken?"
  },
  {
    "category": "Popkultur",
    "text": "Tänk en filmfigur med ikonisk frisyr. Vem?"
  },
  {
    "category": "Popkultur",
    "text": "Karaokekväll – vilken låt väljer flest?"
  },
  {
    "category": "Popkultur",
    "text": "En svensk artist alla kan sjunga med till?"
  },
  {
    "category": "Popkultur",
    "text": "Vem är den mest ikoniska tecknade skurken?"
  },
  {
    "category": "Popkultur",
    "text": "En tv-serie man kan se hur många gånger som helst?"
  },
  {
    "category": "Popkultur",
    "text": "Sämsta superhjälten att ha som kontorskollega?"
  },
  {
    "category": "Popkultur",
    "text": "Vilket tv-spel har nästan alla testat?"
  },
  {
    "category": "Popkultur",
    "text": "Vem borde leda Melodifestivalen nästa år?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det första man tänker på när man hör ordet Disney?"
  },
  {
    "category": "Popkultur",
    "text": "Bröllops-DJ:n väljer en självklar låt. Vilken?"
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
    "text": "Vem skulle passa bäst i en dokusåpa?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det mest klassiska tv-spelet?"
  },
  {
    "category": "Popkultur",
    "text": "Världens mest kända filmhund?"
  },
  {
    "category": "Popkultur",
    "text": "Julfilm nummer ett?"
  },
  {
    "category": "Popkultur",
    "text": "Vem skulle du helst ha som lagkamrat i På spåret?"
  },
  {
    "category": "Popkultur",
    "text": "Vems tecknade röst känner alla igen?"
  },
  {
    "category": "Popkultur",
    "text": "Vad är det mest klassiska instrumentet i ett rockband?"
  },
  {
    "category": "Popkultur",
    "text": "Värsta tv-karaktären att ha som chef?"
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
    "text": "Gratis konsert – vilken artist fyller torget?"
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
    "text": "Om du fick en extra kroppsdel, vilken vore jobbigast?"
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
    "text": "Vad får absolut inte tillverkas i glas?"
  },
  {
    "category": "Knasigt",
    "text": "En vardagspryl i jätteformat – vad blir roligast?"
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
    "text": "Simfötter på alla spelare – vilken sport blir roligast?"
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
    "text": "Du äger en planet. Vad har den för färg?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle bli ännu sämre med touchskärm?"
  },
  {
    "category": "Knasigt",
    "text": "Matkrig! Vad vill du minst få kastat på dig?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle vara det mest onödiga att ta med till månen?"
  },
  {
    "category": "Knasigt",
    "text": "Ett djur i människostorlek – vilket skrämmer mest?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle du helst vilja att en robot gjorde hemma?"
  },
  {
    "category": "Vuxet",
    "text": "Första dejten: vilken maträtt bör undvikas?"
  },
  {
    "category": "Vuxet",
    "text": "Dejtingappar – vilken tänker du på först?"
  },
  {
    "category": "Vuxet",
    "text": "Drömdejten med en kändis. Vem?"
  },
  {
    "category": "Vuxet",
    "text": "Romantisk middag – vilken låt förstör stämningen?"
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
    "text": "Största avtändningen på en dejt – vilken sak?"
  },
  {
    "category": "Vuxet",
    "text": "Andra dejten på en vardag – vilken dag är sämst?"
  },
  {
    "category": "Vuxet",
    "text": "Du råkar skicka en emoji till chefen. Vilken är värst?"
  },
  {
    "category": "Vuxet",
    "text": "Försöka imponera på en dejt – vilken dryck beställer man?"
  },
  {
    "category": "Vuxet",
    "text": "Släktmiddag: vilken högtid är mest stressig?"
  },
  {
    "category": "Vuxet",
    "text": "Vem av alla kändisar kan absolut inte hålla en hemlighet?"
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
    "text": "Vilken hobby gör någon mest attraktiv?"
  },
  {
    "category": "Vuxet",
    "text": "Dagen efter – vilken dryck ångrar man mest?"
  },
  {
    "category": "Vuxet",
    "text": "Vilket djur vill du minst hitta i någons säng?"
  },
  {
    "category": "Vuxet",
    "text": "Sämsta kändisen att ha som chef?"
  },
  {
    "category": "Vuxet",
    "text": "Vad är det värsta att hitta i någon annans badrum?"
  },
  {
    "category": "Vuxet",
    "text": "Överskattad dejtmat – vad är det?"
  },
  {
    "category": "Vuxet",
    "text": "Vad skulle vara det sämsta samtalsämnet på en första dejt?"
  },
  {
    "category": "Vuxet",
    "text": "Dejtingprofilen: vilken sorts bild bör förbjudas?"
  },
  {
    "category": "Vuxet",
    "text": "Jobbmiddag med vita skjortor – vilken mat undviker du?"
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
    "text": "En souvenir som alla ångrar att de köpt?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Vilket land förknippar du med riktigt god mat?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Skidsemester – vad gör man helst efter åkningen?"
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
    "text": "Turistkartan: vilken symbol letar man efter först?"
  },
  {
    "category": "Resor & upplevelser",
    "text": "Svensexa eller möhippa – vilken aktivitet är mest självklar?"
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
    "text": "Solsemester – vilken utflykt bokar flest?"
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
    "text": "Vad är kontorets mest överskattade pryl?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Mötesrummet är bokat. Vad strular först?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "En mötesfri veckodag – vilken väljer du?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad är det första som krånglar när chefen ska presentera?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad försvinner oftast från kontorets kök?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket fikabröd är mest populärt på kontoret?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilken dag är svårast att boka ett möte på?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När går folk hem tidigast från kontoret?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Kontorets mest irriterande ljudkälla?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Presentation om fem minuter. Vad krånglar?"
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
    "text": "Om du fick automatisera en enda arbetsuppgift, vad väljer du?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vad lånar kollegor och lämnar aldrig tillbaka?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Mest använda emojin i Teams?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "En dag utan möten – vilken ska det vara?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Teamsmöte: vilken knapp glömmer folk oftast?"
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
    "text": "Vad tar orimligt lång tid att beställa på kontoret?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Vilket mått är lättast att missa på en ritning?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Mest onödiga mötestypen?"
  },
  {
    "category": "Mat & dryck",
    "text": "Pizzornas silvermedaljör – vilken är det?"
  },
  {
    "category": "Mat & dryck",
    "text": "En maträtt som får alldeles för mycket beröm?"
  },
  {
    "category": "Mat & dryck",
    "text": "Vad borde ingen människa behöva äta på en första dejt?"
  },
  {
    "category": "Vardag",
    "text": "Mataffärens jobbigaste avdelning?"
  },
  {
    "category": "Vardag",
    "text": "Hushållssysslan som känns mest som ett straff?"
  },
  {
    "category": "Fest & socialt",
    "text": "Den mest överskattade drinken?"
  },
  {
    "category": "Knasigt",
    "text": "Vad skulle vara det näst sämsta husdjuret?"
  },
  {
    "category": "Knasigt",
    "text": "Du får en superkraft som låter bra men är opraktisk. Vilken?"
  },
  {
    "category": "Vuxet",
    "text": "Vad stör sig folk mest på hos någon de dejtar?"
  },
  {
    "category": "Vuxet",
    "text": "Viktigaste egenskapen hos en partner?"
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
    "text": "Öppet kontor – vilket ljud stör mest?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Hemmakontorets mest typiska plagg?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "När på året är kontoret som tommast?"
  },
  {
    "category": "Kontor & ingenjörsliv",
    "text": "Deadline på en vardag – vilken dag är sämst?"
  },
  {
    "category": "Film",
    "text": "Film med musik som alla känner igen?"
  },
  {
    "category": "Film",
    "text": "Den läskigaste filmskurken genom tiderna?"
  },
  {
    "category": "Film",
    "text": "Bästa filmslutet någonsin – vilken film?"
  },
  {
    "category": "Film",
    "text": "Actionstjärna nummer ett?"
  },
  {
    "category": "Film",
    "text": "Gråtgaranti på film – vilken titel?"
  },
  {
    "category": "Film",
    "text": "En film du gärna ser på bio igen?"
  },
  {
    "category": "Film",
    "text": "Filmens mest ikoniska bil – vilken film?"
  },
  {
    "category": "Film",
    "text": "Sämsta filmfiguren att ha som chef?"
  },
  {
    "category": "Film",
    "text": "Bästa filmfiguren att ha som granne?"
  },
  {
    "category": "Film",
    "text": "Vilken film kan folk flest citera?"
  },
  {
    "category": "Film",
    "text": "Den sorgligaste tecknade filmen?"
  },
  {
    "category": "Film",
    "text": "Sjukdag i soffan – vilken film sätter du på?"
  },
  {
    "category": "Film",
    "text": "Filmvärldens mest kända monster?"
  },
  {
    "category": "Film",
    "text": "Dinosaurier på film – vilken titel tänker du på?"
  },
  {
    "category": "Film",
    "text": "Filmserien som borde ha slutat tidigare?"
  },
  {
    "category": "Film",
    "text": "Filmvärldens coolaste bil – vem kör den?"
  },
  {
    "category": "Film",
    "text": "Rymdfilm nummer ett?"
  },
  {
    "category": "Film",
    "text": "Nästa James Bond – vilken skådespelare?"
  },
  {
    "category": "Film",
    "text": "Bästa filmuppföljaren?"
  },
  {
    "category": "Film",
    "text": "Pirater på film – vilken titel?"
  },
  {
    "category": "Film",
    "text": "Filmfigur med mest ikonisk hatt?"
  },
  {
    "category": "Film",
    "text": "Sveriges roligaste film?"
  },
  {
    "category": "Film",
    "text": "Värsta filmfiguren att sitta bredvid på flyget?"
  },
  {
    "category": "Film",
    "text": "Hajfilm – vilken titel tänker alla på?"
  },
  {
    "category": "Film",
    "text": "Roligaste skådespelaren?"
  },
  {
    "category": "Film",
    "text": "Första dejten på bio – vilken genre väljer du?"
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
