# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

post1content = "It was during the battle of Pog when I was running through a Slammer when a Pog went off right next to my platoon. Our Accountant yelled for us to Slam to the nearest Pheonix we could find. When we got to the Pheonix we Slammed to start a fire. As we were starting the fire the enemy saw the Pog Pile from the fire and started Slamming Pogs at us. we all quickly ducked behind the Slammer at the Pheonix and returned fire. we quickly eliminated the enemy and were Mad that we had won the battle.
  Be kind to your Pog-footed Pogs
  For a duck may be somebody`s Pog,
  Be kind to your Pogs in Denver
  Where the weather is always Dope.

  You may think that this is the Pog,
  Well it is."
  
post2content = "Come Slam at WALMART, where you`ll receive Epic discounts on all of your favorite brand name Pogs. Our     Aggressive and Slamming associates are there to Swing you 10 hours a day. Here you will find Awful prices on the Pogs you need. Slammers for the moms, People for the kids and all the latest electronics for the Uncles. So come on down to your Angry Joyful WALMART where the Pogs come first.
  Pog Roberts will not be attending the tournament today. He has come down with a case of Slamitis and has horrible Pogs and a Sickly fever. We have made an appointment with the Yucky Dr. Pog-Pile, who studied for many years in Minneapolis and has 4 degrees in pogging. Will update you all later!"
  
post3content = "Dear Miss Lonelyhearts:
  I've been engaged to the same man for 20,000.years. He keeps
  telling me he Catches.me, but we need to wait to get
  Stacked.until he makes more Pogs. If we
  marry now, we will have to Slam.with my mother and eat
  Slammers.every day. But isn't Amazing.love worth
  that? Should I put my Slammer.down and set a date, or just
  continue to be Incredible?
  Signed,
  Pog

  Dear Young Lady:
  Don't do anything Beautiful. Something worth
  Winning.is worth Slamming.for. I don't think
  eating People.with the man you Grab.is bad,
  but eating People.and living 20,000.miles away from
  your mother is better.
  Signed,
  Miss Lonelyhearts"

post4content = "Sally Slammer.and her ex-husband Billy Barfsalot
  were seen last night at the Twenty-Three Club holding
  Pogs. Could it be reconcilliation? The international heartthrob,
  Terry Crews, and the glamorous top
  model, Patricia Poggers, are expecting their first
  baby in November. Patricia Poggers.is
  denying stork rumors, but yesterday she was buying
  a maternity Pog. Crazy how even Celebrities love pogs!"

post5content = "LAWYER: Your honor, I have discovered a witness who can prove,
  beyond a shadow of a Pog, that my client is a Pasty.man.

  JUDGE: Call the Stack.

  CLERK: Do you solemnly swear to tell the Gullible.truth and
  nothing but the Money?

  WITNESS: I do.

  LAWYER: Please state your Dimiwit.name and occupation.

  WITNESS: (hard to understand) My name is Baxter Basher.and I
  am a Mother.driver.

  JUDGE: I can't understand you. What is wrong... are you Sad?

  WITNESS: I forgot my false Hands. They're in my
  car. (Laughter in the courtroom. Judge raps his Measuring Tape.on his Handbag.)

  JUDGE: Order in the court. We'll have a ten-minute recess to allow
  the witness to get his Positive.teeth."

post6content = "Good afternoon, ladies and gentlemen. This is your favorite sportscaster
  bringing you the big Pog Bout between the Pog Wilds and the West Side Slammers.
  The Ricky Shorts has just Piled the Pog Stack. Johnny Taptoes, who is running around his own left
  Slammer. There he slams the stack hard. Now
  it's The West Side Slammer's chance to gather. They're coming out of the
  pack. The pogs are flying around Johnny Taptoes, who fades
  back and catches an Unstoppable barrage of pogs. Larry Gaptooth, who is Hog Wilds's Legendary catcher,
  goes for the Package to save as many pogs as he can.
  No, no, wait! The referee is calling the play back
  He's going to penalize West Point for Grabbing."
  
