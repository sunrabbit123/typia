import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectGenericArray = _test_validateParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    TSON.createValidateParse<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);