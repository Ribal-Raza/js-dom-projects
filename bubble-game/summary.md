## Bubble Game

**Goal:** Create a Bubble Game. The player starts a game with start button and bubbles with different numbers appear on screen. In top nav bar of the game, hit value, timer of 60 seconds and score is present.
User has to click the bubble with the number same to hit value. If user clicks right bubble, the score will increase by 10 and number on bubbles and hit value will change. If user clicks on wrong bubble, nothing will happen. This process will continue and when timer runs out, total score will be displayed with start button.

### Process and Working

**`index.html`:**

- Defines a basic structure with a main container, a game container, and a top bar containing score and timer information.
- The bottom bar will hold the dynamic bubbles.

**`styles.css`:**

- Resets all element styles.
- Main container: full screen, centered flexbox, #191919 background.
- Game container: 70% width, 90% height, rounded corners, #f9e8d9 background, hidden overflow.
- Top bar: full width, 5em height, flexbox layout with padding, #ee7214 background.
- Score box: flexbox with spacing, #f9e8d9 color, rounded boxes for values.
- Value element: padding, #f9e8d9 background, #750e21 color, bold font.
- h1: font size 1.2em.
- Bottom bar: fills remaining space, flexbox with wrap and scrollbar.
- Bubble: 3em size, rounded, #d36613 background, #f9e8d9 text, hover effect.
- Start button: large font, 3em height, 10em width, #750e21 background, #f9e8d9 text.

**`main.js`:**

- **Initializes variables:**

  - `time`: Starting game time (60 seconds)
  - `timerBox`: DOM element with id "timer"
  - `scoreBox`: DOM element with id "score"
  - `bubbleArea`: DOM element with class "bottomBar"
  - `score`: Starting score (0)
  - `num`: Random number target for hitting bubbles

- **Functions:**

  - `makeBubble`: Generates and displays 100 random bubbles with numbers 1-10
  - `timer`: Starts a timer that decreases time every 1 second
  - `hitNumber`: Generates and displays a new random number target for hitting bubbles
  - `increaseScore`: Checks if clicked bubble matches target and updates score if correct
  - `gameStart`: Creates a "Start Game" button that starts the game upon clicking

- **Game Flow:**

  - On game start:

    - Timer starts counting down
    - 100 random bubbles are generated
    - A random target number is displayed

  - Clicking a bubble:

    - If the bubble's number matches the target number:

      - Score increases by 10
      - New bubbles and target number are generated

  - Game ends when timer reaches 0:
    - Final score is displayed
    - Game restarts with a new "Start Game" button
