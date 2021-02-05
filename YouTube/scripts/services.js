function services(api, { statisticsURL, searchURL, nextURL }) {
  let q = "";
  let nextPageToken = "";
  return {
    getStatistics: function (videoList) {
      const queryString = statisticsURL(videoList);
      return api(queryString).then(
        (statistics) => statistics.items,
        (e) => Promise.reject(e)
      );
    },
    searchVideos: function (query) {
      q = query;
      const queryString = searchURL(query);
      return api(queryString).then(
        (data) => {
          nextPageToken = data.nextPageToken;
          return data.items;
        },
        (e) => Promise.reject(e)
      );
    },
    getNextPage: function () {
      const queryString = nextURL(q, nextPageToken);
      return api(queryString).then(
        (data) => data.items,
        (e) => Promise.reject(e)
      );
    },
  };
}
