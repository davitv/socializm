/*
    Copied from
    https://github.com/ReactTraining/react-router/issues/1100#issuecomment-272800685
*/

import { browserHistory } from 'react-router';
import Decimal from 'decimal.js';

/**
 * @param {Object} query
 */
export const getQuery = () => {
    return browserHistory.getCurrentLocation().query;
};


/**
 * @param {Object} query
 */
export const addQuery = (query) => {
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    Object.assign(location.query, query);
    browserHistory.push(location);
    return location.query;
};

/**
 * @param {Object} query
 */
export const setQuery = (query) => {
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    location.query = query;
    browserHistory.push(location);
    return location.query;
};

/**
 * @param {...String} queryNames
 */
export const removeQuery = (...queryNames) => {
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    queryNames.forEach(q => delete location.query[q]);
    browserHistory.push(location);
};

const CM_IN_INCH = new Decimal(2.54);
const KG_IN_POUND = new Decimal(2.20);

export const cm_to_inches = (cm) => new Decimal(cm).dividedBy(CM_IN_INCH).toDecimalPlaces(2);
export const inches_to_cm = (inches) => new Decimal(inches).times(CM_IN_INCH).toDecimalPlaces(2);

export const kg_to_pounds = (kg) => new Decimal(kg).times(KG_IN_POUND).toDecimalPlaces(2);
export const pounds_to_kg = (pounds) => new Decimal(pounds).dividedBy(KG_IN_POUND).toDecimalPlaces(2);
