import './project2.css'

function Project2() {
    // Variables inside the component
    const userName = "John Doe";
    const jobTitle = "Software Engineer";
    const location = "Hyderabad";

    return (
        <div className="container">
            <div className="profile-snippet">
                <h1 className='title'>Profile Snippet</h1>
                <p className='description-name'>Name: {userName}</p>
                <p className='description-job'>Job Title: {jobTitle}</p>
                <p className='description-location'>Location: {location}</p>
            </div>
        </div>
    )
}

export default Project2;