import React from 'react'
import renderer from 'react-test-renderer'
import App from './app'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import reducer from "../../reducers";

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))


it('renders without crashing', () => {
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
})

/* 
### TEST.

Mistake:❗
Test code should be wrapped by function describe.

Why:
You aren't binding to test scope

Solution:
Wrapped test code with describe.
Describe is the function, which uses for binding the testing scope

------------------------------------------------------------------

Mistake:❗
Using a snapshot for testing the whole app component isn't a good idea.

Why:
The App component passes the first test and creates snapshot but you always change the App component and therefore snapshot will be wrong and the test will fail.
You can use a snapshot if a component doesn't change.

Solution:
Read this amazing article about testing.
https://www.freecodecamp.org/news/testing-react-hooks/

General notes:
Testing a big topic in the web development world if you're interesting i suggest to read something about TDD(Test Driven Development)
*/