import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicArray = _test_assert(
    "DynamicArray",
    DynamicArray.generate,
    (input) => TSON.assert(input),
    DynamicArray.SPOILERS,
);