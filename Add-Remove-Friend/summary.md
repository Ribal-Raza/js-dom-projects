## Add/Remove Freind Button

**Goal:** Create a button which could be used as Adding or Removing friend (just like facebook's) using JS DOM Manipulation techniques.

**Process:**

- Created an `index.html` where html elements were included like person's image (which comes from `assets` folder), friendship status text, and an "Add Friend" Button.
- Created `styles.css` where styles are defined for html elements in `index.html`. It shapes those element in a card.
- `main.js` includes DOM selectors to target Add/Remove button, user image, and freindship status text. Then DOM manipulation methods were included to achieve the goal.

**Working of `main.js`:**

1.  **Initializes elements:**

    - `friendStatus`: Points to the `h4` element with the friend status text.
    - `addFriend`: Points to the button element with the ID "add".
    - `statusValue`: Stores the current friend status (0 for Not Friend, 1 for Friends).
    - `image`: Points to the `img` element.

2.  **Adds click event listener to `addFriend` element:**

    - When clicked:
      - If `statusValue` is 0 (Not Friend):
        - Updates friend status text to "Friends" and color to "cadetblue".
        - Changes "addFriend" button background color to "#dadada", text to "Remove Friend", and text color to "black".
        - Updates image border color to "cadetblue".
        - Sets `statusValue` to 1.
      - If `statusValue` is 1 (Friends):
        - Updates friend status text to "Not Friend" and color to "red".
        - Changes "addFriend" button background color to "cornflowerblue", text to "Add Friend", and color to "white".
        - Updates image border color to "#455152".
        - Sets `statusValue` to 0.

3.  **Toggles friend status and updates UI based on `statusValue`:**

    - The click event listener changes the displayed text, colors, and border based on the current `statusValue`.
