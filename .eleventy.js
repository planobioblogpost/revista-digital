module.exports = function(eleventyConfig) {
  // Passa as pastas de CSS, imagens e admin para o site final
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagens");
  eleventyConfig.addPassthroughCopy("admin");

  // A INSTRUÇÃO ESSENCIAL QUE CORRIGE O ERRO
  // Isto ensina o Eleventy a substituir {% year %} pelo ano atual.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

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
