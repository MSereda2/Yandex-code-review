import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/SessionActions'

const initialState = {
  user: null,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
        errorMessage: '',
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMessage: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}


/* 

### REDUCER:

Mistake:❗
You've made a shallow copy but should deep.

Why:
You've made a shallow copy and therefore you're only copied top-level object
but at line 13 you have an object which is still referenced.
If the source value is a reference to an object, it only copies that reference value to the target object.

Solution:
Make a deep copy of the object user at line 13😊

General notes:
Read this amazing article of shallow copy and deep copy
https://medium.com/@arunrajeevan/shallow-copy-vs-deep-copy-in-javascript-5ce718725a0
*/