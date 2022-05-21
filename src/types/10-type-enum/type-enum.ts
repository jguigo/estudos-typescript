//type enum, vai "enumerar" tipos de dados...

enum DesignColors {
   white = "#FFF",
   black = "#000",
}

console.log(DesignColors.white);
console.log(DesignColors.black);

enum StatusPermission { //se no nosso db tiver numeração pre-definida então pode ser útil!
   //no caso se não atribuição de valor, ele começa como um index, onde no exemplo o ADMIN é 0, USER é 1 e SUPPORT é 2!
   ADMIN,
   USER,
   SUPPORT
}

console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
console.log(StatusPermission.SUPPORT);

