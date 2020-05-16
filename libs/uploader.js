import axios from 'axios';

/**
 * Upload a data to the API
 *
 * @param data the data to upload
 * @param runnable the runnable to run after uploading
 */
export default (data, runnable) => {

    axios.post('https://shineboard.io/api/paste', data)
        .then((response) => {

            runnable(response.data);

        }).catch((error) => {

        console.log(error);
    });
};
