type Connection = {
   ip: string;
   name: string;
};

export function connection(info: Connection): boolean {
   console.log("CONEXÃO REALIZADA COM SUCESSO: ", info.ip);
   return true;
}

export function statusConnection(): void {
   console.log("Servidor funcionando 100%");
}