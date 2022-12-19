import * as os from 'os';
export const print = message => process.stdout.write(message + os.EOL);
export const greetUser = (userName) => print(`Welcome to the File Manager, ${userName}!`);
export const byeUser = (userName) => print(`Thank you for using File Manager, ${userName}, goodbye!`);
export const currentFolder = (folder) => print(`You are currently in ${folder}`);
export const invalidInput = () => print(`Invalid input`);
export const operationFailed = () => print(`Operation failed`);