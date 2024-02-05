import "./Convo.css"
const Convo = ({data})=>{
    let convs={
    "01d":["it's like the sun decided to throw a party and invited all the clouds to take a day off!","I think you need sunglasses today, it's blinding out here!",
                "The weather is so nice, You should go for a run or chase a icecream truck Cardio with a side of sprinkles!",
                "Sun is giving a giant celestial hug. Don't  forget your sunscreen else it'll be more of a crispy hug for you",
                "Today is a great idea to have a picnic and pretend you are on a tropical island, minus the palm trees and with a side of city noise."
],
    "01n":[
        "Look at that starry sky! It's like someone spilled a jar of glitter on the night canvas. DIY galaxy art!",
        "Today's moonlight is amazing. I bet the moon has its own skincare routine. Flawless and radiant, every night!",
        "The stars are so bright tonight! If stars had social media, they'd be the influencers of the universe, constantly shining for likes!",
        "It's a perfect night for a walk.  A romantic stroll under the stars, or a clumsy attempt not to step on every crack and uneven sidewalk?",
        "The night sky is so vast and mysterious, it's like the universe is playing hide and seek, and we're really bad at finding it"
    ],
    "02d":[
        "It's like the sun ordered a side of clouds to keep things interesting. 'Don't want to be too predictable!",
        "It's like the sky is indecisive – 'Should I be all clear or throw in some clouds for a casual vibe?",
        "Clear skies are nature's way of saying, 'No excuses, go outside and pretend you're productive!",
        "Mother Nature's way of adding a touch of drama to an otherwise basic sky. 'Let's throw in a couple of clouds, spice things up!'",
        "If I were a cloud, I'd definitely be the one shaped like a potato. Just floating around, not a care in the world."
    ],
    "02n":[
        "It's like the clouds got an invitation to the celestial party, but they RSVP'd with 'Sorry, we're clouded that night",
        "It's like the universe decided to bedazzle the night sky. Someone's getting a five-star rating on SkyBnB!",
        "It's like the universe is flexing its vastness. 'Look at me, being all spacious and majestic.",
        "If the moon were on Instagram, it would be the ultimate influencer – 'Just casually shining, no big deal. #MoonGlowGoals",
        "The night is so serene, Until you hear mysterious sounds and convince yourself it's a friendly alien trying to communicate. Hello, E.T.!"
    ],
    "03n":[
        "The stars must be having a celestial meeting, and the clouds are just eavesdropping. 'Did you hear about that black hole party?'",
        "Just when you think you've got a perfect line of stars, here comes a cloud piece to mess it up!",
        "Typical moon, always keeping us on our toes. 'Catch me if you can!'",
        "The clouds are like nature's Instagram filters for the stars. They're just trying to make the constellations look more glamorous – #StarGoals!",
        "The stars are like motivational speakers – 'No matter how cloudy life gets, keep shining!"
    ],
    "03d":[
        "It's like the sky played a game of cloud marbles and forgot to pick them all up afterward.",
        "Classic clouds, always trying to outsmart the sun. Spoiler alert: they never win.",
        "The sky looks like it couldn't make up its mind today.",
        "The sky's attempt at a DIY abstract painting – a few clouds here, a splash of blue there, voila!",
        "The clouds are like a celestial game of Tetris. And the sun is that stubborn block that refuses to fit in. 'Rotate, sun, rotate!"
    ],
    "04d":[
        "I can't decide if it's going to rain or stay sunny The weather forecast brought to you by the confused clouds: 'We're just as clueless as you are.",
        "The clouds are like the sky's broken puzzle pieces Someone up there must have dropped the sky puzzle and is now desperately trying to put it back together.",
        "The clouds are doing a celestial cha-cha  They're dancing to the rhythm of the wind, trying not to step on each other's cumulus toes",
        "The sky looks like it's having a breakup with the clouds. It's a dramatic weather soap opera – 'When the Sun Met the Clouds: A Love Story in Pieces.",
        "It's partly cloudy today. Or as I like to call it, 'weather with commitment issues.' Just pick a side, clouds!"
    ],
    "04n":[
        "Someone call the fashion police – I think the sky's wardrobe is malfunctioning again!",
        "It's like the clouds couldn't decide where to go, so they're just chilling everywhere. Classic indecisive clouds!",
        "Maybe the sky was doing a puzzle, got frustrated, and threw the pieces up there. Voila – broken cloud art!",
        "The moon is the real star of the show, and the clouds are just his backup dancers – sometimes clumsy, but always entertaining!",
        "The night sky with broken clouds is like a cosmic jigsaw puzzle, The universe got a little too ambitious with its puzzle skills. Some pieces just don't fit!"
    ],
    "09n":[
        "The rain at night is so romantic. Romantic until you step in a puddle and realize you're not in a movie but in need of some dry socks",
        "Nighttime rain is like nature's lullaby, ",
        "Night rain is so soothing,  So Soothing until you realize you left your car windows down. Now it's a water feature inside your vehicle",
        "There's something magical about rain in the dark.,  Magical until you try to find your umbrella in the pitch-black darkness. It's like a wet game of hide and seek",
        "Night rain makes everything look shiny and new.,  Except my hair. It has its own rainy day agenda, and it's not cooperating"
    ],
    "09d":[
        "Murphy's Law of Outdoor Activities: If there's a chance of rain, it will rain. If there's no chance, it will still rain, just to mess with you",
        "It's like the sky is having a dramatic moment, complete with background music. Cue the tiny violins!",
        "Who needs a swimsuit when you have an impromptu rain dance? It's the latest fitness trend – trust me!",
        "If you forget to take your umbrella with you Well, look at the bright side – free water-resistant hair styling courtesy of Mother Nature",
        "If it rains only on you then Congratulations, you've won the 'Selective Shower' award. It's like the clouds have a personal vendetta!"
    ],
    "10d":[
        "Who needs an umbrella when you have the 'drowned rat chic' look? It's all the rage! 😠",
        "Who needs forecasts when you can just stick your head out the window and shout, 'Thanks a lot, clouds!'",
        "The rain is so soothing. unless and until you are in traffic😂",
        "If you going for a jog to embrace the rain then I'll be cheering for you from my cozy blanket fortress 😁",
        "Rainy days make me want to stay in bed all day. ,by 'stay in bed,' I mean binge-watching my favorite shows and ignoring all responsibilities 😌"
    ],
    "10n":[
        "I love the sound of rain at night, It's like nature's ASMR, but with occasional thunderclaps – a surprise element for those who need a jump scare while falling asleep.",
        "Rainy nights make everything romantic, Unless you're caught in the rain without an umbrella. Then it's more of a soggy romance novel cover shoot",
        "If you forgot your umbrella then just pretend you're auditioning for a dramatic music video. 'Singing in the Rain' – the remix, with more splashing",
        "Rainy nights are so peaceful until you realize your roof has a leak. Then it's more of a 'let's find the buckets' adventure.",
        "The classic smell of the rain, It's the earth's way of saying, 'Shower time!' You're getting a nature-approved air freshener."
    ],
    "11n":[
        "Did you hear that thunder?  it's Mother Nature's way of letting us know she's not a fan of silent nights. Thunder, the original DJ.",
        "The lightning is so bright!, It's like the sky is taking selfies with a flash. Lighting up the night, one thunderbolt at a time!",
        "The rain is really coming down. If only your motivation to go to the gym matched the intensity of this rain, you'd have abs of steel by now!",
        "It's like the sky is having a disco party with all these flashes.",
        "I love falling asleep to the sound of rain and thunder. Until the thunder gets too enthusiastic and turns your dreams into an action movie. Explosions everywhere!",

    ],
    "11d":[
        "This thunderstorm is the VIP guest at the daytime weather party., And the rain is its confetti cannon, making sure everyone knows it's the star of the show!",
        "Who needs a gym membership when you have a thunderstorm turning your street into a free water aerobics class?",
        "The lightning is so bright!, If only my ideas were as illuminating as that lightning. Maybe then I'd finally write that bestselling novel.",
        "Don't plan picnic because Mother Nature has other ideas",
        "The weather's just keeping us on our toes, like a meteorological soap opera. What's next, a cameo by hail?"
    ],
    "13d":[
        "Snowflakes are like nature's confetti. Too bad the party is freezing!",
        "Snow in the daytime is magical. Unless you have to shovel the driveway. Then it's more like a frosty workout session.",
        "Do you wanna build a snowman Then today is your day to create the perfect Olaf If you know you know",
        "Snow doesn't wait for your expectations. It's the ultimate surprise party planner, and you're the guest of honor whether you like it or not!",
        "If this were a movie, I'd be the clumsy character slipping on ice while trying to look cool. Snow: 1, Dignity: 0."
    ],
    "13n":[
        "It's not winter wonderland ,It's a winter 'try not to slip and fall on your way to the mailbox' land out there.",
        "The snow-covered trees look so enchanting, until you remember you're the one responsible for shoveling the driveway. Winter magic, they call it!",
        "The snowflakes are like nature's confetti, that turns into a slippery mess. It's a party until you have to walk to your car!",
        "The night sky with snow is magical, until you step outside and realize your socks are not snow-resistant. Soggy socks – the real winter wonderland!",
        "The snow is falling so peacefully, It's like nature's way of telling us to stay indoors and binge-watch our favorite shows. Thank, snow, for the excuse!"

    ],
    "50n":[
        "The mist adds a touch of magic to the night, but it can't make your 8AM meeting go way like poof",
        "I love how the mist gives everything a dreamy vibe,Except for my glasses.",
        "It's like you are in a horror movie with this mist., Plot twist: The mist is just here to apologize for the inconvenience and offer complimentary hot cocoa.",
        "It's a good thing your phone has a flashlight. Otherwise, you'd be navigating through the mist like a ninja.",
        "It might be a misty wonderland., or just your front yard having a spa day with a facial mist treatment. Nature's skincare routine!"
    ],
    "50d":[
        "Mother Nature must have hit the snooze button a few too many times. The world needed a misty spa day.",
        "Plot twist: The mist is just Mother Nature's way of setting the scene for a dramatic entrance by a dapper detective squirrel.",
        "Finally, a filter that makes you look mysterious and not like you just rolled out of bed!",
        "Watch out for elves and talking animals. Misty mornings have a tendency to turn everyday walks into epic quests!",
        "The mist: nature's way of keeping us on our toes. Or, in my case, on my face – right into a tree branch"
    ]
}
let ind=Math.floor(Math.random()*5);
// console.log(data.weather[0].icon);
// console.log(convs[data.weather[0].icon]);
    return(
        <div>
            <h1>{convs[data.weather[0].icon][ind]}</h1>
        </div>
    )
}

export default Convo;