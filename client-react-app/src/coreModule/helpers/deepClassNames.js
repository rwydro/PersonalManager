import classNames from 'classnames';

const flattenObject = ob => Object.keys(ob).reduce((toReturn, k) => {
    const newReturn = { ...toReturn };
    if (Object.prototype.toString.call(ob[k]) === '[object Date]') {
        newReturn[k] = ob[k].toString();
    }
    else if ((typeof ob[k]) === 'object' && ob[k]) {
        newReturn[k] = true;
        const flatObject = flattenObject(ob[k]);
        Object.keys(flatObject).forEach((k2) => {
            newReturn[`${k}${k2}`] = flatObject[k2];
        });
    }
    else {
        newReturn[k] = ob[k];
    }
    return newReturn;
}, {});


const deepClassNames = (data) => {
    if (typeof data !== 'object' || Array.isArray(data)) {
        return classNames(data);
    }
    const flatObject = flattenObject(data);
    return classNames(flatObject);
};

export default deepClassNames;
