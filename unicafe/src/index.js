import React from 'react'
import ReactDOM from 'react-dom'

const Feedback = () => {
    return (
        <div>
            <h1>give feedback</h1>
        </div>
    )
}


const App = () => {
 

    return (
        <div>
            <Feedback />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))