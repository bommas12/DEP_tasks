describe("UrlGenerator fucntion", () => {
  const config = {
    API_KEY: "apikay",
    BASE_URL: "baseURl",
  };
  const commonURL = `${config.BASE_URL}search?key=${config.API_KEY}&type=video&part=snippet&maxResults=15`;

  it("should generate the searchUrl", () => {
    const urlGen = urlGenerator(config, 15);
    const searchURL = urlGen.searchURL(`js`);
    expect(searchURL).toBe(`${commonURL}&q=js`);
  });
  it("should generate the nextUrl", () => {
    const urlGen = urlGenerator(config, 15);
    const nextURL = urlGen.nextURL(`js`, `token`);
    expect(nextURL).toBe(`${commonURL}&q=js&pageToken=token`);

    const result = `${config.BASE_URL}videos?key=${config.API_KEY}&id=video1,video2&part=snippet,statistics`;

    const videosString = urlGen.statisticsURL([`video1`, "video2"]);
    expect(videosString).toBe(result);
  });
  it("should generate the statistics", () => {
    const urlGen = urlGenerator(config, 15);
    const result = `${config.BASE_URL}videos?key=${config.API_KEY}&id=video1,video2&part=snippet,statistics`;

    const videosString = urlGen.statisticsURL([`video1`, "video2"]);
    expect(videosString).toBe(result);
  });
});
