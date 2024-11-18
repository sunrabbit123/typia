import ts from "typescript";

import { MatchProgrammer } from "../../programmers/MatchProgrammer";

import { IProject } from "../IProject";

export namespace MatchTransfomer {
  export const transform =
    (method: "match" | "matchAssert") =>
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (expression: ts.CallExpression) =>
      MatchProgrammer.write(method)(project)(modulo)(expression);
}
