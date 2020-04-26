import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </React.Fragment>
  )
}

Profile.proptypes = {  // misspelled should be Profile.propTypes
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile

/*
### PROFILE:

Success:✅
Great presentational component.

*/

