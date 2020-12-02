let APIURL ="";

switch (window.location.hostname) {
    case "localhost" || '127.0.0.1':

    APIURL = 'http://localhost:5432';
    break;

    case "edk-character-creator-client.herokuapp.com":

        APIURL = 'https://edk-character-creator.herokuapp.com'
}
export default APIURL;