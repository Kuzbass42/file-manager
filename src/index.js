import { createInterface } from 'readline/promises';
import * as os from 'os';

import { getUser, isExitCommand, parseInput } from './utils/index.js';
import { byeUser, currentFolder, greetUser, invalidInput, operationFailed } from './messages/index.js';
import { commandsHandler } from './commands/index.js';

const currentUserName = getUser();
let folder = os.homedir();

greetUser(currentUserName)
currentFolder(folder);

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout,
});
readLine.on('line', async (input) => {
    if (isExitCommand(input)) {
        return readLine.emit('SIGINT')
    }

    try {
        const {command, args} = parseInput(input);
        const commandFunction = commandsHandler[command];

        if (!commandFunction) {
            invalidInput();
        } else {
            folder = await commandFunction(args, folder);
        }
    } catch(error) {
        operationFailed();
    } finally {
        currentFolder(folder);
    }
});


readLine.on('SIGINT', () => {
    byeUser(currentUserName);
    readLine.close();
});
