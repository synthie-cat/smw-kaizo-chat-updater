// ******************************************************************
// ** Code by EvilAdmiralKivi (https://twitch.tv/EvilAdmiralKivi)  **
// ** Repo: https://github.com/synthie-cat/smw-kaizo-chat-updater  **
// ** Licensed under MIT License								   **
// ******************************************************************

'use strict';

const
    smw = require('./smwcparser')
;

async function run(runRequest) {
    let logger = runRequest.modules.logger;
    let romhackName = '';
    if ('userCommand' in runRequest.trigger.metadata) {
        let args = null;
        args = runRequest.trigger.metadata.userCommand.args;
        romhackName = args.join(' ').trim();
    }

    /* No arguments. */
    if (romhackName === '') {
        return {
            success: true,
            errorMessage: 'Failed to run the script!',
            effects: [
                {
                    type: `firebot:chat`,
                    message: `Put romhack name after command.`,
                    chatter: `Bot`,
                },
            ],
        };
    }

    /* Getting Info */
    let romhackInfo = await smw.getRomhackInfo_Async(romhackName);

    /* Errors */
    if (romhackInfo.error !== null) {
        let errorMessage = null;

        if (romhackInfo.error.type === 'multiple-results')
            errorMessage = 'Sorry. Got multiple results.';
        else if (romhackInfo.error.type === 'no-results')
            errorMessage = 'Sorry. Got no results.';
        else {
            logger.debug('Cannot get romhack info: ' + romhackInfo.error.message);
            errorMessage = 'Sorry. Having some technical difficulties.';
        }

        return {
            success: true,
            errorMessage: 'Failed to run the script!',
            effects: [
                {
                    type: `firebot:chat`,
                    message: errorMessage,
                    chatter: `Bot`,
                },
            ],
        };
    }

    /* Success */
    return {
        success: true,
        errorMessage: 'Failed to run the script!',
        effects: [
            {
                type: `firebot:chat`,
                message: `!romhackupdate ${romhackInfo.name}, ${romhackInfo.author}, ${romhackInfo.exits}, ${romhackInfo.type}`,
                chatter: `Bot`,
            },
        ],
    };
}
exports.run = run;