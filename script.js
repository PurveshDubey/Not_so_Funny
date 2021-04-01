let jokeEl = document.getElementById('joke');
let jokeBtn = document.getElementById('jokebtn');
let twitter = document.getElementById('twitter');
let facebook = document.getElementById('facebook');
let instagram = document.getElementById('instagram');

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    let config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    let res = await fetch('https://icanhazdadjoke.com/', config);
    let data = await res.json();
    jokeEl.innerHTML = data.joke;
}

twitter.addEventListener('click', function () {
    let twitterUrl = `https://twitter.com/intent/tweet?text=${jokeEl.innerHTML}`;
    window.open(twitterUrl, '_blank');

});

facebook.addEventListener('click', function () {
    let facebookUrl = FB.ui({
        display: 'popup',
        method: 'share',
        href: 'https://developers.facebook.com/docs/',
    }, function (response) { });;
    window.open(facebookUrl, '_blank');

});

