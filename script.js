// Create the header
const header = document.createElement('header');

// Create the btheader div
const btheader = document.createElement('div');
btheader.classList.add('btheader');

// Create Sobre
const sobreLink = document.createElement('a');
sobreLink.href = '#sobre';
const sobreP = document.createElement('p');
sobreP.classList.add('btdoheader');
sobreP.textContent = 'Sobre';
sobreLink.appendChild(sobreP);
btheader.appendChild(sobreLink);

// Create Formação
const formacaoLink = document.createElement('a');
formacaoLink.href = '#formacao';
const formacaoP = document.createElement('p');
formacaoP.classList.add('btdoheader');
formacaoP.textContent = 'Formação';
formacaoLink.appendChild(formacaoP);
btheader.appendChild(formacaoLink);

// Create Objetivos
const objetivosLink = document.createElement('a');
objetivosLink.href = '#objetivos';
const objetivosP = document.createElement('p');
objetivosP.classList.add('btdoheader');
objetivosP.textContent = 'Objetivos';
objetivosLink.appendChild(objetivosP);
btheader.appendChild(objetivosLink);

// Create Contato
const contatoLink = document.createElement('a');
contatoLink.href = '#contato';
const contatoP = document.createElement('p');
contatoP.classList.add('btdoheader');
contatoP.textContent = 'Contato';
contatoLink.appendChild(contatoP);
btheader.appendChild(contatoLink);

header.appendChild(btheader);

// Create fotos
const fotos = document.createElement('div');
fotos.classList.add('fotos');

const floresQuerda = document.createElement('img');
floresQuerda.src = 'FLORESQUERDA.png';
floresQuerda.alt = '';
fotos.appendChild(floresQuerda);

const jpd = document.createElement('img');
jpd.classList.add('jpd');
jpd.src = 'JPDFBRANCO.png';
jpd.alt = '';
fotos.appendChild(jpd);

const floresDireita = document.createElement('img');
floresDireita.src = 'FLORDIREITA.png';
floresDireita.alt = '';
fotos.appendChild(floresDireita);

header.appendChild(fotos);

// Create main
const main = document.createElement('main');


// Create topico div sobre
const sobreDiv = document.createElement('div');
sobreDiv.classList.add('topico');
sobreDiv.id = 'sobre';

const sobreH1 = document.createElement('h1');
sobreH1.textContent = 'Sobre';
sobreDiv.appendChild(sobreH1);

const br = document.createElement('br');
sobreDiv.appendChild(br);

const row = document.createElement('div');
row.classList.add('row');
sobreDiv.appendChild(row);

const textContainer = document.createElement('div');
textContainer.id = 'text-container';

const h2 = document.createElement('h2');
h2.textContent = `Sou um estudante comprometido com meus estudos e busco desenvolver-me
continuamente. Atualmente, estou cursando o Ensino Médio Técnico em
Informática na FIAP School, onde tenho a oportunidade de explorar
diferentes áreas de conhecimento. Sou uma pessoa proativa, organizada
e aberta a novas experiências.`;
h2.classList.add('text-container');
textContainer.appendChild(h2);

const fototexto = document.createElement('div');
fototexto.classList.add('fototexto');

const jpbranco = document.createElement('img');
jpbranco.src = 'JPDBRANCO.png';
jpbranco.id = 'trigger-btn';
jpbranco.classList.add('jpbranco');
jpbranco.alt = '';
fototexto.appendChild(jpbranco);


row.appendChild(textContainer);
row.appendChild(fototexto);
main.appendChild(sobreDiv);

// Create topico formacao
const formacaoDiv = document.createElement('div');
formacaoDiv.classList.add('topico');
formacaoDiv.id = 'formacao';

const formacaoH1 = document.createElement('h1');
formacaoH1.textContent = 'Formação e Habilidades';
formacaoDiv.appendChild(formacaoH1);

const br2 = document.createElement('br');
formacaoDiv.appendChild(br2);

const row2 = document.createElement('div');
row2.classList.add('row');
formacaoDiv.appendChild(row2);

const textContainer2 = document.createElement('div');
textContainer2.id = 'text-container2';

