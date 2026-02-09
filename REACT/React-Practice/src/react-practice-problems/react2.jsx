/* Problem:
Create Bio component. Takes name and skill props.
 Return <section> with <h3>{name}'s Bio</h3> and <p>Skill: {skill}</p>.
 Call it with your name + "JS". Console.log result.*/

function Bio({ name, skill }) {
    return (
        <section>
            <h3>{name}'s Bio</h3>
            <p>Skill: {skill}</p>
        </section>
    )
}