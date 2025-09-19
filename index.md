---
title: "VetZ.Care: Cuidado e Expertise para o seu Pet"
layout: "base.njk"
---
<div class="container">

  <h2 class="section-title">Novidades na Revista</h2>
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
  <div class="card-grid">
    <div class="card">
      <img src="https://imagens/uploads/Vetz.Care-caes.png" alt="Cão idoso a ser examinado" class="card-image">
      <div class="card-content">
        <h3>Check-up Geriátrico Canino</h3>
        <p>Um programa completo de avaliação preventiva para garantir mais qualidade de vida para o seu melhor amigo na terceira idade.</p>
        <a href="#" class="cta-button">Saber Mais</a>
      </div>
    </div>
    <div class="card">
      <img src="https://imagens/uploads/Vetz.Care-gatos.png" alt="Filhote de cão a receber uma vacina" class="card-image">
      <div class="card-content">
        <h3>Protocolo de Vacinação para Filhotes</h3>
        <p>Proteja quem você ama desde os primeiros passos. O nosso protocolo garante a imunização completa e segura para o seu novo companheiro.</p>
        <a href="#" class="cta-button">Saber Mais</a>
      </div>
    </div>
  </div>

  <h2 class="section-title">Nossa Linha de Rações Premium</h2>
  <div class="card-grid">
    <div class="card">
      <div class="card-content">
        <h3>VetZ.Care NutriActive Filhotes</h3>
        <p>Crescimento forte e saudável com os nutrientes essenciais para a fase mais importante da vida do seu cão.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>VetZ.Care Vitalis Adultos</h3>
        <p>A energia e o equilíbrio perfeitos para manter o seu cão adulto ativo e com a saúde em dia.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>VetZ.Care FelineBalance Gatos</h3>
        <p>Nutrição completa e balanceada para gatos adultos, ajudando a manter a saúde do trato urinário e um pelo brilhante.</p>
      </div>
    </div>
  </div>
</div>
