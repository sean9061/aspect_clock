const maxSize = Math.min(80, 900 / window.innerWidth * 100); // 80vwと900pxの最小値を計算
let isColonVisible = true;

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // コロンの点滅処理
    const colon = isColonVisible ? ':' : '&nbsp';
    document.getElementById('current-hours').innerHTML = hours;
    document.getElementById('current-colon').innerHTML = colon;
    document.getElementById('current-minutes').innerHTML = minutes;
    
    isColonVisible = !isColonVisible;
    
    // アスペクト比の計算
    const aspectBox = document.getElementById('aspect-box');
    const width = hours * 10;
    const height = seconds * 10;

    // アスペクト比を維持しつつ、ボックスのサイズを設定
    const aspectRatio = width / height;
    if (aspectRatio > 1) {
        aspectBox.style.width = `${maxSize}vw`;
        aspectBox.style.height = `${(maxSize / aspectRatio)}vw`;
    } else {
        aspectBox.style.height = `${maxSize}vw`;
        aspectBox.style.width = `${(maxSize * aspectRatio)}vw`;
    }
}
setInterval(updateTime, 1000);
updateTime(); // 初回呼び出し