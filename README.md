# Mongoose Exercise

To work on this exercise use the `Use this template` button to create a copy to your GitHub account. Then clone this copy to your local computer.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task 1

Create a new database called `quiz` and a collection called `questions` on your local MongoDB. You might use MongoDB Compass for it.

Add the questions from [data.json](./data.json) to your collection.

## Task 2

Create a file called `.env.local`. Store an environment variable called `MONGODB_URL` with the connection string provided by MongoDB.

Usually something like this:

```
MONGODB_URL='mongodb://127.0.0.1:27017/<name-of-db>'
```

Make sure to add the name of your database to the url!

## Task 3

Create a file and a function called `dbConnect`. Write a function which establishes a database connection using `mongoose`.

_Hint: you will need to install `mongoose` as a dependency first!_

## Task 4

Examin the data structure of the question objects in your database `quiz` collection.

Write a schema which describes the data and create a model.

## Task 5

Open the file [pages/index.js](./pages/index.js). Insert code into the function `getServerSideProps` to load all questions from the database.

You might create a service function for data retrieval first.

Pass all questions as a prop to the index page.

## Task 6

Use the component `QuestionCard` to render all questions into the page content.

_Hint: have a look what kind of props the component needs. You don't have to change any code in the component, only on the `index.js`!_

✨ Yay, you did it! ✨
