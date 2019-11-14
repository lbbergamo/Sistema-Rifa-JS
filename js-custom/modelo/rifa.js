console.log("Estou sendo logada - modelo/rifas.js")

class Rifa{
    constructor(id,nome,telefone){
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.status = true;
    }

    importando(id,nome,telefone){
         this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.status = false;
    }

    // status(){
    //     return this.status;
    // }
    static id(){
        return this.id;
    }

}