# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

"Seeding Users..."
User.create(username:"Admin Account", password:"admin", password_confirmation:"admin", email: "austin.j.fitzhugh@gmail.com", avatar_url:"null", bio:"null")
User.create(username:"Orcrist", password:"bonk", password_confirmation:"bonk", email: "orcrist@dundermifflin.com", avatar_url:"https://vignette.wikia.nocookie.net/theoffice/images/6/61/Todd_Packer.jpg/revision/latest?cb=20150916222108", bio:"An old alliance member")
User.create(username:"Stormclaw", password:"storm", password_confirmation:"storm", email: "stormclaw@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"Lady Shael", password:"sha", password_confirmation:"sha", email: "shael@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"wolf", password:"wolf", password_confirmation:"wolf", email: "wolf@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"peace", password:"peace", password_confirmation:"peace", email: "peace@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"yellow", password:"yellow", password_confirmation:"yellow", email: "yellow@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"ereptor", password:"ereptor", password_confirmation:"ereptor", email: "ereptor@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"blood wake", password:"blood", password_confirmation:"blood", email: "bloodwake@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"tallarn", password:"tallarn", password_confirmation:"tallarn", email: "tallarn@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"ragefur", password:"ragefur", password_confirmation:"ragefur", email: "ragefur@verizon.net", avatar_url:"null", bio:"null")
User.create(username:"volkov", password:"voklov", password_confirmation:"voklov", email: "volkov@verizon.net", avatar_url:"null", bio:"null")

"Seeding Races..."
Race.create(name: "Rat",         offense:25, defense:-5, build:15, costs: -10, loyalty: -10, training: 25, income: 00, scouting:-15, mercenaries: 25, food: 30, leadership:-10, foraging:05)
Race.create(name: "Painted One", offense:00, defense:00, build:10, costs: -25, loyalty: 000, training: 00, income: 00, scouting: 25, mercenaries:  0, food:-10, leadership:  0, foraging:00)
Race.create(name: "Stoat",       offense:25, defense:-5, build:25, costs: 10,  loyalty: 000, training: 05, income: 10, scouting:-10, mercenaries: 10, food: 20, leadership: 15, foraging:10)
Race.create(name: "Fox",         offense:00, defense:15, build:-5, costs: 20,  loyalty: 000, training: -5, income: 15, scouting: 20, mercenaries:-15, food: 10, leadership: 15, foraging:-20)
Race.create(name: "Wildcat",     offense:10, defense:10, build:20, costs: 00,  loyalty: -10, training: 5,  income:-10, scouting: 10, mercenaries: 10, food: 00, leadership: 20, foraging:-10)
Race.create(name: "Lizard",      offense:-5, defense:25, build:00, costs: -15, loyalty: -10, training: 15, income: 00, scouting:-15, mercenaries: 20, food: 00, leadership:-15, foraging:20)
Race.create(name: "Wolf",        offense:00, defense:10,build:-10, costs: 25,  loyalty:  15, training: -10,income: 00, scouting:  0, mercenaries: 15, food: -5, leadership: 25, foraging:15)
Race.create(name: "Marten",     offense:-10,defense:-10, build:10, costs: 00,  loyalty:  10, training: -5, income: 10, scouting:-15, mercenaries: -5, food: 20, leadership: 15, foraging:-10)
Race.create(name: "Magpie",      offense:10, defense:-5, build:20, costs: -15, loyalty:  00, training: 00, income: 25, scouting:  0, mercenaries:-15, food: 10, leadership:-10, foraging:-10)
Race.create(name: "Ferret",      offense:-5, defense:10, build:20, costs: 10,  loyalty:  00, training: 00, income:-10, scouting:  0, mercenaries:-15, food:-15, leadership:-10, foraging:25)

"Seeding Locations..."
Location.create(name: "Southsward", description: "A safe place, flat land easy for scouting" , training: 0, loyalty: 0, scouting: 80, workers: 0)
Location.create(name: "Mossflower", description: "The home of Redwall- a place for devious schemes but fewer soldiers" , training: -20, loyalty: 20, scouting: 0,workers: 0)
Location.create(name: "Northlands", description: "The cold, industrious Northlands" , training: 20, loyalty: -20, scouting: 0,workers: 80)
"Seeding Clans..."
Clan.create(title: "Unaffiliated", abbreviation: "None", founder_id: 1, password: "none")
Clan.create(title: "Empire Of Delor", abbreviation: "Delor",banner_url: "https://s3.amazonaws.com/colorslive/jpg_512x512/1134614-lXqjUGjSH_ZMyWqh.jpg" ,founder_id: 3, password: "delor")
Clan.create(title: "League of the Scarlet Pimpernel",banner_url: "https://clipground.com/images/hanseatic-league-clipart-20.jpg" ,abbreviation: "League", founder_id: 12, password: "ulster")
Clan.create(title: "Delores Imperium",banner_url: "https://external-preview.redd.it/mYFcAs0iEfkI3UjDen8ETA3a8Kb1q388OqAO1xEotyU.png?auto=webp&s=6305250b5bc74ba11c4c94acbacf9b281dae3958", abbreviation: "DI", founder_id: 7, password: "ulster")

