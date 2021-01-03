import cssMediaTypes from "../src";
import { allMediaQueries, prevVersions } from "../src/utils";
it("works", () => {
  expect(cssMediaTypes()).toStrictEqual(allMediaQueries);
  expect(cssMediaTypes({ prev: false })).toStrictEqual(allMediaQueries);
  expect(cssMediaTypes({ prev: true })).toStrictEqual([
    ...allMediaQueries,
    ...prevVersions,
  ]);
});
