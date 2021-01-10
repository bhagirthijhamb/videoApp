import axios from 'axios';
// this key is going to be used inside og the browser. Whne the user accesses your application, you will send them this API key (because this api key is going to be inside the broser) and they can get your api key..
// this specifi key is made to be publicly available(shipped down to users browser and accessed from users browser.). We can add addditona restrictions on how this key can be used.
const KEY = 'AIzaSyBSTypGGhi3rULdLxZdzOt5qgcQ2S-tVzc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
    // q: is missiong here because we will specify our query  only when we actually make use of this axios instance and send it over to the google api
    // so we do not want to preconfigure our query/search term on the instance right here. We are going to pass the query string when we actually want to make use of this instance.
  }
})