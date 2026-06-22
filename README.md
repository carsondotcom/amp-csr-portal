# AMP Software Assignment - CSR Portal

## Description

This is a very basic version of a customer subscription management portal for car wash memberships. I made it for an assignment for an interview. The frontend is in React, with Material UI for styling and RTK for querying the api. The backend is in NestJS.

### Functionality

This app currently supports the following functionality:

- View a list of all users, including their basic information, account status, and number of active subscriptions
- Search users by name, phone number, or email
- View detailed information of each user by selecting a user's card. Includes payment history, contact information, and all subscriptions associated with the user
- Modify contact information of a user. Includes name, email, and phone number
- Modify and add subscriptions to a user account. This includes transferring the subscription between vehicles. Transferring a subscription means assigning a new license plate number to it.
- Modify the status of a user's account, and each of their subscriptions

### Furture Improvements

There are a few decisions I made in the interest of time that I would like to improve upon in the future. For example

- This app does not use a real database, the data is not persisted across sessions. Instead it uses a single array of all the data which is modified via calls to the NestJS API. When the server restarts, the data is reset to it's base state.
- This app does not feature authentication or user sessions - for the sake of the assignment it behaves as if you are logged in as an admin and have permission to make all modifications to all users.
- Currently, all users are displayed at once on a single page. This is fine for now because of the small number of users, but if we wanted the app to read from a real database with hundreds or thousands of records, we'd want to implement a pagnination strategy.
- There is no validation on the input other than what's in the standard NestJS validation pipeline. I'd like to have specific validations on things like string length for names and string pattern for phone number.

## Instructions to run locally

The server is configured to run on **port 3000** locally.
Start the server by running

```bash
npm run start:dev
```

The client is configured to run on **port 3001** locally.
Start the client by running

```bash
npm run dev
```