"Seeding Warlords..."
Warlord.create(user_id:1, name: "Admin Account", coa_url: "", race_id:1, location_id:1, clan_id:1, land:0, networth:0)
Warlord.create(user_id:2, name: "Orcrist's Raiders", coa_url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F17rg073sukbm1lmjk9jrehb643.wpengine.netdna-cdn.com%2Fwp-content%2Fuploads%2F2013%2F11%2Fcluny-800x0-c-default.jpg&f=1&nofb=1", race_id:3, location_id:2, clan_id:1, land: 10000, networth: 18500000 )
Warlord.create(user_id:3, name: "StormClaw", coa_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fredwall%2Fimages%2F3%2F3a%2FViluDaskar.jpg%2Frevision%2Flatest%3Fcb%3D20060125045825&f=1&nofb=1", race_id:8, location_id:1, clan_id:2, land: 45000, networth: 100000000 )
Warlord.create(user_id:4, name: "Daughters of Delor", coa_url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F_zoeLvLwFbUo%2FS4cblJ7mJSI%2FAAAAAAAAA00%2F2iamDbv-ck0%2Fs400%2FSable_Quean_Vilaya_by_mushyZ.jpg&f=1&nofb=1", race_id:4, location_id:1, clan_id:2, land: 37050, networth: 87000000 )
Warlord.create(user_id:5, name: "wolf bite", coa_url: "http://images.wikia.com/redwall/images/a/a2/Tam_front.jpg", race_id:7, location_id:3, clan_id:1, land: 30000, networth:  45000000 )
Warlord.create(user_id:6, name: "Peace Alliance", coa_url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Fredwall%2Fimages%2Fb%2Fbd%2FCluny54.jpg%2Frevision%2Flatest%3Fcb%3D20080315021115&f=1&nofb=1", race_id:6, location_id:3, clan_id:1, land: 15000, networth:  34000000 )
Warlord.create(user_id:7, name: "windhounds", coa_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fee7c1d70-7b68-476c-8bf9-5b3088d7e0c9%2Fdbwrwhq-c302d1fa-fb53-4fe6-a9cb-e32f516d8302.jpg%2Fv1%2Ffill%2Fw_1024%2Ch_809%2Cq_75%2Cstrp%2Fredwall_villains__badrang_the_tyrant___by_fortunatafox_dbwrwhq-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA5IiwicGF0aCI6IlwvZlwvZWU3YzFkNzAtN2I2OC00NzZjLThiZjktNWIzMDg4ZDdlMGM5XC9kYndyd2hxLWMzMDJkMWZhLWZiNTMtNGZlNi1hOWNiLWUzMmY1MTZkODMwMi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xqoemBPRLmpsXBXm-dXZzSSWeJlwP07orkwJrtSgRX4&f=1&nofb=1", race_id:6, location_id:3, clan_id:4, land: 7580, networth: 52000000 )
Warlord.create(user_id:8, name: "Ereptor's Raiders", coa_url: "https://i.pinimg.com/736x/4b/f5/a6/4bf5a62698ff0919fb0fbd7daf980d9f.jpg", race_id:5, location_id:2, clan_id:1, land: 28011, networth: 23000000 )
Warlord.create(user_id:9, name: "Blood Wake's Scorchers", coa_url: "https://i.pinimg.com/originals/49/00/9e/49009e271a7a37c6cca0906a4f638944.jpg", race_id:3, location_id:2, clan_id:1, land: 27000, networth: 14000000 )
Warlord.create(user_id:10, name: "Mtsenskovite Army", coa_url: "https://i.ytimg.com/vi/JBwcwUjNDgU/hqdefault.jpg", race_id:2, location_id:1, clan_id:1, land: 24350, networth: 8500000 )
Warlord.create(user_id:11, name: "Ragefur's Band", coa_url: "https://vignette.wikia.nocookie.net/redwallwars/images/7/73/Redwall_races_stoat_by_chichapie-d3271gu.jpg/revision/latest?cb=20111025185322", race_id:1, location_id:3, clan_id:1, land: 37000, networth: 72000000 )
Warlord.create(user_id:12, name: "The Hounds of Ulster", coa_url: "http://2.bp.blogspot.com/-WA3U0jfZpSg/UfxLk7qadEI/AAAAAAAAAVU/9_cG_bMOp6w/s1600/Ulster+Flag.GIF", race_id:3, location_id:2, clan_id:3, land: 27000, networth: 52000000 )