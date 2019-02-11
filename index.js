const client_id = '6855506'; // ID приложения
const redirect_uri = 'https://oauth.vk.com/blank.html ';
const display = 'popup'; // popup/page

function auth() {
    window.open(`https://oauth.vk.com/authorize?client_id=${client_id}&display=${display}&redirect_uri=${redirect_uri}&response_type=token&v=5.92`);
}