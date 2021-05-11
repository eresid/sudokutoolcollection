declare const board_string_to_grid: (board_string: string) => Array<string[]>;
declare const board_grid_to_string: (board_grid: Array<string[]>) => string;
declare const board_string_to_object: (board_string: string) => Record<string, string>;
declare const board_object_to_string: (boardObject: Record<string, string>) => string;
export { board_string_to_grid, board_grid_to_string, board_string_to_object, board_object_to_string };
declare const _default: {
    stringToGrid: (board_string: string) => string[][];
    gridToString: (board_grid: string[][]) => string;
    stringToObject: (board_string: string) => Record<string, string>;
    objectToString: (boardObject: Record<string, string>) => string;
};
export default _default;
