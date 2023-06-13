// Bonk
{{$userlist := (cslice 634020020522844160 917788776502267904) }}
{{if in $userlist .User.ID }}
	<:JokieBonk:998688845472211056> Go to horny jail, <@{{.User.ID}}>!
{{else}}
	{{if ge (len .CmdArgs) 1}}
		<:JokieBonk:998688845472211056> Go to horny jail, {{joinStr " " .CmdArgs}}!
	{{else}}
		Correct usage of the command: -bonk<target> 
	{{end}}
{{end}}

//shutuprayz
{{/* CONFIGURATION HERE CHANGE VALUES AS NEEDED */}}

{{/* 0 for per user, 1 for global */}}
{{$isGlobal := 1}}
{{/* name your cooldown name (anything works) */}}
{{$name := "shutuprayz"}}
{{/* Length of the cooldown (in seconds) */}}
{{$lengthSec := 900}}

{{/* CREATING VARIABLES DO NOT TOUCH */}}
{{$id := 0}}
{{$key := print "cooldown_" $name}}
{{if eq $isGlobal 0}}
{{$id = .User.ID}}
{{end}}


{{if dbGet (toInt64 $id) $key}} 
:stopwatch: Cooldown active, try again later.
{{/* Code to execute when cooldown is active */}}
{{else}}
{{/* Create cooldown entry */}}
{{dbSetExpire (toInt64 $id) $key "cooldown" $lengthSec}}

{{execAdmin "timeout" 931193632294318131 "5m" "Shut up Rayz!" }}
{{end}}

//lassalle
{{$text := "Lassalle"}}
{{if .CmdArgs}}
	{{$text = (joinStr " " .CmdArgs)}}
{{end}}
The Jewish [[redacted]] {{$text}} who, I’m glad to say, is leaving at the end of this week, has happily lost another 5,000 talers in an ill-judged speculation. The chap would sooner throw money down the drain than lend it to a ‘friend’, even though his interest and capital were guaranteed. In this he bases himself on the view that he ought to live the life of a Jewish baron, or Jew created a baron (no doubt by the countess). Just imagine! This fellow, knowing about the American affair, etc., and hence about the state of crisis I’m in, had the insolence to ask me whether I would be willing to hand over one of my daughters to la Hatzfeldt as a ‘companion’, and whether he himself should secure Gerstenberg’s (!) patronage for me! The fellow has wasted my time and, what is more, the dolt opined that, since I was not engaged upon any ‘business’ just now, but merely upon a ‘theoretical work’, I might just as well kill time with him! In order to keep up certain dehors vis-à-vis the fellow, my wife had to put in pawn everything that wasn’t actually nailed or bolted down!

//locknick
{{$args := parseArgs 1 "Syntax is <user> <reason>"
    (carg "user" "User to mute")
    (carg "string" "reason")
}}
{{ $reason := "(No reason(s) specified)"}}
{{ if $args.IsSet 1}}
    {{ $reason = $args.Get 1}}
{{end}}

{{$excname := (joinStr "" .User.String " (ID " (toString .User.ID) ") ")}}
{{$target := $args.Get 0}}
{{takeRoleID $target 855837373459988480}}
{{giveRoleID $target 859306267054964736}}
:lock: Locked nickname of user {{$target.Mention}}!
{{$embed := cembed 
        "title" (joinStr "" ":lock: Locked nickname " $target " (ID " $target.ID ")") 
        "description" (joinStr "" ":page_facing_up: Reason: " $reason )
        "color" 4645612
        "author" (sdict "name" $excname "icon_url" (.User.AvatarURL "256")) 
        "thumbnail" (sdict "url" ($target.AvatarURL "256") ) 
}}
{{ sendMessage 855867355242430474 $embed }}

//unlocknick
{{$args := parseArgs 1 "Syntax is <user> <reason>"
    (carg "user" "User to unmute")
    (carg "string" "reason")
}}
{{ $reason := "(No reason(s) specified)"}}
{{ if $args.IsSet 1}}
    {{ $reason = $args.Get 1}}
{{end}}

{{$excname := (joinStr "" .User.String " (ID " (toString .User.ID) ") ")}}
{{$target := $args.Get 0}}
{{takeRoleID $target 859306267054964736}}
{{giveRoleID $target 855837373459988480}}
:lock: Unlocked nickname of user {{$target.Mention}}!
{{$embed := cembed 
        "title" (joinStr "" ":unlock: Unlocked nickname " $target " (ID " $target.ID ")") 
        "description" (joinStr "" ":page_facing_up: Reason: " $reason )
        "color" 4645612
        "author" (sdict "name" $excname "icon_url" (.User.AvatarURL "256")) 
        "thumbnail" (sdict "url" ($target.AvatarURL "256") ) 
}}
{{ sendMessage 855867355242430474 $embed }}

//selfban
{{execAdmin "ban" .User "selfban" }}
