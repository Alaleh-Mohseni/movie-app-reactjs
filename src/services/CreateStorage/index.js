export const get = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const set = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}