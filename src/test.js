//  npm run start -- --username=Mike

import * as path from 'path';

const folder = 'C:\\Users\\Mikhail_Sigarev';
const fileName = 'C:\\Users\\Mikhail_Sigarev\\hi.txt';

console.log(path.normalize(path.resolve(folder, fileName)));