function getThumbnailData(videosList, statisticsList) {
    return videosList.map((item, index) => {
        const { snippet, id } = item;
        const { statistics } = statisticsList[index];
        const { thumbnails, title, channelTitle, publishTime, description } = snippet;
        return {
            thumbnail: thumbnails.default.url,
            title: title,
            description: description,
            author: channelTitle,
            publishTime: timeSince(new Date(publishTime.substr(0, publishTime.length - 1))) + ` ago`,
            views: statistics.viewCount + ` views`,
            videoId: id.videoId
        };
    });
}