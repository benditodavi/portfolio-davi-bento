/* ==========================================================
   script.js — Portfólio Davi Bento
   Validação e simulação de envio do formulário de contato.
   ========================================================== */

// Formato simples de e-mail: algo@algo.algo, sem espaços.
const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Confere os dados do formulário.
 * Recebe um objeto { nome, email, mensagem } e devolve:
 *  - um texto explicando o erro, ou
 *  - null, se estiver tudo certo.
 * trim() remove os espaços das pontas: um campo só com espaços conta como vazio.
 */
function validarContato(dados) {
  const nome = dados.nome.trim();
  const email = dados.email.trim();
  const mensagem = dados.mensagem.trim();

  if (nome === "") {
    return "Preencha o seu nome.";
  }
  if (email === "") {
    return "Preencha o seu e-mail.";
  }
  if (!FORMATO_EMAIL.test(email)) {
    return "Informe um e-mail válido, como usuario@dominio.com.";
  }
  if (mensagem === "") {
    return "Escreva a sua mensagem.";
  }
  return null;
}

// Liga a validação ao formulário (só se ele existir na página).
const formulario = document.getElementById("form-contato");

if (formulario) {
  const aviso = document.getElementById("aviso");

  // O evento "submit" acontece quando a pessoa clica em "Enviar mensagem"
  // ou aperta Enter dentro de um campo.
  formulario.addEventListener("submit", function (evento) {
    // Impede o envio real: nesta atividade o envio é apenas simulado.
    evento.preventDefault();

    const erro = validarContato({
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      mensagem: document.getElementById("mensagem").value
    });

    if (erro) {
      // Mostra o erro em vermelho e mantém o que a pessoa já digitou.
      aviso.textContent = erro;
      aviso.className = "aviso erro";
      return;
    }

    // Tudo certo: limpa os campos e confirma o "envio".
    formulario.reset();
    aviso.textContent = "Mensagem enviada com sucesso!";
    aviso.className = "aviso sucesso";
  });
}
