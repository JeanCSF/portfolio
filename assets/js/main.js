var base_url = window.location.origin;

if (base_url != 'http://127.0.0.1:5500'){
    base_url += '/personal-site'
}

console.log(base_url);
let header = `
        <nav class="navbar navbar-expand-sm navbar-dark">
            <a class="navbar-brand" href="${base_url}/index.html">JeanCSF</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="${base_url}/index.html" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" role="button" style="cursor:pointer;" onClick="projects()">Projetos</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form class="d-flex my-lg-0">
                    <input class="form-control form-control-sm me-sm-2 bg-dark" type="search" placeholder="Pesquisa">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </nav>
`;
document.getElementById('header').innerHTML = header;

let main = `
<div class="row">
<div class="col-lg-2 col-sm-auto col-md-auto footer">
    <div class="row">
        <div class="p-2 card">
            <img src="https://placehold.co/100" class="card-img-top img-fluid" alt="Profile Card">
            <div class="card-body">
                <h5 class="card-title">Jean Carlos</h5>
                <p class="text-muted">JeanCSF</p>
                <p class="card-text mt-5"><i class="fa fa-building me-2"></i> CRF-SP</p>
                <p class="card-text mt-2"><i class="fa fa-location-dot me-2"></i> São Paulo, Brasil</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Última atualização 19/05/2023</small>
            </div>
        </div>
    </div>
</div>
<div class="col-lg-8 col-sm-auto col-md-auto">
    <h1 class="text-center">Home</h1>
    <hr>
    <div class="home-content ms-2">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam blanditiis fugiat eaque
            doloremque possimus voluptatum, quas iure dolores. At praesentium incidunt aliquam cupiditate
            laborum expedita optio reiciendis a omnis cumque.
            Quas ipsam modi, quidem asperiores perferendis rem explicabo maiores exercitationem eveniet.
            Explicabo, deserunt quos, provident itaque deleniti molestias maiores quidem ea accusantium amet
            similique fugiat quasi qlis nemo consectetur! Est totam aperiam dignissimos. Quam inventore amet
            recusandae maxime assumenda? Tempore!
            Odio commodi veritatis porro repellendus fugiat exercitationem natus delectus ipsum aut vel,
            pariatur, iure id inventore adipisci, libero ducimus! Ducimus nisi a, fugiat itaque praesentium
            eaque nihil voluptate esse recusandae?
            Provident explicabo incidunt, enim cumque sequi nam, ea, dolorem non consequuntur architecto
            maiores perferendis commodi optio velit ipsa necessitatibus inventore consectetur! Magnam velit
            illo doloribus et doloremque nihil optio libero?
            Impedit natus tempore, architecto vero sapiente provident nesciunt dolores eaque reprehenderit
            possimus neque minus aliquam laborum, id consectetur maiores et excepturi. Est obcaecati ducimus
            dolorum vel impedit voluptatibus vero repudiandae?
            At quod aliquid quos alias reiciendis laboriosam ratione debitis nemo, expedita deserunt, sit
            quae cumque totam. Id alias repellat sunt. Vel ullam iure officiis quos inventore, eaque
            quisquam quasi deserunt.
            Sequi amet veniam, tempore qui nisi veritatis fuga facilis possimus perferendis similique, nemo
            doloribus dolores eos maiores pariatur. Itaque, libero possimus. Illo quasi dolor illum animi
            fuga in voluptatem eaque.
            Similique bes nisi quos dolores. Hic aut architecto veniam non exercitationem. Assumenda
            quibusdam debitis atque esse? Repellat suscipit ipsam veniam tempora voluptatum rerum, magni
            maiores aliquid praesentium molestias eaque pariatur!</p>
    </div>
</div>
<div class="col-1">
    
</div>
</div>
`;
document.getElementById('content').innerHTML = main;

let footer = `
    <div class="text-center footer-socials">
            <a href="https://wa.me/5511932094609" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a class="mx-5" href="mailto:jean.csf.17@gmail.com" target="_blank"><i class="fa fa-envelope-circle-check"></i></a>
            <a class="me-5" href="https://github.com/JeanCSF" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a class="me-5" href="https://www.linkedin.com/in/jean-carlos-6149a2232/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a class="me-5" href="https://facebook.com/fookinselfish" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a class="me-5" href="https://twitter.com/JCS_16" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a class="me-5" href="https://instagram.com/fookinselfish" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a class="me-5" href="https://twitch.tv/c0ka0" target="_blank"><i class="fa-brands fa-twitch"></i></a>
            <a class="me-5" href="https://www.youtube.com/channel/UCFaLrf0TN1DcKS0pUcb7Zzw" target="_blank"><i class="fa-brands fa-youtube"></i></a>
            <a class="me-5" href="https://soundcloud.com/fookinselfish" target="_blank"><i class="fa-brands fa-soundcloud"></i></a>
        </div>
        <div class="text-center">
            <p class="fw-bold">JeanCSF&copy; <span id="yearSpan"></span></p>
        </div>
`;
document.getElementById('footer').innerHTML = footer;

let year = new Date();
document.getElementById('yearSpan').textContent = year.getFullYear();

function projects(){
    let main = `
    <div class="col-8 offset-2">
            <h1 class="text-center">Projetos</h1>
            <hr>
        </div>
        <div class="row">
            <div class="col-2">
                 
            </div>
            <div class="col-8 home-content d-flex justify-content-between flex-column">
                <img class="img-fluid rounded float-start" src="${base_url}/assets/img/projects/cronometer/main-cronometer.png"
                    alt="Main cronometer screen">
                <h3>Cronômetro.js</h3>
                <hr>
                <h5>Cronômetro simples desenvolvido em JavaScript</h5>
                <p>O Usuário determina os minutos e os segundos e ao final do tempo pré determinado
                    soa um alarme</p>
                <div class="mt-5 text-end">
                    <a href="https://github.com/JeanCSF/cronometro.js" target="_blank"
                        class="text-muted text-decoration-none">Repositório</a>
                </div>
            </div>
            <div class="col-2">
                 
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-2">
                 
            </div>
            <div class="col-8 home-content d-flex justify-content-between flex-column">
                <img class="img-fluid rounded" src="${base_url}/assets/img/projects/triangles/main-triangles.png"
                    alt="Main cronometer screen">
                <h3>Calculo de triângulo</h3>
                <hr>
                <h5>Aplicação desenvolvida em PHP que calcula os lados de um triângulo</h5>
                <p>O Usuário digita os lados do triângulo e clica em calcular em seguida a aplicação retorna para ele
                    que tipo de triângulo é aquele, e caso não seja possível formar um triângulo com as medidas
                    fornecidas o usuário é informado.</p>
                <div class="mt-5 text-end">
                    <a href="https://github.com/JeanCSF/A2ProgramacaoWeb-Triangulos" target="_blank"
                        class="text-muted text-decoration-none">Repositório</a>
                </div>
            </div>
            <div class="col-2">
                 
            </div>
        </div>
    `;
    document.getElementById('content').innerHTML = main
}