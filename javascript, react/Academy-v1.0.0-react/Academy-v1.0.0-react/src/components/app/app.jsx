import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../../containers/private-route/private-route.jsx'
import LoginContainer from '../../containers/login-container/login-container'
import LinkButton from '../link-button/link-button.jsx'
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx'
import ProfileContainer from '../../containers/profile-container/profile-container.jsx'
import NotFound from '../not-found/not-found.jsx'


const App = () => (
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkButton to="/" label={'Главная'} />
          <LinkButton to="/profile" label={'Профиль'} />
          <LinkButton to="/login" label={'Логин'} />
          <LinkButton to="/kvazavr" label={'Не найдено'} />
        </div>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
)

export default App

/*
###CONTAINER PATTERN:

Warning:⚠️
In your code, you decided to separate container components from presentational components.
That's not bad for a small project but keep in mind that small projects often grow,
and once it grew it will be difficult to manage. 

Why:
It will be difficult to maintain if your project, for example,
has 100 components and you have to jump from one folder to another just to change
button, for example, that's not convenient.

Solution:
Best practice says to keep all your components in one folder.
Keep your container and presentational components in one folder.

General Notes:
There is a lot of different approaches on how to
organize and structure your code. Your approach is also good.😉
I really suggest you read this awesome article about best practices.
https://towardsdatascience.com/react-best-practices-804def6d5215

////////////////////////////////////////////////////////////////////////////////////////////////

### REDUX STRACTURE:

Mistake:❗
Code doesn't have a clear separation from BLL(Bussiness logic layer)
and UI(User Interface). You have actions in one place reducer in another,
phase of creating store you've made in index.js. We need to fix that.😊

Why:
The bigger the project will get the more it gets difficult to maintain.

Solution:
Create a folder that will be responsible for Redux and
there you keep all your business logic in one place.
This article will help you on your journey😉
https://redux.js.org/faq/code-structure

General Notes:
Like react structure redux is also have some approaches to how things should look.

/////////////////////////////////////////////////////////////////////////////////////////////////

### ROUTES:

Mistake:❗
We have a problem when page refresh occurs we get the error "cannot GET URL".

Solution:
In order to solve this problem, we should configure Webpack a little bit.
Configurate webpack can be a difficult thing, but in this case, it's simple
we should add two new settings. I left the link on how to solve this problem,
try to solve it by yourself.
https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url

////////////////////////////////////////////////////////////////////////////////////////////////

### RENDER COMPONENTS:

Success:✅
Render components look good.

General notes:
I noticed that you extend PureComponent for class components is amazing.🔥
You can do the same with a functional component using React.memo()
Here is the link to read about it https://dmitripavlutin.com/use-react-memo-wisely/

*/
