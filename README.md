# Two Barrels Website

Desktop
https://github.com/rlnB2022/twobarrels/assets/5834000/c180f793-dc5f-40ec-86ab-cacd1e45ace9

Mobile
https://github.com/rlnB2022/twobarrels/assets/5834000/cf3d4e6f-8ea8-49c7-b0cd-a8798997a0b3


# Project Description

I created this project in 2021 to further my React knowledge using React 17, Firebase, useState/useEffect hooks and a Firestore database. I thought that this would be a fun project to create and that I could use this app to help new Javascript developers learn Javascript while playing the game.

Now, after being employed as a React Software Engineer for an amazing company, I have revisited this project to apply a lot of what I have learned. One, was implementing React Redux to manage state.

The game has 3 lifelines:
* Ask the Audience - Each question records each answer the user selects to the database, so I can then use this data to create a bar graph representing the percentage of the audience that answered each question. It is then up to the user to choose the answer they believe is correct.
* 50:50 - Selecting this lifeline RANDOMLY removes two of the four available answers, leaving the correct answer and one other.
* Phone A Friend - This randomly chooses from a selection of 'friends' to help them with the question. Their answers aren't always correct. Depending on the difficulty of the question, their suggestion accuracy diminishes.

# Technologies Used

This project is created with:

* React 17 - useState and useEffect Hooks.
* Redux - Maintaining state globally in a store
* Firebase - Firestore database CRUD operations.
* HTML 5
* CSS 3
* Javascript

# Problems Faced

* Having never used Firebase/Firestorm before, I took it as a challenge. (I love learning new things!) Reading through the Firestorm docs and walking through the setup process on their website wasn't too difficult.

* I had an issue with too many renderings when I implement the Timer component from App.js. Instead of counting down from 30 when the game starts and the question is revealed, it began immediately. I moved the logic to the Timer component and that helped tremendously.

* I used SVG images for each question/answer. I ran into a problem where the SVGs wouldn't resize to fit the grid. I replaced the SVGs with simple borders/border-radius styles applied. I understand that the viewbox setting in the SVG might be the culprit. I'll have to learn more about using SVGs to understand how to implement something like this in the future.

# What I learned

I learned that React is the library that was just made for me. I love it! Firestore databases are amazing. Coming from a SQL background, a noSQL database with documents wasn't as difficult as I thought it would be. Implementing React Redux to manage the state of the app was also not as difficult as I expected, either. At my current job, we used Flux, so it was easy to adapt and learn.

# Takeaways

This was a really fun project to create. I finished working on this project September 26, 2021...late into the night. Deployed on Github Pages.

Thanks for reading!
