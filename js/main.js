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
        choices: ["Replay"],
    },
    {//Accept or Reject the spirit 3 - mirror with hand sticking out
        text: "Once echoed steps come to an abrupt halt, the flickering flames following. Silence. A shiver bolts through your spine. A swirling heavy dense of clouds winds like vines twining through limbs. Crack. A cacophony erupts, mirrors crumbling to the floor. A cloaked figure appears through the mist, a gloved hand reaching toward you.",
        image: "mirror1.png",
        choices: ["Extend your hand", "Reject the spirit"]
    },
    {//Reject the spirit 4 - shattered glass spiral
        text: " An inhumane growl errupts from the cloak shifting the room. 'No,' A simple strangled cry. 'No!' The figure bellows, the once saddened cry growing  enraged. Tormented angry cries echo through the mirrors, when a pull forces you forward through the shattered glass.  ",
        image: "mirrorshards.png",
        choices: ["Drift onward"]
    },
    {//Accept the spirit 5
        text: "You extend your hand out, as a gloved hand entwines your fingers. Ghosted arias surround you each note blowing like ripples through the air. The spirit is welcoming you, guiding you through a world of fear.",
         image: "images-js/mansion.jpeg",
         choices: ["Venture forth"]
    },
    {//Into the fear dimension 6 -- to be done pathway illustration
        text: "Air whooshes past you, your reflection glaring back at you through shattered shards as you descend the chasm. The spirit's cackle bellows as you fall down darkness surrounding you, 'Into madness you go.' You feel yourself come to a standstill, as two illuminated pathways take shape in front of you.",
        image: "pathways.png",
        choices: ["Right", "Left"]
    },
    {//Right (Judgement fear) 7 -- to be done -- eyes illustration
        text: "You are drawn through a darkened room, shadows clinging to every corner, no hint of light visible. The air is thick as silence follows your every turn creating an endless stillness. You place one foot in front of the other. Through the darkness, two eyes flicker open, red irises glaring like distant stars lost in an abyss. You are no longer alone.",
        image: "eyes.png",
        choices: ["Confront the figure", "Befriend the figure"]
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
        text: "As you lock eyes with the spirit a chill runs down your spine. The booming voice echoes once again, 'I measure every debate, yet I am without weight. What am I?'",
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
    {//Fear 2 -- heights/falling 13
        text: "Limbs flail as the chasm continues, no end in sight. Jagged walls rush past like teeth as your hands grasp forward into emptiness. The merciless drop descends, screams bellowing out of your throat. A cackle forms through the ripples of wind rushing past you as taunts follow. A jarring stillness cuts through the chaos, suspending you in the air.",
        //  image: "images-js/mirror.jpeg",
        choices: ["Confront the voice"]
    },
    {//confront the spirit fork heights 14
        text: "You come to a halt landing on top of a cobblestoned platform. Your eyes follow the uneven rocks leading to another forked path. The three paths lying in in front of you shroud in a layer of mist seeming to drop off into thin air, floating and falling. The mist swirls in front of you laying out the words 'Only the highest stand silent, while the lowest cry violent. Face the fear and escape is near. Choose a path' the spirit speaks directing you forward.",
        image: "images-js/smoke.jpeg",
        choices: ["Left", "Middle", "Right"]
    },
    {//Left path 15
        text: "You take cautious steps towards the left pathway. The mist holding the riddle seems to follow your every move in a hissing wave. Suddenly the swirling mist halts before tumbling down into a deep chasm. You gasp the sound echoing loudly against your ears.",
        image: "images-js/candle.png",
        choices: ["Descend the left chasm", "Turn back"],
        echo: true
    },
    {//Left path loose 16
        text: "You step forward, cautiously, but with each step, the pull intensifies, turning into a suffocating force. The air grows cold, and the hissing sound of the mist turns into whispers, distorted and menacing. The ground beneath you trembles slightly, and a deep rumble echoes through the chasm as you tumble down becoming one with the darkness.",
        image: "images-js/servantsroom4.png",
        choices: ["Replay"]
    },
    {// Right path: choose to replay or dive deeper 17
        text: "Inching forward you decend the weaving staircase. The faint glow flickers, casting shadows that dance along the stone walls. The glow brightens, as you find yourself staring at a single flame dancing in the room full of mirrors.'",
        image: "images-js/keys.jpeg",
        choices: ["Return to safety", "Dive deeper"]
    },
    {//Middle path: throws you in further 18
        text: "The path straight ahead is rockier now, a tumble of uneven ridges that seem to rise and fall like the spine of the spirit. Pebbles skitter underfoot, some clambering down the chasm, an echo ever so slightly following.",
        image: "images-js/map.jpeg",
        choices: ["Descend the middle chasm", "Turn back"]
    },
    {//Descend down the middle 19
        text: "'For a moment, all is still until the mist returns coiling like a serpent. The air shifts unnaturally, and suddenly the ground beneath you begins to twist. Shadows rise from the mist, slithering up your legs. Whispers fill your senses. Writhing the mist takes the spirits cloaked from and bellows “Wrong!” You find yourself tumbling through the thickened air once again.",
        image: "images-js/room.png",
        choices: ["Another fear awaits"]
    },
    {//Go to the right corridor 20
        text: "An irresistible pull tugs at you, guiding you toward the right path, as if the very air whispers for you to follow. You peer forward seeking the paths answers. Nothing but darkness returns to your senses.",
        image: "images-js/door.jpeg",
        choices: ["Descend the right chasm", "Turn back"]
    },
    {//Right - path - coorect! 21
        text: "You take in a long breath, the mist, swirling gently around you, beckoning you forward. The form resembles a familiar cloaked figure, whispers of assurance and ease filling your ears. You dangle one foot across the ledge when you feel a stepping stone caress the bottom of your shoe. The stones cascade down revealing a hidden staircase carved into the side of the chasm. A faint otherworldly glow guides you downward. The glow brightens, as you find yourself staring at a single flame dancing in the room full of mirrors.",
        image: "images-js/glass.png",
        choices: ["Ascend the chasms grasp", "Dive deeper"]
    },
    {//Go to the right corridor 22
        // text: "As the words leave your lips, a sense of warmth and relief washes over you. A lightness spreads through your fingerTurns, the burdens of fear shed from your shoulders. A final flicker of red eyes glow as you step through the mirror manifesting in front of you. With a step forward, your reflection pools into a silvery potion ascending you from the dimension of fear.",
        // image: "images-js/door.jpeg",
        // choices: ["Ascend the fear dimension", "Dive "]
    },
    {//fear of change puzzle 23
        text: "The room begins to whirl into a vortex, pulling you into a maze of corridors. Each door leads to another shifting space, an impossible kaleidoscope of colors forming in front of you. The walls breathe as if alive, shifting closer inward with each step you take. In the center of the vortex, the spirit waits, watching with three white pedestals and the shape of a door behind. The spirit gestures to three paths: one cast in shadow, the air squeezing from the enclosed walls; one open and bright; and the last pulsating with indecision.",
        image: "images-js/door.jpeg",
        choices: ["Shadowed path", "Open path", "Pulsating path"]
    },
// SHADOW PATH FIRST -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    {//Shadowed path 24
        text: "You kneel squeezing yourself into the ever closing hallway. The walls are snaked in cobwebs pulling the walls in towards you. You crawl picking up your pace as a clock begins to tick. At the end of the path lies an hourglass, the sand cascading down.",
        image: "images-js/door.jpeg",
        choices: ["Take the hourglass", "Turn the hourglass"]
    },
    {//Shadowed path - Take the hourglass 25
        text: "Your hand jolts out and your fingers reach for the time piece. Your hands make contact with the gold handle, yet the hourglass refuses to move. You tumble forwards, the closing walls nearly hitting you. The cobwebs begin to vine, entwining you into their embrace pulling you into their fearsome maze.",
        image: "images-js/door.jpeg",
        choices: ["Replay"]
    },
    {//Shadowed path - Turn the hourglass 26
        text: "Your fingers reach out seeking the golden handle of the hourglass. The cool of metal grazes your skin as you twist your hand. The time piece moves with you, the sand summersaulting as a glow emits from its center. The walls begin to ease as you stand tall and release the hourglass.",
        image: "images-js/door.jpeg",
        choices: ["Explore the open path"]
    },
    {//main room after mirror 27
       // text: "The main room continues to whirl in a vortex. The spirit gestures to two remaining paths: one open and bright; and one pulsating with indecision.",
       // image: "images-js/door.jpeg",
       // choices: ["Open path", "Pulsating path"]
    },
    {//open path 28
        text: "The open path smiles in front of you inviting you forward. You feel a lightness in your step as a glowing sun bathes the landscape in golden hues. You take a breath in, a rancid smell suddenly taking told. The illusion around you crumbles the alley in front of you transforms into a darkened hell scape filled with rotten corpses. At the end of the hallway lies a withered rose it’s petals consumed by blackness. A rustic bottle lies at its side.",
        image: "images-js/door.jpeg",
        choices: ["Nurture the rose", "Leave the rose turning back to the light"]
    },
      {//nurture the rose 29
        text: "You rush forward disregarding the horrifying scene in front of you. You reach for the vial , it’s silvery blue contents swirling. The cork pops as you Turn the vial, letting the liquid spill over the rose. The rose begins to glisten the darkness dispelling from its very core.  The room follows as sunlight bounces off the walls.",
        image: "images-js/door.jpeg",
        choices: ["Explore the pulsating path"]
    },
     {//leave the rose 30
        text: "The corpses lying twisted on the floor begin to rise. You can feel yourself ready to rush out the alley, but your legs root in place, unwilling to obey. The creatures, their features tormented in pure agony engulf you their limbs coiling with yours.",
        image: "images-js/door.jpeg",
        choices: ["Replay"]
    },
         {//pulsating path 31
            text: "Thud, thud thud, thud. The pulsating corridor vibrates almost mimicking your own heartbeat. You draw towards the lively path, the vibrations quickening as you enter. A single lonely mirror lies at the end, the pulsations threatening to crack the reflected surface. The mirror shakes with each step forward, your reflection distorting. As reflection meets reality, a single shard cracks to the floor.",
            image: "images-js/door.jpeg",
            choices: ["Pick up the shard", "Return the shard to the mirror"]
        },
          {//pulsating path - pick up the shard 32
            text: "You reach down, fingers trembling, as you pick up the shard.As you hold it, the jagged edge presses into your palm, a string of pain following. Run. Why fix it? Why bother? It's already broken. You break into a run, the shard clasped in your palm, its edges beginning to burn hot. The further you get the stronger it burns, the heat spreading from the shard into your skin. In seconds the heat consumes your very being, your once lively skin replaced with shimmering glass frozen in the realm of fear.",
            image: "images-js/door.jpeg",
            choices: ["Replay"]
        },

         {//pulsating path - return the shard 33
            text: "You reach down picking up the shard, fingers touching the cool reflective surface. You press the shard into the broken mirror, and immediately, a pulse of warm light ripples through the cracks. The jagged edges meld seamlessly, and the mirror begins to heal, the fractures disappearing as the surface becomes whole. What was once broken is whole again.",
            image: "images-js/door.jpeg",
            choices: ["Return to the main hall"]
        },
            {//pedestals 34 -- add in a riddle box 
                text: "You return to the main room, your eyes returning to the spirit’s as you walk toward the pedestals. The mirror, hourglass, and rose artifacts lay in front of you. The spirit’s voice booms once again “In times embrace, change takes flight, A broken bloom fades, yet sees the light, Embrace the fear, and the reflection will overwrite” Place the objects upon the pedestal in order.",
                image: "images-js/door.jpeg",
                answer: "hourglass, rose, mirror", // Correct answer
                 choices: ["artifact 1, artifact 2, artifact 3"],
            },
