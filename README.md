# QuickBite

QuickBite is a food ordering web application that allows users to browse the menu, add items to their cart, and securely place orders. The application also includes an admin panel for managing menu items and orders.

## Features

- **User Authentication:** Secure login and registration system.
- **Admin Panel:** Accessible with admin credentials to manage menu items and orders.
- **Menu Management:** View and search through the food menu.
- **Cart Functionality:** Add, update, and remove items from the cart.
- **Chatbot Integration:** Botpress-powered chatbot to assist with ordering questions.
- **Stripe Payment Integration:** Secure and seamless payment processing.
- **Responsive Design:** Optimized for various screen sizes and devices.

## Technologies Used

- **Frontend:** Vite, React
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS
- **Chatbot:** Botpress
- **Payment Integration:** Stripe

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/lohith84/QuickBite.git

2. Install dependencies for both frontend and backend:
   ```bash
   cd QuickBite
   cd frontend && npm install
   cd ../backend && npm install
   cd ../admin && npm install

3. Configure environment variables:
- Create a .env file in the backend directory.
- Add the following variables:
  ```bash
  JWT_SECRET="key"
  STRIPE_SECRET_KEY="Secret_Key"
  MONGODB_URI="MongoDB URL"
  Frontend_URL="Frontend URL"
  Port=Port Number
  #Get Secret_Key from https://stripe.com/

- Create a .env file in the frontend directory.
- Add the following variables:
  ```bash
  Backend_URL="Backend URL"
  Admin_URL="Admin URL"
  GOOGLE_MAPS_API_KEY="key"
  
- Create a .env file in the admin directory.
- Add the following variables:
  ```bash
  Backend_URL="Backend URL"
  Frontend_URL="Frontend URL"

4. Start the backend server:
   ```bash
   cd backend && npm start

5. Start the frontend development server:
   ```bash
   cd frontend && npm start

5. Start the admin development server:
   ```bash
   cd admin && npm start
   
3. Open your browser and navigate to http://localhost:5173 to view the application.

## BotPress-Integration
Download and install Botpress from the official website.
Follow the Botpress documentation to create a new bot and get it run.
Integrate the Botpress chatbot into your React application by adding the Botpress script to your index.html or by using the Botpress SDK.

## Deployment
QuickBite is deployed and can be accessed at: [QuickBite](https://quickbites-84.netlify.app/).

## Screenshots
![quickbite](https://github.com/lohith84/QuickBite/assets/121237224/3b7ed078-2efc-439d-b361-0c47d4c590eb)

## Contributions
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

### Notes:
- Replace placeholders (`key`, `Secret_Key`, `MongoDB URL`, `Frontend URL`, `Backend URL`, `Admin URL`, `Port Number`) with your actual details.
- Customize sections like features and technologies used according to your project specifics.

Feel free to tailor this template further based on your project's unique aspects and requirements!
