const jogadores = [
  { nome: "Luan", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
];

mostrarJogadores(jogadores);

function calculaPontos(jogador) {
  return jogador.vitorias * 3 + jogador.empates;
}

function mostrarJogadores(jogadores) {
  jogadores.sort((a, b) => b.pontos - a.pontos);

  let elemento = "";
  for (const [index, jogador] of jogadores.entries()) {
    elemento += `<tr>
    <td class='colunaNome'>${jogador.nome}</td>
    <td title='Vitória = 3 Pontos'>${jogador.vitorias}</td>
    <td title='Empate = 1 Ponto'>${jogador.empates}</td>
    <td>${jogador.derrotas}</td>
    <td>${jogador.pontos}</td>
    <td><button class='botaoVitoria' onClick='adicionarVitoria(${index})'>Vitória</button></td>
    <td><button class='botaoExcluir' onClick='excluirJogador(${index})'>Excluir</button></td>
    <td><button class='empate' onClick='adicionarEmpate()'>Empate</button></td>
  `;
  }

  document.getElementById("tabelaJogadores").innerHTML = elemento;
}

function adicionarVitoria(index) {
  const jogador = jogadores[index];
  jogador.vitorias++;

  for (const [i, outroJogador] of jogadores.entries()) {
    if (i !== index) {
      outroJogador.derrotas++;
    }
  }

  jogador.pontos = calculaPontos(jogador);
  mostrarJogadores(jogadores);
}

function adicionarEmpate() {
  for (const jogador of jogadores) {
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }
  mostrarJogadores(jogadores);
}

function excluirJogador(index) {
  if (confirm(`Deseja excluir o(a) jogador(a) ${jogadores[index].nome} ?`)) {
    jogadores.splice(index, 1);
    mostrarJogadores(jogadores);
  } else {
    alert("Cancelado! Você não excluiu ninguém!");
  }
}

function novoJogador() {
  const nome = document.getElementById("nomeJogador").value;

  if (nome.length <= 0) {
    alert("Texto Inválido! Insira um nome");
    return;
  }

  const jogador = {
    nome,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0,
  };

  jogadores.push(jogador);
  mostrarJogadores(jogadores);
}


function zerarPontuacao() {
  jogadores.forEach(function (item) {
    item.vitorias = 0;
    item.empates = 0;
    item.derrotas = 0;
    item.pontos = 0;
  });
  mostrarJogadores(jogadores);
}