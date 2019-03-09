export const datetimestamp = (dateTime) => {
    return new Date(dateTime)
}

export const convertDatetimestamp = (datetime) => {
    let dateObj = new Date(datetime);
    let month = dateObj.getUTCMonth() < 10 ? '0' + (dateObj.getUTCMonth() + 1) : dateObj.getUTCMonth(); //months from 1-12
    let day = dateObj.getUTCDate() < 10 ? '0' + dateObj.getUTCDate() : dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    return year + "-" + month + "-" + day;
}

