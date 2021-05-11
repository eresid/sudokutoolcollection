import Sudoku from "./sudoku";
export default class SudokuSolver {
    private debug;
    private instance;
    private getCandidates;
    constructor(instance: Sudoku, debug?: boolean);
    log(...args: Array<any>): void;
    solve(board: string, reverse?: boolean): string | boolean;
    search(candidates: Record<string, string>, reverse?: boolean): boolean | Record<string, string>;
}
