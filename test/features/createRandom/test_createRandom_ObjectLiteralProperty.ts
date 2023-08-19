import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_random_ObjectLiteralProperty =
    _test_random<ObjectLiteralProperty>(ObjectLiteralProperty)({
        random: typia.createRandom<ObjectLiteralProperty>(),
        assert: typia.createAssert<ObjectLiteralProperty>(),
    });