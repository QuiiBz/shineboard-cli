import help from './commands/help';
import version from './commands/version';
import add from './commands/add';

/**
 * Return the list of possible commands
 *
 * @return {object} containing the commands
 */
export const getCommands = () => {

    return {

        'help': help,
        'version': version,
        'add': add,
    };
}
