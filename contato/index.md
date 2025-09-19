---
title: "Contato e Agendamentos"
layout: "base.njk"
---
<div class="container">
  <h2>Entre em Contato</h2>
  <p>Tem alguma dúvida ou quer agendar uma consulta? Preencha o formulário abaixo e a nossa equipa entrará em contato em breve.</p>
  
  <form name="contato" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <p class="hidden"><label>Não preencha: <input name="bot-field"></label></p>
    <p><label>Seu Nome: <input type="text" name="nome"></label></p>
    <p><label>Seu Email: <input type="email" name="email"></label></p>
    <p><label>Assunto: <input type="text" name="assunto"></label></p>
    <p><label>Sua Mensagem: <textarea name="mensagem"></textarea></label></p>
    <p><button type="submit" class="cta-button">Enviar Mensagem</button></p>
  </form>
</div>
