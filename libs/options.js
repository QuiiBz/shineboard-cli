const yargs = require('yargs');

module.exports = {

    /**
     * Generate the command thanks to yargs
     *
     * @see yargs
     *
     * @param runnable the runnable to call
     * @return yargs
     */
    generateArgs: (runnable) => {

        return yargs
            // Usage help line
            .usage('Usage: shine add <file> -n [name] -l [language]')
            // Add command
            .command('add <file>', 'Select file to upload', (yargs) => {

                yargs.positional('file', {

                    describe: 'file to upload'
                });

            }, (argv) => {

                // Start the runnable when the
                // command is executed
                runnable(argv);
            })
            // Name option
            .option('name', {

                alias: 'n',
                describe: 'Set a name for this paste',
                type: 'string',
                default: 'Untitled',
            })
            // Language option
            .option('language', {

                alias: 'l',
                describe: 'Force file language',
                type: 'string',
                default: 'javascript',
            })
            .help()
            .argv;
    }
};
