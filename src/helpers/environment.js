let APIURL ="";

switch (window.location.hostname) {
    case "localhost" || '127.0.0.1':

    APIURL = 'http://localhost:5432';
    break;

    case "character-client.herokuapp.com/":

        APIURL = 'https://character-client.herokuapp.com/'
}
export default APIURL;