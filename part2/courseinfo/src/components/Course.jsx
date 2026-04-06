import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = ({course}) => {

    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total  course={course} />
        </>
    )
}

export default Course;