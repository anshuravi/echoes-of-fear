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
const clickSound = new Audio('clickSound.mp4'); // Replace 'clickSound.mp3' with the path to your audio file

// Function to play the sound
function playClickSound() {
    clickSound.play();
}

// Add event listeners to buttons to play the sound on click
choice1Button.addEventListener('click', playClickSound);
choice2Button.addEventListener('click', playClickSound);
choice3Button.addEventListener('click', playClickSound);
submitAnswerButton.addEventListener('click', playClickSound); // Optional for the submit button




// Initial story state


let storyState = 0;
//Audio inputs

//The Story 0
const story = [
    {// gate illustrtion
        text: "Echoes of Fear",
        image: "images-js/start.png",
        choices: ["Start Story"]
    },
    { //Starting screen 1 - candle illustration
        text: "A lonely mirror stands in the corner of a room, your reflection wavering in the distance. A candle lies next to it, a single flame flickering and unassuming. The flame pulls you inward as an uneasy warmth fills your senses.",
        image: "images-js/flame.png",
        choices: ["Enter the room", "Run away"],
    },
    { //Run away 2 
        text: "You run away in fear as the echoes of the realm consume you in a never ending darkness.",
        // image: "images-js/mirrorshatter2.png",
        choices: ["Replay"],
    },
    {//Accept or Reject the spirit 3 - mirror with hand sticking out
        text: "Footsteps echo against the stained walls as step by step you make your way forward. A silence follows as you stop, your distorted reflection whispering back to you. Your eyes draw across the reflected surface, nothing seeming out of the ordinary. Within seconds, a hand bursts through the mirror as shards shatter around you.",
        image: "images-js/handreach.png",
        choices: ["Extend your hand", "Reject the spirit"]
    },
    {//Reject the spirit 4 - shattered glass spiral
        text: "A wailing cry echoes through the chamber as you cast the hand aside. ‘No,’ The spirit speaks a biting rage filling its voice. The gloved hand shoots out through the mirror once again grabbing your wrist and dragging you into the abyss.",
        image: "images-js/cracked.png",
        choices: ["Drift onward"]
    },
    {//Accept the spirit 5
        text: "The gloved hand reaches forward, leaving a place for your palm and begging you to take its guidance. You draw closer and place your fingers atop the strangers. The spirit’s grasp turns and leads you forward into its realm of fear.",
         image: "images-js/grab.png",
         choices: ["Venture forth"]
    },
    {//Into the fear dimension 6 -- to be done pathway illustration
        text: "Air whooshes past you, your reflection glaring back at you through shattered shards as you descend the chasm. The spirit's cackle bellows as you fall down darkness surrounding you, 'Into madness you go.' You feel yourself come to a standstill, as two illuminated pathways take shape in front of you.",
        //image: "pathways.png",
        choices: ["Right", "Left"]
    },
    {//Right (Judgement fear) 7 -- to be done -- eyes illustration
        text: "You find yourself drawn into a darkened chamber, nothing seemingly in sight. Blinded by darkness, you reach around you and hope to find a way forward. Your eye catches a glint in the darkness as red irises glare back at you. With every hesitant gesture, the eyes begin to follow and narrow at your missteps.",
        image: "images-js/spiriteyes.png",
        choices: ["Confront the figure", "Befriend the figure"]
    },
    {//Run away 8
        // text: "Without hesitation, you bolt out of the room, heart pounding, a primal instinct driving you forward. Your body pushes forward, but your feet remain motionless in a standstill. A pull forces you down into the Earth sinking deeper... into the next fear.",
        // image: "images-js/ballroom.jpg",
        // choices: ["Descend"]
    },
    {//Confront 9n-- to be done -- 
        text: "Opening your eyes, you take a closer look. Those irises are not unfamiliar. A laugh escapes from your lips.",
        image: "images-js/fullspirit.png",
       choices: ["Confront the Spirit"]
    },
    {//Confront 10 -- to be done -- cloak illustration
        text: "You lock eyes with the spirit, a chill running down your spine. A booming voice echoes through the darkened chamber, 'I am a watchful eye, yet my words do not always gratify. What am I?'",
        image: "images-js/mallet.png",
        answer: "judgement", // Correct answer
        choices: ["Answer the Riddle"]
    },
    {//Ascend 11
        text: "As the word drops from your lips, the spirit’s eyes gleam with pride. 'Ah yes, judgment, the force that holds so many of us back, but, not you.'  The atmosphere surrounding you shifts and the once darkened room begins to lighten. In place of darkness lies the lonely mirror, the single flame wavering next to it.",
          image: "images-js/light.png",
        choices: ["Ascend the fear dimension"]
    },
    {//You Die 12
        text: "A cackle erupts from the spirit, 'Wrong!' it bellows in a teasing blow. 'Welcome to your new home,' ",
        //  image: "images-js/vault.jpeg",
        choices: ["Replay"]
    },
    {//Fear 2 -- heights/falling 13
        text: "Limbs flail as you descend the abyss of fear. The spirit's cackles echo through the whooshing air as you close your eyes and brace for impact. Silence. An unexpected stillness follows as you find yourself suspended mid-air, a forking path in front of you. The spirit manifests in front of you and releases you to the floor. ‘The highest echo silent, while the lowest, violent. Face the fear of heights and escape this plight. Choose a path’",
        //  image: "images-js/mirror.jpeg",
        choices: ["Confront the voice"]
    },
    {//confront the spirit fork heights 14
        text: "Limbs flail as you descend the abyss of fear. The spirit's cackles echo through the whooshing air as you close your eyes bracing for impact. Silence. An unexpected stillness follows as you find yourself suspended mid-air, a forking path in front of you. The spirit manifests in front of you, releasing you to the floor. ‘The highest echo silent, while the lowest, violent. Face the fear and escape is near. Choose a path’",
        image: "images-js/threepaths.png",
        choices: ["Left", "Middle", "Right"]
    },
    {//Left path 15
        text: "You tread down the left path as a pebbled trail meets your footsteps. Rocky ridges cut through thick air mimicking an uneasiness within. A pain stings across your toes as rubble tumbles into the left chasm echoing loudly against the cavern walls.",
        image: "images-js/rocky.png",
        choices: ["Descend the left chasm", "Turn back"],
        echo: true
    },
    {//Left path loose 16
        text: "The illusion of a short descent vanishes as limbs flail once again. Falling. A scream erupts from you, the chasm engulfing you whole as you become one with the darkness.",
       // image: "images-js/servantsroom4.png",
        choices: ["Replay"]
    },
    {// Right path: choose to replay or dive deeper 17
        text: "Inching forward you decend the weaving staircase. The faint glow flickers, casting shadows that dance along the stone walls. The glow brightens, as you find yourself staring at a single flame dancing in the room full of mirrors.'",
        //image: "images-final/lightpeakingthrough.png",
        choices: ["Return to safety", "Dive deeper"]
    },
    {//Middle path: throws you in further 18
        text: "You look straight ahead, mist weaving around your legs like vines as you descend the path in front of you. The haze pushes forward and tumbles down the chasm up ahead. A gasp escapes your lips and echoes ever so slightly across the cavern as you nearly lose your footing.",
        image: "images-js/misty.png",
        choices: ["Descend the middle chasm", "Turn back"]
    },
    {//Descend down the middle 19
        text: "‘So close!’ The spirit’s voice hisses from behind. Cold air winds around, goosebumps ghosting your skin. The spirit cackles, pushing you down the chasm.",
       // image: "images-js/room.png",
        choices: ["Another fear awaits"]
    },
    {//Go to the right corridor 20
        text: "An irresistible pull draws you towards the right path. Darkness follows your every step, almost as if guiding you forward. You peek down the right chasm and hope for the path's answers. An emptiness follows as the silence echoes around you.",
        image: "images-js/darkness.png",
        choices: ["Descend the right chasm", "Turn back"]
    },
    {//Right - path - coorect! 21
        text: "You dangle your foot over the edge of the chasm. The air beneath begins to glisten, a staircase carving itself out of the emptiness. You descend, the spirit's ghosted hand guiding you down and through the lonely mirror.",
       image: "images-js/staircase.png",
        choices: ["Ascend the chasms grasp", "Dive deeper"]
    },
    {//Go to the right corridor 22
        // text: "As the words leave your lips, a sense of warmth and relief washes over you. A lightness spreads through your fingerTurns, the burdens of fear shed from your shoulders. A final flicker of red eyes glow as you step through the mirror manifesting in front of you. With a step forward, your reflection pools into a silvery potion ascending you from the dimension of fear.",
        // image: "images-js/door.jpeg",
        // choices: ["Ascend the fear dimension", "Dive "]
    },
    {//fear of change puzzle 23
        text: "The room whirls, a vortex pulling you forward into a kaleidoscope of colors. A maze of winding pathways manifests in front of you. In the center, three pristinely white pedestals stand as the spirit wavers behind them. ‘Allow the change, and victory is within range,’ the spirit gestures to the paths ahead. One path lies cast in shadow with walls closing in on itself, one open and bright, and the last pulsating as if alive.",
        image: "images-js/vortex1.png",
        choices: ["Shadowed path", "Open path", "Pulsating path"]
    },
// SHADOW PATH FIRST -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    {//Shadowed path 24
        text: "You crouch down squeezing into the ever-closing hallway of the shadowed path. A gleaming gold timepiece stands at the end of the corridor, its adorned handles pulling you closer. You inch forward towards the hourglass still wary of the walls closing in. With each step, the walls only descend further.",
        image: "images-js/hourglass.png",
        choices: ["Leave the hourglass", "Turn the hourglass"]
    },
    {//Shadowed path - Leave the hourglass 25
        text: "You take a step back from the hourglass, hoping to halt the room from closing in on you. A moment of silence passes before the walls continue to creak with no release in sight. Within moments, the walls collapse and engulf you into the paths of fear.",
        //image: "images-js/hourglassflip.png",
        choices: ["Replay"]
    },
    {//Shadowed path - Turn the hourglass 26
        text: "Your fingers reach out and feel the cold metal of the adorned handle. With a swift movement, the sand shifts somersaulting as the hourglass turns. A glow forms from the hourglass as the crushing walls begin to ease and a stillness fills the air.",
        image: "images-js/hourglassflipped.png",
        choices: ["Explore the open path"]
    },
    {//main room after mirror 27
       // text: "The main room continues to whirl in a vortex. The spirit gestures to two remaining paths: one open and bright; and one pulsating with indecision.",
       // image: "images-js/door.jpeg",
       // choices: ["Open path", "Pulsating path"]
    },
    {//open path 28
        text: "You are drawn towards the open path, its sun-kissed hallways inviting you in like a warm hug. A light breeze follows you as plants sprout around in a greenhouse. You take in a deep breath, a sudden rancid smell taking hold. The room darkens and the once lively plants lie withered like corpses scattering the floor. At the end of the path lies the ghost of a rose and a potion vial to its side.",
        image: "images-js/deadrose.png",
        choices: ["Nurture the rose", "Leave the rose"]
    },
      {//nurture the rose 29
        text: "You push forward disregarding the corpsed landscape in front of you. Picking up the vial you tilt the silverly liquid over the rose. Like the first bloom of spring, the withered flower glows and erupts with life. The light pulsates through the room as the greenhouse comes to life once again.",
        image: "images-js/aliverose.png",
        choices: ["Explore the pulsating path"]
    },
     {//leave the rose 30
        text: "Your breath heaves in and out as the rancid smell fills your lungs. Your feet turn ready to leap back to the light but no movement follows. The withered vines wind around your ankles pulling you down and into their corpsed embrace.",
        //image: "images-js/door.jpeg",
        choices: ["Replay"]
    },
         {//pulsating path 31
            text: "The path before you breathes life as the walls pulsate like a heartbeat. The lonely mirror stands shattered at the end as you make your way toward the now-familiar reflection. The broken shards appear in front of you like puzzle pieces, your cracked resolve echoing through them.",
            image: "images-js/shard.png",
            choices: ["Step through the mirror", "Return the shard to the mirror"]
        },
          {//pulsating path - Step through the mirror 32
            text: "The familiar yet cracked reflection looks back at you welcoming you into the mirror. You press onward toward its reflected surface one last time. Only darkness follows your footsteps trapping you in the mirror. On the other side lies a world of nothing, empty and broken.",
          //  image: "images-js/door.jpeg",
            choices: ["Replay"]
        },

         {//pulsating path - return the shard 33
            text: "You gather the shattered shards and one by one place them back into their original place. The mirror gladly accepts the pieces. The distorted reflection heals itself and your once-broken resolve becomes whole.",
            image: "images-js/fixedmirror.png",
            choices: ["Return to the main hall"]
        },
            {//pedestals 34 -- add in a riddle box 
                text: "The kaleidoscope of colors comes back into view as you return to the main hall. The spirit awaits in front of the three pedestals. Above each plinth mist swirls. The words time, growth, and reflection float over the pedestals. ‘To be free, place objects according to their key’",
                image: "images-js/pedestals.png",
                //answer: "hourglass, rose, mirror", // Correct answer
                 choices: ["Mirror, Rose, Hourglass", "Hourglass, Rose, Mirror", "Rose, Mirror, Hourglass" ] },
