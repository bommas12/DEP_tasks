import "./styles/main.scss";
import "./styles/story.scss";
import articlesContainer from "./components/articlesContainer";
import api from "./api/api";

window.onload = () => {
  console.log(process.env.BASE_URL, process.env.API_KEY);
  const config = {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
  };
  console.log(config);
  const apiCall = api(config);
  const allNews = document.querySelector(".heading a");
  allNews.addEventListener("click", () => {
    import("./services/getTopHeadlines")
      .then(({ default: getTopHeadlines }) => {
        getTopHeadlines(apiCall).then(
          (articles) => {
            console.log(articles);
            const mainHead = document.querySelector(".stories-container");
            mainHead.appendChild(articlesContainer(articles));
          },
          (e) => Promise.reject(e)
        );
      })
      .catch((e) => console.error(e.message));
  });
};
