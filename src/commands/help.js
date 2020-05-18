import chalk from 'chalk';

const help = {
    help: `${chalk.whiteBright.bold('shine [command] <options>')}

 ${chalk.blueBright('add')}                  add a paste
 ${chalk.blueBright('version')}              show CLI version
 ${chalk.blueBright('help')}                 show help for a command`,

    version: ``,

    add: `${chalk.whiteBright.bold('shine add [file] <options>')}

${chalk.underline('Exemple: ')} shine add index.js -n "Index.js file" -l javascript" -p "mypass"

 ${chalk.blueBright('--name, -n')}           set a name
 ${chalk.blueBright('--language, -l')}       set a language
 ${chalk.blueBright('--password, -p')}       set a password`,
}

/**
 * Handle the help command
 *
 * @param args
 * @return boolean if the command has been performed
 */
export default (args) => {

    // Get the sub command if one is present
    const subCommand = (args._.length === 2 ? args._[1] : args._[0]);

    // Return false if the subcommand does
    // not exist in the help
    if(!help.hasOwnProperty(subCommand))
        return false;

    // Log the help
    console.log(help[subCommand]);

    return true;
}
