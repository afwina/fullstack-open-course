import { useState } from 'react';

const Header = (props) => {

  return (
      <h1>{props.name}</h1>
  )
}

const Button = ({name, onClick}) => <button onClick={onClick}>{name}</button>

const StatisticLine = ({text, value}) => <><td>{text}</td><td>{value}</td></>

const StatisticsTable = ({stats}) =>{
    return (
        <table>
            <tbody>
                {stats.map((item, index) => (
                    <tr key={index}>
                        <StatisticLine text={item.text}  value={item.value} />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

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
    let stats = [
        {text:"good", value: good },
        {text:"neutral", value: neutral},
        {text:"bad", value: neutral},
        {text:"all", value: all },
        {text:"average", value: avg},
        {text:"positive", value: positive*100+"%" },

    ]
    
    return (
        <>
            <Header name="statistics" />
            <StatisticsTable stats={stats} />
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