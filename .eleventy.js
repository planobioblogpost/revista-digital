module.exports = function(eleventyConfig) {
  // ORDEM VITAL: Copia as pastas de design, imagens e admin para o site final.
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagens");
  eleventyConfig.addPassthroughCopy("admin");

  // Ensina o sistema a entender comandos personalizados como {% year %} e | limit.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  return {
    // A PLANTA BAIXA CORRETA DA FÁBRICA
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
