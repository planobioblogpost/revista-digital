---
title: "Nosso Corpo Clínico"
layout: "base.njk"
pagination:
  data: collections.especialistas
  size: 6
  alias: especialistas
---
<div class="container">
  <h1 class="section-title">Nosso Corpo Clínico</h1>
  <div class="card-grid">
    {%- for especialista in especialistas -%}
      <div class="card">
        <a href="{{ especialista.url }}">
          <img src="{{ especialista.data.foto }}" alt="{{ especialista.data.title }}" class="card-image">
        </a>
        <div class="card-content">
          <h3><a href="{{ especialista.url }}">{{ especialista.data.title }}</a></h3>
          <p>CRMV: {{ especialista.data.crmv }}</p>
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>
