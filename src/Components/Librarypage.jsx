// Game library browser page
import React, { useEffect, useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import GameCard from "./GameCard";
import { Link, useSearchParams } from "react-router-dom";
import "./styles/Librarypage.css";
import { useParams } from "react-router-dom";

// Database urls
const dataURL  = "https://raw.githubusercontent.com/JacobSandbox/ClownAroundGamesDatabase/main/data/";

function compareWords ( first, second ) {
    let bestScore = 0;
    // to calc score: 
    // 'march' shorter word across longer word and find place with most letter matches
    // final score is the place with % most matches

    let short = null;
    let long  = null;
    if ( first.length <= second.length ) {
        short = first;
        long = second;
    } else {
        short = second;
        long = first;
    }

    // March through all offsets to find best match
    for ( let offset = 0; offset <= (long.length-short.length); offset++ ) {
        // Loop through letters and calc match % of word at each offset
        let score = 0;
        for ( let c = 0; c < short.length; c++ ) {
            if ( short[c] === long[offset+c] ) score += 1;
        }
        // Calc average
        score = score / short.length;
        // Save heighest score
        if ( score > bestScore ) bestScore = score;
    }

    return bestScore;
}

function compareSentences ( first, second ) {
    // Seperate sentences into words and compare each
    let sentScores = first.split(" ").map( sWord => {
        // Compare each word in first sentence to all words in second
        let wordScores = second.split(" ").map( lWord => {
            return compareWords(sWord.toLowerCase(),lWord.toLowerCase());
        }).toSorted( (a,b) => {return b-a});
        // Return best match for word
        return wordScores[0];
    });

    // Return the average word match score
    return sentScores.reduce( (t,s) => {return t+(s/sentScores.length)}, 0);
}

function entryIsMatch ( entry, filter ) {
    // A filter of 'all' always returns true
    if ( filter === "all" ) return true;

    // Split filter into individual conditions and check against entry
    let conditions = filter.split("$");
    for ( let con of conditions ) {
        // Split at the '=' and compare stat to value
        let parts = con.split("=");
        if ( parts[0] === "search" ) {
            // Try to match name
            // Except 66.7% or greater matches
            let score = compareSentences ( parts[1].replace("_"," "), entry.title );
            if ( score <= 0.666 ) {
                return false;
            }
        } else {
            // Match other criteria
            if ( entry[parts[0]] !== parts[1] ) {
                // Return false if ANY stat doesn't match
                return false;
            }
        }
    }

    // Return true only if all stats match filter
    return true;
}

var libraryData = null;

function Librarypage() {
    // State
    var [hasData, setHasData] = useState(false);
    var [filterPath, setFilterPath] = useState("/all");
    
    // URL Params
    var { filter } = useParams();
    
    // Search Params
    var [query] = useSearchParams();
    
    // Filter functions
    function updateFilter() {
        // Compile on selected filter options
        let path = "/";
        // Type
        let option = document.querySelector("#library-type");
        if ( option.value !== "any" ) path += `type=${option.value}$`;
        // Genre
        option = document.querySelector("#library-genre");
        if ( option.value !== "any" ) path += `genre=${option.value}$`;
        // Players
        option = document.querySelector("#library-players");
        if ( option.value !== "any" ) path += `players=${option.value}$`;
        // Time
        option = document.querySelector("#library-time");
        if ( option.value !== "any" ) path += `time=${option.value}$`;
        
        // Set filter button path to filter options
        setFilterPath((path === "/") ? "/all" : path.slice(0,-1));
    }
    
    function resetOptions() {
        document.getElementById("library-type").value = "any";
        document.getElementById("library-genre").value = "any";
        document.getElementById("library-players").value = "any";
        document.getElementById("library-time").value = "any";
    }
    
    // Fetch game library info from database
    let metaData = {types: [], genres: [], players: [], times: []};
    useEffect( () => {
        fetch(dataURL+"games.json")
        .then( response => {
            response.json().then( result => {
                // Store games data
                libraryData = result;
                // Compile game meta data
                for ( let entry of libraryData ) {
                    // Types
                    if ( !metaData.types.includes(entry.type) ) metaData.types.push(entry.type);
                    // Genres
                    // Players
                    // Times
                }

                setHasData(true);
            });
        }).catch( () => {
            throw new TypeError("Response is null...");
        });
    }, []);

    return (
        <div className="library-root">
            <Header menuItems={["$Games", "Home", "About", "Contact"]} />
            <div className="library-content global-content-box">
                <div className="library-controls">-
                    <span>
                        <label className="library-label" htmlFor="library-type">Type</label>
                        <select className="library-select-type" id="library-type" onChange={()=>{updateFilter()}}>
                            <option value="any">Any</option>
                            <option value="card">Card game</option>
                            <option value="dice">Dice game</option>
                            <option value="board">Board game</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" htmlFor="library-genre">Genre</label>
                        <select className="library-select-genre" id="library-genre" onChange={()=>{updateFilter()}}>
                            <option value="any">Any</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="strategy">Strategy</option>
                            <option value="action">Action</option>
                            <option value="historical">Historic</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" htmlFor="library-players">Players</label>
                        <select className="library-select-players" id="library-players" onChange={()=>{updateFilter()}}>
                            <option value="any">Any</option>
                            <option value="1-4">1-4</option>
                            <option value="2-4">2-4</option>
                            <option value="3-5">3-5</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" htmlFor="library-time">Time</label>
                        <select className="library-select-time" id="library-time" onChange={()=>{updateFilter()}}>
                            <option value="any">Any</option>
                            <option value="short">Under 15 mins</option>
                            <option value="average">15-30 mins</option>
                            <option value="long">Over 30 mins</option>
                        </select>
                    </span>
                    <span>
                        <Link to={`/games${filterPath}`} id="library-filter-button"><button className="library-filter-btn">Filter</button></Link>
                        {(filter !== "all") ? <Link to="/games/all" className="library-clear-btn" onClick={()=>{resetOptions()}}>Clear filters</Link> : null}
                    </span>
                    -
                </div>

                <div className="library-browser">
                    {(hasData === true) ? libraryData.map( game => {
                        let arg = (filter === undefined) ? query.toString() : filter;
                        console.log(arg);
                        if ( entryIsMatch(game, arg) )
                            {return <GameCard key={game.id} databaseId={game.databaseId} boxart={dataURL+"games/"+game.databaseId+"/"+game.boxart} title={game.title} genre={game.genre} shoutText={game.shout} />}
                        return null;
                    })  : <div className="global-loading">?</div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Librarypage;