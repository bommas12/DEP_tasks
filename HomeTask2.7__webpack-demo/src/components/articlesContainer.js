import articleStory from './article'
const articlesContainer = (articles) => {
    const fragment = document.createDocumentFragment();
    return articles.reduce((prevFragment, curStory) => {
        prevFragment.appendChild(articleStory(curStory));
        return prevFragment;
    }, fragment);
}

export default articlesContainer;