import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_UltimateUnion = _test_validateParse(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => TSON.validateParse<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
