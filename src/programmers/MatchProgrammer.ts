import ts from "typescript";

import { IProject } from "../transformers/IProject";
import { TransformerError } from "../transformers/TransformerError";

import { FunctionImporter } from "./helpers/FunctionImporter";

export namespace MatchProgrammer {
  export const write =
    (method: "match" | "matchAssert") =>
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (expression: ts.CallExpression): ts.CallExpression => {
      if (expression.arguments.length === 0)
        throw new TransformerError({
          code: `typia.${method}`,
          message: `no input value.`,
        });
      project;
      // const result: FeatureProgrammer.IDecomposed = decompose({
      //   equals,
      //   project,
      //   importer,
      //   type,
      //   name,
      // });

      return null as any;
    };
}
