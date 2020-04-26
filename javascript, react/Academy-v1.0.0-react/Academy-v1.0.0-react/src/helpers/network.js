export const getData = (endPoint, API_ROOT) => {
  return fetch(`${API_ROOT}/${endPoint}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        Promise.reject('Error')
      }
    })
    .then(json => json)
    .catch(err => alert('getData error '))
}

/*
### API request:

Recommendation:
As I understand you want to make API requests from folder helpers.
Folder helpers are more of a place where you store code architectural snippets in my view.
Things essential for bootstrapping components and developer ergonomics.
And for requesting to the server that's not the place.

Why:
This code doesn't follow principle separation of concerns.

Solution:
Create a folder that will be responsible for server requests.
For example API folder

General notes:
You've already done the cool thing that 
you don't make an API call inside the components🔥

 */