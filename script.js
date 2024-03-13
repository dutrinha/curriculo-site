
const header = document.createElement('header');
header.innerHTML = `
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="btheader">
            <a href="#sobre"><p class="btdoheader">Sobre</p></a>
            <a href="#formacao"><p class="btdoheader">Formação</p></a>
            <a href="#objetivos"><p class="btdoheader">Objetivos</p></a>
            <a href="#contato"><p class="btdoheader">Contato</p></a>
        </div>
        <div class="fotos">
        <img src="FLORESQUERDA.png" alt="">
            <img class="jpd" src="JPDFBRANCO.png" alt="">
        <img src="FLORDIREITA.png" alt="">
        </div>
    </header>


    <main>

        <div class="topico" id="sobre">
            <h1>Sobre</h1>
            <br>
            <div class="row">
                <div id="text-container" class="text-container">
                    <h2>
                        Sou um estudante comprometido com meus estudos e busco desenvolver-me
                        continuamente. Atualmente, estou cursando o Ensino Médio Técnico em
                        Informática na FIAP School, onde tenho a oportunidade de explorar
                        diferentes áreas de conhecimento. Sou uma pessoa proativa, organizada
                        e aberta a novas experiências.
                    </h2>
                  </div>
                
            <div class="fototexto">
                <img src="JPDBRANCO.png" id="trigger-btn" class="jpbranco" alt="">
            </div>
            </div>
        </div>

        <div class="topico" id="formacao">
            <h1>Formação e Habilidades</h1>
            <br>
            <div class="row">
                <div id="text-container2" class="text-container">

                <h2>
                    <ul>
                        <li> • Curso Técnico FIAP School
                            <br>
                            Ainda Cursando - Desde Fevereiro de 2022
                        </li>
                        <li>• Conhecimento Básico de HTML, CSS e JS</li>
                        <li>• Conhecimento Básico em SQL</li>
                        <li>• Inglês Avançado</li>
                    </ul>
                  </div>
                </h2>
            <div class="fototexto">
                <img src="JPDBRANCO.png" id="trigger-btn2" class="jpbranco" alt="">
            </div>
            </div>
        </div>

        <div class="topico" id="objetivos">
            <h1>Objetivos</h1>
            <br>
            <div class="row">
                <div id="text-container3" class="text-container">
                    <h2>
                        Estou em busca de oportunidades que me permitam aplicar e
                        expandir meus conhecimentos. Busco adquirir experiência
                        prática em diferentes campos, contribuindo de forma positiva
                        para os projetos nos quais estiver envolvido. Tenho interesse
                        em áreas como administração e outros campos que possam
                        surgir.
                    </h2>
                  </div>
                
            <div class="fototexto">
                <img src="JPDBRANCO.png" id="trigger-btn3" class="jpbranco" alt="">
            </div>
            </div>
        </div>
    </main>


    <footer>
        <div class="topicofooter" id="contato">
            <h1 class="azul">Contato</h1>
            <br>
            <br>
            <form action="" class="form">
                <label for="nome" class="azul">Nome:</label><br>
                <input type="text" id="nome" name="nome" value=""><br>
                <br>
                <label for="email" class="azul">E-Mail: </label><br>
                <input type="text" id="email" name="email" value=""><br><br>
                <input type="submit" value="Submit" class="botaosubmit">
            </form>
        </div>
    </footer>
</body>
<script src="js.js"></script>
</html>
`;



// Create the main content
const mainContent = document.createElement('main');

// Combine the header and main content
const bodyContent = document.createElement('body');
bodyContent.appendChild(header);
bodyContent.appendChild(mainContent);

// Replace the existing body content with the new content
document.open();
document.write(bodyContent.innerHTML);
document.close();









