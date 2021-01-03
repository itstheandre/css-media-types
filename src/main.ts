import { ICSSMediaTypesOptions } from "./interface";
import { allMediaQueries, prevVersions } from "./utils";

/**
 * In case you wish to also get previous (now deprecated) media query types
 * Look for more information in the [specification page](https://drafts.csswg.org/mediaqueries/#media-types).
 * If this is not the easiest read, you can also check [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@media)
 */
export const cssMediaTypes = (
  options: ICSSMediaTypesOptions = { prev: false }
) => {
  // const opts = options ? options : {};
  const { prev } = options;
  // const { prev = false } = opts as ICSSMediaTypesOptions;
  return prev ? [...allMediaQueries, ...prevVersions] : [...allMediaQueries];
};
