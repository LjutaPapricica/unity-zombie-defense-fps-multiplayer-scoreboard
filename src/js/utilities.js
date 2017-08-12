export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getAPIAddress(sub) {
    return `http://modernator.me:5010/${sub}`;
}

export const combineClass = (defaultClass, otherClass) => otherClass ? (`${defaultClass} ${otherClass}`) : defaultClass;