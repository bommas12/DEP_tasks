describe("createVideoElement:: ", () => {
  it("returns the video Element", () => {
    const video = {
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
    };

    const clone = document.createElement(`li`);
    const article = document.createElement(`article`);
    article.className = "video-container";
    const aTag = document.createElement(`a`);
    const imgTag = document.createElement(`img`);
    aTag.appendChild(imgTag);

    const h1Tag = document.createElement(`h1`);
    h1Tag.className = "title";

    const pTag1 = document.createElement(`p`);
    const pTag2 = document.createElement(`p`);
    const pTag3 = document.createElement(`p`);
    const pTag4 = document.createElement(`p`);
    article.appendChild(aTag);
    article.appendChild(h1Tag);
    article.appendChild(pTag1);
    article.appendChild(pTag2);
    article.appendChild(pTag3);
    article.appendChild(pTag4);
    clone.appendChild(article);
    const pTags = clone.querySelectorAll("p");
    pTags[0].className = "description";
    pTags[1].className = "author";
    pTags[2].className = "published-date";
    pTags[3].className = "count-of-views";

    const videoElement = createVideoElement(video, clone, 320);
    console.log(videoElement);
  });
});
