import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAllTodos = createAsyncThunk(
	'fetchAllTodos',
	async (data, thunkAPI) => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos')
			return response.json()
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)
