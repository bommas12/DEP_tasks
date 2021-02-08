describe("Services fucntion", () => {
  let spy, service, api;
  beforeAll(() => {
    const config = {
      API_KEY: "apikay",
      BASE_URL: "baseURl",
    };
    const urlGen = urlGenerator(config, 15);
    spy = spyOn(urlGen, "nextURL");
    api = () => {
      return new Promise((resolve) =>
        resolve({ items: [], nextPageToken: "token" })
      );
    };
    service = services(api, urlGen);
  });

  it("searchVideos:: should get search videos", async () => {
    const videos = await service.searchVideos("js");
    expect(videos).toEqual([]);
  });

  it("getNextPage:: should get nextPage videos", async () => {
    const videos = await service.getNextPage();
    expect(videos).toEqual([]);
    // expect(spy).toHaveBeenCalledWith("js", "token");
  });
  it("getStatistics:: should get statics of videos", async () => {
    const statistics = await service.getStatistics([]);
    expect(statistics).toEqual([]);
  });
});

describe("failure", () => {
  let service, api;
  beforeAll(() => {
    const config = {
      API_KEY: "apikay",
      BASE_URL: "baseURl",
    };
    const urlGen = urlGenerator(config, 15);
    api = () => {
      return new Promise((_, reject) => reject("Api error"));
    };
    service = services(api, urlGen);
  });

  it("searchVideos:: should throw an error when api fails", async () => {
    service.searchVideos("js").catch((e) => expect(e).toBe("Api error"));
  });

  it("getNextPage:: should throw an error when api fails", async () => {
    service.getNextPage().catch((e) => expect(e).toBe("Api error"));
  });

  it("getStatistics:: should throw an error when api fails", async () => {
    service.getStatistics(["js"]).catch((e) => expect(e).toBe("Api error"));
  });
});
