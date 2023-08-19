import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagLength } from "../../../structures/TagLength";

export const test_protobuf_assertEncode_TagLength =
    _test_protobuf_assertEncode<TagLength>(TagLength)({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): TagLength => {
                    const __is = (input: any): input is TagLength => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.value) &&
                            input.value.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            );
                        const $io1 = (input: any): boolean =>
                            "string" === typeof input.fixed &&
                            5 === input.fixed.length &&
                            "string" === typeof input.minimum &&
                            3 <= input.minimum.length &&
                            "string" === typeof input.maximum &&
                            7 >= input.maximum.length &&
                            "string" === typeof input.minimum_and_maximum &&
                            3 <= input.minimum_and_maximum.length &&
                            7 >= input.minimum_and_maximum.length &&
                            "string" === typeof input.equal &&
                            10 <= input.equal.length &&
                            19 >= input.equal.length;
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is TagLength => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ((Array.isArray(input.value) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagLength.Type>",
                                        value: input.value,
                                    })) &&
                                    input.value.every(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "TagLength.Type",
                                                    value: elem,
                                                })) &&
                                                $ao1(
                                                    elem,
                                                    _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected: "TagLength.Type",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Array<TagLength.Type>",
                                    value: input.value,
                                });
                            const $ao1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("string" === typeof input.fixed &&
                                    (5 === input.fixed.length ||
                                        $guard(_exceptionable, {
                                            path: _path + ".fixed",
                                            expected: "string (@length 5)",
                                            value: input.fixed,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".fixed",
                                        expected: "string",
                                        value: input.fixed,
                                    })) &&
                                (("string" === typeof input.minimum &&
                                    (3 <= input.minimum.length ||
                                        $guard(_exceptionable, {
                                            path: _path + ".minimum",
                                            expected: "string (@minLength 3)",
                                            value: input.minimum,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "string",
                                        value: input.minimum,
                                    })) &&
                                (("string" === typeof input.maximum &&
                                    (7 >= input.maximum.length ||
                                        $guard(_exceptionable, {
                                            path: _path + ".maximum",
                                            expected: "string (@maxLength 7)",
                                            value: input.maximum,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "string",
                                        value: input.maximum,
                                    })) &&
                                (("string" ===
                                    typeof input.minimum_and_maximum &&
                                    (3 <= input.minimum_and_maximum.length ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path + ".minimum_and_maximum",
                                            expected: "string (@minLength 3)",
                                            value: input.minimum_and_maximum,
                                        })) &&
                                    (7 >= input.minimum_and_maximum.length ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path + ".minimum_and_maximum",
                                            expected: "string (@maxLength 7)",
                                            value: input.minimum_and_maximum,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum_and_maximum",
                                        expected: "string",
                                        value: input.minimum_and_maximum,
                                    })) &&
                                (("string" === typeof input.equal &&
                                    (10 <= input.equal.length ||
                                        $guard(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "string (@minLength 10)",
                                            value: input.equal,
                                        })) &&
                                    (19 >= input.equal.length ||
                                        $guard(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "string (@maxLength 19)",
                                            value: input.equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "string",
                                        value: input.equal,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "TagLength",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagLength",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (input: TagLength): Uint8Array => {
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
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
                            // property "fixed";
                            writer.uint32(10);
                            writer.string(input.fixed);
                            // property "minimum";
                            writer.uint32(18);
                            writer.string(input.minimum);
                            // property "maximum";
                            writer.uint32(26);
                            writer.string(input.maximum);
                            // property "minimum_and_maximum";
                            writer.uint32(34);
                            writer.string(input.minimum_and_maximum);
                            // property "equal";
                            writer.uint32(42);
                            writer.string(input.equal);
                        };
                        const $io1 = (input: any): boolean =>
                            "string" === typeof input.fixed &&
                            5 === input.fixed.length &&
                            "string" === typeof input.minimum &&
                            3 <= input.minimum.length &&
                            "string" === typeof input.maximum &&
                            7 >= input.maximum.length &&
                            "string" === typeof input.minimum_and_maximum &&
                            3 <= input.minimum_and_maximum.length &&
                            7 >= input.minimum_and_maximum.length &&
                            "string" === typeof input.equal &&
                            10 <= input.equal.length &&
                            19 >= input.equal.length;
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        message:
            'syntax = "proto3";\n\nmessage TagLength {\n    repeated TagLength.Type value = 1;\n    message Type {\n        required string fixed = 1;\n        required string minimum = 2;\n        required string maximum = 3;\n        required string minimum_and_maximum = 4;\n        required string equal = 5;\n    }\n}',
    });