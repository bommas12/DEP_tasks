describe("getTumbnailData fucntion", () => {
  it("return the thumbanail data when passed videoList and statistics list", () => {
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
    const data = getThumbnailData(videosList, statisticsList);
    expect(data).toEqual(result);
  });
});