// OPEN PATH FIRST -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        {//open path 35
        text: "The open path smiles in front of you inviting you forward. You feel a lightness in your step as a glowing sun bathes the landscape in golden hues. You take a breath in, a rancid smell suddenly taking told. The illusion around you crumbles the alley in front of you transforms into a darkened hell scape filled with rotten corpses. At the end of the hallway lies a withered rose it’s petals consumed by blackness. A rustic bottle lies at its side.",
        image: "images-js/door.jpeg",
        choices: ["Nurture the flower", "Leave the flower turning back to the light"]
    },
      {//nurture the rose 36
        text: "You rush forward disregarding the horrifying scene in front of you. You reach for the vial , it’s silvery blue contents swirling. The cork pops as you tip the vial, letting the liquid spill over the rose. The rose begins to glisten the darkness dispelling from its very core.  The room follows as sunlight bounces off the walls.",
        image: "images-js/door.jpeg",
        choices: ["Explore the shadowed path"]
    },
     {//Shadowed path 37
        text: "You kneel squeezing yourself into the ever closing hallway. The walls are snaked in cobwebs pulling the walls in towards you. You crawl picking up your pace as a clock begins to tick. At the end of the path lies an hourglass, the sand cascading down.",
        image: "images-js/door.jpeg",
        choices: ["Take the timepiece", "Turn the timepiece"]
    },
    {//Shadowed path - Take the hourglass 38
        text: "Your hand jolts out and your fingers reach for the time piece. Your hands make contact with the gold handle, yet the hourglass refuses to move. You tumble forwards, the closing walls nearly hitting you. The cobwebs begin to vine, entwining you into their embrace pulling you into their fearsome maze.",
        image: "images-js/door.jpeg",
        choices: ["Replay"]
    },
    {//Shadowed path - Turn the hourglass 39
        text: "Your fingers reach out seeking the golden handle of the hourglass. The cool of metal grazes your skin as you twist your hand. The time piece moves with you, the sand summersaulting as a glow emits from its center. The walls begin to ease as you stand tall and release the hourglass.",
        image: "images-js/door.jpeg",
        choices: ["Explore the pulsating path"]
    },
