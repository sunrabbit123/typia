import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createAssert_CommentTagArrayUnion = _test_assert(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.createAssert<CommentTagArrayUnion>(),
);
