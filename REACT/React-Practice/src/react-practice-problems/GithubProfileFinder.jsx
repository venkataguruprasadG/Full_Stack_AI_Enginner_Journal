import { useState } from "react";

function GithubProfileFinder() {
    const [searchQuery, setSearchQuery] = useState(""); // For the input
    const [user, setUser] = useState(null); // For the API result

    const fetchUserData = async () => {
        if (!searchQuery) return; // Don't search if empty

        const response = await fetch(`https://api.github.com/users/${searchQuery}`);
        const data = await response.json();
        setUser(data);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Github Profile Finder</h1>

            <input
                type="text"
                placeholder="Enter username (e.g. gaearon)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={fetchUserData}>Search</button>

            {/* Only show the profile if user data exists */}
            {user && (
                <div style={{ marginTop: '20px' }}>
                    <img src={user.avatar_url} width="150" style={{ borderRadius: '50%' }} alt="profile" />
                    <h2>{user.name || user.login}</h2>
                    <p>{user.bio}</p>
                    <p>Public Repos: {user.public_repos}</p>
                </div>
            )}
        </div>
    );
}

export default GithubProfileFinder;