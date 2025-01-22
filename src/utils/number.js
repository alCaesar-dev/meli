export const formatNumber = (number) => {
    if (!number) return;
    const numberString = number.toString();
    const parts = numberString.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];
    const integerPartFormatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return decimalPart ? integerPartFormatted + ',' + decimalPart : integerPartFormatted;
}