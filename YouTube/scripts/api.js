async function api(paramURL) {
  return fetch(paramURL + "")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      return Promise.reject(response.body);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
