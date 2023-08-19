import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagArray } from "../../../structures/TagArray";

export const test_protobuf_encode_TagArray = _test_protobuf_encode<TagArray>(
    TagArray,
)({
    encode: (input: TagArray): Uint8Array => {
        const $is_uuid = (typia.protobuf.createEncode as any).is_uuid;
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                if (0 !== input.value.length) {
                    for (const elem of input.value) {
                        writer.uint32(10);
                        writer.fork();
                        $peo1(elem);
                        writer.ldelim();
                    }
                }
            };
            const $peo1 = (input: any): any => {
                // property "items";
                if (0 !== input.items.length) {
                    for (const elem of input.items) {
                        writer.uint32(10);
                        writer.string(elem);
                    }
                }
                // property "minItems";
                if (0 !== input.minItems.length) {
                    writer.uint32(18);
                    writer.fork();
                    for (const elem of input.minItems) {
                        writer.double(elem);
                    }
                    writer.ldelim();
                }
                // property "both";
                if (0 !== input.both.length) {
                    for (const elem of input.both) {
                        writer.uint32(26);
                        writer.string(elem);
                    }
                }
                // property "equal";
                if (0 !== input.equal.length) {
                    writer.uint32(34);
                    writer.fork();
                    for (const elem of input.equal) {
                        writer.double(elem);
                    }
                    writer.ldelim();
                }
            };
            const $io1 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 === input.items.length &&
                input.items.every(
                    (elem: any) => "string" === typeof elem && $is_uuid(elem),
                ) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every(
                    (elem: any) => "number" === typeof elem && 3 <= elem,
                ) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                7 >= input.both.length &&
                input.both.every(
                    (elem: any) => "string" === typeof elem && $is_uuid(elem),
                ) &&
                Array.isArray(input.equal) &&
                10 <= input.equal.length &&
                10 >= input.equal.length &&
                input.equal.every(
                    (elem: any) =>
                        "number" === typeof elem && 10 <= elem && 10 >= elem,
                );
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage TagArray {\n    repeated TagArray.Type value = 1;\n    message Type {\n        repeated string items = 1;\n        repeated double minItems = 2;\n        repeated string both = 3;\n        repeated double equal = 4;\n    }\n}',
});