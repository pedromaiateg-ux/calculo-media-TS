export class Aluno {
    constructor(aluno, nota1, nota2, nota3) {
        this.aluno = aluno;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    get nomeEstudante() {
        return this.aluno;
    }
    calcularMedia() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }
    VerificarMedia() {
        const media = this.calcularMedia();
        if (media >= 7) {
            return "Aprovado";
        }
        else if (media >= 5) {
            return "Recuperação";
        }
        else if (media < 5) {
            return "Reprovado";
        }
        else {
            return "Louco";
        }
    }
}
//# sourceMappingURL=Aluno.js.map