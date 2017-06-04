const API_TEAMS = `http://localhost:3000/api/teams`
const headers = new Headers({ "Content-Type": "application/json" })

export const fetchAllTeams = () => {
  return fetch(API_TEAMS)
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}

export const createTeam = (query) => {
  return fetch(API_TEAMS, { method: 'POST', headers, body: JSON.stringify(query) })
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}

export const fetchTeam = (id) => {
  return fetch(`${API_TEAMS}/${id}`)
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}

export const updateTeam = (id, query) => {
  return fetch(`${API_TEAMS}/${id}`, { method: 'PUT', headers, body: JSON.stringify(query) })
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}

export const deleteTeam = (id) => {
  return fetch(`${API_TEAMS}/${id}`, { method: 'DELETE' })
    .then(response => response)

    .catch(error => console.log(error))
}