// OPEN PATH FIRST -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        {//open path 35
        text: "You are drawn towards the open path, its sun-kissed hallways inviting you in like a warm hug. A light breeze follows you as plants sprout around in a greenhouse. You take in a deep breath, a sudden rancid smell taking hold. The room darkens and the once lively plants lie withered like corpses scattering the floor. At the end of the path lies the ghost of a rose and a potion vial to its side.",
        image: "images-js/deadrose.png",
        choices: ["Nurture the flower", "Leave the flower"]
    },
      {//nurture the rose 36
        text: "You push forward disregarding the corpsed landscape in front of you. Picking up the vial you tilt the silverly liquid over the rose. Like the first bloom of spring, the withered flower glows and erupts with life. The light pulsates through the room as the greenhouse comes to life once again.",
        image: "images-js/aliverose.png",
        choices: ["Explore the shadowed path"]
    },
     {//Shadowed path 37
        text: "You crouch down squeezing into the ever-closing hallway of the shadowed path. A gleaming gold timepiece stands at the end of the corridor, its adorned handles pulling you closer. You inch forward towards the hourglass still wary of the walls closing in. With each step, the walls only descend further.",
        image: "images-js/hourglass.png",
        choices: ["Leave the timepiece", "Turn the timepiece"]
    },
    {//Shadowed path - Leave the hourglass 38
        text: "You take a step back from the hourglass, hoping to halt the room from closing in on you. A moment of silence passes before the walls continue to creak with no release in sight. Within moments, the walls collapse and engulf you into the paths of fear.",
        //image: "images-js/door.jpeg",
        choices: ["Replay"]
    },
    {//Shadowed path - Turn the hourglass 39
        text: "Your fingers reach out and feel the cold metal of the adorned handle. With a swift movement, the sand shifts somersaulting as the hourglass turns. A glow forms from the hourglass as the crushing walls begin to ease and a stillness fills the air.",
        image: "images-js/hourglassflipped.png",
        choices: ["Explore the pulsating path"]
    },
