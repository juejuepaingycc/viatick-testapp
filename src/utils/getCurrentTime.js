export default getCurrentTime = () => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes()
    if (hours < 12)
        return 'morning'
    else if (hours < 18 || (hours === 18 && minutes === 0))
        return 'afternoon'
    return 'night'
}

