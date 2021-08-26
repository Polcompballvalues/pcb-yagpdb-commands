//trigger on "(?i)(\bsus\b|amongus)" regex
{{ $name := .User}}
{{ $title := (joinStr "" $name  " Amongus!") }}
{{$embed := cembed 
	"title" $title
	"description" "Sus!"
	"color" 14943237
	"thumbnail" (sdict "url" "https://i.kym-cdn.com/photos/images/newsfeed/001/966/661/fb8" ) 
}}
{{ sendMessage nil $embed }}
//trigger on -pong command
{{mentionRoleID 757022814875156600}} :ping_pong: 
//trigger on -bonk command
{{if eq (len .Args) 2}}
	<:JokieBonk:832453866623598632> Go to horny jail, {{index .CmdArgs 0}}!
{{else}}
	Correct usage of the command: -bonk<target> 
{{end}}
//trigger on messages starting with cpoll
{{addReactions ":aquadballauthleft:757033185648574534" ":aquadballauthunity:757033185698644009" ":aquadballauthright:757033185564688455" ":aquadballleftunity:757033185707163719" ":aquadballcentrist:758838747093139467" ":aquadballrightunity:757033185690255410" ":aquadballlibleft:757033185312899198" ":aquadballlibunity:757033185677672539" ":aquadballlibright:757033185480802365" }}
//trigger on messages starting with ynpoll
{{addReactions ":aballyes:833111060495597598" ":aballno:833111096315215902" }}
//trigger on "." regex (users with bullet-proof role only)
{{addReactions ":somedude:833769020435595304" "🤡" "jesse:757039444950908988" ":chungus:816046047091621920" }}
//trigger on "." regex (users with ape role only)
{{addReactions ":funnimonki:840065404872949771" ":friend:864308448317014036" ":Hi:829175232325615616" "a:woz:862502658476474368" "a:rapture:849689797269389322" ":ohmygod:824737661934895164" ":ook:859195377228185630" ":njce:859194552481218592" "a:nigafatbaby:852788110764539925" ":floppajannies:806324417327005726" "a:bruhlick:854425976817188895" "a:boomheadsh0t:866107778497904651" "a:benmallet:850772357664210945" "a:shoebill:854448782602010625"}}
//trigger on "." regex (users with babyeat role only)
{{addReactions ":babyeat:840071130416545802" }}
//trigger on -kickvol command
{{ $name := .User}}
{{ $title := (joinStr "" $name  " chungus!") }}
{{$embed := cembed 
	"title" $title
	"description" "Big!"
	"color" 7957098
	"thumbnail" (sdict "url" "https://media.tenor.com/images/d0e7b922dd214421c04a779e125dec2f/tenor.gif" ) 
}}
{{ sendMessage nil $embed }}
//trigger on "." regex (users with silly role only)
{{addReactions ":sillytime3:831948451432366080"}}
//trigger on "(?i)(😳|flush|owo|uwu)" regex
<:JokieBonk:832453866623598632> Go to horny jail, <@!{{.User.ID}}>!
//trigger on -lassalle command
{{if eq (len .Args) 2}}
	The Jewish [mfer] {{index .CmdArgs 0}} who, I’m glad to say, is leaving at the end of this week, has happily lost another 5,000 talers in an ill-judged speculation. The chap would sooner throw money down the drain than lend it to a ‘friend’, even though his interest and capital were guaranteed. In this he bases himself on the view that he ought to live the life of a Jewish baron, or Jew created a baron (no doubt by the countess). Just imagine! This fellow, knowing about the American affair, etc., and hence about the state of crisis I’m in, had the insolence to ask me whether I would be willing to hand over one of my daughters to la Hatzfeldt as a ‘companion’, and whether he himself should secure Gerstenberg’s (!) patronage for me! The fellow has wasted my time and, what is more, the dolt opined that, since I was not engaged upon any ‘business’ just now, but merely upon a ‘theoretical work’, I might just as well kill time with him! In order to keep up certain dehors vis-à-vis the fellow, my wife had to put in pawn everything that wasn’t actually nailed or bolted down!
{{else}}
	Correct usage of the command: -lassalle <target> 
{{end}}
//trigger on -bakunin command
{{if eq (len .Args) 2}}
	{{index .CmdArgs 0}} has become a monster, a huge mass of flesh and fat, and is barely capable of walking any more. To crown it all, he is sexually perverse and jealous of the seventeen year-old Polish girl who married him in Siberia because of his martyrdom. He is presently in Sweden, where he is hatching ‘revolution’ with the Finns.
{{else}}
	Correct usage of the command: -bakunin <target> 
{{end}}
//trigger on messages that contain "😎"
{{addReactions ":deadinside:867473139016531979"}}