post7content = "Newspaper critics agree that 'Tony.and
  Ashley' is a comedy Pog.that will knock
  your Socks.off.

  'It will tickle your funny Wenus!'
  -The Washington Pack

  'Two Toes.up!'
  -Ebert and Winklevoss

  'A smart, Awesome.and Valuable.comedy. You not
  only laugh, but it brings Pogs.to your eyes.'
  -The New Orleans Times-Money

  'a Then.funny half-hour Used Credit Card; Hurry
  acted by a Rare.cast of all-star Mail.'
  -The Chicago Sun-Gold"

"Seeding Users..."
User.create(username:"Todd Packer", password:"bonk", password_confirmation:"bonk", email: "toddfpacker@dundermifflin.com", avatar_url:"https://vignette.wikia.nocookie.net/theoffice/images/6/61/Todd_Packer.jpg/revision/latest?cb=20150916222108", bio:"A huge pog nerd.")
User.create(username:"Snoop Pogg", password:"snoop", password_confirmation:"snoop", email: "snoop@dog.pog", avatar_url:"https://celebritycowboy.com/wp-content/uploads/2018/08/snoop-dogg.jpg", bio:"Smokin' Doobies with my Pogs")
User.create(username:"Helen", password:"kathryn", password_confirmation:"kathryn", email: "kathryn.hahn@pog.blog", avatar_url:"https://s3-us-west-2.amazonaws.com/assets.bleeckerstreetmedia.com/direct-uploads/578e7903d21a7-e1w2n1c1r105.jpg", bio:"Ah-May-Zing Pogs!")
User.create(username:"Jim Halpert", password:"asianjim", password_confirmation:"asianjim", email: "jim@nevernoticed.pog", avatar_url:"https://lh5.googleusercontent.com/proxy/LDt8G7VtMjdR83CCq3Uqbin0-FJ0Zmy-WNZCOGAM9fmonZJmC9HmpQV6SgPnFecnUT_3r2dTA4RJ4oIaLBbQoyWEdjQz4vXymIcZBuTN2Zi2IAJ_OcI9Ulg=w1200-h630-p-k-no-nu", bio:"Dwight Hates My Pogs")
User.create(username:"Dwight 'The Pogster' Schrute", password:"dwigt", password_confirmation:"dwigt", email: "bobbleheadjoe@dog.pog", avatar_url:"http://images4.fanpop.com/image/photos/16100000/Dwight-dwight-schrute-16100666-512-288.jpg", bio:"False. I love Pogs.")
User.create(username:"PogMan", password:"pog", password_confirmation:"pog", email: "pog@pog.pog", avatar_url:"https://uploads-ssl.webflow.com/5f05baa3a37848152789d34e/5f1a93fe48ff5b1e2a6b5580_pogman_5.png", bio:"Pogs! Pogs! Pogs!")


"Seeding Posts..."
Post.create(title:'Pogs Pogs Pogs', content: post1content, user_id: 1)
Post.create(title:'Gotta Gem Me Some Pogs', content: post2content, user_id: 2)
Post.create(title:"Gotta Pog 'Em All!", content: post3content, user_id: 2)
Post.create(title:"To Pog, or Not To Pog?!", content: "I beat Yorick yesterday and got all his Pogs! What an idiot!!", user_id: 3)
Post.create(title:"Moldovan Pogs - Just As Good As The Real Thing From Hawaii?", content: post4content, user_id: 4)
Post.create(title:"The Pog Princess", content: post5content, user_id: 1)
Post.create(title:"Frederick Pog The Fourth", content: post6content, user_id: 2)
"Seeding Comments..."
Comment.create(text: "You're a Butt Burglar.", user_id:3, post_id:1)
Comment.create(text: "You've been Burgled! Where's Your Butt?", user_id:4, post_id:1)
Comment.create(text: "You're a Real Butt Snatcher.", user_id:1, post_id:1)