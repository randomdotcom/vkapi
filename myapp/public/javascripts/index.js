const client_id = '6855506'; // ID приложения
const redirect_uri = 'https://oauth.vk.com/blank.html ';
const display = 'popup'; // popup/page

document.getElementById('acceptToken').addEventListener("click", acceptToken);

class User {
    constructor(token) {
        this.token = token;
        this.name;
    }
}

var user;

function auth() {
    window.open(`https://oauth.vk.com/authorize?client_id=${client_id}&display=${display}&redirect_uri=${redirect_uri}&response_type=token&v=5.92`);
}

///////////////////////////////////////

function get(url = ``) {
    return fetch(url, {
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        credentials: "omit"
    })
    .then(response => response.json()); // parses response to JSON
}

function acceptToken() {
    var token = document.getElementById('inputToken').value;
    user = new User(token);

    get(`https://api.vk.com/method/users.get?access_token=${token}&v=5.92`)
        .then(data => {
            alert(data);
        })
        .catch(() => alert('error'));
}