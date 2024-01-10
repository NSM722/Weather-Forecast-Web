# Programming Task

You are working for a fictitious company that is a web application for displaying weather information. The application should retrieve and display weather data from an external API. Your goal is to develop an application that retrieves information about the current weather of an entered city from an API and displays it on the website.

## 1

As a user of the app, I would like to receive the weather data for the next 3 days after entering a city.
The weather data should contain metric information about the

- temperature `{ temp.day }`
- rain `{ rain }`
- wind `{ speed }`
- cloudiness `{ clouds }`
- description. `{ weather.description }`

API Forecast: <https://openweathermap.org/forecast16>

API KEY: 72791e8fd263ad40dd48dd074e454dbb

## 2

The application should provide the possibility to view several cities at the same time.
The highest value of the marked values, should be highlighted in color.

## 3

In the event that the Internet connection is lost, the cities should still be displayed.

## 4

Cities should also be able to be removed again.

## 5

In addition to the weather data, a picture of the corresponding city should also be displayed.

API: <http://developers.teleport.org/api/getting_started/#photos_ua>

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
