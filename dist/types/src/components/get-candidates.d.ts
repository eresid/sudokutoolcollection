import Sudoku from "./sudoku";
export default class SudokuGetCandidates {
    private debug;
    private instance;
    constructor(instance: Sudoku, debug?: boolean);
    log(...args: Array<any>): void;
    get(board: string): Array<string[]> | false;
    map(board: string): Record<string, string> | boolean;
    _get_square_vals_map(board: string): Record<string, string>;
}
