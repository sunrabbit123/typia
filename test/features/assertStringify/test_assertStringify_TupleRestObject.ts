import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TupleRestObject = _test_assertStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => TSON.assertStringify(input),
    TupleRestObject.SPOILERS,
);