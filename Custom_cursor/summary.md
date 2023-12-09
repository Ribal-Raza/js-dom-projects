## Simple Custom Cursor

**Goal:** Create a simple circle that will follow the cursor.

**Process:**

- Created an `index.html` where html elements were included, a h1 heading and a div enclosed in a container div.
- Created `styles.css` where styles are defined for html elements in `index.html`.
- `main.js` includes DOM selectors to target the cursor. Then DOM mainpulation methods were applied to get desired results

**Working of `main.js`:**

**1. Variable Initialization:**

- `container`: references the DOM element with ID "container".
- `cursor`: references the DOM element with class "cursor".

**2. Event Listener:**

- Adds a "mousemove" event listener to the `container`.

**3. Event Handler:**

- When the mouse is moved within the `container`:

  - Sets the `left` style property of the `cursor` element to the current mouse position's X coordinate (mouseEvent.x) plus "px".
  - Sets the `top` style property of the `cursor` element to the current mouse position's Y coordinate (mouseEvent.y) plus "px".

**Overall Functionality:**

This code makes the cursor element follow the mouse movements within the container element.
