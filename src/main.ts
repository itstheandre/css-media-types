import { ICSSMediaTypesOptions } from "./interface";
import { allMediaQueries, prevVersions } from "./utils";

export const cssMediaTypes = (options?: ICSSMediaTypesOptions) => {
  const opts = options ? options : {};
  const { prev = false } = opts as ICSSMediaTypesOptions;
  return prev ? [...allMediaQueries, ...prevVersions] : [...allMediaQueries];
};
