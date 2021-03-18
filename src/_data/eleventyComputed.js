const date = new Date();

module.exports = {
  eleventyComputed: {
    year: date.getFullYear(),
    yearsCoding: date.getFullYear() - 2010,
  },
};
