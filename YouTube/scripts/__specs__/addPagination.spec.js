describe("Pagination creation logic", () => {
  it("should create paginated elements", () => {
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
          new Date(`2021-01-28T07:30:00`).toDateString() +
          " " +
          new Date(`2021-01-28T07:30:00`).toLocaleTimeString(),
        views: `5788544 views`,
        videoId: `q-CF50hXV4E`,
      },
    ];
    const fragment = addPagination(result, 1, 0);
    expect(fragment.children.length).toBe(2);
    const aTags = fragment.querySelectorAll("a");
    expect(aTags[0].innerText).toBe(`1`);
    expect(aTags[1].innerText).toBe(`2`);
    expect(aTags[0].className).toBe(`active`);
  });
});
