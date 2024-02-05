import './facts.css'
export default function Facts(){
    let fct=["You can tell the temperature by counting a cricket’s chirps!","Sandstorms can swallow up entire cities.","Dirt mixed with wind can make dust storms called black blizzards","A mudslide can carry rocks, trees, vehicles and entire buildings!",
            "The coldest temperature ever officially recorded was -89.2°C. Brrrr!",
            "Mild autumn weather often means bigger spiders in our homes.",
            "A heatwave can make train tracks bend!",
            "About 2,000 thunderstorms rain down on Earth every minute.",
            "A 2003 heatwave turned grapes to raisins before they were picked from the vine!",
            "Lightning often follows a volcanic eruption",
            "Raindrops can be the size of a housefly and fall at more than 30kmph.",
            " Cape Farewell in Greenland is the windiest place on the planet.",
            " Hurricanes can push more than 6m of water ashore.",
            " In July 2001 the rainfall in Kerala, India, was blood red!",
            "Blizzards can make snowflakes feel like pellets hitting your face",
            "A hurricane in Florida, USA, caused 900 captive pythons to escape.",
            "Worms wriggle up from underground when a flood is coming.",
            " A thunderstorm can produce 160kmph winds!",
            "In Antarctica, snow can fall so hard you can’t see your hand in front of your face",
            "A whiteout or heavy snowfall that makes it difficult to see, can make you feel sick",
            "Wildfires sometimes create tornadoes made of fire called fire whirls",
            " In 1972, a blizzard dumped 8m of snowfall on Iran, burying 200 villages",
            "Some tornadoes can be faster than formula one racing cars!",
            "Black ice, a transparent coating of ice on a surface, can make pavements super-slippery",
            "Some frogs get noisier just before it rains",
            "In 525 BC a sandstorm buried hundreds of soldiers in an Egyptian desert.",
            "Waterspouts, or rotating columns of air over water, can make sea creatures rain down from the sky",
            " The most damage ever caused by a thunderstorm was in 1995, when hailstones bigger than cricket balls fell in Texas, USA",
            "In 1684, it was so cold that the River Thames froze solid for two months",
            "Cats and dogs have been known to sense when a tornado is approaching."
]
    let ind=Math.floor(Math.random() * 30)
    return(
        <figure className="quote">
            <blockquote><h1 className="fct">Did you know:<q>{fct[ind]}</q></h1></blockquote>
        </figure>
    )
}