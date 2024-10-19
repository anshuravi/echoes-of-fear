//declare the variables
const storyText = document.getElementById('story-text');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');
const choice3Button = document.getElementById('choice3'); // Add third button 
const storyImage = document.getElementById('story-image'); 
const finalText1 = document.getElementById('final-text-1');
const finalText2 = document.getElementById('final-text-2');
const backgroundAudio = document.getElementById('background-audio');
const riddleInput = document.getElementById('riddle-answer'); // New input
const submitAnswerButton = document.getElementById('submit-answer'); // New button





// Initial story state


let storyState = 0;
//Audio inputs
//backgroundAudio.src = 'Mansion.mp3';
//backgroundAudio.loop = true;
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
        choices: [ "Confront the figure", "Befriend the figure"]
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
        choices: ["Descend further"]
    },
    {//Fear 2 -- heights/falling 13
        text: "Limbs flail as the chasm continues, no end in sight. Jagged walls rush past like teeth as your hands grasp forward to an emptiness. The merciless drop decends screams bellowing out your throat. A cackle forms through the ripples of wind rushing past you as taunts follow. A jarring stillness cuts through the chaos suspending you in the air.",
      //  image: "images-js/mirror.jpeg",
        choices: ["Confront the voice"]
    },
    {//confront the spirit fork heights 14
        text: "You come to a halt landing on top of a cobblestoned platform. Your eyes follow the uneven rocks leading to another forked path. The three paths flying in in front of you shroud in a layer of mist seeming to drop off into thin air, floating and falling. The mist swirls in front of you laying out the words “Only the highest stand silent, while the lowest speak the longest.'Choose a path' the spirit speaks directing you forward.",
        image: "images-js/smoke.jpeg",
        choices: ["Left", "Middle", "Right"]
    },
    {//Left path 15
        text: "You take cautious steps towards the left pathway. The mist holding the riddle seems to follow your every move in a hissing wave. Suddenly the swirling mist halts before tumbling down into a deep chasm. You gasp the sound echoing loudly in a descending manner against your ears.",
        image: "images-js/candle.png",
        choices: ["Walk toward the chasm", "Turn back"],
        echo: true
    },
    {//Left path win 16
        text: "As the echoes of your gasps come to a close, you feel the mist, swirling gently around you, beckoning you forward. The form resembles a familiar cloaked figure, whispers of assurance and ease filling your ears. The mist then parts revealing a narrow, hidden staircase carved into the side of the chasm. A faint otherworldly glow, guides you downward.",
        image: "images-js/servantsroom4.png",
        choices: ["Ascend the fear dimension"]
    },
    {// Left path: choose to replay or dive deeper 17
        text: "Inching forward you decend the weaving staircase. The faint glow flickers, casting shadows that dance along the stone walls. The glow brightens, as you find yourself staring at a single flame dancing in the room full of mirrors.'",
        image: "images-js/keys.jpeg",
        choices: ["Replay", "Dive Deeper)"]
    },
    {//Middle path: throws you in further 18
        text: "The path straight ahead feels the most fitting as you waltz forward. A rush of air ripples the skin across your face as the mist surrounds you once again. You push forward placing one foot in front of the other until your foot hits a rock. Silence follows the uneven stone clambering down. An echo ever so slightly follows as the rubble reaches the ground.",
        image: "images-js/map.jpeg",
        choices: ["Descend down the middle chasm", "Turn back"]
    },
    {//Descend down the middle 19
        text: "'For a moment, all is still, until the mist coils tighter, like a snake wrapping around you. The air shifts unnaturally, and suddenly the ground beneath you begins to spiral. Whispers fill your senses as the writhing the mist takes the spirit's cloaked form. Within seconds, you find yourself tumbling through the thickened air once again.",
        image: "images-js/room.png",
        choices: ["Another fear awaits"]
    },
    {//Go to the right corridor 20
        text: "The path ahead shrouds in shadows yet an intruige rushes you forward. You peer forward seeking the path's answers. Nothing but darkness returns to your senses.",
        image: "images-js/door.jpeg",
        choices: ["Descend the darkness", "Turn back"]
    },
    {//Right - path - death 21
        text: "You step forward, cautiously, but with each step, the darkness engulfs your body, turning into a suffocating force. You twist and turn becoming one with the darkness, lost in the land of fears forever. ",
        image: "images-js/glass.png",
        choices: ["Replay"]

    },
     {//Go to the right corridor 22
        text: "As the words leave your lips, a sense of warmth and relief washes over you. A lightness spreads through your fingertips, the burdens of fear shed from your shoulders. A final flicker of red eyes glow as you step through the mirror manifesting in front of you. With a step forward, your reflection pools into a silvery potion ascending you from the dimension of fear.",
        image: "images-js/door.jpeg",
        choices: ["Descend the darkness", "Turn back"]
    },

    {//Shifting Room Puzzle 6 -- Shifting Room
        text: "The room seems to twist and turn, pulling you into a maze of corridors. Each door leads to another shifting space.",
        image: "shiftingroom.png",
        choices: ["Go North", "Go East", "Go West"],
        puzzle: true // Flag to track if it's the shifting room puzzle

    }
    
];

