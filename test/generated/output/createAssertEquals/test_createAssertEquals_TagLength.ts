import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagLength } from "../../../structures/TagLength";

export const test_assertEquals_TagLength = _test_assertEquals<TagLength>(
    TagLength,
)((input: any): TagLength => {
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is TagLength => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io1(elem, true && _exceptionable),
            ) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
            19 >= input.equal.length &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "fixed",
                            "minimum",
                            "maximum",
                            "minimum_and_maximum",
                            "equal",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagLength => {
            const $guard = (typia.createAssertEquals as any).guard;
            const $join = (typia.createAssertEquals as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (((Array.isArray(input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagLength.Type>",
                        value: input.value,
                    })) &&
                    input.value.every(
                        (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagLength.Type",
                                    value: elem,
                                })) &&
                                $ao1(
                                    elem,
                                    _path + ".value[" + _index1 + "]",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value[" + _index1 + "]",
                                expected: "TagLength.Type",
                                value: elem,
                            }),
                    )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagLength.Type>",
                        value: input.value,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
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
                (("string" === typeof input.minimum_and_maximum &&
                    (3 <= input.minimum_and_maximum.length ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum_and_maximum",
                            expected: "string (@minLength 3)",
                            value: input.minimum_and_maximum,
                        })) &&
                    (7 >= input.minimum_and_maximum.length ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum_and_maximum",
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
                    })) &&
                (5 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "fixed",
                                "minimum",
                                "maximum",
                                "minimum_and_maximum",
                                "equal",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            return (
                ((("object" === typeof input && null !== input) ||
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
});