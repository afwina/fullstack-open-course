import { useState } from 'react';

const Header = (props) => {

  return (
      <h1>{props.course}</h1>
  )
}

const Button = ({name, onClick}) => <button onClick={onClick}>{name}</button>

const Stat = ({name, count}) => <p>{name} {count}</p>

const Feedback = ({onGood, onNeutral, onBad}) => {

    return (
        <>
            <Header course="give Feedback" />
            <Button name="good" onClick={onGood} />
            <Button name="neutral" onClick={onNeutral} />
            <Button name="bad" onClick={onBad} />
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    let all = good+neutral+bad
    let avg = all > 0 ? (good-bad)/all : 0
    let positive = all > 0 ? (good)/all : 0
    
    return (
        <>
            <Header course="statistics" />
            <Stat name="good" count={good} />
            <Stat name="neutral" count={neutral} />
            <Stat name="bad" count={bad} />
            <Stat name="all" count={all} />
            <Stat name="average" count={avg} />
            <Stat name="positive" count={positive*100+"%"} />
        </>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <div>
            <Feedback onGood={()=>setGood(good+1)} onNeutral={()=>setNeutral(neutral+1)} onBad={()=>setBad(bad+1)} />
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App