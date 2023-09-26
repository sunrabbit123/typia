import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_json_createStringify_SetAlias = _test_json_stringify(
    "SetAlias",
)<SetAlias>(SetAlias)(typia.json.createStringify<SetAlias>());
