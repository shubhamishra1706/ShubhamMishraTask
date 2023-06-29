In this app, i had made a file data.json , which i am importing in app.js
in app.js ,i am using bootstrap ,react-bootstrap, bootstrap-icons libraries.
i am importing Tmr component to show the time in the app.

designed the app throuugh following steps
1. firstly created react App by npx create-react-app command
2. created two usestate ,first is for selecting the specific city, and second to fetch data from the city selected
3. created a dropdown and mapped the city list into it
4. when the city is selected then mapping the data of the selected city in the bootstrap cards
5. applied ternary operator for displaying icons on both the cards, first ,according to the temperature i.e. if the temperature is more than 25 degrees then show icons else show other icon, same logic on the other card also but differentiated according to the airquality

