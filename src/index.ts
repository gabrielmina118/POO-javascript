import express,{ Express } from "express";
import cors from 'cors'
import { Cliente } from "./Cliente/Cliente";
import { Conta } from "./Conta/Conta";

const app: Express = express();

app.use(express.json())
app.use(cors())


const cliente1 = new Cliente('maria','123.342.321-96')
const cliente2 = new Cliente('josé','665.302.321-96')
const conta1 = new Conta('998',cliente1)
const conta2 = new Conta('330',cliente2)

conta1.depositar(500)
conta1.transferir(300,conta2)

console.log(conta2.getTotalContas())

app.listen(3003,()=>{
    console.log("Server is running");
    
})