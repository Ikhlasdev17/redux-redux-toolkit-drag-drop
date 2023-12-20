import { Button, Popconfirm } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import { fetchAllTodos } from './store/todos/todos.actions'
import { deleteTask } from './store/todos/todos.slice'

const App = () => {
	const { todos, isLoading, completedTodos } = useSelector(
		selector => selector.todos
	)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAllTodos())
	}, [])

	const deleteTaskFun = id => {
		dispatch(deleteTask(id))
	}

	if (isLoading) return <h1>Loading...</h1>

	return (
		<div className='app'>
			<ul>
				<h1>New tasks</h1>
				{todos.map(item => (
					<li draggable key={item.id}>
						<div>{item.title}</div>
						<Popconfirm
							onConfirm={() => {
								deleteTaskFun(item.id)
							}}
							title='Do you want delete this task?'
						>
							<Button danger type='primary'>
								Delete
							</Button>
						</Popconfirm>
					</li>
				))}
			</ul>
			<ul>
				<h1>Completed tasks</h1>

				{completedTodos.map(item => (
					<li key={item.id}>
						<div>{item.title}</div>
						<Popconfirm
							onConfirm={() => {
								deleteTaskFun(item.id)
							}}
							title='Do you want delete this task?'
						>
							<Button danger type='primary'>
								Delete
							</Button>
						</Popconfirm>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
