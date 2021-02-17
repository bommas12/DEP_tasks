const articleStory = (articleObj) => {
    const { urlToImage, title, author, description, url, publishedAt } = articleObj;
    const article = document.createElement("article");
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const image = document.createElement("img");
    image.className = "story-image";
    image.setAttribute("src", urlToImage);
    image.setAttribute("alt", "Image");

    const storyContainer = document.createElement("div");
    storyContainer.className = "story";

    const articleHeader = document.createElement("h2");
    articleHeader.className = "article-header";
    articleHeader.textContent = title;

    const details = document.createElement("p");
    details.className = "details";
    details.textContent = `Posted on ${publishedAt}`

    const desc = document.createElement("p");
    desc.className = "description";
    desc.textContent = description;

    const aRef = document.createElement("A");
    aRef.className = "continue";
    aRef.setAttribute("href", url);
    aRef.setAttribute("target", "_");
    aRef.textContent = "Continue Reading";

    storyContainer.appendChild(articleHeader);
    storyContainer.appendChild(details);
    storyContainer.appendChild(desc);
    storyContainer.appendChild(aRef);

    imageContainer.appendChild(image);

    article.appendChild(imageContainer);
    article.appendChild(storyContainer);

    return article;
}

export default articleStory;