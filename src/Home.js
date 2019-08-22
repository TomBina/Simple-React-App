import React from "react";
import logo from "./logo.svg";

function Home() {
    return (
        <div>
            <h1>Simple React app</h1>
            <img src={logo} width="200" />
            <p>This is an example of an app written in React. During the course, we will add many features like:</p>
            <ul>
                <li>Sign in/sign up.</li>
                <li>Add, update, and delete customers.</li>
                <li>Search customers.</li>
                <li>Persist data in Cloud Firestore.</li>
                <li>Log user actions.</li>
            </ul>
            <p>
                Click{" "}
                <a href="https://www.coolbytes.io/a-complete-guide-to-react" target="_blank">
                    here
                </a>{" "}
                to view all lessons.
            </p>
            <p>Licensed under MIT.</p>
        </div>
    );
}

export default Home;
