import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagTuple } from "../../structures/TagTuple";

export const test_assertEquals_TagTuple = _test_assertEquals(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.assertEquals<TagTuple>(input),
);
