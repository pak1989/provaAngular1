export class Utente {

    constructor(
        public id: number,
        public nome: string,
        public cognome: string,
        public username: string,
        public password: string,
        public creditoResiduo: number,
        public dataRegistrazione: Date,

      ) {  }
}