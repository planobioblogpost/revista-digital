module.exports = function(eleventyConfig) {
  // Passa as pastas de CSS, imagens e admin para o site final
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagens");
  eleventyConfig.addPassthroughCopy("admin");

  // Adiciona um "shortcode" para que possamos usar {% year %} nos templates
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // ===================================================================
  // A NOVA LIÇÃO: A DEFINIÇÃO DO FILTRO "LIMIT"
  // ===================================================================
  // Isto ensina o Eleventy a entender "limit(3)" e pegar apenas os 3 primeiros itens de uma lista.
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
