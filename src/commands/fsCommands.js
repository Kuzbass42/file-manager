import * as path from 'path';
import * as fs from 'fs/promises';
import { invalidInput, print } from '../messages/index.js';
import { calculateHash } from '../utils/index.js';
export const up = (args, folder) => {
    if (args.length !== 0) {
        invalidInput();
    }

    return path.dirname(folder);
}

export const cd = async (args, folder) => {
    if (args.length !== 1) {
        invalidInput();
    }

    const newFolder = path.resolve(folder, args[0]);
    await fs.readdir(newFolder);

    return newFolder;
}

export const rm = async (args, folder) => {
    if (args.length !== 1) {
        invalidInput();
    }

    const fileToDelete = path.resolve(folder, args[0]);
    await fs.rm(fileToDelete);

    return folder;
}

export const add = async (args, folder) => {
    if (args.length !== 1) {
        invalidInput();
    }

    const fileToCreate = path.resolve(folder, args[0]);
    await fs.writeFile(fileToCreate, '');

    return folder;
}

export const hash = async (args, folder) => {
    if (args.length !== 1) {
        invalidInput();
    }

    const filePath = path.resolve(folder, args[0]);
    print(await calculateHash(filePath));
}

export const fsCommands = {
    up,
    cd,
    rm,
    add,
    hash,
}