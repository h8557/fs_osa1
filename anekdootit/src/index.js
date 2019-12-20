import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.text}</h1>
)

const Button = props => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const DisplayAnecdote = props => (
    <p>{props.text} <br />
    has {props.votes} votes <br />
    </p>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
    const copy = points

    return (
        <div>
            <Header text="Anecdote of the day"/>
            <DisplayAnecdote text={anecdotes[selected]} votes={copy[selected]} />
            <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text = "next anecdote" />
            <Button handleClick={() => { copy[selected] ++; setPoints(copy) }} text ="vote anecdote" />
            <Header text="Anecdote with most votes" />
            <DisplayAnecdote text={anecdotes.filter((x, i) => points[i] === Math.max(...points))[0]} votes={Math.max(...points)} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)