import { Cliente } from "../Cliente/Cliente";

export class Conta {
    private agencia: string;
    private saldo: number = 0;
    private cliente: Cliente;
    private static qdtContas:number = 0;

    constructor(agencia: string, cliente: Cliente) {
        this.agencia = agencia
        this.cliente = cliente;
        Conta.qdtContas++
    }

    public sacar(valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return valor;
        }
    }

    public depositar(valor: number) {
        if (valor <= 0) {
            return
        }
        this.saldo += valor
    }

    public transferir(valor: number, conta: Conta): void {
        const valorSacado = Number(this.sacar(valor))
        conta.depositar(valorSacado)
    }


    getSaldo() {
        return this.saldo; 
    }

    getTotalContas(){
        return Conta.qdtContas
    }
}