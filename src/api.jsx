const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODhkYzkyMDllZmIyNDA1Nzg1OTExMDgzNDk4ZmVjOSIsInN1YiI6IjY1ZTkwNjdmNzJjMTNlMDE4NWMzMjAzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_GW47aJs3zD_qKTc0avFvxptryoUmBdxCRzV_KLz1g';
export const URL_API = 'https://api.themoviedb.org/3/';

export function SEARCH_MULTI(search, contentType) {
  return {
    url: URL_API + `search/${contentType}?query=${search}&language=pt-br`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_IMAGES(contentType, id) {
  return {
    url: URL_API + `${contentType}/${id}/images?include_image_language=pt`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function CONTENT_ESPECIFIC(contentType, id) {
  return {
    url: URL_API + `${contentType}/${id}?language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_VIDEO(contentType, id) {
  return {
    url: URL_API + `${contentType}/${id}/videos?language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_POPULAR(contentType) {
  return {
    url: URL_API + `${contentType}/top_rated?language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_GENRES(contentType) {
  return {
    url: URL_API + `genre/${contentType}/list?language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_DISCOVER(genreId, contentType) {
  return {
    url: `https://api.themoviedb.org/3/discover/${contentType}?language=pt-BR&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}
