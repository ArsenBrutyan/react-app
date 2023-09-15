export function getTotalPages(length: number) {
    return Math.ceil(length / 10); // 10 is count of users on page
}

export function getStartIndex(pageNumber: number) {
    return pageNumber * 10;
}

export function getEndIndex(pageNumber: number) {
    return getStartIndex(pageNumber) + 10;
}
