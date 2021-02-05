function getThumbnailData(videosList, statisticsList) {
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
