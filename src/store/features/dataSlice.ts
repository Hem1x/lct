import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departments: null,
  tasks: null,
};

export const dataSlice = createSlice({
  name: '@@data',
  initialState,
  reducers: {
    setDepartaments: (state, action) => {
      state.departments = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const { setDepartaments, setTasks } = dataSlice.actions;
