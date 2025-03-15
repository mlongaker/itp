# Midterm Project
## Malcolm Longaker
### Intro To Programming
#### 03/28/2025
For this assignment, I modified code-along code that allowed p5js.org to play back one audio file when a certain key is pressed and display text explaining what button to press and outputting text when a key is pressed to play back three audio files, each only when a key that is has been assigned to has been pressed. I started by going into ableton live and pulling a kick, snare, and hihat sample and exporting the selected audio as mp3 files for each sample and naming them Midterm Kick.mp3, Midterm Clap.mp3, and Midterm HH.mp3 . The next thing that I did was load each file into p5.js. Then I attempted to alter the code-along code to play back one of the files (Midterm Kick.mp3) I had loaded in by modifying the original code to look like this
`let myFirstSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('Midterm Kick.mp3', soundLoaded);
}

function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section\nPress 'D' to play sound", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'd') {
    playCustomSound();
  }
}

function playCustomSound() {
  if (myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}`
This code worked exactly how I desired, and a kick sample played every time that I pressed the D key on my computer. I then assumed that if this code would allow one key to play my first sound, the exact same code repeated after but with a replaced sound file, key letter, and binding would allow me to play a different sample every time I pressed the F Key. I tesedt my theory with these lines of code

`let myFirstSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('Midterm Kick.mp3', soundLoaded);
}

function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section\nPress 'D' to play sound", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'd') {
    playCustomSound();
  }
}

function playCustomSound() {
  if (myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

let mySecondSound;

function preload() {
  soundFormats('wav', 'mp3');  
  mySecondSound = loadSound('Midterm Clap.mp3', soundLoaded);
}

function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section\nPress 'F' to play sound", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'f') {
    playCustomSound();
  }
}

function playCustomSound() {
  if (mySecondSound.isLoaded()) {
    mySecondSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}`

After noticing that now only the text that applied to the the second sound appeared on screen, and that only the second sound would play when I pressed its corresponding key, I knew that there had to be an issue, and I assumed that it had something to do with using the same commands for multiple different sounds, but I wasn't exactly sure so I turned to Chat GPT.
[Here is my ChatGPT interaction](https://drive.google.com/drive/folders/1QmAb3_l4wa_zQET7J7ryqu5KUHxNhWEi?usp=drive_link)
As you can see I just threw in the code that I had written on a whim. I did not expect or even know that it could just spit out the exact correct code to me. After reading through Chat GPT's response I would say that my main takeaway from this interaction was that you can't write a word after a function and tell it to do something, and than write that same term after a later function and tell it to the same thing, becuase javascript views this as a declaring the same function for two different things, and will override the first function declaration with the second. Knowing this, I tried to follow ChatGPT's formula and type out the code with every purpose for a function as part of the same declaration. I tried to type in the Hihat sample into each function as well without asking ChatGPT, just to try and get a bit more comfortable with the syntax. I also changed my text display to more or less what ChatGPT had written so that the user would know what button to push for each different sound. This is what my code looked like at this point. 
`let myFirstSound, mySecondSound, myThirdSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('Midterm Kick.mp3', soundLoaded);
  mySecondSound = loadSound ('Midterm Clap.mp3', soundLoaded);
  myThirdSound = loadSound ('Midterm Hihat.mp3', soundLoaded);
}

function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Press D for a Kick, F for a Clap, and T for a Hihat", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'd') {
    playCustomSound(myFirstSound);
  } else if (key.toLowerCase() === 'f') {playCustomSound(mySecondSound);
  } else if (key.toLowerCase() === 't') {playCustomSound (myThirdSound);
  }
}

function playCustomSound() {
  if (mySecondSound.isLoaded()) {
    mySecondSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}`
This code had two issues. Number 1, the start of the text was getting cut off. To solve this I changed the createCanvas part of my setup function to be 600, 200. Number 2, all three keys were playing samples, but they were all playing the exact same issue. To fix this I just realized that I had not taken note of ChatGPTs additions to my last 7 lines of code where it changes mySecondSound.isLoaded to just sound.isLoaded so that there will be playback for every sound that is loaded, not just the clap. This made my code entirely functional, and the final result looked like this
`let myFirstSound, mySecondSound, myThirdSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('Midterm Kick.mp3', soundLoaded);
  mySecondSound = loadSound ('Midterm Clap.mp3', soundLoaded);
  myThirdSound = loadSound ('Midterm Hihat.mp3', soundLoaded);
}

function setup() {
  createCanvas(600, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Press D for a Kick, F for a Clap, and T for a Hihat", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'd') {
    playCustomSound(myFirstSound);
  } else if (key.toLowerCase() === 'f') {playCustomSound(mySecondSound);
  } else if (key.toLowerCase() === 't') {playCustomSound (myThirdSound);
  }
}

function playCustomSound(sound) {
  if (sound.isLoaded()) {
    sound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}`
[Here is the link to my p5js.org project](https://editor.p5js.org/mlongaker/sketches/_FCrHnA3Q)