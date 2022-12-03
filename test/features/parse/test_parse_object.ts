import TSON from "../../../src";
import { primitive_equal_to } from "../../internal/primitive_equal_to";

export function test_parse_object(): void {
    const obj = TSON.parse({
        id: 1,
        account: "samchon",
        name: "Jeongho Nam",
    });
    const expected = {
        id: 1,
        account: "samchon",
        name: "Jeongho Nam",
    };

    if (primitive_equal_to(obj, expected) === false)
        throw new Error("Bug on TSON.parse(): failed to create exact object.");
}
