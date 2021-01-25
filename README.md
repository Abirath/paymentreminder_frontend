# Payment Reminder Frontend

The application was built using ReactJS and Material UI.
- The code is written in TypeScript following functional programming pattern. 
- Axios library package is used to make API calls to the [backend](https://github.com/Abirath/PaymentReminder.Backend) project.
- Google's Material UI design is incorporated to develop aesthetic UI. 

Note: Make sure to run the [backend](https://github.com/Abirath/PaymentReminder.Backend) project first to make the API up and running.

## Frontend Features 

The main focus of the website is to display a list of upcoming rent payments, it also includes a left-hand navigation menu.

When the user navigates to the `Dashboard` for the first time, the upcoming rent payments are fetched from the API developed in [backend](https://github.com/Abirath/PaymentReminder.Backend), and are formatted in client readable results.

- The payment due dates are formatted as MMM DD.
- The status of each payment are displayed as blank, `Paid`, or `Overdue` depending on the payments status and due date.
- The pay button will be displayed only for payments that are not `Paid`
- The amount is formatted as a US dollar amount (e.g. \$10.00)
- Payments are listed in ascending chronological order.

If a user clicks on the `Pay` button, a dialog box with submit button is shown to the user.  
Upon confirmation, a call is made to the REST API that updates the state of that payment to `Paid`.  
The result of that call is then used to update the status of that transaction in the list that is displayed to the user.

### Running the frontend project

The frontend repository was created using `create-react-app paymentreminder_frontend --template typescript`, with a few minor changes (see [here](https://create-react-app.dev/docs/documentation-intro) for more information on create-react-app).

To startup the frontend client run the following command.

- `npm install` - This will fetch the required node modules for the website to run (and for the other scripts below).
- `npm start` - This will start the application for development
- `npm run build` - Will create a production optimised build
- `npm test` - Will run the front end tests

Ideally this application would run on port 3000.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
