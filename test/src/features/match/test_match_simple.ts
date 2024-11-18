import typia from "typia";

export const test_match_simple = () => {
  typia.match(
    1 as 1 | 2 | 3 | 4 | 5,
    (arg: 1) => "1",
    (arg: 2) => "2",
  );
};
