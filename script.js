const memes = [];
let current = 0;

async function fetchMemes() {
    const response = await fetch('https://meme-api.com/gimme/memes/25');
    const data = await response.json();
    data.memes.forEach(meme => {
        memes.push({
            url: meme.url,
            title: meme.title
        });
    });
    loadMeme();
}

function loadMeme() {
    if (memes.length === 0) return;
    const meme = memes[current % memes.length];
    document.getElementById('meme-img').src = meme.url;
    document.getElementById('meme-title').textContent = meme.title;
    current++;
}

fetchMemes();