// PULSATING PATH FIRST -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
{//pulsating path 40
    text: "Thud, thud thud, thud. The pulsating corridor vibrates almost mimicking your own heartbeat. You draw towards the lively path, the vibrations quickening as you enter. A single lonely mirror lies at the end, the pulsations threatening to crack the reflected surface. The mirror shakes with each step forward, your reflection distorting. As reflection meets reality, a single shard cracks to the floor.",
    image: "images-js/door.jpeg",
    choices: ["Pick up the shard", "Return the piece to the mirror"]
},

 {//pulsating path - return the shard 41
    text: "You reach down picking up the shard, fingers touching the cool reflective surface. You press the shard into the broken mirror, and immediately, a pulse of warm light ripples through the cracks. The jagged edges meld seamlessly, and the mirror begins to heal, the fractures disappearing as the surface becomes whole. What was once broken is whole again.",
    image: "images-js/door.jpeg",
    choices: ["Explore the shadow path"]
 },
   {//Shadowed path 42
    text: "You kneel squeezing yourself into the ever closing hallway. The walls are snaked in cobwebs pulling the walls in towards you. You crawl picking up your pace as a clock begins to tick. At the end of the path lies an hourglass, the sand cascading down.",
    image: "images-js/door.jpeg",
    choices: ["Turn the hourglass", "Take the hourglass"]
},
{//Shadowed path - Turn the hourglass 43
    text: "Your fingers reach out seeking the golden handle of the hourglass. The cool of metal grazes your skin as you twist your hand. The time piece moves with you, the sand summersaulting as a glow emits from its center. The walls begin to ease as you stand tall and release the hourglass.",
    image: "images-js/door.jpeg",
    choices: ["Explore the opened path"]
},
{//open path 44
    text: "The open path smiles in front of you inviting you forward. You feel a lightness in your step as a glowing sun bathes the landscape in golden hues. You take a breath in, a rancid smell suddenly taking told. The illusion around you crumbles the alley in front of you transforms into a darkened hell scape filled with rotten corpses. At the end of the hallway lies a withered rose it’s petals consumed by blackness. A rustic bottle lies at its side.",
    image: "images-js/door.jpeg",
    choices: ["Leave the rose turning back to the light", "Nurture the rose"]
},
  {//nurture the rose 45
    text: "You rush forward disregarding the horrifying scene in front of you. You reach for the vial , it’s silvery blue contents swirling. The cork pops as you tip the vial, letting the liquid spill over the rose. The rose begins to glisten the darkness dispelling from its very core.  The room follows as sunlight bounces off the walls.",
    image: "images-js/door.jpeg",
    choices: ["Return to the main hall"]
},
 {//leave the rose 46
    text: "The corpses lying twisted on the floor begin to rise. You can feel yourself ready to rush out the alley, but your legs root in place, unwilling to obey. The creatures, their features tormented in pure agony engulf you their limbs coiling with yours.",
    image: "images-js/door.jpeg",
    choices: ["Replay"]
 },
 {//fear of change puzzle 47 
    text: "You place the hourglass, rose, and mirror on the pedestals in that careful order. As the last object settles, the air hums with energy. The spirit’s voice, once commanding, softens, “Turning the hourglass, you embraced the passing of moments you cannot hold. Nurturing the rose, you found beauty in what withers and fades. In the mirror, you saw yourself broken, yet chose to gather the pieces to change.’ No more words are needed as the spirit's approval is felt its form disappearing into mist guiding you back to the room surrounded in reflection the single flame still glowing.",
    image: "images-js/door.jpeg",
    choices: ["Ascend the fear dimension"],
},
 {//fear of change puzzle 48
    text: "An annoyed growl erupts from the spirit. The pedestals crash to the ground as the vortex in the room quickens. The kaleidoscope of colors dizzies your eyes, its force pulling you into its grasp, all becoming one with the blur.",
    image: "images-js/door.jpeg",
    choices: ["Replay"],
},
 {//fear of change puzzle 49
    text: "An annoyed growl erupts from the spirit. The pedestals crash to the ground as the vortex in the room quickens. The kaleidoscope of colors dizzies your eyes, its force pulling you into its grasp, all becoming one with the blur.",
    image: "images-js/door.jpeg",
    choices: ["Replay"],
},
 {//fear of failure 50
    text: "The room before you shifts to mimic your childhood home. You reminisce at the happy memories of childhood peering around the space. Echoes of a past life no longer lived sing, as the unhappy memories begin to twist and turn. The room is abruptly filled with broken objects, torn papers, and unfinished projects. The spirit manifests behind you the weight of the past pushing against your shoulders the heaviness overbearing.",
    image: "images-js/door.jpeg",
    choices: ["Confront the spirit of fear", "Befriend the spirit of fear"],
},
 {//fear of change puzzle 51
    text: "The room before you shifts to mimic your childhood home. You reminisce at the happy memories of childhood peering around the space. Echoes of a past life no longer lived sing, as the unhappy memories begin to twist and turn. The room is abruptly filled with broken objects, torn papers, and unfinished projects. The spirit manifests behind you the weight of the past pushing against your shoulders the heaviness overbearing.",
    image: "images-js/door.jpeg",
    choices: ["Confront the spirit of fear", "Befriend the spirit of fear"],
},
 {//fear of change puzzle 52 --- add riddle
    text: "You turn looking into the glowing red eyes once again. The spirit lets out a chuckle, 'I can bring you down with a single burn, but without me you will never learn'",
    image: "images-js/door.jpeg",
    answer: "failure", // Correct answer
    choices: ["Answer the Riddle"],
},
 {//fear of change -- correct 53
    text: "The failures that once clouded the room begin to lift. Cracked objects start to repair themselves, as crumpled papers vanish entirely. The room gradually fills with a soft light, a sense of hope emerging from the dark. The door of the room swings open revealing the the chamber of reflections, the single flame still burning.",
    image: "images-js/door.jpeg",
    choices: ["Ascend the fear dimension"],
 },
 {//fear of change -- wrong 54
    text: "The spirit cackles watching with expectant eyes, its gaze hardening with every moment. Its form shifts, the weight of mistakes crashing down on you, engulfing you in the clutch of failure.'",
    image: "images-js/door.jpeg",
    choices: ["Replay"],
 },
  {//fear of change -- befriend the spirit 55
    text: "You look around the room, taking in your past. Each one, once life threatening, shaped you into who you are today. Failure’s wrath did not crush you, instead, it guided you to strength. You turn, standing before the spirit looking into its red eyes. The spirit bows its head as the room dissolved into the chamber of reflections the single light aflame.",
    image: "images-js/door.jpeg",
    choices: ["Ascend the fear dimension"],
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
    if (storyState === 10 || storyState === 34 || storyState === 52) {
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
        } else if (choice === "Take the hourglass") {
            storyState = 25;
        } else if (choice === "Explore the open path") {
            storyState = 28;
        } else if (choice === "Nurture the rose") {
            storyState = 29;
        } else if (choice === "Explore the pulsating path") {
            storyState = 31;
        } else if (choice === "Pick up the shard") {
            storyState = 32;
        } else if (choice === "Return to the main hall") {
            storyState = 34;
        } else if (choice === "Nurture the flower") {
            storyState = 36;
        } else if (choice === "Explore the shadowed path") {
            storyState = 37;
        } else if (choice === "Take the timepiece") {
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
            storyState = 13;
        } else if (choice === "Ascend the fear dimension") {
            storyState = 0;

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

        if (choice === "Run Away") {
            storyState = 2;
        } else if (choice === "Reject the spirit") {
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
        } else if (choice === "Dive deeper") {
            storyState = 23;
        } else if (choice === "Turn the hourglass") {
            storyState = 26;
        } else if (choice === "Leave the rose turning back to the light") {
            storyState = 30;
        } else if (choice === "Return the shard to the mirror") {
            storyState = 33;
        } else if (choice === "Leave the flower turning back to the light") {
            storyState = 30;
        } else if (choice === "Open path") {
            storyState = 35;
        } else if (choice === "Turn the timepiece") {
            storyState = 39;
        } else if (choice === "Return the piece to the mirror") {
            storyState = 41;
        } else if (choice === "Nurture the rose") {
            storyState = 45;
        } else if (choice === "Take the hourglass") {
            storyState = 25;
        } else if (choice === "Venture deeper") {
            storyState = 51;  
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
    } // Add other conditions as needed...
    
    updateStory();

});



submitAnswerButton.addEventListener('click', function () {
    const playerAnswer = riddleInput.value.toLowerCase();

    let correctAnswer;

    // Check the current story state and set the correct answer accordingly
    if (storyState === 10) {
        correctAnswer = 'judgement';  // First riddle answer
    } else if (storyState === 34) {
        correctAnswer = 'hourglass, rose, mirror';  // Second riddle answer
} else if (storyState === 52) {
    correctAnswer = 'failure';  // Third riddle answer
}

    // Check if the player's answer is correct
    if (playerAnswer === correctAnswer) {
        // Correct answer logic, advance story
        if (storyState === 10) {
            storyState = 11;  // Move forward after answering the first riddle
        } else if (storyState === 34) {
            storyState = 47;  // Move forward after answering the second riddle
    } else if (storyState === 52) {
        storyState = 53;  // Move forward after answering the third riddle
    }
    } else {
        // Wrong answer logic
        if (storyState === 10) {
            storyState = 12;  // Wrong answer on first riddle, player dies
        } else if (storyState === 34) {
            storyState = 48;  // Wrong answer on second riddle, specific action
        } else if (storyState === 52) {
            storyState = 54;  
        }

    }

    updateStory();  // Update the story based on the new state
});


updateStory();