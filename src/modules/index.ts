//basicamente o module é "import" para importar e "export" para exportar

import { connection, statusConnection } from "./database/connection";
import status from "./database/aplicativo"; //esta exportando por padrão!

function acessarSistema() {
   connection({ ip: "192.168.54.10", name: "MySQL" });
}

acessarSistema();

statusConnection();

status();
