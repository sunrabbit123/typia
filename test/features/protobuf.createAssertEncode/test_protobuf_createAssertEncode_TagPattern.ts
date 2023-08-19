import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_assertEncode_TagPattern =
    _test_protobuf_assertEncode<TagPattern>(TagPattern)({
        assertEncode: typia.protobuf.createAssertEncode<TagPattern>(),
        message: typia.protobuf.message<TagPattern>(),
    });