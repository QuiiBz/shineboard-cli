import { getCurrentDirectoryBase, fileExists, getContent } from '../../libs/files';
import upload from '../../libs/uploader';
import { error, info, success } from '../../libs/logger';

/**
 * Handle the add command
 *
 * @param args
 * @return boolean if the command has been performed
 */
export default (args) => {

    // Get the attributes from the args
    const name = args.n || args.name || 'Untitled';
    const language = args.l || args.language || 'javascript';
    const password = args.p || args.password || null;
    const file = args._[1];

    if(file) {

        // Generate the path for the desired file
        const filePath = getCurrentDirectoryBase() + '/' + file;

        console.log(info(` Checking if file "${file}" exist...`));

        if(fileExists(filePath)) {

            console.log(info(` File found, uploading to ShineBoard...`));

            // Log custom name if one is provided
            if(name !== 'Untitled')
                console.log(info(` Using name "${name}"...`));

            if(password !== null)
                console.log(info(` Using password "${password}"...`))

            // Upload to the API
            upload({

                user: 'none',
                language: language,
                title: name,
                code: getContent(filePath),
                private: password,

            }, (data) => {

                // Fetching the params from the API response
                const { saved, slug } = data;

                if(saved)
                    console.log(success(`File uploaded to https://shineboard.io/${slug}`));
                else
                    console.log(error(data.errors));
            });

        } else
            console.log(error(`Could not find file "${file}".`));

    } else
        return false;

    return true;
}
