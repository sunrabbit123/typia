import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TagStep = _test_assertParse(
    "TagStep",
    TagStep.generate,
    TSON.createAssertParse<TagStep>(),
    TagStep.SPOILERS,
);