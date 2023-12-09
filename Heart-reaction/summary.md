## Heart Popup Animation

**Goal:** Create a Heart popup animation when user double clicks/taps the picture (just like Instagram's) with JS DOM Manipulation.

**Process:**

- Created an `index.html` where html elements were included, image (which comes from `assets` folder), a heart svg icon.
- Created `styles.css` where styles are defined for html elements in `index.html`. It shapes those element in a card and puts the heart svg in center of the image.
- `main.js` includes DOM selectors to target image, and heart svg. Then DOM manipulation methods were included to achieve the goal.

**Working of `main.js`:**

**1. Variable Initialization:**

- `container`: references the `div` element with class "container". This "container" contains the image.
- `heart`: references the DOM element within "container" that represents the heart SVG.

**2. Event Listener:**

- Adds a `dblclick` event listener to the `container`.

**3. Event Handler:**

- When `dblclick` is triggered:

  - Sets the heart's `transform` property to scale it to its original size (scale(1)) and center it within the container (translate(-50%,-50%)).
  - After 1.5 seconds (1500 milliseconds):

    - Sets the heart's `transform` property to shrink it to zero size (scale(0)), effectively making it invisible.

  - After 1 second (1000 milliseconds):

    - Sets the heart's `opacity` to 0, completely hiding it.

**Overall Functionality:**

This code adds a double-click interaction to a container element. When double-clicked, the heart SVG within the container will scale to its original size, then shrink to zero size and fade away after a short delay.
