

import { Aluno } from "./Aluno.js";

const form = document.getElementById("formulario") as HTMLFormElement;
const nome = document.getElementById("nome") as HTMLInputElement;
const nota1 = document.getElementById("nota1") as HTMLInputElement;
const nota2 = document.getElementById("nota2") as HTMLInputElement;
const nota3 = document.getElementById("nota3") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLElement;

form.addEventListener("submit", (event: Event) => { 
    event.preventDefault();
    
    const nomeInput = nome.value.trim();
    const n1Input = Number(nota1.value);
    const n2Input = Number(nota2.value);
    const n3Input = Number(nota3.value);

    if (!nomeInput || isNaN(n1Input) || isNaN(n2Input) || isNaN(n3Input)) {
        resultado.innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    if (n1Input < 0 || n1Input > 10 || n2Input < 0 || n2Input > 10 || n3Input < 0 || n3Input > 10) {
        resultado.innerHTML = "Digite notas válidas entre 0 e 10.";
        return;
    }

    const estudante = new Aluno(nomeInput, n1Input, n2Input, n3Input);
    const media = estudante.calcularMedia();
    const situacao = estudante.VerificarMedia();

    resultado.innerHTML = ` 
    <p> Aluno: ${nomeInput} </p>   
    <p> Média Final: ${media.toFixed(2)} </p>   
    <p> SITUAÇÃO: ${situacao} </p>  
    `;
});
