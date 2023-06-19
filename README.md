# Organic Healthier Danone Web 

Web page to promote the range of organic and healthier products of Danone.
  <div style="display:grid; place-items:center">
    <img src="./docs/imgs/gif/landing-screen.gif" style="max-width: 1024px"></img>
  </div>

<br>

## Demo
Check the app [here](https://danone-healthy.web.app/)

## Stack
 - Angular v16
 - Node v16+
 - Contentful v1
 - Firebase
## Requirements
 - Node v16+

## Installing
Once downloaded or clonned the project, move to the project folder and install the dependencis with the next command:
 ```powershell
 npm install
 ```
## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Decision making

I made this App in Angular because is a great and powerful framework to develop Websites and I have been working with it for more than 3 years. I chosen The Contenful Headless CMS because was suggested during the event and by last, I used Firebase hosting to deploy the app, using github actions, because I have more experience with it than Vercel.

Based on the requirements of the challenge, I set the next routes:

- <strong>'/'</strong>  Landing Page (Home page) 
- <strong>'/productos'</strong>  Products Page (List all products)
- <strong>'/productos/:productId'</strong>  Product Detail Page (Show the detail of a Product)
- <strong>'/calorias'</strong>  Calories Page (Allow configurate the maximum daily calorie limit)
- <strong>'/cuenta'</strong> User account Page (Allow the user to see and edit its own data)

I started with the layout and static data and then I moved to connect the App with the Headless CMS, however, due to time not all the requirements could be fulfilled. Next is shown a small status about the developed features:

- <strong>Landing Page</strong>  Finished but with static data ([see](https://danone-healthy.web.app/))
- <strong>Products Page</strong>  Finished and connected with the CMS Data using GrapQL ([see](https://danone-healthy.web.app/productos))
- <strong>Product Detail Page</strong>  Finished and connected with the CMS Data using GrapQL ([see](https://danone-healthy.web.app/productos/5jfXZEHZC5G4mS8J7tu4d5))
- <strong>Calories Page</strong>  Under construction ([see](https://danone-healthy.web.app/calorias))
- <strong>User account Page</strong>  Under construction ([see](https://danone-healthy.web.app/cuenta))
- The bar search was added, but it does not have functionality.
