import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>QGH Project (CrashCourse from Youtube)</h4>
            <h4>Things Learned:</h4>
            <ul>
                <li>Basic react skills</li>
                <li>Back-end: store data, router</li>
            </ul>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
