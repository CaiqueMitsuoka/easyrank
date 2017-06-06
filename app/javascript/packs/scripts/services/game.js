const API_GAMES = `http://localhost:3000/api/games`
const headers = new Headers({ "Content-Type": "application/json" })

export const createGame = (query) => {
  console.log(query)
  return fetch(API_GAMES, { method: 'POST', headers, body: JSON.stringify(query) })
    .then(response => response.json())
    .then(data => data)

    .catch(error => console.log(error))
}
