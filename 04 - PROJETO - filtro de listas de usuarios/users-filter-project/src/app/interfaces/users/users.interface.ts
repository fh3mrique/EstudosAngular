import { IAddress } from "./address.interface"
import { IStatus } from "./status.interface";

export interface IUsers {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereco: IAddress;
    telefone: string;
    ativo: boolean;
    funcao: string;
    dataCadastro: string;
    status: IStatus
  }