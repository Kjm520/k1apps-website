module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addPassthroughCopy("apps/*/imgs/");
	eleventyConfig.addPassthroughCopy("apps/*/rawdata/");

	return {
		dir: {
			input: ".",
			output: "_site",
			includes: "_includes",
			data: "_data",
		},
		templateFormats: ["njk", "html"],
		htmlTemplateEngine: "njk",
	};
};
