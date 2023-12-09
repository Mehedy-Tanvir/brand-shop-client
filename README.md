# NEXUS BRAND STORE

## Project Features

- In the home page, it has 6 sections, which are Navbar, Banner, Brands, FAQ, and Contact NEXUS. The home page initially loads brand data from the server, which is stored in the database and shows them in cards of the brands' section.
- The Navbar contains a theme toggle button, user image (if logged in), user name (if logged in), home, add product, my cart, login/logout (depending on the user logged in or not).
- Users can change the theme between dark and light by clicking the moon and sun buttons located at the Navbar. The user's theme preference is stored in local storage so that reloading and reopening the browser will not change the theme.
- Clicking on the brands' cards will redirect you to the respective brands' products page.
- The brand products' page contains a slider containing 4 ads images and corresponding brand products.
- In the brand products' page, product information with detail button and update button are shown.
- Clicking the detail button will redirect the user to the detail page, where there is an add to cart button. The detail page is a private route that cannot be accessed without login.
- Clicking the add to cart button in the detail page will add products to your cart (will add that product to that user's name in the database).
- Users can see their added-to-cart products in my cart page. Users can also remove products from my cart by clicking the delete button. It is a private route.
- Clicking add product in the navbar, the user is redirected to the add product page, where there is a form to add a product. Submitting the form will add that product to the database, which can be later seen in the brand's products page. Add products is a private route.
- Clicking the update button on the products page for each product will redirect the user to the update page, where the data of that product is preloaded and set as the default value in the update form. After updating and submitting the form, it will update the product's information. This update page is a private route.
- Login and register page can be toggled by clicking login below the register form and register below the login form.
- When registering, it checks if the password is a minimum of 6 characters, containing a capital letter, containing a special character, and gives an error toast when these conditions are not met.
- The Firebase authentication system is implemented in this project.
- After a successful registration, it will show a success toast message; otherwise, show an error toast containing an error message.
- After a successful login, it will show a success toast message; otherwise, show an error toast containing an error message.
- After a successful profile update, it will show a success toast message; otherwise, show an error toast containing an error message.
- Clicking logout will log out the user and show a success toast message.
- There is an error page. If the user tries to access a page that is not available, then the error page will be rendered.

## Technology Used

- **Frontend:**

  - React.js
  - React Router
  - Tailwind CSS
  - Daisy UI

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB

- **Authentication:**

  - Firebase (Email-password and social-based authentication)

- **Other Libraries:**

  - React Hot Toast
  - Prop Types
  - React Icons
  - React Rating

- **Deployment:**

  - Client side was hosted to Firebase
  - Server side was hosted to Vercel

## Server Repository

- [https://github.com/Mehedy-Tanvir/brand-shop-server](https://github.com/Mehedy-Tanvir/brand-shop-server)

## Live Link

- [NEXUS BRAND STORE](https://nexus-brand-store.web.app/)
