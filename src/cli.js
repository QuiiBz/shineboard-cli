import minimist from 'minimist';
import { getCommands } from './commands';
import { error } from '../libs/logger';

// The list of possibles commands
const commands = getCommands();

/**
 * The entry point of the CLI
 *
 * @param processArgs the args
 * @return void
 */
export const cli = (processArgs) => {

    // The minimist object representing an
    // array of args
    const args = minimist(processArgs.slice(2));

    // Get the command executed
    let command = args._[0];

    // Handle the performed command
    if(!handleCommand(args, command))
        console.log(error('This command does not exist. Type "shine help" to get help.'));
}

/**
 * This method handle the performed command, return
 * true is the command exist and return false else
 *
 * @param args the args
 * @param command the executed command
 * @return {boolean} is the command has been performed
 */
const handleCommand = (args, command) => {

    const executedCommand = getCommand(command);

    // If no command found, return to send error message
    if(!executedCommand)
        return false;

    // Let's run the executed command
    if(!executedCommand(args))
        console.log(error(`Bad syntax, please check "shine help ${command}" to get help.`));

    return true;
}

/**
 * Get the command to be executed
 *
 * @param command the executed command
 * @return {object} the command to be performed
 */
const getCommand = (command) => {

    return (commands[command]);
}
