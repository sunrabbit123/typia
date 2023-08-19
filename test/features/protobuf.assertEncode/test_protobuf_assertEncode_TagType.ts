import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_assertEncode_TagType =
    _test_protobuf_assertEncode<TagType>(TagType)({
        assertEncode: (input) => typia.protobuf.assertEncode<TagType>(input),
        message: typia.protobuf.message<TagType>(),
    });