export const shortenDesc = (desc) => {
    return desc ? desc.split(' (')[0] : desc;
};