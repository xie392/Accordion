var btns = document.querySelectorAll('.title');
var item = document.querySelectorAll('.item-group');

btns.forEach(function(ele) {
    ele.onclick = function() {
        item.forEach(function(ele) {
            ele.classList.remove('self');
        });
        this.parentElement.classList.add('self');
    }
})