
const dataN = [];
export const allData = (data = dataN, action) => {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":

            return action.payload;
        default:
            return data;
    }
};

