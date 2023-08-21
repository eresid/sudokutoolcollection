import Sudoku from "./components/sudoku";
import SudokuSolver from "./components/solve";
import SudokuGetCandidates from "./components/get-candidates";

interface SudokuCollection {
  instance: Sudoku;
  solver: SudokuSolver;
  getCandidates: SudokuGetCandidates;
  statics: Record<string, unknown>;
}

export default function getSudoku(): SudokuCollection {
  const instance = new Sudoku();
  const solver = new SudokuSolver(instance);
  const getCandidates = new SudokuGetCandidates(instance);
  const statics = Object.freeze({
    DIGITS: Sudoku.DIGITS,
    ROWS: Sudoku.ROWS,
    COLS: Sudoku.COLS,
    DIFFICULTY: Sudoku.DIFFICULTY,
    BLANK_CHAR: Sudoku.BLANK_CHAR,
    BLANK_BOARD: Sudoku.BLANK_BOARD,
    MIN_GIVENS: Sudoku.MIN_GIVENS,
    NR_SQUARES: Sudoku.NR_SQUARES,
    BLOCKS: instance.BLOCKS
  });

  return {
    statics,
    instance,
    solver,
    getCandidates
  };
}
