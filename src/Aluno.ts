
export class Aluno {
    private aluno: string;
    private nota1: number;
    private nota2: number;
    private nota3: number;

    constructor(aluno: string, nota1: number, nota2: number, nota3: number) {
        this.aluno = aluno;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    public get nomeEstudante(): string {
        return this.aluno;
    }

    public calcularMedia(): number {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }

    public VerificarMedia(): string {
        const media = this.calcularMedia();
        if (media >= 7) {
            return "Aprovado";
        } else if (media >= 5) {
            return "Recuperação";
        } else if (media < 5) {
            return "Reprovado";
        } else {
            return "Louco"; 
        }
    }
}
