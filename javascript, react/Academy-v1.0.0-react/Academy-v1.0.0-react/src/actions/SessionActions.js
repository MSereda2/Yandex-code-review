import { checkCredentials } from '../helpers/session'

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export function logIn(params, next) {
  return dispatch => {
    if (checkCredentials(params)) {
        dispatch({
          type: LOG_IN,
          payload: {
            name: params.userName,
          },
        });
      next()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMessage: 'Имя пользователя или пароль некорректны',
        },
        error: true,
      })
    }
  }
}


/* 
### ACTIONS:

Mistake:❗
We don't make dispatch here. It's the wrong place.

Why:
We always should make dispatch in UI if we want to change the state.
It's a principle called separation of concerns. In this file, we shouldn't make the dispatch.

Solution:
Create an action creator for each case and dispatch them from UI.
Read this article if you are new to this topic.😉
https://redux.js.org/basics/actions

General notes:
You're using const for the type of actions that's an amazing thing.🔥
You still can do better and add the name of reducer to the const.
For example: from const LOG_IN = 'LOG_IN' to const SESSION_LOG_IN = 'SESSION_LOG_IN';
It's better because you make your actions unique.
*/