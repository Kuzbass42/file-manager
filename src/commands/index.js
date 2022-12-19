import { osCommands } from './osCommands.js';
import { fsCommands } from './fsCommands.js';
export const commandsHandler = {
    ...fsCommands,
    os: (args, folder) => {
        osCommands(args);

        return folder;
    },
};