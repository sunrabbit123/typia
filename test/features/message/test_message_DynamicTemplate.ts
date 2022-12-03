import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicTemplate = _test_message(
    "DynamicTemplate",
    TSON.message<DynamicTemplate>(),
    `syntax = \"proto3\";

message __Main {
    oneof value {
        map_lt_string_comma__space_string_gt_ o0 = 1;
        map_lt_string_comma__space_number_gt_ o1 = 2;
        map_lt_string_comma__space_boolean_gt_ o2 = 3;
    }
}`,
);
