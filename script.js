// script.js
document.addEventListener('DOMContentLoaded', () => {
    // ヘッダーを読み込む
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('ヘッダーファイルの読み込みに失敗しました');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // フッターを読み込む
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('フッターファイルの読み込みに失敗しました');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});