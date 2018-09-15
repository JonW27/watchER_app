import fetch from 'isomorphic-fetch';

export function getSocrataSoda(id) {
  return fetch(itemEndPoint(id))
    .then(function(response){
      if (response.status >= 400) {
  			throw new Error("Bad response from server");
  		}
  		return response.json();
    })
    .then(story => {
      return story;
    });
}
