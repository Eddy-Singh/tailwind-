const plugins = require("tailwindcss/plugin");

const openVariant = plugins(function ({ addVariant }) {
  addVariant("group-open", ":merge(.group).open &");
});
module.exports = openVariant;
