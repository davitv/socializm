import moment from 'moment';


const fromNow = (date, is_timestamp = true) => {
    if(is_timestamp)
        return moment(parseInt(date) * 1000).fromNow();
    return moment(date).fromNow()
}

const timestampToFormat = (timestamp, format) => moment(timestamp * 1000).format(format);
const formatTimestamp = (date, format) => moment(date, format).unix();

export {
    fromNow,
    timestampToFormat,
    formatTimestamp
};