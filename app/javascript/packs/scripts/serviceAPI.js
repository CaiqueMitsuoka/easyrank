const API_TEAMS = `http://localhost:3000/api/teams`

export const fetchAllTeams = () => requestAPI(API_TEAMS)

const requestAPI = (URL, method = 'GET', query = {}) => {
  return fetch(URL, { method, body: query })
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}
