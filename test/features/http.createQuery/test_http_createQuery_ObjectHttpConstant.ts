import typia from "../../../src";
import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createQuery_ObjectHttpConstant = _test_http_query(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
    typia.http.createQuery<ObjectHttpConstant>(),
);
