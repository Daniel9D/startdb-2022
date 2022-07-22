class Forca {
  constructor(palavra_secreta){
    this.palavra_secreta = Array.from(palavra_secreta);

    this.vidas = 6;
    this.chutadas = [];
    this.estado = "aguardando chute";
    this.acertadas =  Array.from(palavra_secreta);
    this.acertadas.forEach((e,i) => this.acertadas[i]='_')
  }

  chutar(letra) {
    if(letra.length==1){
      let idx = this.palavra_secreta.indexOf(letra);
      
      if(this.chutadas.indexOf(letra)==-1){this.chutadas.push(letra); if(idx==-1) this.vidas-=1;};
      while (idx != -1) {
        this.acertadas[idx] = letra;
        idx = this.palavra_secreta.indexOf(letra, idx + 1);
      }
    }
  }

  buscarEstado() {
    return this.vidas <= 0 ? "perdeu" :this.acertadas.toString() == this.palavra_secreta.toString() ? "ganhou" :"aguardando chute" ; 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.chutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.acertadas // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
