export const getQueryParam = (name) => {
    if (typeof window === 'undefined') return;
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get(name);
}