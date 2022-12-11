import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TupleRestObject = _test_isParse(
    "TupleRestObject",
    TupleRestObject.generate,
    TSON.createIsParse<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);