const axios = require('axios');

module.exports = {

    /**
     *
     * @param data
     * @param runnable
     */
    upload: (data, runnable) => {

        axios.post('https://shineboard.io/api/paste', data)
            .then((response) => {

                runnable(response.data);

            }).catch((error) => {

            console.log(error);
        });
    }
};
