import TSON from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TupleRestArray = _test_isClone(
    "TupleRestArray",
    TupleRestArray.generate,
    TSON.createIsClone<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);