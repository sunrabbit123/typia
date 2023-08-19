import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_random_DynamicTree = _test_random<DynamicTree>(DynamicTree)({
    random: typia.createRandom<DynamicTree>(),
    assert: typia.createAssert<DynamicTree>(),
});