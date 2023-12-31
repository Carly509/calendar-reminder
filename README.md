# React

 This is a simple React application that allows you to add reminder in a calendar and see them in a list with the details of the reminder and the specific weather for that reminder's date. The app is built using React, Redux, Reduxjs/toolkit, React-Router, fontAwesome and VisualCrossing Api.
## Features
 - Ability to add "*reminders*" (max. 30 characters) for a day and time specified by the user. Also, include a city.
 - Ability to edit reminders - including changing text, city, day and time.
 - Add a weather service call from [VisualCrossing](https://www.visualcrossing.com/weather/weather-data-services#/login) and get the weather forecast (e.g. Rain) for the date of the calendar reminder based on the city.
 - calendar to support more than the current month or year.
 - Properly handle overflow when multiple reminders appear on the same date.
 - Unit test the functionality: *Ability to add "*reminders*" (max. 30 characters) for a day and time specified by the user. Also, include a city.*

 ## Prerequisites
 - Node.js
 - NPM

## How to deploy

 - Run `npm install` | `yarn install` to install all dependencies.

 - Run `npm start`   | `yarn run` to run the app locally.

This will run the app in the development mode.

To make the app work perfectly you'll need to create a `.env` file in the root of the project and add the following line:

`REACT_APP_API_KEY=YOUR_API_KEY`
You can get your api key from [VisualCrossing](https://www.visualcrossing.com/weather/weather-data-services#/login)
 - You can find the project running on `localhost:3000`.

 - You can find the calendar on `localhost:3000/calendar`.

 ## Run tests
 ```bash
npm test
```

## Technologies used

 * React - Builds the view layer of the web app.
 * Redux - Manages the state of the app.
 * Reduxjs/toolkit - Simplifies the use of Redux.
 * React-Router - Manages the routing of the app.
 * fontAwesome - Used for the icons.
 * VisualCrossing Api - Used to get the weather for the reminders.
 * Luxon - An alternative to moment, used to format the dates.
 * react-testing-library - Used to test the components.
