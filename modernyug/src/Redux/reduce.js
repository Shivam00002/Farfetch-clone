import { CART, MENS_DATA, WOMENS_DATA, GET_ADDRESS, HANDLE_SINGLE_DATA, REMOVE_DATA_FROM_CART } from "./action";

const initialState = {
    storingData: [],
    singleData: [],
    menProducts: [],
    womenProducts: [],
    cart: [],
    address: []
};
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case MENS_DATA: {
            return {

                ...state,
                menProducts: payload,
                storingData: payload
            };
        }
        case WOMENS_DATA: {
            return {
                ...state,
                womenProducts: payload,
                storingData: payload

            };
        }
        case HANDLE_SINGLE_DATA: {
            console.log('pay', payload);
            console.log('store', state.storingData);

            return {

                ...state,
                singleData:  state.storingData.filter((item) => item._id === payload)

            };
        }
        case CART: {
            return {

                ...state,
                cart: [ ...state.cart, payload ]
            };
        }
      
        case GET_ADDRESS: {
            console.log("add", payload);
            return {
                ...state,

                address: [...state.address,payload]
            };
        }
        case REMOVE_DATA_FROM_CART: {
            console.log('remove',payload, state.cart)
            return {

                ...state,
                cart: state.cart.splice( payload,state.cart.length-1)
                // cart: [ ...state.cart ].splice(payload, 1)
            };
        }
        default:
            return state;

    }
};