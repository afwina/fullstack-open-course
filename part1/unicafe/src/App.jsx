import { useState } from 'react';

const Header = (props) => {

  return (
      <h1>{props.name}</h1>
  )
}

const Button = ({name, onClick}) => <button onClick={onClick}>{name}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Feedback = ({onGood, onNeutral, onBad}) => {

    return (
        <>
            <Header name="give Feedback" />
            <Button name="good" onClick={onGood} />
            <Button name="neutral" onClick={onNeutral} />
            <Button name="bad" onClick={onBad} />
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {

    let all = good+neutral+bad

    if (all === 0){
        return (
        <>
            <Header name="statistics" />
            <p>No feedback given</p>
        </>)
    }

    let avg = all > 0 ? (good-bad)/all : 0
    let positive = all > 0 ? (good)/all : 0
    
    return (
        <>
            <Header name="statistics" />
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={avg} />
            <StatisticLine text="positive" value={positive*100+"%"} />
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