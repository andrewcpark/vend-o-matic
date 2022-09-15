# VEND-O-MATIC

A vending machine web simulation.
<br>
[Check demo here.](https://vendingmachine-vendomatic.herokuapp.com/)

## Description

My overall paln was to create a simple simulation of a vending machine that would return requested data from mutiple endpoints. For this application, I used React to create the UI, Node and Express for the server and middleware, and lastly, a NoSQL Databatase(MongoDB) to store the data.
<br>

Uses Cases
<br>
Since this was a simulation for a physical vending machine, the UI was kept minimal with a series of buttons to fetch the requested data. The main uses cases were to insert and delete coins, get inventory of the vending machine, and purchase beverages. Most of the data returned were stored in the response header and were logged to the console.
<br>

API
<br>
The backend logic was organized using Express including the routing and receiving of APIs to the neccessary middleware. From there, using Mongoose, each middleware was connected to the NoSQL database. 
<br>

Database
<br>
I used a NoSQL database(MongoDB) for its easy of use and setup. For future scalability, a NoSQL database can easily accomadate more inventory with minimal code change needed. However, if the database was serving multiple machines and the priority was iventory management, a SQL database may be more suited for the occasion. 
<br>

## Data Flow Diagram

<img src='./Images/vend-o-matic DFD.png'/>

## Getting Started

### Clone this repository

```bash
git clone https://github.com/andrewcpark/vend-o-matic.git
```

### Install dependencies

```bash
npm install
```

### Run Application

```bash
npm start
```

### Run Server Only

```bash
npm run server
```
