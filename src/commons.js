import React, {Component} from 'react';

export class commons extends Component {

    static topSpacing() {
        return (
            <div className={"top-spacing"}><br/><br/><br/><br/></div>
        )
    }

    static headSection() {
        return (
            <div className={"text-section"}>
                <h1>Discover <span className={"orange-text"}>Roskilde Festival</span> 2018</h1>
                <p>This web-application is meant as a tool for discovering music-acts playing at Roskilde Festival 2018.
                    The interface aims to provide a better flow for finding artists playing at the different stages,
                    compared to the official schedule provided at Roskilde Festivals website.</p>
                <p>The application uses React as a front-end framework coupled with Spotify API, to fetch artists,
                    images, albums etc. Furthermore, there is a "discover artist" feature, where you can listen the
                    various artists. If an artist strikes your fancy, you can follow them directly through this
                    interface.
                </p>
                <br/><br/><br/>
            </div>
        )
    }

    static sceneSectionHeader(category, id) {
        return (
            <div className={"header-section"}>
                <p className={"h2"}>
                    {category} <span className={"orange-text"}>{id}</span>
                </p>
                <div className={"hr-container"}>
                    <hr/>
                </div>
            </div>
        )
    }

    static sceneSectionHeaderNoDivider(category, id) {
        return (
            <div className={"header-section"}>
                <br/><br/>
                <hr className={"hr-menu-info-divider"}/>
                <p className={"h2"}>
                    {category} <span className={"orange-text"}>{id}</span>
                </p>
            </div>
        )
    }

    static spacerSmall() {
        return (
            <div><br/><br/><br/></div>
        )
    }

    static artistNameHeadline(artistName) {
        return (
            <div><h3>{artistName}</h3></div>
        )
    }

