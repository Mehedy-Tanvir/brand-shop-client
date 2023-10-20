# NEXUS BRAND STORE

## Project Features

- In the home page it has 6 sections, which are Navbar, Banner, Brands, FAQ and Contact NEXUS. Initially home page loads brands data from server which is stored in the database and shows them in cards of the brands' section.
- Navbar contains theme toggle button, user image (if logged in), user name (if logged in), home, add product, my cart, login/ logout (depending on the user logged in or not).
- User can change theme between dark and light by clicking moon and sun button locating at navbar. User theme preference is stored in the local storage so that reloading and reopening browser will not change theme.
- Clicking on the brands' cards will redirect you to the respective brands' products page.
- Brands' products page contains slider containing 4 ads images and corresponding brand products.
- In the brand products' page products information with detail button and update button are shown.
- Clicking in the detail button will redirect the user to detail page. Where there is add to cart button. Detail page is private route which can not be accessed without login.
- Clicking add to cart button in detail page will add products to your cart (will add that product to that user's name in the database).
- User can see his added to cart product in my cart page. User can also remove product from my cart by clicking delete button. It is a private route.
- Clicking add product in navbar user is redirected to the add product page. Where there is a form to add product. Submitting the form will add that product to database. Which can be later seen in brands products page. Add products is a private route.
- Clicking the update button in the products page for each product will redirect the user to update page. Where data of that product is preloaded and set as default value in the update form. After updating and submitting the form will update the product's information. This update page is a private route.
- Login and register page can be toggled by clicking login below register form and register below login form.
- When registering it checks if the password is minimum 6 characters, containing capital letter, containing special character and gives error toast when this conditions are not met.
- Firebase authentication system is implemented in this project.
- After successful registration it will show a success toast message otherwise show a error toast containing error message.
- After successful login it will show a success toast message otherwise show a error toast containing error message.
- After successful profile update it will show a success toast message otherwise show a error toast containing error message.
- Clicking logout will logout the user and show a success toast message.
- There is a error page. If user tries to access page which is not available then error page will be rendered.

## [ LIVE LINK: NEXUS BRAND STORE](https://nexus-brand-store.web.app/)

## [https://nexus-brand-store.web.app/](https://nexus-brand-store.web.app/)
