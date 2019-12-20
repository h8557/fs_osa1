import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Header = props => (
        <div>
            <h1>{props.text}</h1>
        </div>
)

const Statistic = props => (
        <tr><td>{props.text}</td> <td>{props.value}</td></tr>
)

const Statistics = props => {
    const all = props.good + props.neutral + props.bad
    const positive = 100 * props.good / all
    const average = (props.good - props.bad) / all

    if (all === 0) return (
        <div>
            <h1>statistics </h1>
            No feedback given <br />
        </div>
    )

    return (
        <div>
            <h1>statistics </h1>
            <table>
                <Statistic text = "good" value = {props.good} />
                <Statistic text = "neutral" value = {props.neutral} />
                <Statistic text = "bad" value = {props.bad} />
                <Statistic text = "all" value = {all} />
                <Statistic text = "average" value = {average} />
                <Statistic text = "positive" value = {positive + " %"} />
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header text = "give feedback" />
            <Button handleClick={() => setGood(good + 1)} text = "good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral" />
            <Button handleClick={() => setBad(bad + 1)} text = "bad" />
            <Statistics good = {good} neutral = {neutral} bad = {bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))