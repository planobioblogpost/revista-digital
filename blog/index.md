---
title: "Revista VetZ.Care"
layout: "base.njk"
pagination:
  data: collections.artigos
  size: 6
  alias: artigos
  reverse: true
---
<div class="container">
  <h1 class="section-title">Nossa Revista de Saúde e Bem-Estar Pet</h1>
  <p class="page-subtitle">Aqui você encontra os artigos mais recentes da nossa equipe de especialistas. Conhecimento e confiança para cuidar de quem você ama.</p>
  
  <div class="card-grid">
    {%- for artigo in artigos -%}
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

  <nav class="pagination">
    {% if pagination.href.previous %}
      <a href="{{ pagination.href.previous }}" class="cta-button">&laquo; Página Anterior</a>
    {% endif %}
    {% if pagination.href.next %}
      <a href="{{ pagination.href.next }}" class="cta-button">Próxima Página &raquo;</a>
    {% endif %}
  </nav>
</div>

<style>
  .page-subtitle { text-align: center; max-width: 700px; margin: -1.5rem auto 3rem; font-size: 1.1em; color: #555; }
  .pagination { display: flex; justify-content: space-between; margin-top: 4rem; }
</style>
