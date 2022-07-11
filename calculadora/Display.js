class Display {
    constructor(panValorAnterior, panValorActual) {
        this.panValorAnterior = panValorAnterior;
        this.panValorActual = panValorActual;
        this.calculadora = new Calcula;
        this.valorActual = "";
        this.valorAnterior = "";
    }
    borrar(){
        this.valorActual = this.toString().slice(0-1);
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return 
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.panValorActual.textContent = this.valorActual;
        this.panValorAnterior.textContent = this.valorAnterior;
    }

}