// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import pkg from "../package.json" with { type: "json" };

export const SiteTitle = pkg.name
  .split(/[\W+]/)
  .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
  .join(" ");
