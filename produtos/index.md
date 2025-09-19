---
title: "Nossos Produtos"
layout: "base.njk"
pagination:
  data: collections.produtos
  size: 6
  alias: produtos
---
<div class="container">
  <h1 class="section-title">Nossa Linha Premium de Produtos</h1>
  <div class="card-grid">
    {%- for produto in produtos -%}
      <div class="card">
        <a href="{{ produto.url }}">
          <img src="{{ produto.data.image }}" alt="{{ produto.data.title }}" class="card-image">
        </a>
        <div class="card-content">
          <h3><a href="{{ produto.url }}">{{ produto.data.title }}</a></h3>
          <p>{{ produto.data.summary }}</p>
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>
