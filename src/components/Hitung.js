import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

function Home({ todos, increase, decrease }) {
  todos.map((x) => {console.log(x)})
  return (
    <div>
      Some state changes:
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t} className='todo__item'>
            <p>{t.get('name')}</p>
            <p>{t.get('id')}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => increase({id : Math.random(), name: 'Jaxa'})}>Increase</button>
      <button>Decrease</button>
    </div>
  )
}

export default connect(
  state => ({ todos: state.count }),
  { increase}
)(Home)