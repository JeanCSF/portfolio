var base_url = window.location.origin;
if (base_url != 'http://127.0.0.1:5500') {
    base_url += '/personal-site'
}
console.log(base_url);



let header = `
        <nav class="navbar navbar-expand-sm navbar-dark">
            <a href="javascript:home();" class="navbar-brand" role="button"><img src="${base_url}/assets/img/jean/JeanCSF.png" class="img-fluid rounded-circle opacity-50" width="84" alt="Logo"></a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
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

function home() {
    let main = `
    <div class="col-8 offset-2">
        <h1 class="text-center fw-bold">Home</h1>
        <hr>
    </div>
    <div class="row">
        <div class="col-lg-8 col-sm-auto col-md-auto offset-lg-2 offset-sm-auto offset-md-auto home-content">
            <h4>
                Olá, seja bem vindo(a)!
            </h4>
            <p>
                Este site tem por finalidade ser o meu portifólio, é aqui onde ficam exibidos os principais projetos que participei 
                ou desenvolvi por conta própria. Este site foi desenvolvido em uma única página, os conteúdos aqui dispostos são trazidos
                por meio do JavaScript, todos os elementos tanto dessa seção quanto das outras são renderizados por meio desta linguagem.
            </p>
            <p>
                O motivo pelo qual optei por este método de desenvolvimento deve-se a o fato de que, inicialmente o site ficará hospedado
                no <a class="link-light" href="https://pages.github.com/" target="_blank">GitHub-Pages</a> e é exigido que os sites que são hospedados lá sejam 
                apenas páginas estáticas, sendo assim achei que seria uma boa ideia já deixar tudo em uma página só, dessa forma tudo que tem 
                no site já carrega direto, fazendo com que o carregamento entre uma seção e outra seja praticamente nulo.
            </p>
            <p>
                As técnologias utilizadas aqui foram: HTML, responsável pelo "esqueleto" do site. CSS, para dar estilo aos elementos. JavaScript, para o 
                carregamento das seções. <a class="link-light" href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, sua classe de grid foi muito 
                utilizada neste site para deixar tudo alinhado e principalmente deixar o site responsívo. <a class="link-light" href="https://fontawesome.com/" target="_blank">FontAwesome</a>, 
                foi utilizado para estilizar alguns dos icones da página.
            </p>
                <p class="text-end mt-4">Imagem de fundo: <a class="link-light" href="https://artsdot.com/ADC/Art-ImgScreen-2.nsf/O/A-8XYR3Q/$FILE/Peter-paul-rubens-the-battle-of-the-amazons.Jpg" target="_blank">The Batle of The Amazons de Peter Paul Rubens</a></p>
                <p class="text-end"><a class="link-light" href="https://github.com/JeanCSF/personal-site" target="_blank">Repositório</a></p>
        </div>
    </div>
    `;
    document.getElementById('content').innerHTML = main;
}
window.onload = home();

let footer = `
    <div class="col-6 col-sm-auto col-md-auto footer-socials">
            <a class="me-5 link-light" href="https://wa.me/5511932094609" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a class="me-5 link-light" href="mailto:jean.csf.17@gmail.com" target="_blank"><i class="fa fa-envelope-circle-check"></i></a>
            <a class="me-5 link-light" href="https://github.com/JeanCSF" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a class="me-5 link-light" href="https://www.linkedin.com/in/jean-carlos-6149a2232/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div class="text-end col-6 col-sm-auto col-md-auto footer-social-text">
            <a class="me-3 link-light" href="https://facebook.com/fookinselfish" target="_blank">Facebook</a>
            <a class="me-3 link-light" href="https://twitter.com/JCS_16" target="_blank">Twitter</a>
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

