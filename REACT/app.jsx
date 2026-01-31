/* Problem:
Write a function App() that returns JSX: 
<div> with <h1>My First React</h1> and <p>I know JS, now React! 🎯</p>.
Add your name in {}. Console.log(App()).*/

let name = "guru"
function App() {
    return (
        <div>
            <h1>My First React</h1>
            <p> I know JS, now React! 🎯</p>
            <p>Created by {name}</p>
        </div>
    );
}


console.log(App());