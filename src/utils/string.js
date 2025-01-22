export const getCurrency = (code) => {
    switch (code) {
        case "USD":
            return "USD"
        default:
            return "$"
    }
}