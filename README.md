# Getting Started with Create React App

The application was built using ReactJS and Material UI.

The frontend repository was created using `create-react-app paymentreminder_frontend --template typescript`, with a few minor changes (see [here](https://create-react-app.dev/docs/documentation-intro) for more information on create-react-app).

In the project directory, you can run:

### `npm start`

Ideally this application would run on port 3000.

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


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
