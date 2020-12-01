let APIURL ="";

switch (window.location.hostname) {
    case "localhost" || '127.0.0.1':

    APIURL = 'http://localhost:5432';
    break;

    case "project-character-creator.herokuapp.com/":

        APIURL = 'https://project-character-creator.herokuapp.com/'
}
export default APIURL;