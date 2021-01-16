import LocalStrategy from 'passport-local';
import { localStrategyHandler } from './utils';

const params = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default new LocalStrategy(params, localStrategyHandler);
