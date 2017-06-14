const API_GAMES = `http://localhost:3000/api/games`
const headers = new Headers({ "Content-Type": "application/json" })

export const fetchAllGames = () => {
  return fetch(API_GAMES)
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}

export const createGame = (query) => {
  return fetch(API_GAMES, { method: 'POST', headers, body: JSON.stringify(query) })
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}

export const fetchGame = (id) => {
  return fetch(`${API_GAMES}/${id}`)
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}

export const updateGame = (id, query) => {
  return fetch(`${API_GAMES}/${id}`, { method: 'PUT', headers, body: JSON.stringify(query) })
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}

export const deleteGame = (id) => {
  return fetch(`${API_GAMES}/${id}`, { method: 'DELETE' })
    .then(response => response)

    .catch(error => console.log(error))
}
