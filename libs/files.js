import fs from 'fs';

/**
 * Get the current directory
 *
 * @return string the current directory
 */
export const getCurrentDirectoryBase = () => {

    return process.cwd();
}

/**
 * Return true if the file specified exist,
 * else return false
 *
 * @param filePath the path to the desired file
 * @return boolean if the file exist
 */
export const fileExists = (filePath) => {

    return fs.existsSync(filePath);
}

/**
* Return the content of the specified file,
* in utf8
*
* @param filePath the path to the desired file
* @return string the content of the file
*/
export const getContent = (filePath) => {

    return fs.readFileSync(filePath, 'utf8');
}
