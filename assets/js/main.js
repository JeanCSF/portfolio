let header = `
        <nav class="navbar navbar-expand-sm navbar-dark">
            <a class="navbar-brand" href="../index.html">JeanCSF</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="../index.html" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects/projects.html">Projetos</a>
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
                    <input class="form-control form-control-sm me-sm-2 bg-dark" type="text" placeholder="Pesquisa">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </nav>
`;
document.getElementById('header').innerHTML = header;

let footer = `
    <div class="text-end footer-socials mt-1">
            <a href="https://github.com/JeanCSF" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a class="mx-5" href="https://facebook.com/fookinselfish" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a class="me-5" href="https://twitter.com/JCS_16" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a class="me-5" href="https://www.linkedin.com/in/jean-carlos-6149a2232/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a class="me-5" href="https://instagram.com/fookinselfish" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="text-center">
            <p class="fw-bold">JeanCSF&copy; <span id="yearSpan"></span></p>
        </div>
`;
document.getElementById('footer').innerHTML = footer;

let year = new Date();
document.getElementById('yearSpan').textContent = year.getFullYear();