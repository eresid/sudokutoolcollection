import Sudoku from "./components/sudoku";
import SudokuGenerator from "./components/generator";
import SudokuSolver from "./components/solve";
import SudokuGetCandidates from "./components/get-candidates";
import conversions from "./components/conversions";
interface SudokuCollection {
    instance: Sudoku;
    generator: SudokuGenerator;
    solver: SudokuSolver;
    getCandidates: SudokuGetCandidates;
    conversions: typeof conversions;
    statics: Record<string, unknown>;
}
export default function getSudoku(debug?: boolean): SudokuCollection;
export {};
