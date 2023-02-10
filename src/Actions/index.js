export function fetchData() {
    return function (dispatch) {
        return fetch("http://localhost:8080/data.json")
            .then(response => response.json())
            .then(data => {
                dispatch({ type: "FETCH_DATA_SUCCESS", payload: data })
            }
            );
    };
}