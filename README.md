# Introduction to Relational Databases, SQL and Knex

In this project we will cover the basics of `Structure Query Language (SQL)`, `Relational Databases`, and `Knex.js Queries`.

## Prerequisites

- [SQLite Studio Installed](https://sqlitestudio.pl/index.rvt?act=download).

## Project Setup

- [ x ] clone this repository.
- [ x ] move into the project folder.
- [ x ] type `npm i` to download dependencies.
- [ x ] type `npm run server` to start the dev server.

## Coding Along

Before using the following scripts it's recommended to remove the database from SQLite Studio.

- [ x ] type `npm run resetdb` to reset the database to its initial state.


## Notes from SQL Editor

--select * from customers;

--double dash comments out a query!!

--task 1: get all the records, all columns, from the employees table

--select * from employees;

--if you have several query lines up, you can highlight the one whose data you WANT to show, and press the play button or F9!

--select city, customername from customers;

--this line would only show us the City and CustomerName from inide the data!

--task 2: get the id, first name, and last name columns from the employees table

--select employeeid, lastname, firstname from employees;

--select (firstname || ' ' || lastname) as fullname, notes from employees;

--|| means concatenate and ' ' means an empty space, fullname is the alias we are giving that we want the new column to be called
--this means what we are saying is 'I want to combine first and last name together and call it full name, get that data as well as the notes from employees!!

--task 3: get a full address column concatenating other columns in the customers table

--select (address || ' ' || city || ' ' || postalcode || ' ' || country) as fulladdress from customers;

--select * from customers where city = 'Madrid' or city = 'Barcelona' or country like 'fraNce'

--in SQL where is used to filter the output and we use 1 = instead of 2 or 3 like javascript, so we are saying get me all customers who are from Madrid
--or / and expands the search to include people from Barcelona as well!
--and now we are included the country of France into out search!
--must be careful because the names inside the ' ' are very case-sensitive when using = .
--use like instead of = to make it none case sensitive

--select * from customers where customerid = 1;

--gets you the customers whose id is 1

--select * from customers where customerid < 10;

--gets you the customers whose ids are less than the number 10

--select * from customers where country like '%land';

--since we put a % before land, what we are saying is 'I know there isn't a country CALLED land, but get me all of the customers from coutries that have the word 'land' INSIDE of it!!
--% is basically a wildcard and it can be placed at the beginning or the end of the word!(Just place it in BOTH PLACES)

--select * from customers where country not like '%land';

--adding the 'not' keyword makes it do the opposite and look for customers who are from countries that DON"T have land inside of the name!!

--task 4: find employees whose records do not mention university

--select * from employees where notes not like '%University%';

--gives us all of the employees whose notes don't mention the word University!

--task 5: find all the products that are beverages

--select * from products;
--select * from categories;

--select * from products where categoryid = 1;
--after going to the products and noticing that all of the products has a categoryId, i went to check out the category table
--it said that everything that has a categoryId of 1 is a beverage! So this is saying get all the products that has a categoryId of 1!

--task 6: find all the orders made after Jan 1st 1997

--select * from orders;

--select * from orders where orderdate > '1997-01-01';
--after going to the orders table, i noticed that orderDate was ordered 'year-month-day'
--so this is saying, get all of the orders that were made AFTER '1997-01-01'

--select * from customers order by country desc;

--this orders the customers alphebetically by country!! the DEFAULT is ascending order(asc), so putting 'desc' makes it go in descending order!

--select * from customers order by country desc, city asc;
--this says to run countries last - first alphabetically but inside of the individual countries run the cities first - last alphabetically!

--select * from customers order by country desc, city asc limit 10;
--saying 'limit 10' limits the output down to only showing the first 10 records!!

--task 7: get all products sorting them by categoryId ascending and then by price descending

--select * from products order by categoryid asc, price desc;
--this is saying get all the products and order them going in numerical ascending order based on the categoryId, but make the most expensive products in that category show first!!

--select * from products where price > 50 order by categoryid asc, price desc;
--does the same thing as the above one but limits the data to only show the products that are over $50

--So the order goes:
-- Select keyword
-- Whatever columns you want(also dont leave trailing commas with them) (* means ALL)
-- From keyword
-- Table name (products)
-- Filtering (where)
-- Filtering criteria (price > 50)
-- Sorting(ascending or is default!)(also includes limit keyword at end!)

--select * from shippers;
--insert into shippers (shippername) values ('YoMama');
--creates a new shipper inside the shippers table inside with the shippername 'YoMama', but a phone of NULL

--insert into shippers (phone) values ('(123)-456-7890');
--creates a new shipper inside the shippers table inside with the phone '(123)-456-7890', but a shippername of NULL


--insert into shippers (phone, shippername) values ('(123)-456-7890', 'Mr Shipper Guy');
--you can add multiple columns in the parenthesis to add. Now it has all the information needed!! we still have to bad looking ones with null in them though...thats where UPDATE comes in!!

--update shippers set shippername = 'YoRealMama' where shipperid = 4;
--update shippers set phone = '(888)-888-8888' where shipperid = 4;
--update shippers set shippername = 'Mortys Movers' where shipperid = 5;
--Update cleaned it up!! I changed the first 'YoMama' to 'YoRealMama' so i could differentiate the 2
--then I gave 'YoRealMama' a phone number to go into the previously NULL spot by the name
--and finally I named the previously NULL space by (123)-456-7890 to 'Mortys Movers'
--Tada! No more NULL!!
--cand you cand do multiple updates in one line, EX: update shippers set shippername = 'the Foo Shipper', phone = '123' where shipperid = 9;
--just make sure to seperate the with a comma and do NOT leave any trailing commas!!

--delete from shippers where shipperid = 6;
--running relete from shippers by itself will delete everything LOL
--this deletes YoMama (number 6) Had to do it since she didn't wanna give up the phone number LOL

--insert into shippers
    --(phone, shippername)
--values
    --('(1-800)-441-2400', 'ACME');
--Acme now appears on as ShipperID# 8(since Mr Shipper Guy was number 7)
--Notice how even though we deleted YoMama, Her ShipperID key is unique so It will never be used again, even after deletion!
--Also this is this: insert into shippers (phone, shippername) values ('(1-800)-441-2400', 'ACME'); just indented and spaced out
