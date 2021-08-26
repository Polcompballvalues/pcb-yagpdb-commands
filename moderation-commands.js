//trigger on command -locknick
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 756927201332690956}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 784114924715769866}}
    :lock: Locked nickname of user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":lock: Locked nickname " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 756927201332690956}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 784114924715769866}}
    :lock: Locked nickname of user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":lock: Locked nickname " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -unlocknick
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 784114924715769866}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 756927201332690956}}
    :unlock: Unlocked nickname of user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":unlock: Unlocked nickname " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 784114924715769866}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 756927201332690956}}
    :unlock: Unlocked nickname of user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":unlock: Unlocked nickname " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -imgmute
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 791349117171269702}}
    :camera: Image muted user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":camera: Image muted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 791349117171269702}}
    :camera: Image muted user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":camera: Image muted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -imgunmute
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 791349117171269702}}
    :camera_with_flash: Image unmuted user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":camera_with_flash: Image unmuted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 791349117171269702}}
    :camera_with_flash: Image unmuted user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":camera_with_flash: Image unmuted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -sermute
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
	{{giveRoleID (userArg (index .CmdArgs 0)) 775555005540859954}}
	:mute: Serious muted user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":mute:Serious Muted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
	{{giveRoleID (userArg (index .CmdArgs 0)) 775555005540859954}}
	:mute: Serious muted user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":mute:Serious Muted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -serunmute
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 775555005540859954}}
    :sound: Serious unmuted user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":sound: Serious unmuted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 775555005540859954}}
    :sound: Serious unmuted user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":sound: Serious unmuted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -idmute
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 805146286721859604}}
    :no_pedestrians: Ideology muted user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":no_pedestrians: Ideology muted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 805146286721859604}}
    :no_pedestrians: Ideology muted user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":no_pedestrians: Ideology muted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command idunmute
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 805146286721859604}}
    :mens: Ideology unmuted user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":mens: Ideology unmuted user " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 805146286721859604}}
    :mens: Ideology unmuted user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":mens: Ideology unmuted user " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -reactmute
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 874980021398306846}}
    :zipper_mouth: Reaction muted user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":zipper_mouth: Reaction muted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{sendMessage 784156505817088020 $embed }}
{{else}}
    {{giveRoleID (userArg (index .CmdArgs 0)) 874980021398306846}}
    :zipper_mouth: Reaction muted user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":zipper_mouth: Reaction muted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -reactunmute
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 874980021398306846}}
    :open_mouth: Reaction unmuted user {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":open_mouth: Reaction unmuted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{sendMessage 784156505817088020 $embed }}
{{else}}
    {{takeRoleID (userArg (index .CmdArgs 0)) 874980021398306846}}
    :open_mouth: Reaction unmuted user {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":open_mouth: Reaction unmuted " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
	}}
	{{sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -oneimage
{{$excname := (joinStr "" (toString .User.String) " (ID " (toString .User.ID) ") ")}}
{{$avatar := .User.AvatarURL "256" }}
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$targetavatar := ($targetname).AvatarURL "256"}}
{{if eq (len .Args) 2}}
	{{giveRoleID (userArg (index .CmdArgs 0)) 852025777897340968}}
	{{takeRoleID (userArg (index .CmdArgs 0)) 852025777897340968 300}}
	:frame_photo: Gave temporary image perms to {{index .CmdArgs 0}}!
	{{$reason := "(No reason specified)"}}
	{{$embed := cembed 
		"title" (joinStr "" ":frame_photo: Granted image perms to " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
		"footer" (sdict "text" "Duration: 5 Minutes" ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{else}}
	{{giveRoleID (userArg (index .CmdArgs 0)) 852025777897340968}}
	{{takeRoleID (userArg (index .CmdArgs 0)) 852025777897340968 300}}
	:frame_photo: Gave temporary image perms to  {{index .CmdArgs 0}}!
	{{$reason := (joinStr " " (slice .CmdArgs 1))}}
	{{$embed := cembed 
		"title" (joinStr "" ":frame_photo: Granted image perms to " $targetname " (ID " $targetid ")") 
		"description" (joinStr "" ":page_facing_up: Reason: " $reason )
		"color" 4645612 
		"author" (sdict "name" $excname "icon_url" $avatar) 
		"thumbnail" (sdict "url" $targetavatar ) 
		"footer" (sdict "text" "Duration: 5 Minutes" ) 
	}}
	{{ sendMessage 784156505817088020 $embed }}
{{end}}
//trigger on command -approve
{{$targetname := (userArg (index .CmdArgs 0))}}
{{$targetid := ($targetname).ID }}
{{$usertag := (joinStr "" "<@!" $targetid ">")}}
{{if targetHasRoleID  $targetid 756927201332690956}}
	:negative_squared_cross_mark: User is already approved
{{else}}
	{{if eq (len .Args) 2}}
		{{giveRoleID $targetid 756927201332690956}}
		:ballot_box_with_check: {{(userArg .User.ID).Mention}} approved user {{index .CmdArgs 0}}!
		{{sendMessage 774491019705712640 (joinStr "" "Welcome to Polcompball <@!" $targetid ">, head over to <#844762506693574676> for your quadrant and cultural roles and here you can pick additional roles by typing `!rank` followed by the name of your desired role or alternatively you can get all of them in our roleypoly link: https://roleypoly.com/s/756897801790554113" )}}
	{{else}}
		{{if eq (len .Args) 3}}
			{{giveRoleID (userArg (index .CmdArgs 0)) 784114924715769866}}
			:ballot_box_with_check: {{(userArg .User.ID).Mention}} approved user {{index .CmdArgs 0}}!
		{{else}}
			Correct usage of the command: -approve <target> (modifier)
		{{end}}
	{{end}}
{{end}}
//trigger on -fed command
{{if hasRoleID 835502264805228552}}
	{{removeRoleID 835502264805228552}}
	<:fedposter:820309521133076490> Removed federal agent role.
{{else}}
	{{addRoleID 835502264805228552}}
	<:fedposter:820309521133076490> Added federal agent role.
{{end}}
//trigger on -selfmute command
{{if eq (len .Args) 2}}
	{{$tspan := (index .CmdArgs 0)}}
	{{execAdmin "mute" .User $tspan "selfmute" }}
{{else}}
	Correct usage of the command: -selfmute <timespan> 
{{end}}
//trigger on "." regex (users with federal agent role only)
{{deleteMessage nil .Message.ID 60}}
{{addReactions ":fedposter:820309521133076490" "⏱️"}}
//trigger on "(?i)(nigga|nig\b|nigs\b)" regex
{{deleteMessage nil .Message.ID 86400 }} 
