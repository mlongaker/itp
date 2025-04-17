# Band Website
## Malcolm Longaker
### Intro to Programming
#### 04/17/2025
For this assignment we took an html file for a webstie and changed the code to match a description of a band that we made up, and then pushed it to a repository for Nick's github website [Click here for our website](https://nickreinert.github.io/). This was the final code for our project: 
```
<!DOCTYPE html>
<html>
<head>
  <title>Band Website</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
  <header>
      <h1>Reject Society; Return <b>2</b> Nature</h1>
  </header>
<meta charset="utf-8">
<body>
 <h1>What We Stand For</h1>
  <p> We are a band <i>and</i> philisophical group. We value all carbon based matter, algea, snail, mushroom, cucumber (sea), cucumber (land), pickle, chicken, luke skywalker, vulture, grass, black mold, sea urchin, mosquito eater, wasp larvae, and maggot.
  <b>This is a special piece, dedicated to trees. Take a breath, and take a listen.</b>
  </p>
  <p>
  <audio src="ForestMorningBirds_SFXB.75.wav" controls>
  </p>
<h1>The Group</h1>
<img src="Programming Band.JPEG" alt="The Group">
<h3>Sarah</h3>
<p>Sarah, a native of the ocean, is well renowned for crafting mystical melodies from the high winds above the Pacfic. She holds a master's degree from Stanford University in aquatics and improvisational performance. Sarah has been in the band since 1857. 
</p>
    <h3>Nick</h3>
    <p>Nick is a squirell known for his profound ability to make music with nuts of all kinds. Coming from Tanzania, he learned to play the walnut at a young age, and later picked up the almond. He was awarded a Grammy for his performance on "Nuts from around the Globe."</p>

    <h3>Father Malcolm</h3>
      <p>Malcolm is a human from the forest. He was born and raised in the forest. He got his undergraduate degree in eating food, with a minor in advanced neurochemistry. He currently resides in a forest.
    </p>
	
    <h3>Annie Spade</h3>
      <p>Annie, a land dweller who is a fan of the Pacific ocean. She studies aquatics and fish of the local land. Residing in the sunny beaches in the south of California, she can be found studying the mythics of the Sea.
    </p>

</body>
</html>
``` 
Here is the CSS file referenced: 
```
body {
  background-image: url("free-nature-images.jpg");
background-size: cover;
background-repeat: no-repeat;
}

h1 {
  color: black;
  text-align: center;
  font-family: "Papyrus";
}

h3 {
  color: black;
  text-align: center;
  font-family: "Papyrus";
}

p {
  font-family: "Papyrus";
  font-size: 20px;
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
header
h1 {
  font-family: "Papyrus";
}
```

We first added our own text within the headers, and also added new description paragraphs for the bodies, including a band philosiphy, and 4 paragraphs, 1 for each band memmber's description, and used the `<i>` convention to put certain words in italics. The main trouble that we ran into was figuring out how to add image files into our index.html file. We realized that the issue was we were putting a link to the image that appeared when we dragged it into a browser, and not just the image title.png. When we tyoed that in and also had the image in the correct folder, it worked perfeclty for both of the two images we had. We also used the `"<audio"` and `controls>` conventions to add an mp3 file of a soundscape that is supposed to be our music with pause, play, and slider controls. My self assesment of my contributions to the group was that I had good suggestions for troubleshooting the image, such as figuring out that it shouldn't be an online image link and that jpeg, png, and jpg images would all work. I also figured out that we could go into private browsing mode to try to load a new version of our website without cache. Nick contributed greatly to the group because he wrote in most of the code in HTML and CSS and allowed us to upload the band website on his github website. Sarah contributed greatly because she remembered a lot of the correct requirements of the assignment and knew a lot of the conventions for HTML that the rest of us didn't. Annie contributed greatly because she edited the photo that we used as out band photo., and had the most coding experience.