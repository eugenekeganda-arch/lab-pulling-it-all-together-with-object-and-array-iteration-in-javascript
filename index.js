function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

const GameObj = gameObject();
function numPointsScored(playerName) {
    const games = Object.assign({}, GameObj.home.players, GameObj.away.players); 
    return games[playerName].points;
}; 
    
  
    function shoeSize(playerName) {
        const games = Object.assign({}, GameObj.home.players, GameObj.away.players); 
        return games[playerName].shoe;
    }; 

    function teamColors(teamName) {
        const teams = [GameObj.home, GameObj.away];
        for (const team of teams) {
            if (team.teamName === teamName) {
                return team.colors;
            }
        }
       
    };

    function teamNames() {
        const teams = [GameObj.home, GameObj.away];
        return teams.map(team => team.teamName);
    };

    function playerNumbers(teamName) {
        const teams = [GameObj.home, GameObj.away];
        const jerseyNumbers = [];
        for (const team of teams) {
            if (team.teamName === teamName) {
                const players = team.players;
                for (const player in players) {
                    jerseyNumbers.push(players[player].number);
                }
                return jerseyNumbers;
            }
        }
                return Object.values(team.players).map(player => player.number);
            }
    function playerStats(playerName) {
        const teams = [GameObj.home, GameObj.away];
        for (const team of teams) {
            const players = team.players;
            if (players[playerName]) {
                return players[playerName];
            }
        }
        return {};
    }

    function bigShoeRebounds() {
        const teams = [GameObj.home, GameObj.away];
        let biggestShoeSize = 0;
        let rebounds = 0;

        for (const team of teams) {
            const players = team.players;
            for (const player in players) {
                const stats = players[player];
                if (stats.shoe > biggestShoeSize) {
                    biggestShoeSize = stats.shoe;
                    rebounds = stats.rebounds;
                }

            }
        }
        return rebounds;
    }
    
    console.log(numPointsScored("Ben Gordon")); 
    console.log(shoeSize("Brook Lopez")); 
    console.log(teamColors("Charlotte Hornets")); 
    console.log(teamNames()); 
    console.log(playerNumbers("Brooklyn Nets")); 
    console.log(playerStats("Mason Plumlee")); 
    console.log(bigShoeRebounds());
    




        