const api = (config) => {
  return async (paramUrl) => {
    const { BASE_URL, API_KEY } = config;
    return fetch(`${BASE_URL}${paramUrl}apiKey=${API_KEY}`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .catch((e) => Promise.reject(e));
  };
};

export default api;
