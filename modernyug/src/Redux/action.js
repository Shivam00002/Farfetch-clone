export const MENS_DATA = "MENS_DATA";
export const WOMENS_DATA = "WOMENS_DATA";
export const CART = "CART";
export const REMOVE_DATA_FROM_CART = "REMOVE_DATA_FROM_CART";
export const GET_ADDRESS = "GET_ADDRESS";
export const HANDLE_SINGLE_DATA = "HANDLE_SINGLE_DATA";



export const mensData = (data) => ({
    type: MENS_DATA,
    payload: data
});

export const womensData = (data) => ({
    type: WOMENS_DATA,
    payload: data
});

export const addToCart = (data) => ({
    type: CART,
    payload: data
});

export const handleSingleData = (data) => (
    console.log("data",data),
    {
    type: HANDLE_SINGLE_DATA,
    payload: data
});

export const getAddress = (data) => (
    console.log('getAdd', data),
    {
    type: GET_ADDRESS,
    payload: data
});

export const removeDataFromCart = (data) => ({
    type: REMOVE_DATA_FROM_CART,
    payload: data
});

export const fetchAddress = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/address")
            .then((response) => response.json())
            .then((data) =>
                dispatch(getAddress(data))
            );
    };
}

