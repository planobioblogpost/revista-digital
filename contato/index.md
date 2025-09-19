---
title: "Contato e Agendamentos"
layout: "base.njk"
---
<div class="container">
  <h2 class="section-title">Entre em Contato</h2>
  <p style="text-align: center; max-width: 700px; margin: -1rem auto 2rem;">Tem alguma dúvida sobre o seu cãozinho ou gato? Quer agendar uma consulta com a nossa doutora? Preencha o formulário abaixo e a nossa equipa entrará em contato em breve.</p>
  
  <form name="contato" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <p class="hidden"><label>Não preencha: <input name="bot-field"></label></p>
    <p><label for="nome">Seu Nome:</label><input id="nome" type="text" name="nome" required></p>
    <p><label for="email">Seu Email:</label><input id="email" type="email" name="email" required></p>
    <p><label for="assunto">Assunto:</label><input id="assunto" type="text" name="assunto" required></p>
    <p><label for="mensagem">Sua Mensagem:</label><textarea id="mensagem" name="mensagem" required></textarea></p>
    <p style="text-align: center;"><button type="submit" class="cta-button">Enviar Mensagem</button></p>
  </form>
</div>
