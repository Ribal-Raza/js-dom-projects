## Film Title Hover Effect

**Goal:** Create a hover effect which shows the poster of Film when ever the cursor hovers on Film title

**Process:**

- Created an `index.html` where html elements were included, film titles, images (which comes from `assets` folder).
- Created `styles.css` where styles are defined for html elements in `index.html`.
- `main.js` includes DOM selectors to target film title and mouse events. Then DOM manipulation methods were included to achieve the goal.

**Working of `main.js`:**

**1. Variable Initialization:**

- `elements`: Array containing references to all DOM elements with class "element".

**2. Looping through elements:**

- Uses the `forEach` method to iterate over each element in the `elements` array.

**3. Accessing specific child node:**

- Inside the loop, extracts the fourth child node of the current element and stores it in the `image` variable.

**4. Mouse event listeners:**

- Adds three event listeners to each element:

  - **mousemove:**

    - Updates the `left` and `top` styles of the `image` element to follow the mouse position (details.x and details.y) within the element.

  - **mouseenter:**

    - Sets the `opacity` of the `image` to 1, making it visible.

  - **mouseleave:**

    - Sets the `opacity` of the `image` to 0, hiding it.

**Overall Functionality:**

This code makes an image appear in each element with class "element" upon hovering. The image moves with the mouse cursor within the element and fades out when the mouse leaves the element.
