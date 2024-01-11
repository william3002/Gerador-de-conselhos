document.addEventListener("DOMContentLoaded", function () {
    // Função para obter conselhos da API
    function getAdvice() {
      fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
          // Atualizar o texto do parágrafo
          document.getElementById('text').innerText = data.slip.advice;
          // Atualizar o número do conselho
          document.getElementById('adviceNumber').innerText = `A d v i c e #${data.slip.id}`;
        })
        .catch(error => console.error('Erro ao obter conselho:', error));
    }

    // Chamar a função para obter conselhos ao carregar a página
    getAdvice();

    // Função para obter conselhos específicos por ID
    function getSpecificAdvice(slipId) {
      fetch(`https://api.adviceslip.com/advice/${slipId}`)
        .then(response => response.json())
        .then(data => {
          // Atualizar o texto do título
          document.getElementById('adviceNumber').innerText = `A d v i c e #${slipId}`;
          // Atualizar o texto do parágrafo
          document.getElementById('text').innerText = data.slip.advice;
        })
        .catch(error => console.error('Erro ao obter conselho específico:', error));
    }

    // Chamar a função para obter conselhos específicos por ID (por exemplo, slip_id = 42)
    getSpecificAdvice(42);
  });