/* Install requirements package.
 $ npm i -g k6
*/
import http from 'k6/http';

// uncomment this line if your want load test outside docker container.
const url = 'http://localhost:8000/hello';

// uncomment this line if your want load test inside docker container.
//const url = 'http://host.docker.internal:8000/hello';

export const options = {
    vus: 10,
    duration: '10s'
}

export default function() {
    http.get(url);
}
