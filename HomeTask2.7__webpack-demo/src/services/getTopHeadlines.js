import generateParamUrl from "../utils/generateParamUrl";
import getDateTime from "../utils/getDateTime";

const getTopHeadlines = async (api) => {
  const requestParams = {
    country: `in`,
  };
  const paramUrl = `top-headlines?${generateParamUrl(requestParams)}`;
  return api(paramUrl).then(
    (response) => {
      console.log(response);
      return response.articles.map((article) => {
        const { publishedAt } = article;
        article["publishedAt"] = getDateTime(publishedAt);
        return article;
      });
    },
    (e) => Promise.reject(e)
  );
};
export default getTopHeadlines;
