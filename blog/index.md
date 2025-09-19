---
title: "VetZ.Care: Cuidado e Expertise para o seu Pet em Brasília"
layout: "base.njk"
---
<div class="container">
  <div class="hero-section">
    <h1>{{ clinica.slogan }}</h1>
    <p>Cuidado veterinário de ponta e uma curadoria de produtos premium, tudo num só lugar. Explore a nossa revista e descubra como podemos ajudar o seu pet a ter uma vida mais longa e feliz.</p>
    <a href="/servicos/" class="cta-button">Conheça Nossos Serviços</a>
  </div>

  <h2 class="section-title">Novidades da Revista</h2>
  <div class="card-grid">
    {%- for artigo in collections.artigos | reverse | limit(3) -%}
      <div class="card">
        <a href="{{ artigo.url }}">
          <img src="{{ artigo.data.image }}" alt="{{ artigo.data.title }}" class="card-image">
        </a>
        <div class="card-content">
          <h3><a href="{{ artigo.url }}">{{ artigo.data.title }}</a></h3>
          <p><em>Por: {{ artigo.data.autor }}</em></p>
        </div>
      </div>
    {%- endfor -%}
  </div>

  <hr>

  <h2 class="section-title">Nossos Serviços Clínicos</h2>
  <h2 class="section-title">Nossa Linha de Rações Premium</h2>
  <div class="card-grid">
    {%- for produto in collections.produtos | limit(3) -%}
      <div class="card">
        <a href="{{ produto.url }}">
          <img src="{{ produto.data.image }}" alt="{{ produto.data.title }}" class="card-image">
        </a>
        <div class="card-content">
          <h3><a href="{{ produto.url }}">{{ produto.data.title }}</a></h3>
          <p>{{ produto.data.summary }}</p>
          {% if produto.data.preco %}
            <div class="card-price">R$ {{ produto.data.preco }}</div>
          {% endif %}
          <a href="https://wa.me/{{ clinica.whatsapp }}?text=Olá! Tenho interesse no produto: {{ produto.data.title }}" class="cta-button">Comprar via WhatsApp</a>
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>

<style>
  .hero-section { text-align: center; margin: 3rem 0; }
  .hero-section h1 { font-size: 3.2em; }
  .hero-section p { font-size: 1.2em; max-width: 700px; margin: 1rem auto 2rem; }
  .card-price { font-size: 1.5em; font-weight: bold; color: var(--cor-verde-petroleo); margin: 1rem 0; }
</style>

