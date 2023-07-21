// const options = {
//   baseUrl: "https://api.anastasiya.movies.nomoredomains.rocks",
//   headers: {
//     // authorization: "f1b678bd-8daa-4ddc-9a95-4730e9a93182",
//     Accept: "application/json",
//     "Content-type": "application/json",
//   },
// };

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  signup(user) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(user)
    })
      .then(res => {
        return this._handleResponse(res)
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
        return this._handleResponse(res)
      })
  }

  getProfile() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      Authorization: `Bearer ${token}`,
    })
    .then(res => {
      return this._handleResponse(res)
    })
  }

  editUser(user) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: this._headers,
        body: JSON.stringify(user),
        Authorization: `Bearer ${token}`,
      })
        .then(res => {
          return this._handleResponse(res)
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
    .then(response => {
      if(response.status === 401){
        localStorage.removeItem('token');
        return [];
      } else {
        return response.json()
      }
    })
    .catch(error=>{
      console.error('getSaveMovies error',error)
    })
  }

  saveMovie(data) {
    console.log(data)
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        // credentials: 'include',
        headers: this._headers,
        Authorization: `Bearer ${token}`,
        body: JSON.stringify({
        country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co/${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      })
    })
        .then(res => {
          return this._handleResponse(res)
        })
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: 'DELETE',
        // credentials: 'include',
        headers: this._headers,
        Authorization: `Bearer ${token}`,
      })
        .then(res => {
          return this._handleResponse(res)
        })
  }

}

// export const mainApi = new MainApi(options);

export const mainApi = new MainApi({
  baseUrl: "https://api.anastasiya.movies.nomoredomains.rocks",
  // baseUrl: "http://localhost:3001",
  headers: {
    // authorization: "f1b678bd-8daa-4ddc-9a95-4730e9a93182",
    // Accept: "application/json",
    "Content-type": "application/json",
  },
});