//declare the variables
const storyText = document.getElementById('story-text');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');
const storyImage = document.getElementById('story-image'); 
const finalText1 = document.getElementById('final-text-1');
const finalText2 = document.getElementById('final-text-2');
const backgroundAudio = document.getElementById('background-audio');
// Initial story state
let storyState = 0;
//Audio inputs
backgroundAudio.src = 'pipe-organ.mp3';
backgroundAudio.loop = true;
//The Story 
const story = [
    {
        text: "Knight Mansion",
        image: "images-js/london.jpeg",
        choices: ["The Game is Afoot"]
    },
    { //Starting fork 1
        text: "Fog rolls off the Thames seeping into the darkest corners of London as you find yourself strolling across darkened alleyways. A cautionary tale begins as you find yourself at a fork in the road.",
        image: "images-js/alley2.jpeg",
        choices: ["Go Left", "Go Right"],
    },
    {//Go left 2
        text: "As you follow down the left path, a young orphan whirls past you, like a ghost in the night. Your hand reaches into the pocket of your coat feeling the absence your last shilling. Intead, you find a beaten up scrap of paper. Unfolding the crinkles, the paper reads 'She got what she deserved.' Under the blood red ink sits an engraving of the Knight family crest. ",
        image: "images-js/note.png",
        choices: ["Proceed to the mansion"]
    },
    {//Go right 3
        text: "You follow the right path, bumping head first into a member of the Scotland Yard. Apologizing profusely you collect yourself. The officer looks at you intently before speaking, 'Detective, a murder has taken place at Knight Mansion last evening. I must entrust you with solving the case.' Without another word, he disappears into the mist. ",
        image: "images-js/yard.jpeg",
        choices: ["Proceed to the mansion"]
    },
    {//proceed to the mansion 4
        text: "As you proceed to the mansion a clouded scene engulfs you. Thorn eyed creatures perch atop the adorned structure, eyes following every step you take. Gothic towers loom in the distance. Woven strands of cobwebs tangle across the mansions entrance almost preventing you from entering.",
        image: "images-js/mansion.jpeg",
        choices: ["Enter the mansion", "Run Away"]
    },
    {//Enter the mansion 5
        text: "As you approach the entrance of the mansion, the door creaks open with a groan, illuminating a foyer crawling with shadows. A single chandelier trembles, threatening to collapse through the floor. A voice echoes through the room, 'Welcome.' A man in a tailcoat approaches, his voice laced with unnerving charm.",
        image: "images-js/foyer.jpg",
        choices: ["Explore the mansion"]
    },
    {//Run Away 6 ------------- YOU RUN AWAY START AGAIN
        text: "You choose to turn away bolting from the manor and back into the moonlight. The second light hits your facade, the gargoyle perched atop the manor shifts his mouth ever so slightly. Within moments your life flashes before your eyes, an arrow shooting from the creatures jaw.",
        image: "images-js/gargoyle.png",
        choices: ["Replay"]
    },
    {//Explore the mansion 7 
        text: "Following the corridors of the mansion, you are led into the ballroom. The grand ballroom stands breathtaking in sight. Tall mirrors stand at each end reflecting the crystal centerpiece. You turn towards them noticing your reflection wavering ever so slightly on the right-hand side. Velvet drapes frame the mirrors adorned with red and gold. Frescos of mythical battles line the walls and ceiling. Your gaze waltzes around the room landing on the grand piano tucked away in the corner. Atop it, the glint of a token catches your gaze.",
        image: "images-js/ballroom.jpg",
        choices: ["Inspect the locket", "Inspect the mirror"]
    },
    {//Inspect the locket 8 -------------------- THE LOCKET PATHWAY
        text: "You head towards the grand piano and gently pick up the discarded locket. The piece of jewelry is splattered with blood. It takes the shape of a silver heart with the initials C.K. engraved on the front. You notice a clasp on the right side of the locket, opening it with a click. Inside stands the image of an unknown man.",
        image: "images-js/locket.jpeg",
        choices: ["Investigate the initials in the library", "Investigate the unknown man in the portrait gallery"]
    },
    {//Investigate the library 9 -------------------- YOU DEAD REPLAY
        text: "Books scatter every inch of the ancient library as you enter the sanctuary of knowledge. Stained glass windows reflect a kaleidoscope of colors across four large tables lining the grand floor. You make your way towards the bookshelf where the Knight family records are kept. Opening the book you find yourself at a dead end. Your eyes scroll through numerous names, all which seem to have the initials C.K.",
        image: "images-js/library.jpeg",
        choices: ["Replay"]
    },
    {//Investigate the portrait gallery 10
        text: "You head across the hall towards the portrait gallery. The walls within the gallery are adorned with paintings of the Knight Family going back generations. You follow the paintings and the corresponding nameplates written underneath them. Your eyes suddenly halt at the heiress, admiring her timeless elegance. She stands with a regal pose, a locket glinting around her neck, and a dress of blue lace draping across her figure. Next to the heiress of the house, your eyes lighten as you are greeted with the portrait of the very same man in the locket. Underneath, his nameplate reads C.K., or rather Caspian Knight. Behind him lies a study.",
        image: "images-js/gallery.jpeg",
        choices: ["Investigate the painting further", "Investigate the study"]
    },
    {//Investigate the painting further 11
        text: "Upon closer inspection, it becomes apparent that the painting of Caspian Knight is slightly looser on the wall when compared to the potrait of his heiress adjacent to it. Your hands trail the portraits edge as it shits ajar. A vault lies behind the paintings visage. Inside the vault lies mounds of shimmering gold arranged in piles across the floor.",
        image: "images-js/vault.jpeg",
        choices: ["Guess the motive, killer, and victim"]
    },
    {//Investigate the study 12
        text: "As you enter the study, the aura of old scholarly charm fills the air. Bookshelves, maps, and sketches lace the walls. An armchair sits in the center next to a once-crackling fireplace. Across from the chair, a wooden mahogany table stands in the center, the draw open ever so slightly. You make your way towards the draw and a gasp falls from your lips. There, among piles of ancient gemstones lies a knife laced with blood hidden in the depths of the draw.",
        image: "images-js/study.jpeg",
        choices: ["Guess the motive, killer, and victim"]
    },
    {//MIRROR PATHWAY  13
        text: "You walk up towards the right side mirror, your hand inching towards it almost as if drawn by an unseen strength. The mirror stands as a silent observer, a gateway. On one side it reflects the grand ballroom but on the other, it shadows a lair of secrets.",
        image: "images-js/mirror.jpeg",
        choices: ["Step into the mirror", "Return back to the ballroom"]
    },
    {//YOU DEAD AGAIN - mirror trap  14
        text: "As you step away from the mirror a chill runs down your spine. Just as your heel brushes against the tile behind you, the mirror breaks into a mist that envelops you.",
        image: "images-js/smoke.jpeg",
        choices: ["Replay"]
    },
    {//Step into the mirror 15
        text: "Inside the mirror lies a realm shadowed with secrets, illuminated only by a circle of candelabras in the center. The air is thick, and stone arches loom over the flickering circle of fire in an unsettling manner. A distant melody fills your ears as you feel yourself drifting into a haze. Moments pass until the music abruptly stops. Surveying the lair, you notice two corridors twisting like unruly branches.",
        image: "images-js/candle.png",
        choices: ["Follow the left corridor", "Follow the right corridor"]
    },
    {//Left corridor -- buter's room 16
        text: "You go left heading down a stone-stepped alley. Through the alley and to the right is a wooden door. You creak open the door to find yourself in a modest yet dignified space. The room is small, and far less extravagant than the rest of the house. It is however the most tidy, signifying that this must be the Butler's Quarters. A single bed lies in the corner, and a wardrobe stands across from it. The only thing that doesn't appear to belong is the table in the middle. Scrolls of unruly maps line the surface of the table, a set of keys used as a paperweight.",
        image: "images-js/servantsroom4.png",
        choices: ["Inspect the keys", "Inspect the maps"]
    },
    {// YOU DIE Key trap 17
        text: "You reach out towards the keys fingers tingling with anticipation. As soon as you touch the cold metal, another sensation overcomes you. Poison drips through your veins consuming your very being.",
        image: "images-js/keys.jpeg",
        choices: ["Replay"]
    },
    {//Inspect the maps 18
        text: "You decide to examine the maps spread along the table. Moving closer realization dawns on your features. These are maps of the manor. In the midst of black ink, a single red ‘X’ catches your eye. Across the map of the upper floor, the red ‘X’ marks Caspian Knight's chambers. ",
        image: "images-js/map.jpeg",
        choices: ["Head to Caspian's chambers"]
    },
    {//Inspect the maps 19
        text: "Caspian Knight's room is cold, covered in an aura of darkness. The walls seem to cave in towards the towering four-poster bed draped in a red fabric. You move forward cautiously, lines of armored suits of armor surrounding the room as if protecting the room from outsiders. You continue towards the bedframe pushing aside the curtains to reveal a jewelry box adorned with the heiress’ crest. A fireplace catches your eye across from the bed, its flames still burning. You move to the fireplace peering down and seeing a heap of abandoned clothing. Your eyes widen, the discarded garments are spotted with blood.",
        image: "images-js/room.png",
        choices: ["Guess the motive, killer, and victim"]
    },
    {//Go to the right corridor 20
        text: "You turn right heading down another hallway engulfed in darkness. At first glance the shadowed path appears to be deserted, a black hole of emptiness. That is until you notice a faint outline, the stone of the wall changing in pattern ever so slightly. A heavy door slowly comes into view.",
        image: "images-js/door.jpeg",
        choices: ["Push through the door"]
    },
    {//FINAL SOLUTION 21
        text: "",
        image: "images-js/glass.png",
        choices: ["Replay"]
    }
];

