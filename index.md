---
title: Página Inicial
layout: base.njk
---
## Nossos Produtos em Destaque

<ul class="card-grid">
{%- for produto in collections.produtos -%}
  <li class="card">
    <img src="{{ produto.data.image }}" alt="{{ produto.data.title }}" class="card-image interactive-effect">
    <div class="card-content">
      <h3>{{ produto.data.title }}</h3>
      <p>{{ produto.data.summary }}</p>
    </div>
  </li>
{%- endfor -%}
</ul>
