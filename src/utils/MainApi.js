const options = {
  baseUrl: "api.anastasiya.movies.nomoredomains.rocks",
  headers: {
    "Content-type": "application/json",
  },
};

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

   // Проверяем статус ответа сервера:
   _responseStatus(response) {
    return response.ok ? response.json() : response.json().then(err => Promise.reject(err.message));
  }

  signup(user) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(user)
    })
      .then(res => {
        return this._checkResponseStatus(res)
      })
  }

  signin(user) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      // credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(user)
    })
      .then(res => {
        return this._checkResponseStatus(res)
      })
  }

  getProfile() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers:
        this._headers,
        Authorization: `Bearer ${token}`
    })
    .then(res => {
      return this._checkResponseStatus(res)
    })
  }

  editUser(user) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        // credentials: 'include',
        headers: this._headers,
        Authorization: `Bearer ${token}`,
        body: JSON.stringify(user)
      })
        .then(res => {
          return this._checkResponseStatus(res)
        })
  }

  getSavedMovies() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
        method: 'GET',
        // credentials: 'include',
        headers: this._headers,
        Authorization: `Bearer ${token}`,
      })
        .then(res => {
          return this._checkResponseStatus(res)
        })
  }

  saveMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        // credentials: 'include',
        headers: this._headers,
        body: JSON.stringify(movieData)
      })
        .then(res => {
          return this._checkResponseStatus(res)
        })
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: this._headers,
        Authorization: `Bearer ${token}`,
      })
        .then(res => {
          return this._checkResponseStatus(res)
        })
  }

}


// export const saveMovies = (data) => {
//   const token = localStorage.getItem("token");
//   return fetch(`${options.baseUrl}/movies`, {
//     method: 'POST',
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       country: data.country,
//       director: data.director,
//       duration: data.duration,
//       year: data.year,
//       description: data.description,
//       image: `https://api.nomoreparties.co/${data.image.url}`,
//       trailerLink: data.trailerLink,
//       thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
//       movieId: data.id,
//       nameRU: data.nameRU,
//       nameEN: data.nameEN,
//     })
//   }).then(response => response.json())
// }

export const mainApi = new MainApi(options);