// PULSATING PATH FIRST -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
{//pulsating path 40
    text: "The path before you breathes life as the walls pulsate like a heartbeat. The lonely mirror stands shattered at the end as you make your way toward the now-familiar reflection. The broken shards appear in front of you like puzzle pieces, your cracked resolve echoing through them.",
    image: "images-js/shard.png",
    choices: ["Step through the mirror", "Return the pieces to the mirror"]
},

 {//pulsating path - return the shard 41
    text: "You gather the shattered shards and one by one place them back into their original place. The mirror gladly accepts the pieces. The distorted reflection heals itself and your once-broken resolve becomes whole.",
    image: "images-js/fixedmirror.png",
    choices: ["Explore the shadow path"]
 },
   {//Shadowed path 42
    text: "You crouch down squeezing into the ever-closing hallway of the shadowed path. A gleaming gold timepiece stands at the end of the corridor, its adorned handles pulling you closer. You inch forward towards the hourglass still wary of the walls closing in. With each step, the walls only descend further.",
    image: "images-js/hourglass.png",
    choices: ["Turn the hourglass", "Leave the hourglass"]
},
{//Shadowed path - Turn the hourglass 43
    text: "Your fingers reach out and feel the cold metal of the adorned handle. With a swift movement, the sand shifts somersaulting as the hourglass turns. A glow forms from the hourglass as the crushing walls begin to ease and a stillness fills the air.",
   image: "images-js/hourglassflipped.png",
    choices: ["Explore the opened path"]
},
{//open path 44
    text: "You are drawn towards the open path, its sun-kissed hallways inviting you in like a warm hug. A light breeze follows you as plants sprout around in a greenhouse. You take in a deep breath, a sudden rancid smell taking hold. The room darkens and the once lively plants lie withered like corpses scattering the floor. At the end of the path lies the ghost of a rose and a potion vial to its side.",
    image: "images-js/deadrose.png",
    choices: ["Leave the rose", "Nurture the rose"]
},
  {//nurture the rose 45
    text: "You push forward disregarding the corpsed landscape in front of you. Picking up the vial you tilt the silverly liquid over the rose. Like the first bloom of spring, the withered flower glows and erupts with life. The light pulsates through the room as the greenhouse comes to life once again.",
    image: "images-js/aliverose.png",
    choices: ["Return to the main hall"]
},
 {//leave the rose 46
    text: "Your breath heaves in and out as the rancid smell fills your lungs. Your feet turn ready to leap back to the light but no movement follows. The withered vines wind around your ankles pulling you down and into their corpsed embrace.",
    //image: "images-js/door.jpeg",
    choices: ["Replay"]
 },
 {//fear of change puzzle 47 
    text: "You place the objects atop their respective pedestals. As the last object settles, each one begins to glow, a warmth radiating from their very cores. The spirit bows its head, its approval shifting the thickened air across the realms of fear. Its wavering form disappears into the once lonely mirror guiding you back home and leaving the echoes of fear in the distance.",
    image: "images-js/pedestalsglow.png",
    choices: ["Ascend the fear dimension"],
},
 {//fear of change puzzle 48
    text: "The spirit glares at you, its red eyes narrowing. The pedestals drop with a thud, the floor encircling into a vortex and plunging you into its wrath.",
   // image: "images-js/door.jpeg",
    choices: ["Replay"],
},
 {//fear of change puzzle 49
    text: "An annoyed growl erupts from the spirit. The pedestals crash to the ground as the vortex in the room quickens. The kaleidoscope of colors dizzies your eyes, its force pulling you into its grasp, all becoming one with the blur.",
   // image: "images-js/door.jpeg",
    choices: ["Replay"],
},
 {//fear of failure 50
    text: "The mirror swirls once again as it draws you into its cracked embrace. On the other side of its reflected surface, a room lies before you, standing like a distant memory. Echoes of your childhood scatter across the room as the feeling of warmth fills through you. Your eyes draw across the room when a pit falls in your stomach. Unfinished projects, bad tests, crumpled papers, and broken frames litter the floor. The weight of a defeated past presses against your shoulders as the spirit manifests behind you.",
    image: "images-js/failure.png",
    choices: ["Confront the spirit of fear", "Befriend the spirit of fear"],
},
 {//fear of change puzzle 51
    text: "The mirror swirls once again as it draws you into its cracked embrace. On the other side of its reflected surface, a room lies before you, standing like a distant memory. Echoes of your childhood scatter across the room as the feeling of warmth fills through you. Your eyes draw across the room when a pit falls in your stomach. Unfinished projects, bad tests, crumpled papers, and broken frames litter the floor. The weight of a defeated past presses against your shoulders as the spirit manifests behind you.",
    image: "images-js/failure.png",
    choices: ["Confront the spirit of fear", "Befriend the spirit of fear"],
},
 {//fear of change puzzle 52 --- add riddle
    text: "Despite the weight pressing against your shoulders, you turn around to face the spirit. The hint of a smirk glistens on the spirit’s lips. ‘Without me it is impossible to learn, but I can bring you down with a bad midterm. What am I?’",
    image: "images-js/failurequestion.png",
    answer: "failure", // Correct answer
    choices: ["Answer the Riddle"],
},
 {//fear of change -- correct 53
    text: "The room begins to shift. Once scattered failures begin to disappear, only the memory of their life lessons remaining. The spirit gestures as the room swirls revealing the single flame gleaming against the lonely mirror.",
   image: "images-js/uncrumpledpaper.png",
    choices: ["Ascend the fear dimension"],
 },
 {//fear of change -- wrong 54
    text: "‘Failure. Constant failure.’ The spirit’s presence weighs heavier and heavier crushing you to the ground. You lie still, the failures engulfing you into their grasp.",
   // image: "images-js/door.jpeg",
    choices: ["Replay"],
 },
  {//fear of change -- befriend the spirit 55
    text: "You glance across the room your eyes weaving through the past failures. Each one was once life-threatening but now lies dormant like a distant memory. Failure did not consume you, and will not consume you. You lock eyes with the red irises as the spirit bows understanding your acceptance. Whisping aside, the spirit manifests the lonely mirror in front of you willing you to step through.",
   image: "images-js/uncrumpledpaper2.png",
    choices: ["Ascend the fear dimension"],
 },

    {//Ascend 56
        text: "A familiar feeling dawns upon you as the eyes draw nearer. Moments ago, the same figure welcomed you into its abyss. You close your eyes as the glaring irises dissolve into nothingness. The weight of the spirit's judgment lifts from your shoulders. The darkness that once clung to you drips away like paint chipping away. Light pierces through as you find yourself across from your reflection and the single wavering flame once again. ",
        image: "images-js/failureriddle.png",
        choices: ["Ascend the fear dimension"]
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
   // if (storyState === 3 && 13) {
   //     choice1Button.classList.add('crossed-out');
   // } else {
   //     choice1Button.classList.remove('crossed-out');
  //  }

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
    if (storyState === 10 || storyState === 52) {
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
        if (storyState === 48) {
            choice1Button.textContent = 'Replay';
            choice1Button.style.display = 'block'; // Make sure replay button is visible
            choice2Button.style.display = 'none';  // Hide second choice
        }
        if (storyState === 54) {
            choice1Button.textContent = 'Replay';
            choice1Button.style.display = 'block'; // Make sure replay button is visible
            choice2Button.style.display = 'none';  // Hide second choice
        }


        if (storyState === 11) {
            // Set the text and display the first button
            choice1Button.textContent = 'Ascend the fear dimension';
            choice1Button.style.display = 'block'; // Show the first button
            
            // Set the text and display the second button
            choice2Button.textContent = 'Venture deeper';
            choice2Button.style.display = 'block'; // Show the second button
        }
        if (storyState === 53) {
            // Set the text and display the first button
            choice1Button.textContent = 'Ascend the fear dimension';
            choice1Button.style.display = 'block'; // Make sure replay button is visible
            choice2Button.style.display = 'none';  // Hide second choice
        }
        if (storyState === 47) {
            choice1Button.textContent = 'Ascend the fear dimsension';
            choice1Button.style.display = 'block'; // Make sure replay button is visible
            choice2Button.style.display = 'none';  // Hide second choice
        }
        
        if (story[storyState].echo) {
            document.getElementById('listen-echo').style.display = 'block'; // Show the echo button
        } else {
            document.getElementById('listen-echo').style.display = 'none'; // Hide the echo button
        }
        document.getElementById('listen-echo').addEventListener('click', function () {
            echoSound.play(); // Play the echo sound effect
        });

        if (story[storyState].noise) {
            document.getElementById('listen-noise').style.display = 'block'; // Show the noise button
        } else {
            document.getElementById('listen-noise').style.display = 'none'; // Hide the noise button
        }
        document.getElementById('listen-noise').addEventListener('click', function () {
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
        } else if (choice === "Extend your hand") {
            storyState = 5;
        } else if (choice === "Venture forth") {
            storyState = 7;

     //   } else if (choice === "Right") {
           // storyState = 7;
        } else if (choice === "Confront the figure") {
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
        } else if (choice === "Descend the left chasm") {
            storyState = 16;
        } else if (choice === "Descend the middle chasm") {
            storyState = 19;
        } else if (choice === "Descend the right chasm") {
            storyState = 21;
        } else if (choice === "Ascend the chasms grasp") {
            storyState = 0;
        } else if (choice === "Another fear awaits") {
            storyState = 23;
        } else if (choice === "Shadowed path") {
            storyState = 24;
        } else if (choice === "Leave the hourglass") {
            storyState = 25;
        } else if (choice === "Explore the open path") {
            storyState = 28;
        } else if (choice === "Nurture the rose") {
            storyState = 29;
        } else if (choice === "Explore the pulsating path") {
            storyState = 31;
        } else if (choice === "Step through the mirror") {
            storyState = 32;
        } else if (choice === "Return to the main hall") {
            storyState = 34;
        } else if (choice === "Nurture the flower") {
            storyState = 36;
        } else if (choice === "Explore the shadowed path") {
            storyState = 37;
        } else if (choice === "Leave the timepiece") {
            storyState = 38;
        } else if (choice === "Explore the shadow path") {
            storyState = 42;
        } else if (choice === "Explore the opened path") {
            storyState = 44;
        } else if (choice === "Leave the rose returning to the light") {
            storyState = 46;
        } else if (choice === "Turn the hourglass") {
            storyState = 43;
        } else if (choice === "Drift onward") {
            storyState = 14;
        } else if (choice === "Ascend the fear dimension") {
            storyState = 0;
        } else if (choice === "Mirror, Rose, Hourglass") {
            storyState = 48;  

        } else if (choice === "Guess the motive, killer, and victim") {
            storyState = story.length - 1; // Final state of story
        } else {
            // Advance the story forward 
            storyState++;
        }
}
        updateStory();
   
});



