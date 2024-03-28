let tds = document.querySelectorAll('td');
tds.forEach(item => {
    item.onclick = function () {
        this.style.background = '#eeb7ac';
    }
})