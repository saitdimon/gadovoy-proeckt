function welcome() {
    var name = document.getElementById('name').value;
    document.getElementById('welcomeMessage').innerText = 'Добро пожаловать, ' + name + '!';
    let wrp = document.getElementById('wrpl');
    wrp.classList.add('hidden');
    setTimeout(function () {
        window.location.href = 'https://www.google.com/search?q=%D0%B3%D1%83%D0%B3%D0%BB+%D1%81%D0%B0%D0%B9%D1%82&rlz=1C1GCEU_ruRU1077RU1077&oq=%D0%B3%D1%83%D0%B3&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5Mg0IAhAuGMcBGNEDGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGI8CqAIAsAIA&sourceid=chrome&ie=UTF-8&safe=active&ssui=on';
    }, 3000);

}
