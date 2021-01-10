# BirdWatcher

[![Netlify Status](https://api.netlify.com/api/v1/badges/3daa7082-7a6a-4d66-aa37-44f3ed91ca2d/deploy-status)](https://app.netlify.com/sites/birdwatcher/deploys)

This is a project I did to practice using CSS variables with Javascript.
**BirdWatcher** simulates birdwatching by changing the position of "birds" on the screen as well as changing the focus of the "binoculars".

Preview: https://birdwatcher.netlify.app/

## What I learned from this project

- **Position**: I leared much about different types of `position`. To move the birds around the screen, I set their `position` to `absolute` and their parent container to `relative` so that the birds moved relative to their parent.
- **JS**: I learned how to control CSS variables using JS. I selected the root element of the DOM model (`documentElement`), chose its `style` and used `setProperty('propertyName', 'propertyValue')`.
- I also learned that `NodeLists` are not as powerful as `Arrays`. `Arrays` have more functions you can use.
- **Grid and Flex**: This is my first time using Grid. I used it to control the layout of the controls panel. I used Flex to make the overall layout of the page. Flex and Grid are powerful in their own ways and sometimes one is better than the other. Personally, I used Grid for the control panels because Flex would have required more `div`s.
- **Variables**: Because the two birds are not meant to be stacked on top of each other, I used separate `top` and `left` values for each. Then, I stored those default values in the variables. I also used `filter: blur()` on the bird images and stored the amount of blur in a variable.
- **Summary**: I think CSS was more of a challenge than JS for this one. There were many concepts and properties involved. To get the binocular effect. I nested the background image inside of the `view` element and used `overlay: hidden;`.
- **Potential Improvement**: I also thought about fixing the birds on the page and moving the view window but it seemed too complicated for me at the moment.
