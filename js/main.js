//declare the variables
const storyText = document.getElementById('story-text');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');
const choice3Button = document.getElementById('choice3'); // New button
const storyImage = document.getElementById('story-image'); 
const finalText1 = document.getElementById('final-text-1');
const finalText2 = document.getElementById('final-text-2');
const backgroundAudio = document.getElementById('background-audio');
const riddleInput = document.getElementById('riddle-answer'); // New input
const submitAnswerButton = document.getElementById('submit-answer'); // New button
// Initial story state
let storyState = 0;
//Audio inputs
backgroundAudio.src = 'pipe-organ.mp3';
backgroundAudio.loop = true;
//The Story 0
const story = [
    {// gate illustrtion
        text: "Echoes of Fear", 
        image: "door3.png",
        choices: ["Start Story"]
    },
    { //Starting screen 1 - candle illustration
        text: "A single wavering flame blinks across your eyes, the rest of the room engulfed in an eerie darkness. The blaze wavers and the brightness surges, luring you further into the expanse. A single step forward echoes against the walls.",
        image: "candleflame.png",
        choices: ["Enter the room", "Run Away"],
    },
    { //Run Away 2 
        text: "'You ran away in fear, but the darkness consumed you'",
       // image: "images-js/mirrorshatter2.png",
        choices: ["Restart Story"],
    },
    {//Accept or Reject the spirit 3 - mirror with hand sticking out
        text: "Once echoed steps come to an abrupt halt, the flickering flames following. Silence. A shiver bolts through your spine. A swirling heavy dense of clouds winds like vines twining through limbs. Crack. A cacophony erupts, mirrors crumbling to the floor. A cloaked figure appears through the mist, a gloved hand reaching toward you.",
        image: "mirror1.png",
        choices: ["Extend Your Hand", "Reject the Spirit"]
    },
    {//Reject the spirit 4 - shattered glass spiral
        text: " An inhumane growl errupts from the cloak shifting the room. 'No,' A simple strangled cry. 'No!' The figure bellows, the once saddened cry growing  enraged. Tormented angry cries echo through the mirrors, when a pull forces you forward through the shattered glass.  ",
        image: "mirrorshards.png",
        choices: ["Enter the fear dimension"]
    },
    {//Accept the spirit 5
        //text: "You extend your hand out, as a gloved hand entwines your fingers. Ghosted arias surround you each note blowing like ripples through the air. The spirit is welcoming you, guiding you through a world of fear.",
       // image: "images-js/mansion.jpeg",
       // choices: [""]
    },
    {//Into the fear dimension 6 -- to be done pathway illustration
        text: "Air whooshes past you, your reflection glaring back at you through shattered shards as you descend the chasm. The spirit's cackle bellows as you fall down darkness surrounding you, 'Into madness you go.' You feel yourself come to a standstill, as two illuminated pathways take shape in front of you.",
        image: "pathways.png",
        choices: ["Right", "Left"]
    },
    {//Right (Judgement fear) 7 -- to be done -- eyes illustration
        text: "You are drawn through a darkened room, shadows clinging to every corner, no hint of light visible. The air is thick as silence follows your every turn creating an endless stillness. You place one foot in front of the other. Through the darkness, two eyes flicker open, red irises glaring like distant stars lost in an abyss. You are no longer alone.",
        image: "eyes.png",
        choices: [ "Confront", "Befriend"]
    },
    {//Run Away 8
       // text: "Without hesitation, you bolt out of the room, heart pounding, a primal instinct driving you forward. Your body pushes forward, but your feet remain motionless in a standstill. A pull forces you down into the Earth sinking deeper... into the next fear.",
       // image: "images-js/ballroom.jpg",
       // choices: ["Descend"]
    },
    {//Confront 9n-- to be done -- 
        text: "Opening your eyes, you take a closer look. Those irises are not unfamiliar. A laugh escapes from your lips.",
       // image: "images-js/locket.jpeg",
        choices: ["Confront the Spirit"]
    },
    {//Confront 10 -- to be done -- cloak illustration
        text: "As you lock eyes with the spirit a chill runs down your spine. The booming voice echoes once again, 'I measure every debate, yet I am without weight. What am I?' ",
      image: "confront.png",
        answer: "judgement", // Correct answer
        choices: ["Answer the Riddle"]
    },
    {//Ascend 11
        text: "You slowly drift your eyes shut feeling the darkness engulf you, the dreary pair of irises no longer in site. A breath in and a breath out, the eyes no longer stare. The darkness that once clinged to you, begins to fall like dripping paint across your limbs. Glimmers of light breach through the thickened blackness.",
      //  image: "images-js/study.jpeg",
        choices: ["Ascend the Fear Dimension"]
    },
    {//You Die 12
        text: "A cackle errupts from the spirit, 'Wrong!' it bellows in a teasing blow. 'Welcome to your new home,' ",
      //  image: "images-js/vault.jpeg",
        choices: ["Replay"]
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

  
    //to be done
    if (storyState === 3) { 
        choice1Button.classList.add('crossed-out');
    } else {
        choice1Button.classList.remove('crossed-out');
    }
    if (storyState === 6) { 
        choice2Button.classList.add('crossed-out');
    } else {
        choice2Button.classList.remove('crossed-out');
    }
    
    storyText.textContent = story[storyState].text;

     // Image source
    storyImage.src = story[storyState].image;

      // Show riddle input if the current state is the riddle
      if (storyState === 10) {
        riddleInput.style.display = 'block';
        submitAnswerButton.style.display = 'block';
        choice1Button.style.display = 'none';
    } else {
        riddleInput.style.display = 'none';
        submitAnswerButton.style.display = 'none';
        if (storyState === 0) {
            choice1Button.style.display = 'block'; // Show "Start" button
        }
    
        if (storyState === 12) {
            choice1Button.textContent = 'Replay';
            choice1Button.style.display = 'block'; // Make sure replay button is visible
            choice2Button.style.display = 'none';  // Hide second choice
        }
    }

 // Final reveal! Visbile/Hidden text that gives player the answer 
 //if (storyState === story.length - 1) {
 //   finalText1.style.visibility = 'visible';
 //   finalText1.addEventListener('click', function() {
  //      finalText2.style.visibility = 'visible';
 //   });
//} else {
//    finalText1.style.visibility = 'hidden';
//}

    
}



//If else statements for buttons and story states 


choice1Button.addEventListener('click', function () {
    // Choice 1
    
    if (storyState >= 0 && storyState < story.length) {
        const choice = story[storyState].choices[0];


        if (choice === "Enter the room") {
            // Go to a specific state
            storyState = 3; // story state
        } else if (choice === "Restart Story") {
            storyState = 0;
      //  } else if (choice === "Extend Your Hand") {
        //   choice1Button.classList.add('crossed-out');
        } else if (choice === "Enter the fear dimension") {
            storyState = 6;
        } else if (choice === "Right") {
            storyState = 7;
        } else if (choice === "Confront") {
            storyState = 9;
        } else if (choice === "Confront the Spirit") {
            storyState = 10;
    
        } else if (choice === "Replay") {
            storyState = 0;
        } else if (choice === "Ascend the Fear Dimension") {
            storyState = 0;
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
    
        if (choice === "Run Away") {
            storyState = 2;
        } else if (choice === "Reject the Spirit") {
            storyState = 4;
        } else if (choice === "Run Away") {
            storyState = 0; 
        } else if (choice === "Befriend") {
            storyState = 11;
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

submitAnswerButton.addEventListener('click', function () {
    const playerAnswer = riddleInput.value.toLowerCase();
    const correctAnswer = story[storyState].answer.toLowerCase();

    if (playerAnswer === correctAnswer) {
        // Correct answer logic, advance story
        storyState = 0;
    } else {
        // Wrong answer logic, player dies
        storyState = 12;
    }
    updateStory(); 
});



updateStory();