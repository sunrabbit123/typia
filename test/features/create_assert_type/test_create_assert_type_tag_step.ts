import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_tag_step = _test_assert_type(
    "step tag",
    TagStep.generate,
    TSON.createAssertType<TagStep>(),
    TagStep.SPOILERS,
);