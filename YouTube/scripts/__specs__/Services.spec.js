describe("Services function:: ", () => {
  let spyNext, api, urlGen, spySearch;
  const statisticsList = [
    {
      statistics: {
        viewCount: "2324212",
        likeCount: "14861",
        dislikeCount: "322",
        favoriteCount: "0",
        commentCount: "1232",
      },
    },
    {
      statistics: {
        viewCount: "5788544",
        likeCount: "41026",
        dislikeCount: "1259",
        favoriteCount: "0",
        commentCount: "1433",
      },
    },
  ];
  const videosList = [
    {
      id: {
        kind: "youtube#video",
        videoId: "4K7F5WjbEZ0",
      },
      snippet: {
        publishedAt: "2021-01-28T07:30:00Z",
        channelId: "UC0VN6My1ueOFXDTgzMZSSNQ",
        title: "isko kehte hai SUPER event !! JS Films Calendar Launch 2021",
        description:
          "GET YOUR 2021 COPY TODAY: https://bit.ly/3qNTU6F Part 1: https://www.youtube.com/watch?v=q-CF50hXV4E Get my favorite Mivi Products: Collar Bluetooth ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/4K7F5WjbEZ0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/4K7F5WjbEZ0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/4K7F5WjbEZ0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "JS Films",
        liveBroadcastContent: "none",
        publishTime: "2021-01-28T07:30:00Z",
      },
    },
    {
      id: {
        kind: "youtube#video",
        videoId: "q-CF50hXV4E",
      },
      snippet: {
        publishedAt: "2021-01-26T07:30:01Z",
        channelId: "UC0VN6My1ueOFXDTgzMZSSNQ",
        title: "Lamborghini Huracan V/S Ninja H2 + Hayabusa !",
        description:
          "GET YOUR 2021 COPY TODAY: https://bit.ly/3qNTU6F Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/q-CF50hXV4E/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/q-CF50hXV4E/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/q-CF50hXV4E/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "JS Films",
        liveBroadcastContent: "none",
        publishTime: "2021-01-26T07:30:01Z",
      },
    },
  ];
  const result = [
    {
      thumbnail: "https://i.ytimg.com/vi/4K7F5WjbEZ0/default.jpg",
      title: "isko kehte hai SUPER event !! JS Films Calendar Launch 2021",
      description:
        "GET YOUR 2021 COPY TODAY: https://bit.ly/3qNTU6F Part 1: https://www.youtube.com/watch?v=q-CF50hXV4E Get my favorite Mivi Products: Collar Bluetooth ...",
      author: "JS Films",
      publishTime:
        new Date(`2021-01-28T07:30:00`).toDateString() +
        " " +
        new Date(`2021-01-28T07:30:00`).toLocaleTimeString(),
      views: `2324212 views`,
      videoId: `4K7F5WjbEZ0`,
    },
    {
      thumbnail: "https://i.ytimg.com/vi/q-CF50hXV4E/default.jpg",
      title: "Lamborghini Huracan V/S Ninja H2 + Hayabusa !",
      description:
        "GET YOUR 2021 COPY TODAY: https://bit.ly/3qNTU6F Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats ...",
      author: "JS Films",
      publishTime:
        new Date(`2021-01-26T07:30:01`).toDateString() +
        " " +
        new Date(`2021-01-26T07:30:01`).toLocaleTimeString(),
      views: `5788544 views`,
      videoId: `q-CF50hXV4E`,
    },
  ];
  beforeAll(() => {
    const config = {
      API_KEY: "apikay",
      BASE_URL: "baseURl",
    };
    urlGen = urlGenerator(config, 15);
    spySearch = spyOn(urlGen, "searchURL");
    spyNext = spyOn(urlGen, "nextURL");
    api = jasmine.createSpy();
  });
  beforeEach(() => {
    api.and.returnValues(
      new Promise((resolve) =>
        resolve({ items: videosList, nextPageToken: "token" })
      ),
      new Promise((resolve) =>
        resolve({ items: statisticsList, nextPageToken: "token" })
      ),

    )
  })
  it("searchVideos:: should get search videos", async () => {
    const service = services(api, urlGen);
    const videos = await service.searchVideos("js");
    expect(videos).toEqual(result);
    expect(spySearch).toHaveBeenCalledWith("js")
  });

  it("getNextPage:: should get nextPage videos", async () => {
    const service = services(api, urlGen);
    const videos = await service.getNextPage();
    expect(videos).toEqual(result);
    expect(spyNext).toHaveBeenCalledWith("", "");
  });
  it("getNextPage:: should get nextPage videos with same query called with getVideos and the token returned in next page token", async () => {
    api.and.returnValues(
      new Promise((resolve) =>
        resolve({ items: videosList, nextPageToken: "token" })
      ),
      new Promise((resolve) =>
        resolve({ items: statisticsList, nextPageToken: "token" })
      ),
      new Promise((resolve) =>
        resolve({ items: videosList, nextPageToken: "token" })
      ),
      new Promise((resolve) =>
        resolve({ items: statisticsList, nextPageToken: "token" })
      ),
    )
    const service = services(api, urlGen);
    await service.searchVideos("js");
    await service.getNextPage();
    expect(spyNext).toHaveBeenCalledWith("js", "token");
  });
});

describe("services functions:: failure", () => {
  let service, api, err;
  beforeAll(() => {
    const config = {
      API_KEY: "apikay",
      BASE_URL: "baseURl",
    };
    const urlGen = urlGenerator(config, 15);
    api = jasmine.createSpy();
    err = "api failed";
    api.and.returnValue(new Promise((_, reject) => reject(err)))
    service = services(api, urlGen);
  });

  it("searchVideos:: should throw an error when api fails", async (done) => {
    const prom = service.searchVideos("js")
    prom.catch((e) => {
      expect(e).toEqual(err)
      done()
    });
  })

  it("searchVideos:: should throw an error when api fails", async (done) => {
    const prom = service.getNextPage()
    prom.catch((e) => {
      expect(e).toEqual(err)
      done()
    });
  })
});
