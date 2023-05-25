var base_url = window.location.origin;
if (base_url != 'http://127.0.0.1:5500') {
    base_url += '/portfolio'
}
console.log(base_url);

window.onscroll = function () { scrollFunction() };

let year = new Date();
document.getElementById('yearSpan').textContent = year.getFullYear();
document.getElementById('ageSpan').textContent = getAge('1997/01/05');

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "emailt104@gmail.com",
        Password: "wfieldkgarmiynyw",
        To: 'jean.csf.17@gmai.com',
        From: document.getElementById('email').value,
        Subject: "Novo Contato - Portifólio",
        Body: "Nome: " + document.getElementById('name').value
            + "<br>Email: " + document.getElementById('email')
            + "<br>Telefone: " + document.getElementById('phone')
            + "<br>Mensagem: <br><p>" + document.getElementById('contactMsg') + "</p>"
    }).then(
        message => alert("Enviou")
    );
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('btnTop').removeAttribute('hidden');
        document.getElementById('footer').classList.remove('fixed-bottom');
        document.getElementById('body').classList.remove('overflow');
    } else {
        document.getElementById('btnTop').setAttribute('hidden', '')
        document.getElementById('footer').classList.add('fixed-bottom');
        document.getElementById('body').classList.add('overflow');

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
