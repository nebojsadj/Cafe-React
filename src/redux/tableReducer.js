import { initState, initTable } from "./initState";
import { LOAD_TABLES, TO_SERVE, CLEAN_TABLE } from "./types";

function tableReducer(state = initState, action) {
    switch (action.type) {
        case LOAD_TABLES:
            return { tables: [...action.payload] };
        case TO_SERVE:
            state.tables.splice(action.payload.index, 1, action.payload.drinks);
            return {...state };
        case CLEAN_TABLE:
            state.tables[action.payload] = initTable;
            return {...state };
        default:
            return state;
    }
}

export default tableReducer;