import { useState } from 'react'

const App = () => {
  const [todoState, setTodoState] = useState({
    name: '',
    item: {},
    items: [],
    isDone: false
  })

  const handleInputChange = ({ target: { name, value } }) => setTodoState({ ...todoState, [name]: value })

  const handleCreateTodo = event => {
    event.preventDefault()
    let item = {name: todoState.name}
        setTodoState({ ...todoState, item, name: '' })
      }

  const handleSaveTodo = () => {
    const items = JSON.parse(JSON.stringify(todoState.items))
    items.push(todoState.item)
    setTodoState({ ...todoState, items, item: {} })
  }

  const handleDeleteTodo = (idx) => {
      let updatedItems = JSON.parse(JSON.stringify(todoState.items))
      updatedItems.splice(idx,1)
      setTodoState({
        ...todoState, items: updatedItems
      })
  }

  return (
    <div className="container">
      <div className="row">
        <form>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            value={todoState.name}
            onChange={handleInputChange} />
          <button onClick={handleCreateTodo}>Create</button>
        </form>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
              <div>
                <h5>{todoState.item.name} <button onClick={handleSaveTodo}>Save Todo</button></h5>
              </div>
        </div>
        <div className="col-md-6">
          <h4>Saved Todo's</h4>
          {
            todoState.items.map((item, idx) => (
              <div key={idx}>
                <h2>{item.name}<input type='checkbox'></input></h2>
                <button onClick={handleDeleteTodo}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App