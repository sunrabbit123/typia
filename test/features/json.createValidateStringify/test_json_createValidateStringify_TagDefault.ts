import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagDefault } from "../../structures/TagDefault";

export const test_json_validateStringify_TagDefault =
    _test_json_validateStringify<TagDefault>(TagDefault)(
        typia.json.createValidateStringify<TagDefault>(),
    );
