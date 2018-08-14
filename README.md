# Doctor Lookup

#### Epicodus JavaScript: Test Driven Development, 08/03/2018

#### By Craig Wann

## Description

A website where a user may enter a medical issue or Doctor's name to find a doctor in the Portland area.

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Specs
1. A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
1. A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
1. If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
1. If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
1. If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* jQuery 3.3.1
* Node.js
* Bootstrap 4.1.3

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Craig Wann**
