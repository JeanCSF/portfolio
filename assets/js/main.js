var base_url = window.location.origin;
if (base_url != 'http://127.0.0.1:5500') {
    base_url += '/portfolio'
}

window.onload = function () { scrollFunction() };

window.onscroll = function () { scrollFunction() };

let year = new Date();
document.getElementById('yearSpan').textContent = year.getFullYear();
document.getElementById('ageSpan').textContent = getAge('1997/01/05');

function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        document.getElementById('btnTop').removeAttribute('hidden');
        document.getElementById('footer').classList.remove('fixed-bottom');
    } else {
        document.getElementById('btnTop').setAttribute('hidden', '');
        document.getElementById('footer').classList.add('fixed-bottom');

    }
}

function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
