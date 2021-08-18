# TrendSpace
Style your outfits in your own way 

# Tech Stack Used:
- **FrontEnd** - ReactJS 
- **BackEnd**  - NodeJS, ExpressJS,
- **Database** - MongoDB Atlas

# Run on Local Machine 

1. Clone this repo 

```bash
  git clone https://github.com/jvnaveenbabu/TrendSpace
```

2. Go to the project directory

```bash
  cd TrendSpace
```

3. Install dependencies

```bash
  npm i
```
**NOTE :** `Make sure your node is install in your local machine.` 

4. Add the environment variables to **`.env`**

5. To Start the server

```bash
  npm start
```

## Backend Folder Structure
```
backend
├── app.js
├── controllers
│   ├── auth.js
│   ├── category.js
│   ├── order.js
│   ├── paymentb.js
│   ├── product.js
│   └── user.js
├── models
│   ├── category.js
│   ├── order.js
│   ├── product.js
│   └── user.js
├── package-lock.json
├── package.json
└── routes
    ├── auth.js
    ├── category.js
    ├── order.js
    ├── paymentBRoutes.js
    ├── product.js
    └── user.js
```

# Environment Variables

To run this project, you need to add the environment variable to your `.env` file <br>

- **`PORT`**
- **`DATABASE`**
- **`SECRET`**

# APIs 

1. **Auth Routes:**
  
     * **POST** ``/api/signup`` : 
  To register a user

     * **POST** ``/api/signin`` : To login an existing user

     * **GET** ``/api/signout`` : To logout from the application


2. **Product Routes**

     * **POST** ``/api/product/create/:userId`` : To create a product

     * **GET** ``/api/products`` : To list out all the product

     * **GET** ``/api/products/categories`` : To List out the product based on categories

     * **GET** ``/api/product/:productId`` : To get a single product
  
     * **GET** ``/api/product/photo/:productId`` : To get a photo of particular product.
  
     * **DELETE** ``/api/product/:productId/:userId`` : To Delete a product
  
     * **PUT** ``/api/product/:productId/:userId`` : To update a product   

3. **Category Routes**

     * **POST** ``/api/category/create/:userId`` : To create a category
  
     * **GET** ``/api/category/:categoryId`` : To get a particular category items
  
     * **GET** ``/api/categories`` : To get all category items

     * **PUT** ``/api/category/:categoryId/:userId`` : To update categories
  
     * **DELETE** ``/api/category/:categoryId/:userId`` : To delete a category

4. Order Routes

    * **POST** ``/api/order/create/:userId`` : To create a new order by the current logged-in user

    * **GET** ``/api/order/all/userId`` : To get an un-delivered order of the current logged-in user by Id

    * **GET** ``/api/order/status/:userId`` : To know the status of placed order

    * **PUT** ``/api/order/:orderId/status/:userId`` : To Update the delivery status
