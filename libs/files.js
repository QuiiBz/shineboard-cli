const fs = require('fs');

module.exports = {

    /**
     * Get the current directory
     *
     * @return string the current directory
     */
    getCurrentDirectoryBase: () => {

        return process.cwd();
    },

    /**
     * Return true if the file specified exist,
     * else return false
     *
     * @param filePath the path to the desired file
     * @return boolean if the file exist
     */
    fileExists: (filePath) => {

        return fs.existsSync(filePath);
    },

    /**
     * Return the content of the specified file,
     * in utf8
     *
     * @param filePath the path to the desired file
     * @return string the content of the file
     */
    getContent: (filePath) => {

        return fs.readFileSync(filePath, 'utf8');
    }
};
