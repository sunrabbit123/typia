import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantEnumeration = _test_message(
    "ConstantEnumeration",
    TSON.message<ConstantEnumeration>(),
    `syntax = \"proto3\";

message __Main {
    repeated Array.Element_lt__lp__doublequote_Four_doublequote__space__or__space__doublequote_Three_doublequote__space__or__space_0_space__or__space_1_space__or__space_2_rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp__doublequote_Four_doublequote__space__or__space__doublequote_Three_doublequote__space__or__space_0_space__or__space_1_space__or__space_2_rp__gt_ {
        oneof value {
            uint32 o0 = 1;
            string o1 = 2;
        }
    }
}`,
);