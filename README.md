# Calculator

A simple calculator that lets you do some math through clicks or (mostly) numerical keyboard built with JavaScript.

Specification and instruction from [The Odin Project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator)

Font used: Courier New

## How to use

For online, visit the [Github-hosted page](https://scheals.github.io/calculator/)

For offline use simply download the files to one directory and open index.html in your browser of choice.

## Features
* Ability to perform basic math calculations
* Two colour themes to choose from
* Big display

## Possible future additions

### UI / UX
* Keep past user inputs in a different section of display
* Let user choose between big display and reduced number length or smaller display and longer number length

### Internal
* Code clean-up, especially fix the event listener functions

### Additional Features
* Let user input negative numbers
* Support more operations like square roots or percentages


## Reflections

This is it: the finale of Foundations part of The Odin Project. Without creating a flowchart and pseudocoding the approach before getting into nitty-gritty of the project I'd have a very hard time completing it. At the very beginning of the project I was debating how the inputs and the output are going to work. I figured that `.textContent` route is going to be dangerous and prone to errors so I planned my calculator out in a way where the output is always based on what actually is stored in the variables and that it never takes into account the `.textContent` of the display. This meant there was no way for anything to show up in a display before it was actually accepted by the code and put into a variable. Thus, that was my first time using an Object of my own in JavaScript. I found this approach great and when I had to modify the code to meet the specification of chaining operations I already knew what I need to modify and how. It was painless. Also, I got plenty of practice with cleaning up my functions so they don't do more than there's on the tin.

## Acknowledgements 
Eduardo06sp and Man0war from TOP Discord for amazing feedback.
README layout from [Chargrilled Chook](https://github.com/ChargrilledChook)
