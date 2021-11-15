function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(e) {
    if (!e.target.matches('.dropBtn')) {
        let myDropdown = document.getElementById('myDropdown');
        if (myDropdown.classList.contains('show'))
            myDropdown.classList.remove('show');
    }
}