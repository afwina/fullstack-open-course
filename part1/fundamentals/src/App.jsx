const Header = (props) => {

  return (
      <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
  )
}

const Content = (props) => {

  return (
    <>
      {props.content.map((item, index) =>
        <Part part={item} key={index} />
      )}
    </>
  )
}

const Total = (props) => {
  let total = 0;
  for (let i = 0; i < props.content.length; i++) {
    total += props.content[i].exercises;
  }

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}


const App = () => {
  const course ={
      name:'Half Stack application development',
      parts: [
          {name:'Fundamentals of React', exercises:10},
          {name:'Using props to pass data', exercises:7},
          {name:'State of a component', exercises:14},
      ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  )
}

export default App