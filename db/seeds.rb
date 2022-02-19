# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

"Seeding Users..."
User.create(username:"Todd Packer", password:"bonk", password_confirmation:"bonk", email: "toddfpacker@dundermifflin.com", avatar_url:"https://vignette.wikia.nocookie.net/theoffice/images/6/61/Todd_Packer.jpg/revision/latest?cb=20150916222108", bio:"A huge pog nerd.")
User.create(username:"Snoop Pogg", password:"snoop", password_confirmation:"snoop", email: "snoop@dog.pog", avatar_url:"https://celebritycowboy.com/wp-content/uploads/2018/08/snoop-dogg.jpg", bio:"Smokin' Doobies with my Pogs")
User.create(username:"Helen", password:"kathryn", password_confirmation:"kathryn", email: "kathryn.hahn@pog.blog", avatar_url:"https://s3-us-west-2.amazonaws.com/assets.bleeckerstreetmedia.com/direct-uploads/578e7903d21a7-e1w2n1c1r105.jpg", bio:"Ah-May-Zing Pogs!")
User.create(username:"Jim Halpert", password:"asianjim", password_confirmation:"asianjim", email: "jim@nevernoticed.pog", avatar_url:"https://lh5.googleusercontent.com/proxy/LDt8G7VtMjdR83CCq3Uqbin0-FJ0Zmy-WNZCOGAM9fmonZJmC9HmpQV6SgPnFecnUT_3r2dTA4RJ4oIaLBbQoyWEdjQz4vXymIcZBuTN2Zi2IAJ_OcI9Ulg=w1200-h630-p-k-no-nu", bio:"Dwight Hates My Pogs")
User.create(username:"Dwight 'The Pogster' Schrute", password:"dwigt", password_confirmation:"dwigt", email: "bobbleheadjoe@dog.pog", avatar_url:"http://images4.fanpop.com/image/photos/16100000/Dwight-dwight-schrute-16100666-512-288.jpg", bio:"False. I love Pogs.")
User.create(username:"PogMan", password:"pog", password_confirmation:"pog", email: "pog@pog.pog", avatar_url:"https://uploads-ssl.webflow.com/5f05baa3a37848152789d34e/5f1a93fe48ff5b1e2a6b5580_pogman_5.png", bio:"Pogs! Pogs! Pogs!")



"Seeding Warlords... (not implemented)"
"Seeding Clans... (not implemented)"