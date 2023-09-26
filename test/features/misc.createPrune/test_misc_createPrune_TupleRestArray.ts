import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_createPrune_TupleRestArray = _test_misc_prune(
    "TupleRestArray",
)<TupleRestArray>(TupleRestArray)(typia.misc.createPrune<TupleRestArray>());
