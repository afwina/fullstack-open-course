// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//
//   return (
//       <div>
//         <h1>{course}</h1>
//         <p>
//           {part1} {exercises1}
//         </p>
//         <p>
//           {part2} {exercises2}
//         </p>
//         <p>
//           {part3} {exercises3}
//         </p>
//         <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//       </div>
//   )
// }

const Header = (props) => {

  return (
    <>
      <h1>{props.course}</h1>
    </>
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
  const course = 'Half Stack application development'
  const content = [
    {name:'Fundamentals of React', exercises:10},
    {name:'Using props to pass data', exercises:7},
    {name:'State of a component', exercises:14},
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

export default App