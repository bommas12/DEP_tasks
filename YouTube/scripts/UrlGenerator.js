function UrlGenerator(config, maxResults) {
    const { BASE_URL, API_KEY } = config;
    const commonURL = `${BASE_URL}search?key=${API_KEY}&type=video&part=snippet&maxResults=${maxResults}`;
    return {
        searchURL: query => `${commonURL}&q=${query}`,
        statisticsURL: (videosIdList) => {
            let videosString = videosIdList.join(`,`);
            return `${BASE_URL}videos?key=${API_KEY}&id=${videosString}&part=snippet,statistics`;
        },
        nextURL: (query, token) =>
            `${commonURL}&q=${query}&pageToken=${token}`,
    }
}
