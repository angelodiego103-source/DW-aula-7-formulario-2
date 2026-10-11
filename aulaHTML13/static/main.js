/*
Descricao: PW-prova-28-09
nome_arquivo: main.js
nome_exercicio: Formulário 2 - tudo o que foi passado em aula
nome_aluno: Diego Augusto Ângelo
email_aluno: diego.angelo@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const form = document.getElementById("formLogin");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("c_email").value;
    const senha = document.getElementById("c_senha").value;
    const estado = document.getElementById("c_estado").value;

    const genero = document.querySelector('input[name="genero"]:checked');
    const interesses = document.querySelectorAll('input[name="interesses"]:checked');

    if (email === "" || senha === "") {
        alert("Preencha o email e a senha!");
        return;
    }

    if (!genero) {
        alert("Selecione um gênero!");
        return;
    }

    if (interesses.length === 0) {
        alert("Selecione pelo menos um interesse!");
        return;
    }

    if (estado === "") {
        alert("Selecione seu estado!");
        return;
    }

    const sobre = document.getElementById("c_sobre").value;
    localStorage.setItem("sobre", sobre);

    alert("Cadastro feito com sucesso!");
    window.location.href = "perfil.html";
});