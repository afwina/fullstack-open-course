import Part from "./Part.jsx"
const Content = ({course}) => {

    return (
        <>
            {course.parts.map((item) =>
                <Part part={item} key={item.id} />
            )}
        </>
    )
}

export default Content;