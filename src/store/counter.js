import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    // This is the name of the slice of state that we will implement in our
    // empty store.
    name: "counter",
    // This is the initial state for your slice of state. This can be
    // anything from an empty array or other data structure that your
    // application requires to avoid prop drilling.
    // For this example, we use a number.
    initialState: {
    value: 0,
    },
    // As indicated before. The reducer is used to manipulate the initial
    // state or current state.
    reducers: {
        

        // this function
        // passes the action value or payload to our reducer to increment or
        // decrement the value of the state depending on what the user enters
        // or submits.
        incrementByAmount: (state, action) => {

            //previous build added 0's to userInput on click. if clause prevents this unwanted behaviour
            if (action.payload == 0) {
                action.payload = null;
            }

            state.value += action.payload;
        },


        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        },

        balanceWithInterest: (state) => {
            state.value = state.value * 1.05;
            state.value = state.value.toFixed(2);
            
        },

        balanceWithCharges: (state) => {
            state.value = state.value * 0.85;
            state.value = state.value.toFixed(2);
            
        },

    }
});

// Action creators are generated for each case reducer function.
export const { increment, decrement, incrementByAmount, decrementByAmount, balanceWithInterest, balanceWithCharges, resetValuetoZero
} =
counterSlice.actions;
// Exporting the reducer function we will implement into our empty
//store, previously created.
export default counterSlice.reducer;