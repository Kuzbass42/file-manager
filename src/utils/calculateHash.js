import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calculateHash = async (filePath) => {
    const buffer = await readFile(filePath);
    return createHash('SHA256').update(buffer).digest('HEX');
};