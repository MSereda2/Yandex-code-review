import { connect } from 'react-redux'
import { logIn } from '../../actions/SessionActions' // confucing name for actions you can ad "AC" in the end
import Login from '../../components/login/login.jsx'

const mapStateToProps = state => ({
  errorMessage: state.session.errorMessage,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

/*

### Actions:

Mistake:❗
You're dispatching function, not action.

Why:
If to follow redux rules you have to dispatch action
or action creator which creates actions.

Solution:
Change SessionActions to action creator.
This great article helps you https://redux.js.org/basics/actions

*/