// story text and choices
function updateStory() {
    storyText.textContent = story[storyState].text;
    choice1Button.textContent = story[storyState].choices[0];
    choice2Button.textContent = story[storyState].choices[1];

    storyText.textContent = story[storyState].text;
    choice1Button.textContent = story[storyState].choices[0];

    // If there is no second choice, hide the button. If there is a second choice show it. 
    if (story[storyState].choices.length > 1) {
        choice2Button.style.display = 'block'; // Show it
        choice2Button.textContent = story[storyState].choices[1];
    } else {
        choice2Button.style.display = 'none'; // Hide it
    }

    storyText.textContent = story[storyState].text;
     // Image source
    storyImage.src = story[storyState].image;
 // Final reveal! Visbile/Hidden text that gives player the answer 
 if (storyState === story.length - 1) {
    finalText1.style.visibility = 'visible';
    finalText1.addEventListener('click', function() {
        finalText2.style.visibility = 'visible';
    });
} else {
    finalText1.style.visibility = 'hidden';
}
    
}

//If else statements for buttons and story states 
choice1Button.addEventListener('click', function () {
    // Choice 1
    if (storyState >= 0 && storyState < story.length) {
        const choice = story[storyState].choices[0];
        
        if (choice === "Go Left") {
            // Go to a specific state
            storyState = 2; // story state
        } else if (choice === "Go Right") {
            storyState = 3;
        } else if (choice === "Proceed to the mansion") {
            storyState = 4;
        } else if (choice === "Enter the mansion") {
            storyState = 5;
        } else if (choice === "Explore the mansion") {
            storyState = 7;
        } else if (choice === "Inspect the locket") {
            storyState = 8;
        } else if (choice === "Run Away") {
            storyState = 0;
        } else if (choice === "Replay") {
            storyState = 0;
        } else if (choice === "Investigate the painting further") {
            storyState = 11;
        } else if (choice === "Step into the mirror") {
            storyState = 15;
        } else if (choice === "Inspect the keys") {
            storyState = 17;
        } else if (choice === "Head to Caspian's chambers") {
            storyState = 19;
        } else if (choice === "Push through the door") {
            storyState = 19;
       
        }  else if (choice === "Guess the motive, killer, and victim") {
                storyState = story.length - 1; // Final state of story
        } else {
            // Advance the story forward 
            storyState++;
        }
        
        updateStory(); 
    } else {

    }
});

choice2Button.addEventListener('click', function () {
    // choice 2
    if (storyState >= 0 && storyState < story.length) {
        const choice = story[storyState].choices[1];
        if (choice === "Go Right") {
            storyState = 3;
        } else if (choice === "Inspect the mansion") {
            storyState = 5;
        } else if (choice === "Run Away") {
            storyState = 0; 
        } else if (choice === "Investigate the unknown man in the portrait gallery") {
            storyState = 10;
        } else if (choice === "Investigate the study") {
            storyState = 12;
        } else if (choice === "Inspect the mirror") {
            storyState = 13;
        } else if (choice === "Return back to the ballroom") {
            storyState = 14;
        } else if (choice === "Inspect the maps") {
            storyState = 18;
        } else if (choice === "Follow the right corridor") {
            storyState = 20;
        } else {
            storyState++;
        }
        updateStory(); 
    } else {

    }
});



updateStory();