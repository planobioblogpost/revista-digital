module.exports = function(eleventyConfig) {
  // BLOCO 1: O DEPARTAMENTO DE LOGÍSTICA
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagens");
  eleventyConfig.addPassthroughCopy("admin");

  // BLOCO 2: A ESCOLA DE IDIOMAS (COMANDOS PERSONALIZADOS)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  // BLOCO 3: A PLANTA BAIXA DA FÁBRICA
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
