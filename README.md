# Your First Express App Lab

## Objectives

1. Build an Express route responding to a `GET` request.
2. Send an HTTP response with the text `Hello, World!`

## Instructions

You are going to be building a single route in an express app setup in `app.js`. The goal is to response to a `GET` request at `/` (the root or homepage of the application) and response with `Hello, World!`.

**File: [app.js]()**
```js
const express = require('express')
const app = express()

// Build Your Route Here




module.exports = app
```

As you can see, the application is already setup and loaded into the `app` constant. Build your route and response within that file.

You can run the tests with `learn`.

To start your application, type `npm start`. The IDE will give you an IP address and port for your application, locally, your application will be running at `http://localhost:3000`.

Unfortunately for now if you change your code, you have to stop and start the server to reload it.

Let the tests drive you for now!