// story text and choices
function updateStory() { 
    
    if (story[storyState].puzzle) {
        storyText.textContent = `You are in ${rooms[currentRoom]}. Which way will you go?`;
        choice1Button.textContent = "Go North";
        choice2Button.textContent = "Go East";
        choice3Button.textContent = "Go West";
        choice3Button.style.display = 'block';
        riddleInput.style.display = 'none';
        submitAnswerButton.style.display = 'none';
    } else if (story[storyState].riddle) {
        storyText.textContent = story[storyState].text;
        storyImage.src = story[storyState].image;
        riddleInput.style.display = 'block';
        submitAnswerButton.style.display = 'block';
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
        choice3Button.style.display = 'none';
    } else {
    
    storyText.textContent = story[storyState].text;
    choice1Button.textContent = story[storyState].choices[0];
    choice2Button.textContent = story[storyState].choices[1];

    storyText.textContent = story[storyState].text;
    choice1Button.textContent = story[storyState].choices[0];

    }

    // If there is no second choice, hide the button. If there is a second choice show it. 
    if (story[storyState].choices.length > 1) {
        choice2Button.style.display = 'block'; // Show it
        choice2Button.textContent = story[storyState].choices[1];
    } else {
        choice2Button.style.display = 'none'; // Hide it
    }

    
      // If there is a third choice, show the third button; otherwise, hide it
      if (story[storyState].choices.length > 2) {
        choice3Button.style.display = 'block'; // Show it
        choice3Button.textContent = story[storyState].choices[2];
    } else {
        choice3Button.style.display = 'none'; // Hide it
    }

    
  
    //to be done
    if (storyState === 3 && 13) { 
        choice1Button.classList.add('crossed-out');
    } else {
        choice1Button.classList.remove('crossed-out');
    }

    // Cross out the second button at storyState 6
    //if (storyState === 6 && story[storyState].choices[1] === "Left") { 
    //    choice2Button.classList.add('crossed-out');
    //} else {
    //    choice2Button.classList.remove('crossed-out');

    //}
    

    
    storyText.textContent = story[storyState].text;

     // Image source
    storyImage.src = story[storyState].image;

      // Show riddle input if the current state is the riddle
      if (storyState === 10 || storyState === 17) {
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
            choice1Button.textContent = 'Descend further';
            choice1Button.style.display = 'block'; // Make sure replay button is visible
            choice2Button.style.display = 'none';  // Hide second choice
        }
        if (story[storyState].echo) {
            document.getElementById('listen-echo').style.display = 'block'; // Show the echo button
        } else {
            document.getElementById('listen-echo').style.display = 'none'; // Hide the echo button
        }
        document.getElementById('listen-echo').addEventListener('click', function() {
            echoSound.play(); // Play the echo sound effect
        });

        if (story[storyState].noise) {
            document.getElementById('listen-noise').style.display = 'block'; // Show the noise button
        } else {
            document.getElementById('listen-noise').style.display = 'none'; // Hide the noise button
        }
        document.getElementById('listen-noise').addEventListener('click', function() {
            noiseSound.play(); // Play the noise sound effect
        });
           
            

        
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
        } else if (choice === "Confront the figure") {
            storyState = 9;
        } else if (choice === "Confront the Spirit") {
            storyState = 10;
    
        } else if (choice === "Replay") {
            storyState = 0;
        } else if (choice === "Ascend the Fear Dimension") {
            storyState = 0;
        } else if (choice === "Befriend the voice") {
            storyState = 14;
        } else if (choice === "Ascend") {
            storyState = 15;
        } else if (choice === "Confront the voice") {
            storyState = 14;
        } else if (choice === "Taunt the spirit") {
            storyState = 17;
        } else if (choice === "Descend further") {
            storyState = 13;
        } else if (choice === "Left") {
            storyState = 15;
        } else if (choice === "Walk towards the chasm") {
            storyState = 16;
        } else if (choice === "Descend down the middle chasm") {
            storyState = 19;
        } else if (choice === "Descend the darkness") {
            storyState = 21;
        } else if (choice === "Another fear") {
            storyState = 21;



    

            
       
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
        } else if (choice === "Befriend the figure") {
            storyState = 11;
        } else if (choice === "Ascend the Fear Dimension") {
            storyState = 0;
        } else if (choice === "Confront the voice") {
            storyState = 16;
        } else if (choice === "Left") {
            storyState = 13;
        } else if (choice === "Follow the right corridor") {
            storyState = 20;
        } else if (choice === "Turn back") {
            storyState = 14;
        } else if (choice === "Middle") {
            storyState = 18;
        } else {
            storyState++;
        }
        updateStory(); 
    } else {

    }
});
    choice3Button.addEventListener('click', function () {
        const choice = story[storyState].choices[2];
        if (choice === "Right") {
            storyState = 20;
        } // Add other conditions as needed...
        updateStory();
        
    });
    


submitAnswerButton.addEventListener('click', function () { 
    const playerAnswer = riddleInput.value.toLowerCase();

    let correctAnswer;
    
    // Check the current story state and set the correct answer accordingly
    if (storyState === 10) {
        correctAnswer = 'judgement';  // First riddle answer
    } else if (storyState === 17) {
        correctAnswer = 'heights';  // Second riddle answer
    }

    // Check if the player's answer is correct
    if (playerAnswer === correctAnswer) {
        // Correct answer logic, advance story
        if (storyState === 10) {
            storyState = 22;  // Move forward after answering the first riddle
        } else if (storyState === 17) {
            storyState = 18;  // Move forward after answering the second riddle
        }
    } else {
        // Wrong answer logic, player dies
        storyState = 12;
    }

    updateStory();  // Update the story based on the new state
});


updateStory();