    static footSection() {
        return (
            <div className={"text-section"}>
                <br/><br/><br/>
                <p>It should be noted that in order for the "Discover Artist" feature to to work, Spotify has to be open
                    (platform doesn't matter) and a song must have been played so there is an active device, that can be
                    retrieved via the API. Oh and for some reason Spotify only allows this for
                    premium users. For ease of use
                    <a href="https://open.spotify.com/" className={"orange-link"} target={"_blank"}> click this link to
                        open Spotify</a>.
                    The access token provided by Spotify lasts for an hour, but if for some reason
                    it needs to be refreshed there is a hidden link in the top left corner</p>
                <br/><br/>
                <h1>Powered by <span className={"orange-text"}>React</span> & <span
                    className={"orange-text"}>Spotify</span></h1>

            </div>
        )
    }

    static returnArtistQuery(scene, day) {
        if (scene === "Orange" && day === "Wednesday")
            return (["2rR0cafJvL0JVTC8E2qIqt", "7dGJo4pcD2V6oG8kP0tJRR"]);
        if (scene === "Orange" && day === "Thursday")
            return (["21egYD1eInY6bGFcniCRT1", "3WaJSfKnzc65VDgmj2zU8B", "4zGBj9dI63YIWmZkPl3o7V", "0du5cEVh5yTK9QJze8zA0C", "11BUDylkl50Y6dsbZMZiCG"]);
        if (scene === "Orange" && day === "Friday")
            return (["6EMWMUO2B9Nt39O7SXdZUw", "6GTwMrB4u3hwcUyc9sU1UL", "4UXJsSlnKd7ltsrHebV79Q", "6FXMGgJwohJLUSr5nVlf9X"]);
        if (scene === "Orange" && day === "Saturday")
            return (["5EXeUuYgGRA1RnXHqALLDL", "6M2wZ9GZgrQXHCFfjv46we", "3AA28KZvwAUcZuOKwyblJQ"]);

        if (scene === "Arena" && day === "Wednesday")
            return (["2HPaUgqeutzr3jx5a9WyDV", "7bcbShaqKdcyjnmv4Ix8j6", "0X380XXQSNBYuleKzav5UO"]);
        if (scene === "Arena" && day === "Thursday")
            return (["67ei8ib6PLT1w3OkhIb4fB", "0E7PsXA3qAN3NCycrWDFaf", "6LuN9FCkKOj5PcnpouEgny", "49qiE8dj4JuNdpYGRPdKbF", "2SrSdSvpminqmStGELCSNd", "3G3Gdm0ZRAOxLrbyjfhii5"]);
        if (scene === "Arena" && day === "Friday")
            return (["3kdU3J8t1HUPZqFyScP8SF", "1p2z4hiBCkxfWZ6OvyGBSA", "4EVpmkEwrLYEg6jIsiPMIb", "21mKp7DqtSNHhCAU2ugvUw", "20vuBdFblWUo2FCOvUzusB", "5hE6NCoobhyEu6TRSbjOJY"]);
        if (scene === "Arena" && day === "Saturday")
            return (["1Li0eIWeMeWcOOWpImcG9H", "77fc8T3xc15DmT593kRnh4", "0iirUbtgwt9jEkc2Grin8C", "34UhPkLbtFKRq3nmfFgejG", "1qh6ppVtiFTKMyta0NXsjf", "3jK9MiCrA42lLAdMGUZpwa"]);

        if (scene === "Apollo" && day === "Wednesday")
            return (["644PvPeYIyoq0n0eBP5fxG", "5rZVjGkZZI4TnpMHQwrxfG", "1Dt1UKLtrJIW1xxRBejjos"]);
        if (scene === "Apollo" && day === "Thursday")
            return (["504cl42JQLRqlZddfZ3S4z", "1AodPTJeY4eSw69exOwnmX", "0FOWNUFHPnMy0vOw1siGqi", "4IVAbR2w4JJNJDDRFP3E83", "7zrkALJ9ayRjzysp4QYoEg", "1oE0BFKpL8Nr76X9ezzdxY", "6m8itYST9ADjBIYevXSb1r"]);
        if (scene === "Apollo" && day === "Friday")
            return (["6FbXoMCYyZ0YgBY8CzrlS6", "5n0JARvQg5xHAY5qst1Bjk", "0tPKcpC8yXpfdWXFcN7Vwr", "15e0X6NuMsVuHi7AZhcfyI", "2ExGrw6XpbtUAJHTLtUXUD", "2P5sC9cVZDToPxyomzF1UH", "7Eu1txygG6nJttLHbZdQOh"]);
        if (scene === "Apollo" && day === "Saturday")
            return (["0Lt05xaSe2ACmAiSkIdcSm", "1U1el3k54VvEUzo3ybLPlM", "1ilcpQQeF5mmvfO682aDgJ", "7deuX0YejjlcB4uLcdgEDW", "68kEuyFKyqrdQQLLsmiatm"]);

        if (scene === "Pavilion" && day === "Wednesday")
            return (["4rMxZovfLSDjEL9eI2pKo7", "3oXddLOOjkoUuC2sX1RMdr", "5EHvXKnNz78jkAVgTQLQ5O", "5CGnQOjeOoZW4a4FoPhUxW"]);
        if (scene === "Pavilion" && day === "Thursday")
            return (["2X2cwQWSYJJ3do82RYk3dA", "39ZEMGRv3pIYTYKEhr4Abu", "5VElAWe58JiEzEl4vtjw7J", "6ZK2nrW8aCTg8Bid7I7N10", "4R073T3AVJKqAsbzLmLW9u", "2bs3QE2ZMBjmb0QTqAjCj3", "3qYfqdVwX0fil71onLpLkh", "5jmpVuzUhQufrVLxKFwvU1"]);
        if (scene === "Pavilion" && day === "Friday")
            return (["7jZycSvTyx0W9poD4PjEIG", "213mmq3zkNWx7CtfzftTC5", "16QCJENzcdhwka9bTKYMVB", "0VeQgI9lzgoOMszAOq0iml", "6lcwlkAjBPSKnFBZjjZFJs", "5mZC7ndY6oGMxJentRwsuV", "3544ImlskUwZqWJTmqWUsa", "20khGbiJWINJJibuMzT8yr"]);
        if (scene === "Pavilion" && day === "Saturday")
            return (["4a2c6VZMfp0CdNg1JgSPR9", "3Wcyta3gkOdQ4TfY0WyZpu", "4gfv97gA1lcB8lCJ6YNqu2", "4wBhllC5Nto10UefzXVMt9", "6SoZi6u1HOTJ33PrXjMxlo", "0loUVauivVQPRdqkbd250b", "7AEfolFjVIRCL0MK7Oz14j"]);

        if (scene === "Avalon" && day === "Wednesday")
            return (["4HV7yKF3SRpY6I0gxu7hm9", "161AC1AVRkIGIMxyj5djFQ", "2PNJIaILxBrRzWUciB8r11", "2rBcvLKWCZs9w1qIWv560v"]);
        if (scene === "Avalon" && day === "Thursday")
            return (["0asVlqTLu3TimnYVyY5Jxi", "6qEM4txXHvfMbOUOK9L7pl", "5pYHnsao4ARhkpGvHGTgHP", "5A70LBFCFtNwOmbPj5g5uc", "3EgMK920cIH5aLxFnJ6zSi", "7sTKZr30LqC928DZ5P9mNQ"]);
        if (scene === "Avalon" && day === "Friday")
            return (["5ENM4Vw9brkpcN51HtC8ga", "5o7MNRaQrt87SwYWxHEZvN", "1FGH4Bh7g9W6V4fUcKZWp5", "5QyQtCgzOCZ18RMjel0Ky1", "5HcOnnm3gCyYWOWTv4Bh4a", "2WoVwexZuODvclzULjPQtm", "4OpHsZuhfJMU9PZ3zkyUQX"]);
        if (scene === "Avalon" && day === "Saturday")
            return (["7aA592KWirLsnfb5ulGWvU", "4hkOCqpKuf6KFaQeTGfYNw", "4TrraAsitQKl821DQY42cZ", "5isqImG0rLfAgBJSPMEVXF"]);

        if (scene === "Gloria" && day === "Wednesday")
            return (["1F7QDWyZTLGzkyGLgFjEhU", "0sVfiWcqQsFEIlhm9LrkGf"]);
        if (scene === "Gloria" && day === "Thursday")
            return (["73MDShZzdL4vUGMkmXOG6X", "4hOby8V5qAcpSDTMxKchiR", "1f8PlfSHEW6fHnILSzm8dI", "0Wkm45quqfx3NepJpXDvwE", "3UmV9MFdTYgHZllIwjXvEX"]);
        if (scene === "Gloria" && day === "Friday")
            return (["0Q14t6kRnPv4av49Rz5o6e", "0sRVVDpgF2sKzPBkDszzUl", "4exRwr38tW2DlCNGl2gIqn", "49HlOY4gkHqsYG9GCuhkcc", "2uyWd9ObO64Qngrfj61YNy"]);
        if (scene === "Gloria" && day === "Saturday")
            return (["1EI0B66miJj5Fl408B7E9H", "3EkCxQ87nOSWlHyV6Xhx4c", "76hliHkgP5eIbVqLT7NmQ3", "7tguHMzv83NjmVpNjT4FpS", "5eitAUlYmlha3LLWg7aBn5"]);


        if (scene === "" || day === "")
            return (["No data", "No data"]);
        if (scene === null || day === null)
            return (["No data", "No data"]);
        else
            return (["No data", "No data"]);
    }


}
