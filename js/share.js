window.onscroll = scrollFunction; //每當畫面捲動觸發

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn_top").style.display = "block";
    } else {
        document.getElementById("myBtn_top").style.display = "none";
    }
} //網頁捲動超過200pixel就會跑出來 display設定成block 跑回上面就隱藏。

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('.form-control');

searchInput.style.display = 'none';

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    searchInput.style.display = 'block';
});