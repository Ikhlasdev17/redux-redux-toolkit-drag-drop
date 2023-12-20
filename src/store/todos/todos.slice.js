import { createSlice } from '@reduxjs/toolkit'
import { fetchAllTodos } from './todos.actions'

export const initialState = {
	todos: [],
	isLoading: false,
	completedTodos: [],
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		deleteTask(state, action) {
			state.todos = state.todos.filter(item => item.id !== action.payload)
		},
		moveTaskToCompleted(state, action) {},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllTodos.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchAllTodos.fulfilled, (state, action) => {
				state.todos = action.payload.slice(0, 10)
				state.isLoading = false
			})
			.addCase(fetchAllTodos.rejected, state => {
				state.isLoading = false
				state.todos = []
			})
	},
})

export const { deleteTask } = todosSlice.actions
export default todosSlice.reducer
