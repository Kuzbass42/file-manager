import * as os from 'os';
import { invalidInput, print } from '../messages/index.js';
const eol = () => print(JSON.stringify(os.EOL));
const cpus = () => {
    const cpus = os.cpus();

    print(`number of cpus is ${cpus.length}`);
    print(JSON.stringify(
        cpus.map((item) => {
            delete item.times;
            item.speed = Math.round(item.speed / 100) / 10 + 'GHz';

            return item;
        }),
        null,
        2,
    ));
}
const homedir = () => print(os.homedir());
const username = () => print(os.userInfo().username);
const architecture = () => print(os.arch());
export const osCommands = (args) => {
    if (args.length !== 1) {
        return invalidInput();
    }

    const command = args[0].slice(2).toLowerCase();

    switch (command) {
        case 'eol':
            return eol();
        case 'cpus':
            return cpus();
        case 'homedir':
            return homedir();
        case 'username':
            return username();
        case 'architecture':
            return architecture();
        default:
            invalidInput();
    }
}