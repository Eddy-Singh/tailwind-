const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant }) {
  addVariant("group-open", ":merge(.group.open) &"); // Adjusted for clarity
  addVariant("peer-open", ":merge(.peer.open) ~ &"); // Adjusted for clarity
});

module.exports = openVariant;
