---
title: "Nossos Serviços"
layout: "base.njk"
pagination:
  data: collections.servicos
  size: 6
  alias: servicos
---
<div class="container">
  <h1 class="section-title">Nossos Serviços Clínicos</h1>
  <div class="card-grid">
    {%- for servico in servicos -%}
      <div class="card">
        <a href="{{ servico.url }}">
          <img src="{{ servico.data.image }}" alt="{{ servico.data.title }}" class="card-image">
        </a>
        <div class="card-content">
          <h3><a href="{{ servico.url }}">{{ servico.data.title }}</a></h3>
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>
