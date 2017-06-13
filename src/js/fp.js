

export const head = (arr) => (arr.length ? arr[0] : undefined);

export const keys = (obj) => Object.keys(obj);

export const items = (obj) => Object.keys(obj).map(key => ([key, obj[key]]));

export const clone = (obj) => JSON.parse(JSON.stringify(obj));
export const extend = (obj1, obj2) => Object.assign(obj1, obj2);

export const tuplesToObject = (items) => {
    const ret = {};
    items.map(([key, value]) => ret[key] = clone(value));
    return ret;
};

export const concatAll = (arr) => {
    let ret = [];
    for(var i = 0, l = arr.length; i < l; i++)
    {
       ret = ret.concat(arr[i]);
    }

    return ret;
};

export const round = (number, precision) => {
    const factor = Math.pow(10, precision);
    const tempNumber = number * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

