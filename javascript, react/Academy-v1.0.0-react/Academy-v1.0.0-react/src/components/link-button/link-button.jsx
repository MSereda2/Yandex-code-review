import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LinkButton = ({to, label}) => {
  return (
    <Link to={to}>
      <button>{label}</button>
    </Link>
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkButton

/*
### link button

Success:✅
Great component. The ideal of presentational component.

Why:
Your component pure. No side effect.
You're using PropTypes for checking types of props.

General notes:
If your function just returns jsx you can use syntax like this:

const LinkButton = ({to, label}) => (
    <Link to={to}>
      <button>{label}</button>
    </Link>
)

*/


/*
### ROUTES

Success:✅
Routes works good.

General Notes:
For navigation your use <Link /> that's not bad at all but
what do you think about use <NavLink> ? it has a big plus over <LinK /> 

Why:
<NavLink> allow to your add active class to the link.
Read about it https://reacttraining.com/react-router/web/api/NavLink.

 */