/** @type {SYSOPTSTYPE} */
export const SYSOPTS = {
    main: {
        command: {
            name: ['till', 'create'],
        },
        reset: {},
        deployment: {},
        reset: {},
    },
    local: {
        command: {},
        expose: {},
        contain: {},
    },
    remote: {
        desclose: {},
        reprove: {},
        elevate: {}
    },
    dev: {}
}

/**
 * @typedef {{
 * main: {
 * command: {
 * name: ['till', 'create']},
 * reset: {},
 * deployment: {},
 * reset: {},
 * },
 * local: {
 * command: {},
 * expose: {},
 * contain: {},
 * },
 * remote: {
 * desclose: {},
 * reprove: {},
 * elevate: {}
 * },
 * dev: {}
 * }} SYSOPTSTYPE 
 */
