import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagDefault } from "../../structures/TagDefault";

export const test_is_TagDefault = _test_is<TagDefault>(TagDefault)(
    typia.createIs<TagDefault>(),
);
