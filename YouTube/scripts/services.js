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
    searchVideos: async function (query) {
      q = query;
      const queryString = searchURL(query);
      const data = await api(queryString)
      nextPageToken = data.nextPageToken;
      const videoIdsList = data.items.map((videoItem) => videoItem.id.videoId);
      const statistics = await getStatistics(videoIdsList)
      return getThumbnailData(data.items, statistics);
    },
    getNextPage: async function () {
      const queryString = nextURL(q, nextPageToken);
      const data = await api(queryString);
      nextPageToken = data.nextPageToken;
      const videoIdsList = data.items.map((videoItem) => videoItem.id.videoId);
      const statistics = await getStatistics(videoIdsList)
      return getThumbnailData(data.items, statistics);
    },
  };
}
