'use strict';

const
    fb = require('.')
;

(async () => {
    let result = await fb.run({
        modules: {
            logger: {
                debug: (message) => {
                    console.log('Debug: ', message);
                }
            },
        },
        trigger: {
            metadata: {
                userCommand: {
                    args: [ 'world' ],
                },
            },
        },
    });

    console.log(result)
})();