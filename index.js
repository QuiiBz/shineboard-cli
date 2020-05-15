#!/usr/bin/env node

const chalk = require('chalk');
const files = require('./libs/files');
const options = require('./libs/options');
const uploader = require('./libs/uploader');
const emoji = require('node-emoji');

// Log this everytime
console.log(chalk.white.bold('ShineBoard CLI v0.0.1'));

options.generateArgs((argv) => {

    // Get the attributes from the args
    let { file, name, language } = argv;

    if(file) {

        // Generate the path for the desired file
        const filePath = files.getCurrentDirectoryBase() + '/' + file;

        console.log(emoji.get('question') + chalk.white(` Checking if file "${file}" exist...`));

        if(files.fileExists(filePath)) {

            console.log(emoji.get('package') + chalk.white(` File found, uploading to ShineBoard...`));

            // Log custom name if one is provided
            if(name != 'Untitled')
                console.log(emoji.get('memo') + chalk.white(` Using name "${name}"...`));

            // Upload to the API
            uploader.upload({

                user: 'none',
                language: language,
                title: name,
                code: files.getContent(filePath),

            }, (data) => {

                // Fetching the params from the API response
                const { saved, slug } = data;

                if(saved)
                    console.log(chalk.greenBright.bold('Done! ') + chalk.whiteBright(`https://shineboard.io/${slug}`));
                else
                    console.log(chalk.red(data.errors));
            });

        } else
            console.log(chalk.redBright('Error! ') + chalk.white('File not found.'));

    } else
        console.log(chalk.redBright('Error! ') + chalk.white('Command failed. Type "shine help" to get help.'));
});