choice2Button.addEventListener('click', function () {
    // choice 2
    if (choice2Button.textContent === "Venture deeper") {
        storyState = 51;  
        console.log("Updated storyState to 51");
    } else {

    if (storyState >= 0 && storyState < story.length) {
        const choice = story[storyState].choices[1];

        if (choice === "Run away") {
            storyState = 2;
        } else if (choice === "Reject the spirit") {
            storyState = 4;

        } else if (choice === "Run away") {
            storyState = 0;
        } else if (choice === "Befriend the figure") {
            storyState = 56;
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
        } else if (choice === "Dive deeper") {
            storyState = 23;
        } else if (choice === "Turn the hourglass") {
            storyState = 26;
        } else if (choice === "Leave the rose") {
            storyState = 30;
        } else if (choice === "Return the shard to the mirror") {
            storyState = 33;
        } else if (choice === "Leave the flower") {
            storyState = 30;
        } else if (choice === "Open path") {
            storyState = 35;
        } else if (choice === "Turn the timepiece") {
            storyState = 39;
        } else if (choice === "Return the pieces to the mirror") {
            storyState = 41;
        } else if (choice === "Nurture the rose") {
            storyState = 45;
        } else if (choice === "Leave the hourglass") {
            storyState = 25;
        } else if (choice === "Venture deeper") {
            storyState = 51;  
        } else if (choice === "Befriend the spirit of fear") {
            storyState = 55;  
        } else if (choice === "Hourglass, Rose, Mirror") {
            storyState = 47;
        } else {
            storyState++;
        }
    }
}
        updateStory();
   
});
choice3Button.addEventListener('click', function () {
    const choice = story[storyState].choices[2];
    if (choice === "Right") {
        storyState = 20;
    } else if (choice === "Pulsating path") {
        storyState = 40;
    } else if (choice === "Rose, Mirror, Hourglass") {
        storyState = 48;  
    } // Add other conditions as needed...
    
    updateStory();

});



submitAnswerButton.addEventListener('click', function () {
    const playerAnswer = riddleInput.value.toLowerCase();

    let correctAnswer;

    // Check the current story state and set the correct answer accordingly
    if (storyState === 10) {
        correctAnswer = 'judgement';  // First riddle answer
  
} else if (storyState === 52) {
    correctAnswer = 'failure';  // Third riddle answer
}

    // Check if the player's answer is correct
    if (playerAnswer === correctAnswer) {
        // Correct answer logic, advance story
        if (storyState === 10) {
            storyState = 11;  // Move forward after answering the first riddle
    } else if (storyState === 52) {
        storyState = 53;  // Move forward after answering the third riddle
    }
    } else {
        // Wrong answer logic
        if (storyState === 10) {
            storyState = 12;  // Wrong answer on first riddle, player dies
        } else if (storyState === 52) {
            storyState = 54;  
        }

    }

    updateStory();  // Update the story based on the new state
});


updateStory();