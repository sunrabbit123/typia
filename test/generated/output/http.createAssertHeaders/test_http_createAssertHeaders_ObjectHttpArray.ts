import typia from "../../../../src";
import { _test_http_assertHeaders } from "../../../internal/_test_http_assertHeaders";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_createAssertHeaders_ObjectHttpArray =
    _test_http_assertHeaders("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray,
    )(
        (
            input: Record<string, string | string[] | undefined>,
        ): typia.Resolved<ObjectHttpArray> => {
            const decode = (
                input: Record<string, string | string[] | undefined>,
            ): typia.Resolved<ObjectHttpArray> => {
                const $boolean = (typia.http.createAssertHeaders as any)
                    .boolean;
                const $bigint = (typia.http.createAssertHeaders as any).bigint;
                const $number = (typia.http.createAssertHeaders as any).number;
                const $string = (typia.http.createAssertHeaders as any).string;
                const output = {
                    booleans: Array.isArray(input.booleans)
                        ? input.booleans.map($boolean)
                        : input.booleans?.split(", ")?.map($boolean) ?? [],
                    bigints: Array.isArray(input.bigints)
                        ? input.bigints.map($bigint)
                        : input.bigints?.split(", ")?.map($bigint) ?? [],
                    numbers: Array.isArray(input.numbers)
                        ? input.numbers.map($number)
                        : input.numbers?.split(", ")?.map($number) ?? [],
                    strings: Array.isArray(input.strings)
                        ? input.strings.map($string)
                        : input.strings?.split(", ")?.map($string) ?? [],
                    templates: Array.isArray(input.templates)
                        ? input.templates.map($string)
                        : input.templates?.split(", ")?.map($string) ?? [],
                };
                return output as any;
            };
            const assert = (input: any): ObjectHttpArray => {
                const __is = (input: any): input is ObjectHttpArray => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.booleans) &&
                        input.booleans.every(
                            (elem: any) => "boolean" === typeof elem,
                        ) &&
                        Array.isArray(input.bigints) &&
                        input.bigints.every(
                            (elem: any) => "bigint" === typeof elem,
                        ) &&
                        Array.isArray(input.numbers) &&
                        input.numbers.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                        ) &&
                        Array.isArray(input.strings) &&
                        input.strings.every(
                            (elem: any) => "string" === typeof elem,
                        ) &&
                        Array.isArray(input.templates) &&
                        input.templates.every(
                            (elem: any) =>
                                "string" === typeof elem &&
                                RegExp(/^something_(.*)/).test(elem),
                        );
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
                    ): input is ObjectHttpArray => {
                        const $guard = (typia.http.createAssertHeaders as any)
                            .guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (((Array.isArray(input.booleans) ||
                                $guard(_exceptionable, {
                                    path: _path + ".booleans",
                                    expected: "Array<boolean>",
                                    value: input.booleans,
                                })) &&
                                input.booleans.every(
                                    (elem: any, _index1: number) =>
                                        "boolean" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".booleans[" +
                                                _index1 +
                                                "]",
                                            expected: "boolean",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".booleans",
                                    expected: "Array<boolean>",
                                    value: input.booleans,
                                })) &&
                            (((Array.isArray(input.bigints) ||
                                $guard(_exceptionable, {
                                    path: _path + ".bigints",
                                    expected: "Array<bigint>",
                                    value: input.bigints,
                                })) &&
                                input.bigints.every(
                                    (elem: any, _index2: number) =>
                                        "bigint" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".bigints[" +
                                                _index2 +
                                                "]",
                                            expected: "bigint",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".bigints",
                                    expected: "Array<bigint>",
                                    value: input.bigints,
                                })) &&
                            (((Array.isArray(input.numbers) ||
                                $guard(_exceptionable, {
                                    path: _path + ".numbers",
                                    expected: "Array<number>",
                                    value: input.numbers,
                                })) &&
                                input.numbers.every(
                                    (elem: any, _index3: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".numbers[" +
                                                _index3 +
                                                "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".numbers",
                                    expected: "Array<number>",
                                    value: input.numbers,
                                })) &&
                            (((Array.isArray(input.strings) ||
                                $guard(_exceptionable, {
                                    path: _path + ".strings",
                                    expected: "Array<string>",
                                    value: input.strings,
                                })) &&
                                input.strings.every(
                                    (elem: any, _index4: number) =>
                                        "string" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".strings[" +
                                                _index4 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".strings",
                                    expected: "Array<string>",
                                    value: input.strings,
                                })) &&
                            (((Array.isArray(input.templates) ||
                                $guard(_exceptionable, {
                                    path: _path + ".templates",
                                    expected: "Array<`something_${string}`>",
                                    value: input.templates,
                                })) &&
                                input.templates.every(
                                    (elem: any, _index5: number) =>
                                        ("string" === typeof elem &&
                                            RegExp(/^something_(.*)/).test(
                                                elem,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".templates[" +
                                                _index5 +
                                                "]",
                                            expected: "`something_${string}`",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".templates",
                                    expected: "Array<`something_${string}`>",
                                    value: input.templates,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectHttpArray",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectHttpArray",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const output = decode(input);
            return assert(output) as any;
        },
    );
