import React from 'react'

const NotFound = ({ data }) => { // data is undefiend
  return (
    <React.Fragment>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
    </React.Fragment>
  )
}

export default NotFound

/* 
### NOT-FOUND:

Success:✅
coll component.

General notes:
Instead using <React.Fragment>JSX</React.Fragment> you can use <>JSX</>

*/