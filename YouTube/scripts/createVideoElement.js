function createVideoElement(
  { thumbnail, author, title, description, publishTime, views, videoId },
  clone,
  itemWidth
) {
  const aTag = clone.querySelector("a");
  aTag.setAttribute("href", `https://www.youtube.com/watch?v=${videoId}`);
  aTag.setAttribute("target", `_`);
  aTag.setAttribute("style", "text-decoration:none");
  const article = clone.querySelector("article");
  const image = clone.querySelector("img");
  image.setAttribute("src", thumbnail);
  image.setAttribute("alt", "Screenshot.jpg");
  const titleTag = clone.querySelector("h1");
  titleTag.textContent = `${title}`;
  const pTags = clone.querySelectorAll("p");
  pTags[0].textContent = `${description}`;
  pTags[1].textContent = `${author}`;
  pTags[2].textContent = `${publishTime}`;
  pTags[3].textContent = `${views}`;
  article.style.width = `${itemWidth}px`;
  return clone;
}
