const generateParamUrl = (paramObj = {}) => {
    return [...Object.keys(paramObj)].reduce((paramUrl, cur) => {
        paramUrl += `${cur}=${paramObj[cur]}&`;
        return paramUrl;
    }, '')
}
export default generateParamUrl;