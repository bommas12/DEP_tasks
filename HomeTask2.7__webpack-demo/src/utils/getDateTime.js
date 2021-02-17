const getDateTime = (date) => {
    return new Date(date).toDateString() + ", " + new Date(date).toLocaleTimeString();
}
export default getDateTime;