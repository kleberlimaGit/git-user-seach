import axios, {Method} from 'axios';

type RequestParams = {
    method?: Method,
    url:string,
    data?: object;

}

const BASE_URL = 'https://api.github.com/users/';

export const makeRequest = ({method = 'GET', url , data}: RequestParams) => {
    return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    });
}


