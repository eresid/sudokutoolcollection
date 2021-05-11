export default class Sudoku {
    private debug;
    static DIGITS: string;
    static ROWS: string;
    static COLS: string;
    static DIFFICULTY: {
        easy: number;
        medium: number;
        hard: number;
        'very-hard': number;
        insane: number;
        inhuman: number;
    };
    static BLANK_CHAR: string;
    static BLANK_BOARD: string;
    static MIN_GIVENS: number;
    static NR_SQUARES: number;
    BLOCKS: Array<string[]>;
    SQUARES: Array<string> | null;
    UNITS: Array<string> | null;
    SQUARE_UNITS_MAP: Record<string, unknown> | null;
    SQUARE_PEERS_MAP: Record<string, unknown> | null;
    constructor(debug?: boolean);
    log(...args: Array<any>): void;
    private _cross;
    private _get_all_units;
    private _get_square_units_map;
    private _get_square_peers_map;
    _coordinates_of(index: number): {
        col: number;
        row: number;
    };
    print_board(board: string): void;
    validate_board(board: string, errorAsCoordinates?: boolean): boolean | {
        row: string;
        col: number;
    };
    assign(candidates: Record<string, string>, square: string, val: string): boolean | Record<string, string>;
    eliminate(candidates: Record<string, string>, square: string, val: string): boolean | Record<string, string>;
}
