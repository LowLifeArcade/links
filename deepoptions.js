import {SYSOPTS} from './constants'

/**
 * @type { <T, K extends keyof T, U extends keyof T[K],>(opts: T, key: K, deepKey: U) => string>}
 */
 function useOpts(opts, key, deepKey) {
    if (deepKey) {
        return opts[key][deepKey];
    } else {
        return opts[key];
    }
}

let opts = useOpts(SYSOPTS, 'main', 'command') //?
