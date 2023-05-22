var base_url = window.location.origin;
if (base_url != 'http://127.0.0.1:5500'){
    base_url += '/personal-site'
}
console.log(base_url);



let header = `
        <nav class="navbar navbar-expand-sm navbar-dark">
            <a href="javascript:home();" class="navbar-brand" role="button"><img src="${base_url}/assets/img/jean/JeanCSF.png" class="img-fluid rounded-circle opacity-50" width="84" alt="Logo"></a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse text-center" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-lg-0 fs-4">
                    <li class="nav-item">
                        <a href="javascript:home();" class="nav-link mx-2" role="button" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:projects();" class="nav-link mx-2" role="button">Projetos</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:about();" class="nav-link mx-2" role="button">Sobre</a>
                    </li>
                </ul>
            </div>
        </nav>
`;
document.getElementById('header').innerHTML = header;

window.onload = home();

let footer = `
    <div class="col-6 footer-socials">
            <a href="https://wa.me/5511932094609" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a class="mx-5" href="mailto:jean.csf.17@gmail.com" target="_blank"><i class="fa fa-envelope-circle-check"></i></a>
            <a class="me-5" href="https://github.com/JeanCSF" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a class="me-5" href="https://www.linkedin.com/in/jean-carlos-6149a2232/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div class="text-end col-6 footer-social-text">
            <a class="link-light" href="https://facebook.com/fookinselfish" target="_blank">Facebook</a>
            <a class="mx-3 link-light" href="https://twitter.com/JCS_16" target="_blank">Twitter</a>
            <a class="me-3 link-light" href="https://instagram.com/fookinselfish" target="_blank">Instagram</a>
            <a class="me-3 link-light" href="https://twitch.tv/c0ka0" target="_blank">Twitch</a>
            <a class="me-3 link-light" href="https://www.youtube.com/channel/UCFaLrf0TN1DcKS0pUcb7Zzw" target="_blank">Youtube</a>
            <a class="me-3 link-light" href="https://soundcloud.com/fookinselfish" target="_blank">Soundcloud</a>
    </div>
        <div class="text-center">
            <p class="fw-bold">JeanCSF&copy; <span id="yearSpan"></span></p>
        </div>
`;
document.getElementById('footer').innerHTML = footer;

function home(){
    main = `
    <div class="row">
    
    <div class="col-lg-8 col-sm-auto col-md-auto offset-lg-2 offset-sm-auto offset-md-auto">
        <h1 class="text-center fw-bold">Home</h1>
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
}

function projects(){
    let main = `
    <div class="col-8 offset-2">
            <h1 class="text-center fw-bold">Projetos</h1>
            <hr>
        </div>
        <div class="row">
            <div class="col-8 offset-2 home-content d-flex justify-content-between flex-column">
                <img class="img-fluid rounded" src="${base_url}/assets/img/projects/loginci4/main-login.png"
                    alt="Main login screen">
                <h3>Sistema de login</h3>
                <hr>
                <h5>Autenticação de usuário desenvolvida na framework CodeIgniter4(PHP)</h5>
                <p>Sistema efetua o cadastro do usuário interessado, as senhas são armazenadas encriptografadas para maior segurança.
                Apos concluir a etapa de cadastro o usuário é orientado a checar seu e-mail para confirma-lo e ativar sua conta, ao efetuar
                o login de fato o sistema checa se as credenciais digitadas estão corretas e se a conta já foi ativada(via e-mail de ativação),
                o usuário só irá ter acesso se as credenciais estiverem corretas e a conta estiver ativa.</p>
                <p class="text-end"><a href="https://www.youtube.com/channel/UCFaLrf0TN1DcKS0pUcb7Zzw" class="text-muted text-decoration-none">Link para playlist no meu canal</a></p>
                <div class="mt-5 text-end">
                    <a href="https://github.com/JeanCSF/loginCI4" target="_blank"
                        class="text-muted text-decoration-none">Repositório</a>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-8 offset-2 home-content d-flex justify-content-between flex-column">
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
        </div>
        <div class="row mt-5">
            <div class="col-8 offset-2 home-content d-flex justify-content-between flex-column">
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
        </div>
    `;
    document.getElementById('content').innerHTML = main
}

function about(){
    let main = `
    <div class="col-8 offset-2">
        <h1 class="text-center fw-bold">Sobre</h1>
        <hr>
    </div>
    <div class="row">
        <div class="col-8 offset-2 home-content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vero cupiditate in nemo eveniet blanditiis,
            voluptates ducimus veniam explicabo consequuntur similique illo a odit ut nam quo quod error eius?
            Quibusdam doloremque ratione quod explicabo et asperiores, quos ipsum suscipit sunt illum, modi mollitia
            laborum dolorem numquam vitae illo velit odio aut. Atque, quas? Magni dolores sint quasi error optio.
            Illum itaque rerum molestiae recusandae nihil voluptatum, commodi labore ullam. Atque beatae quo porro
            dolores quas! Totam, neque aut fuga fugiat asperiores possimus iure optio maiores est incidunt cum. Ipsam?
            Eos veritatis pariatur ullam deleniti. Obcaecati aperiam aliquid earum laboriosam ut at, dolore maiores?
            Architecto sit blanditiis dolore molestias natus in repellendus sed? Possimus aspernatur culpa placeat
            fugiat nihil. Itaque.
            Odit accusantium impedit culpa. Blanditiis in optio ex consequuntur assumenda pariatur iusto voluptate
            corrupti quibusdam, est, consectetur voluptatem ducimus, ea placeat at voluptatibus? Assumenda quis
            voluptates provident fugiat enim fugit.
            Quo reprehenderit eos ea praesentium soluta, hic modi nihil provident, molestiae sit molestias suscipit
            quasi mollitia magni minima, in veniam facilis. Exercitationem ratione cumque facilis ducimus, nobis in quae
            beatae!
            Minima accusamus facilis voluptatum nam? Officia, accusantium ipsam expedita quae facere harum! Culpa
            exercitationem repellat ipsum at dolor incidunt, recusandae soluta totam sunt. Voluptate, fugiat veniam eum
            harum laborum in.
            Excepturi culpa odit reprehenderit cum sint illo quam accusantium. Repudiandae nemo saepe dolorum
            cupiditate, error harum doloribus quis illum quod modi in, quidem vero ipsum fugit suscipit facere.
            Accusamus, amet.
            Blanditiis quos veritatis eius mollitia aspernatur quidem odio omnis, deleniti, excepturi minus animi
            quaerat, veniam saepe quam cupiditate impedit est. Rem dolores cum sit, quo aliquam id! Voluptate, enim
            deleniti?
            Quia et, saepe officiis amet fuga recusandae quod natus ipsa deserunt optio, tempore eaque in delectus? At
            eveniet quas ipsam tempora ex quaerat totam nulla vero repellendus! Obcaecati, praesentium unde?</p>
    </div>
</div>  
    `;
    document.getElementById('content').innerHTML = main
}

let year = new Date();
document.getElementById('yearSpan').textContent = year.getFullYear();