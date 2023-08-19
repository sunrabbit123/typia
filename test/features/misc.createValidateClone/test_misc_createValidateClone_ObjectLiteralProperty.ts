import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_validateClone_ObjectLiteralProperty =
    _test_misc_validateClone<ObjectLiteralProperty>(ObjectLiteralProperty)(
        typia.misc.createValidateClone<ObjectLiteralProperty>(),
    );