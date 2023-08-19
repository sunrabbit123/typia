import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_isEncode_ArrayRecursive =
    _test_protobuf_isEncode<ArrayRecursive>(ArrayRecursive)({
        isEncode: typia.protobuf.createIsEncode<ArrayRecursive>(),
        message: typia.protobuf.message<ArrayRecursive>(),
    });