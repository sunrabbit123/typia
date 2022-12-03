import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicSimple = _test_message(
    "DynamicSimple",
    TSON.message<DynamicSimple>(),
    `syntax = \"proto3\";

message __Main {
    map_lt_string_comma__space_number_gt_ value = 1;
}`,
);
