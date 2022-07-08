// use keyof Sizes to get autocomplete

const SIZES = {
    xs: 80,
    s: 220,
    m: 330,
    l: 440,
    xl: 600,
    xxl: 1000,
}

function adjustBySize(size) {
    return SIZES[size]
}

adjustBySize() //?

