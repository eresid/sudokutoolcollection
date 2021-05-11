import Sudoku from "./sudoku";
export default class SudokuGenerator {
    private debug;
    private instance;
    private getCandidates;
    private solver;
    constructor(instance: Sudoku, debug?: boolean);
    log(...args: Array<any>): void;
    generate(difficulty?: string | number, unique?: boolean, withSolution?: boolean): string | {
        board: string;
        solution: string;
    };
    private _force_range;
    private _shuffle;
    private _rand_range;
    _strip_dups(seq: Array<string>): Array<string>;
}
