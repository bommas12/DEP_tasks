function services(api, { statisticsURL, searchURL, nextURL }) {
  let q = "";
  let nextPageToken = "";
  const getThumbnailData = (videosList, statisticsList) => {
    return videosList.map((item, index) => {
      const { snippet, id } = item;
      const { statistics } = statisticsList[index];
      const {
        thumbnails,
        title,
        channelTitle,
        publishTime,
        description,
      } = snippet;

      const publishedDate = new Date(
        publishTime.substr(0, publishTime.length - 1)
      );

      const publishedDateFormatted = `${publishedDate.toDateString()} ${publishedDate.toLocaleTimeString()}`;
      return {
        thumbnail: thumbnails.default.url,
        title: title,
        description: description,
        author: channelTitle,
        publishTime: publishedDateFormatted,
        views: statistics.viewCount + ` views`,
        videoId: id.videoId,
      };
    });
  }

  const getStatistics = (videoList) => {
    const queryString = statisticsURL(videoList);
    return api(queryString).then((statistics) => statistics.items);
  }

  return {
    searchVideos: function (query) {
      q = query;
      const queryString = searchURL(query);
      return api(queryString).then(
        (data) => {
          nextPageToken = data.nextPageToken;
          const videoIdsList = data.items.map((videoItem) => videoItem.id.videoId);
          return getStatistics(videoIdsList).then((statistics) => {
            return getThumbnailData(data.items, statistics);
          }, (e) => Promise.reject(e))
        },
        (e) => Promise.reject(e)
      );
    },
    getNextPage: function () {
      const queryString = nextURL(q, nextPageToken);
      return api(queryString).then(
        (data) => {
          nextPageToken = data.nextPageToken;
          const videoIdsList = data.items.map((videoItem) => videoItem.id.videoId);
          return getStatistics(videoIdsList).then((statistics) => {
            return getThumbnailData(data.items, statistics);
          })
        },
        (e) => Promise.reject(e)
      );
    },
  };
}
