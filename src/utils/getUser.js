import { DEFAULT_USER_NAME } from '../constants/index.js';

const userNameRegExp = /--username=(.+)/;
export const getUser = () => {
    const userName = process.argv
        .slice(2)
        .find(item => userNameRegExp.test(item));

    const matcher = userName.match(userNameRegExp);

    return matcher ? matcher[1] : DEFAULT_USER_NAME;
}