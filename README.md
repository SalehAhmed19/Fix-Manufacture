# Fix-Manufacturer

[Live Website Link](https://fix-manufacturer.web.app/).

## Something to notice about this Website:

- This is a manufacturer website where user can buy parts or tools.
- There are six section on homepage include Navbar, Banner, Parts, Reviews, Footer.
- There are 4 routes on navbar. 3 are public and 1 is private route (Dashboard). When user logged in they'll see this Dashboard Route.
- Google and Email password login and authentication system are implemented.
- Card payment method are implemented. User can use card for payment.
- There are a Dashboard route which is private. After login user can see this. On Dashboard there are three (My Orders, Add Review, My Profile) nested routes for normal user and 5 nested routes for admin (All Products, Add Products, Manage Orders, Make admin, My Profile).
- A normal user can see there order and can pay from My Orders route, user can post a review from Add Review route and can update his profile on My Profile Route.
- An admin can add products form Add Products route, can manage product (update, delete) from Manage Product route, can make an admin or remove an admin from Make Admin route.

## Technology and Framework:

### Frontend:

- ReactJS
- Tailwind CSS
- DaisyUI
- React Router DOM
- React Firebase Hooks
- React Query
- React Toastify

### Backend:

- NodeJS
- ExpressJS
- Cors
- Jsonwebtoken (JWT)
- DotEnv
- MongoDB

### Database:

- MongoDB

### Tools:

- Firebase
- GitHub
- Heroku
