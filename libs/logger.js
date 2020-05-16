import chalk from 'chalk';
import emoji from 'node-emoji';

/**
 * Show a error message
 *
 * @param message the message to be shown
 * @return {string} the template
 */
export const error = (message) => {

    return chalk.bold.red('Error! ') + message;
}

/**
 * Show a success message
 *
 * @param message the message to be shown
 * @return {string} the template
 */
export const success = (message) => {

    return chalk.bold.greenBright('Success! ') + message;
}

/**
 * Show a info message
 *
 * @param message the message to be shown
 * @return {string} the template
 */
export const info = (message) => {

    return chalk.blue(emoji.random().emoji) + ' ' + message;
}
