import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_json_isStringify_TagObjectUnion =
    _test_json_isStringify<TagObjectUnion>(TagObjectUnion)(
        (input: TagObjectUnion): string | null => {
            const is = (input: any): input is TagObjectUnion => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    3 <= input.value;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("string" === typeof input.value) return $io1(input);
                        else if (
                            "number" === typeof input.value &&
                            Number.isFinite(input.value)
                        )
                            return $io0(input);
                        else return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
                );
            };
            const stringify = (input: TagObjectUnion): string => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.value && 3 <= input.value;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $number = (typia.json.createIsStringify as any).number;
                const $string = (typia.json.createIsStringify as any).string;
                const $throws = (typia.json.createIsStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{"value":${$number(input.value)}}`;
                const $so1 = (input: any): any =>
                    `{"value":${$string(input.value)}}`;
                const $su0 = (input: any): any =>
                    (() => {
                        if ("string" === typeof input.value) return $so1(input);
                        else if ("number" === typeof input.value)
                            return $so0(input);
                        else
                            $throws({
                                expected:
                                    "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                value: input,
                            });
                    })();
                return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        },
    );