const h2_2 = document.createElement('h2');
h2_2.innerHTML = `<ul>
<li> • Curso Técnico FIAP School
<br>
Ainda Cursando - Desde Fevereiro de 2022</li>
<li>• Conhecimento Básico de HTML, CSS e JS</li>
<li>• Conhecimento Básico em SQL</li>
<li>• Inglês Avançado</li>
</ul>`;
h2_2.classList.add('text-container');
textContainer2.appendChild(h2_2);

const fototexto2 = document.createElement('div');
fototexto2.classList.add('fototexto');

const jpbranco2 = document.createElement('img');
jpbranco2.src = 'JPDBRANCO.png';
jpbranco2.id = 'trigger-btn2';
jpbranco2.classList.add('jpbranco');
jpbranco2.alt = '';
fototexto2.appendChild(jpbranco2);

row2.appendChild(textContainer2);
row2.appendChild(fototexto2);
main.appendChild(formacaoDiv);

// Create topico objetivos
const objetivosDiv = document.createElement('div');
objetivosDiv.classList.add('topico');
objetivosDiv.id = 'objetivos';

const objetivosH1 = document.createElement('h1');
objetivosH1.textContent = 'Objetivos';
objetivosDiv.appendChild(objetivosH1);

const br3 = document.createElement('br');
objetivosDiv.appendChild(br3);

const row3 = document.createElement('div');
row3.classList.add('row');
objetivosDiv.appendChild(row3);

const textContainer3 = document.createElement('div');
textContainer3.id = 'text-container3';

const h2_3 = document.createElement('h2');
h2_3.textContent = `Estou em busca de oportunidades que me permitam aplicar e
expandir meus conhecimentos. Busco adquirir experiência
prática em diferentes campos, contribuindo de forma positiva
para os projetos nos quais estiver envolvido. Tenho interesse
em áreas como administração e outros campos que possam
surgir.`;
h2_3.classList.add('text-container');
textContainer3.appendChild(h2_3);

const fototexto3 = document.createElement('div');
fototexto3.classList.add('fototexto');

const jpbranco3 = document.createElement('img');
jpbranco3.src = 'JPDBRANCO.png';
jpbranco3.id = 'trigger-btn3';
jpbranco3.classList.add('jpbranco');
jpbranco3.alt = '';
fototexto3.appendChild(jpbranco3);

row3.appendChild(textContainer3);
row3.appendChild(fototexto3);
main.appendChild(objetivosDiv);

// Create footer
const footer = document.createElement('footer');

const topicofooter = document.createElement('div');
topicofooter.classList.add('topicofooter');
topicofooter.id = 'contato';

const h1_azul = document.createElement('h1');
h1_azul.classList.add('azul');
h1_azul.textContent = 'Contato';
topicofooter.appendChild(h1_azul);

const br4 = document.createElement('br');
topicofooter.appendChild(br4);

const br5 = document.createElement('br');
topicofooter.appendChild(br5);

const form = document.createElement('form');
form.classList.add('form');

const labelNome = document.createElement('label');
labelNome.classList.add('azul');
labelNome.textContent = 'Nome:';
form.appendChild(labelNome);

const inputNome = document.createElement('input');
inputNome.type = 'text';
inputNome.id = 'nome';
inputNome.name = 'nome';
form.appendChild(inputNome);

const br6 = document.createElement('br');
form.appendChild(br6);

const labelEmail = document.createElement('label');
labelEmail.classList.add('azul');
labelEmail.textContent = 'E-Mail: ';
form.appendChild(labelEmail);

const inputEmail = document.createElement('input');
inputEmail.type = 'text';
inputEmail.id = 'email';
inputEmail.name = 'email';
form.appendChild(inputEmail);

const br7 = document.createElement('br');
form.appendChild(br7);

const botaosubmit = document.createElement('input');
botaosubmit.type = 'submit';
botaosubmit.value = 'Submit';
botaosubmit.classList.add('botaosubmit');
form.appendChild(botaosubmit);

topicofooter.appendChild(form);
footer.appendChild(topicofooter);


// Conectar header, main e footer
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

