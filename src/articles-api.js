import axios from "axios";

axios.defaults.baseURL="https://api.unsplash.com/"


export const fetchPicturesWithTopic = async query => {
    const response = await axios.get('search/photos', {
        params: {
            client_id: 'cyLhS4aQitrOk1hvF-p3j71AV8QamM2otdy5EkkHmyA',
            query: query
        }

    })
    return response;
}