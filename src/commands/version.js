import { version } from '../../package.json';

/**
 * Handle the version command
 *
 * @param args
 * @return boolean if the command has been performed
 */
export default (args) => {

    // Log the version
    console.log(version);

    return true;
}