function projects() {
    let main = `
    <div class="col-8 offset-2">
            <h1 class="text-center fw-bold">Projetos</h1>
            <hr>
        </div>
        <div class="row">
            <div class="col-lg-8 col-sm-auto col-md-auto offset-lg-2 offset-sm-auto offset-md-auto home-content d-flex justify-content-between flex-column">
                <img class="img-fluid rounded" src="${base_url}/assets/img/projects/loginci4/main-login.png"
                    alt="Main login screen">
                <h3>Sistema de login</h3>
                <hr>
                <h5>Autenticação de usuário desenvolvida na framework CodeIgniter4(PHP)</h5>
                <p>Sistema efetua o cadastro do usuário interessado, as senhas são armazenadas encriptografadas para maior segurança.
                Apos concluir a etapa de cadastro o usuário é orientado a checar seu e-mail para confirma-lo e ativar sua conta, ao efetuar
                o login de fato o sistema checa se as credenciais digitadas estão corretas e se a conta já foi ativada(via e-mail de ativação),
                o usuário só irá ter acesso se as credenciais estiverem corretas e a conta estiver ativa.</p>
                <p class="text-end"><a href="https://www.youtube.com/channel/UCFaLrf0TN1DcKS0pUcb7Zzw" class="text-muted" target="_blank">Link para playlist no meu canal</a></p>
                <div class="mt-5 text-end">
                    <a href="https://github.com/JeanCSF/loginCI4" target="_blank"
                        class="text-muted">Repositório</a>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-8 col-sm-auto col-md-auto offset-lg-2 offset-sm-auto offset-md-auto home-content d-flex justify-content-between flex-column">
                <img class="img-fluid rounded" src="${base_url}/assets/img/projects/cronometer/main-cronometer.png"
                    alt="Main cronometer screen">
                <h3>Cronômetro.js</h3>
                <hr>
                <h5>Cronômetro simples desenvolvido em JavaScript</h5>
                <p>O Usuário determina os minutos e os segundos e ao final do tempo pré determinado
                    soa um alarme</p>
                <div class="mt-5 text-end">
                    <a href="https://github.com/JeanCSF/cronometro.js" target="_blank"
                        class="text-muted">Repositório</a>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-8 col-sm-auto col-md-auto offset-lg-2 offset-sm-auto offset-md-auto home-content d-flex justify-content-between flex-column">
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
                        class="text-muted">Repositório</a>
                </div>
            </div>
        </div>
    `;
    document.getElementById('content').innerHTML = main
}

function about() {
    let main = `
    <div class="col-8 offset-2">
        <h1 class="text-center fw-bold">Sobre</h1>
        <hr>
    </div>
    <div class="row">
        <div class="col-lg-8 col-sm-auto col-md-auto offset-lg-2 offset-sm-auto offset-md-auto home-content">
            <h4>Olá, me chamo Jean Carlos</h4>
            <p>
                Atualmente tenho <span id="ageSpan"></span> anos, estou cursando Análise e Desenvolvimento de Sistemas
                na UNICID do Tatuapé, estou partindo para o último semestre. Estou vindo de uma transição de carreira,
                anteriormente trabalhava com vendas no setor de varejo e atualmente sou estagiário em desenvolvimento
                pelo CRF-SP, mas meu contrato está perto de acabar e aqui eles não efetivam, então estou a procura de
                novas oportunidades se for o caso pode entra em contato comigo.
            </p>
            <p>
                Um dos meus maiores pontos fortes creio que seja a assimilação, quando se trata de aprender algo novo
                sempre tenho certa facilidade para captar as informações, habilidade essa que vem ficando cada vez melhor
                com o passar dos anos. E falando de pontos fracos, o principal seria a comunicação, mas de fato é algo que 
                têm melhorado ultimamente. Também sou muito persistente, quando me deparo com um problema eu sempre tento
                todas as formas de resolve-lo ao invés de ignorar.
            </p>
            <p>
                Tenho poucos hobbys, mas o principal com certeza é ouvir música, é algo que sempre estou fazendo meio que faz
                parte de mim, também tenho grande apreço por pinturas e outros tipos de arte, também gosto bastante de jogar nas minhas
                horas vagas!
            </p>
    </div>
</div>  
    `;
    document.getElementById('content').innerHTML = main
    document.getElementById('ageSpan').textContent = getAge('1997/01/05');
}

let year = new Date();
document.getElementById('yearSpan').textContent = year.getFullYear();

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
