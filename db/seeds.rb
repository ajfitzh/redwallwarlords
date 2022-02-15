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


"Seeding Posts..."
Post.create(title:'Pogs Pogs Pogs', content: "I love em. What can I say?", user_id: 1)
Post.create(title:'Gotta Gem Me Some Pogs', content: "There once was a time when I didn't like Pogs. But I was an idiot then.", user_id: 2)
Post.create(title:"Gotta Pog 'Em All!", content: "I caught all 30,000 Pogs, but I still want more!", user_id: 2)
Post.create(title:"To Pog, or Not To Pog?!", content: "I beat Yorick yesterday and got all his Pogs! What an idiot!!", user_id: 3)
Post.create(title:"Moldovan Pogs - Just As Good As The Real Thing From Hawaii?", content: "No. No, they're not. I spent five grand for really bad Pogs.", user_id: 4)
Post.create(title:"The Pog Princess", content: "I made it my quest to catch all Pogs with dresses- I completed my quest last week! Here's my story...", user_id: 1)
Post.create(title:"Frederick Pog The Fourth", content: "Have you ever wondered, what would it be like to have a Pog from the 14th century? I did! First...", user_id: 2)
"Seeding Comments..."
Comment.create(text: "You're a Butt Burglar.", user_id:3, post_id:1)
Comment.create(text: "You've been Burgled! Where's Your Butt?", user_id:4, post_id:1)
Comment.create(text: "You're a Real Butt Snatcher.", user_id:1, post_id:1)