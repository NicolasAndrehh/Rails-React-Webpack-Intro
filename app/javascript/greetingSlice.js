import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
    const response = await fetch('http://127.0.0.1:3000/greeting/index');
    const greeting = await response.json();
    return greeting.message;
});

const greetingSlice = createSlice({
    name: 'greeting',
    initialState: {
        greeting: ''
    },
    extraReducers: {
        [fetchGreeting.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.greeting = action.payload;
        }
    }
});

export default greetingSlice;
export { fetchGreeting };

