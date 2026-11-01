function Calculadora() {
  // Declara o construtor que configura a calculadora.
  this.display = document.querySelector(".display"); // Localiza o campo de exibição da calculadora.

  this.inicia = () => {
    // Define o método que inicia os eventos da calculadora.
    this.capturaCliques(); // Configura a captura de cliques nos botões.
    this.capturaEnter(); // Configura a captura da tecla Enter.
  }; // Finaliza o método de inicialização.

  this.capturaCliques = () => {
    // Define o método que trata cliques na página.
    document.addEventListener("click", (event) => {
      // Registra um ouvinte para todos os cliques no documento.
      const el = event.target; // Guarda o elemento que recebeu o clique.
      if (el.classList.contains("btn-num")) this.addNumDisplay(el); // Adiciona o conteúdo ao visor quando um botão numérico é clicado.
      if (el.classList.contains("btn-clear")) this.clear(); // Limpa o visor quando o botão de limpar é clicado.
      if (el.classList.contains("btn-del")) this.del(); // Apaga o último caractere quando o botão de exclusão é clicado.
      if (el.classList.contains("btn-eq")) this.realizaConta(); // Calcula a expressão quando o botão de igualdade é clicado.
    }); // Finaliza o registro do ouvinte de cliques.
  }; // Finaliza o método de captura de cliques.

  this.capturaEnter = () => {
    // Define o método que trata a tecla Enter.
    document.addEventListener("keyup", (event) => {
      // Registra um ouvinte para teclas soltas no documento.
      if (event.key === "Enter") this.realizaConta(); // Executa o cálculo quando a tecla solta for Enter.
    }); // Finaliza o registro do ouvinte de teclado.
  }; // Finaliza o método de captura da tecla Enter.

  this.addNumDisplay = (el) => {
    // Define o método que acrescenta um valor ao visor.
    this.display.value += el.innerText; // Acrescenta ao visor o texto do botão clicado.
    this.display.focus(); // Mantém o foco no campo de exibição.
  }; // Finaliza o método de inclusão no visor.

  this.clear = () => (this.display.value = ""); // Define o método que apaga todo o conteúdo do visor.
  this.del = () => (this.display.value = this.display.value.slice(0, -1)); // Define o método que remove o último caractere do visor.
  this.realizaConta = () => {
    // Define o método que calcula a expressão exibida.
    try {
      // Inicia o tratamento de possíveis erros no cálculo.
      const conta = eval(this.display.value); // Avalia a expressão digitada e guarda o resultado.

      if (conta === undefined) {
        // Verifica se a avaliação não produziu um resultado.
        alert("Conta Inválida"); // Informa que a expressão não é válida.
        return; // Interrompe o método sem atualizar o visor.
      } // Finaliza a verificação de resultado indefinido.
      this.display.value = conta; // Exibe no visor o resultado do cálculo.
    } catch (error) {
      const root = document.getElementById("root");
      // Captura erros que ocorram ao avaliar a expressão.
      alert("Conta inválida"); // Informa que não foi possível calcular a expressão.
      return; // Interrompe o método após o erro.
    } // Finaliza o tratamento de erros do cálculo.
  }; // Finaliza o método de cálculo.
} // Finaliza a declaração do construtor da calculadora.

const calculadora = new Calculadora(); // Cria uma instância da calculadora.
calculadora.inicia(); // Inicializa os eventos da calculadora.
