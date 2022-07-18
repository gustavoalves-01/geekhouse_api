# 🎬 GeekHouse API

API to manage a store of entertainment items, which handle with products registration, updtate, deletion, listing and filtering. It also provide the functionality to create orders for products rent and sale.

## 🖥 Tech Stack
- Node JS
- Typescript
- Express JS
- Jest
- Prisma
- Postgress SQL
- Docker

## Instalation
To install de project you must have installed docker on you computer.

With the repository opened on root execute: <code>docker build -t geekhouse_api .</code>
Then, start the database with: <code>npx prisma migrate dev</code> then <code>docker-compose up</code>
You can check the database with: <code>npx prisma studio</code> 

## Entities
### Types
The types refers to different kind of products like books, comics, movies, series, etc.
### Categories
The categories refers to the subject of the product content, like action, romance, comedy etc.
### Products
The products are every item available for sale or rent.
### Rents
The rents are a type of purchase that the customer need to return the product.
### Sales
The sales are a type of purchase that the custumer doesn't need to return de product.
### Orders
The order are registrations of some purchase.

## Routes
### Types

- Create Type -> [POST] /types

| name        	| string 	| required 	|
|-------------	|--------	|----------	|
| description 	| string 	| optional 	|

- List Types -> [GET] /types

<br/>

### Categories

- Create Category -> [POST] /categories

| name        	| string 	| required 	|
|-------------	|--------	|----------	|
| description 	| string 	| optional 	|

- List Categories -> [GET] /categories

<br/>

### Products

- Create Product -> [POST] /products

| name             | string | required |
|------------------|--------|----------|
| description      | string | required |
| type_name        | string | required |
| category_name    | string | required |
| price            | number | required |
| onlyRentStock    | number | required |
| onlySaleStock    | number | required |
| rentAndSaleStock | number | required |

- List Products -> [GET] /products

- Filter Products -> [GET] /produts?type={type_name}&category={category_name}

<br/>

### Orders

- Create Order -> [POST] /orders

| rents 	|           	|        	|          	|
|-------	|-----------	|--------	|----------	|
|       	| productId 	| string 	| required 	|
|       	| customer  	| string 	| required 	|
|       	| days      	| number 	| required 	|
| sales 	|           	|        	|          	|
|       	| productId 	| string 	| required 	|
|       	| customer  	| string 	| required 	|

- List Orders -> [GET] /orders
<br/>

- Receive Product -> [POST] /orders/receive

| rentId    | string  | required |
|-----------|---------|----------|
| onlyRent* | boolean | required |

*It defines if the returned product will be placed to the general stock or only rent stock.
