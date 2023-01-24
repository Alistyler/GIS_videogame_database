se// const http = require('http');
// const mongodb = require('mongodb');

import * as http from "http";
import * as mongodb from "mongodb";

const hostname = '127.0.0.1'; // localhost
const port = 3000;
const mongoUrl = 'mongodb://127.0.0.1:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(mongoUrl);

async function startServer() {
  // connect to database
  await mongoClient.connect();
  // listen for requests
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

const server = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
  let url = new URL(request.url || '', `http://${request.headers.host}`);
  switch (url.pathname) {
    case '/getGame': {
      // const gameCollection = mongoClient.db('db').collection('games');
      switch (request.method) {
        case 'GET':
          let result;
          if (url.searchParams.get('id')) {
            console.log("correct id:" + url.searchParams.get('id'));
            result = await mongoClient.db('db').collection('games').findOne({ id: Number(url.searchParams.get('id'))});
            // result = await gameCollection.find();
            // result = await gameCollection.insertOne({id: 1, image_games: {src: "../src/Among_us.png", alt: "Among us", title: "Among us"}, name_games: "Among us", release_games: "01/01/2000", platform_games: ["Android, iOS", "Microsoft Windows", "Nintendo Switch", "Playstation 4", "Playstation 5", "Xbox One", "Xbox Series X/S"], description_games: "Among us is an online and local party game of teamwork and betrayal for 4 - 15 players in space. You and your crewmates have to work together to find your way back into civilization, <strong>but</strong> be careful... Two of your teammates are dangerous and backstabbing shapeshifter. The objective as an imposter: to eliminate the rest of the crewmates. These two will sabotage the ship and sneak through the ventilation shaft. In addition they will gaslight you so they are able to continue their chain of murders. Your objective as a crewmate is to fulfill some tasks and to find the imposters.", score_games: "Metascore: 85, User Score: 6.9 (According to metacritic.com)", genre_games: "Party; Social deduction", USK_games: "../src/USK_6.png", beatingTime_games: { main_game_or_story: "17-18 hours", hundred_percent: null}});

            // result = await mongoClient.db('db').collection('testDB').findOne({
            //   id: Number(url.searchParams.get('id')), // von String zu Zahl konvertieren
            // });
          }
          console.log(JSON.stringify(result));
          response.setHeader('Content-Type', 'application/json');
          response.write(JSON.stringify(result));
          break;
      }
      break;
    }
    default:
      response.statusCode = 404;
  }
  response.end();
}
);

startServer();


// {id: 1, image_games: {src: "../src/Among_us.png", alt: "Among us", title: "Among us"}, name_games: "Among us", release_games: "01/01/2000", platform_games: ["Android, iOS", "Microsoft Windows", "Nintendo Switch", "Playstation 4", "Playstation 5", "Xbox One", "Xbox Series X/S"], description_games: "Among us is an online and local party game of teamwork and betrayal for 4 - 15 players in space. You and your crewmates have to work together to find your way back into civilization, <strong>but</strong> be careful... Two of your teammates are dangerous and backstabbing shapeshifter. The objective as an imposter: to eliminate the rest of the crewmates. These two will sabotage the ship and sneak through the ventilation shaft. In addition they will gaslight you so they are able to continue their chain of murders. Your objective as a crewmate is to fulfill some tasks and to find the imposters.", score_games: "Metascore: 85, User Score: 6.9 (According to metacritic.com)", genre_games: "Party; Social deduction", USK_games: "../src/USK_6.png", beatingTime_games: { main_game_or_story: "17-18 hours", hundred_percent: null}}
// {id: 2, image_games: {src: "../src/AC.png", alt: "Assassin's Creed", title: "AC"}, name_games: "Assassin's Creed", release_games: "13/11/2007", platform_games: ["Microsoft Windows", "Playstation 3", "Xbox 360"], description_games: "We are in year 1191 A.D. The third crusade tears apart the Holy Land. You - as Altaïr - have to stop the hostility by taking on both parties to the conflict.", score_games: "Metascore: 81, User Score: 7.6 (According to metacritic.com)", genre_games: "Adventure; Platform", USK_games: "../src/USK_16.png", beatingTime_games: {main_game_or_story: "15 hours", hundred_percent: "31 hours"}}
// {id: 3, image_games: {src: "../src/Frogger.png", alt: "Frogger", title: "Frogger"}, name_games: "Frogger", release_games: "05/06/1981", platform_games: ["Arcade"], description_games: "The object of the game is to direct frogs to their homes one by one. To do this, each frog must avoid cars while crossing a busy road and navigate a river full of hazards. Skillful players may obtain some bonuses along the way.", score_games: null, genre_games: "Action", USK_games: "../src/USK_0.png", beatingTime_games: {main_game_or_story: "21 minutes", hundred_percent: "2 hours"}}
// {id: 4, image_games: {src: "../src/Gotham_Knights.png", alt: "Gotham Knights", title: "Gotham Knights"}, name_games: "Gotham Knights", release_games: "21/10/2021", platform_games: ["PlayStation 5", "Xbox Series", "Microsoft Windows"], description_games: "Introducing an original story set in DC’s Batman Universe, Gotham Knights offers a dynamic and interactive Gotham City where an exploding criminal element has swept through the streets. With the Belfry as their base of operations, this new era of heroes will solve mysteries that connect the darkest chapters in the city’s history and must defeat notorious villains in epic confrontations. Players must save Gotham from a descent into chaos and reinvent themselves into their own version of the Dark Knight.", score_games: "Metascore: 65, User Score: 4.8 (According to metacritic.com)", genre_games: "Fighting game, Action-RPG, Adventure", USK_genre: "../src/USK_16.png", beatingTime_games: {main_game_or_story: "16 hours", hundred_percent: "43 hours"}}
// {id: 5, image_games: {src: "../src/Metal_gear_solid.png", alt: "Metal Gear Solid", title: "Metal Gear Solid"}, name_games: "Metal Gear Solid", release_games: "03/09/1998", platform_games: ["PlayStation", "PlayStation 3", "Microsoft Windows"], description_games: "Metal Gear Solid is a stealth game created by Hideo Kojima which follows the MSX2 video game Metal Gear and Metal Gear 2: Solid Snake. Despite a transition to 3D, Metal Gear Solid's gameplay remains similar to his predecessors. The game utilizes a traditional top-down view and the player must navigate the protagonist Solid Snake through the game's areas without being detected. Detection will set off an alarm which draws armed enemies to his location. Conversations with Snake's allies and cutscenes are used extensively to advance the plot and gain more insight into it. Metal Gear Solid is regarded as one of the greatest and most important video game of all time, and helped popularize the stealth genre and in-engine cinematic cutscenes.", score_games: "Metascore: 94, User Score: 8.3 (According to metacritic)", genre_games: "Stealth, Shooter, Action-Adventure", USK_games: "../src/USK_12.png", beatingTime_games: {main_game_or_story: "11.5 hours", hundred_percent: "16 hours"}}
// {id: 6, image_games: {src: "../src/Monster_Hunter_World.png", alt: "Monster Hunter World", title: "Monster Hunter World"}, name_games: "Monster Hunter World", release_games: "26/01/2018", platform_games: ["PlayStation 4", "Xbox One", "Microsoft Windows"], description_games: "Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!", score_games: "Metascore: 90, User Score: 7.7 (According to metacritic.com)", genre_games: "Action-RPG, Shooter, Fighting Game, Action-Adventure", USK_games: "../src/USK_12.png", beatingTime_games: {main_game_or_story: "48 hours", hundred_percent: "392 hours"}}
// {id: 7, image_games: {src: "../src/Red_Dead_Redemption_2.png", alt: "Read Dead Redemption 2", title: "RDR2"}, name_games: "Red Dead Redemption 2", release_games: "26/10/2018", platform_games: ["PlayStation 4", "Xbox One", "Microsoft Windows"], description_games: "Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.", score_games: "Metascore: 97, User Score: 8.6 (According to metacritic.com)", genre_games: "Action-Adventure, Open World", USK_games: "../src/USK_18.png", beatingTime_games: {main_game_or_story: "50 hours",hundred_percent: "175 hours"}}
// {id: 8, image_games: {src: "../src/Star_Wars_KOTOR.png", alt: "Star Wars: Knights of the old Republic", title: "Star Wars KOTOR"}, name_games: "Star Wars Knight of the old Republic", release_games: "18/11/2003", platform_games: ["Microsoft Windows", "Xbox", "macOS", "iOS", "Android", "Linux", "PlayStation 5", "Nintendo Switch"], description_games: "Choose Your Path! Set 4,000 years before the Galactic Empire, you are the last hope for the Jedi Order and the Republic - can you master the ways of the Force to become their savior? Or will you fall to the dark side and achieve ultimate power? Hero, villain, peacekeeper, or chaos-bringer... you and your party will determine the fate of the galaxy! Star Wars: Knights of the Old Republic is a role-playing video game. Players will be able to create their own characters and be able to choose what gender, appearance, class, skills, attributes, and feats they have throughout the game - no two characters will be the same!", score_games: "Metascore: 93, User Score: 9.0 (According to metacriti.com)", USK_games: "../src/USK_12.png", beatingTime_games: {main_game_or_story: "29 hours", hundred_percent: "36 hours"}}
// {id: 9, image_games: {src: "../src/TLOU.png", alt: "The Last of Us", title: "TLOU"}, name_games: "The Last of Us", release_games: "14/06/2013", platform_games: ["PlayStation 3", "PlayStation 4", "PlayStation 5"], description_games: "A third person shooter/stealth/survival hybrid, in which twenty years after the outbreak of a parasitic fungus which takes over the neural functions of humans, Joel, a Texan with a tragic familial past, finds himself responsible with smuggling a fourteen year old girl named Ellie to a militia group called the Fireflies, while avoiding strict and deadly authorities, infected fungal hosts and other violent survivors.", score_games: "Metascore: 95, User Score. 9.2 (According to metacritic.com)", USK_games: "../src/USK_18.png", beatingTime_games: {main_game_or_story: "15 hours", hundred_percent: "22 hours"}}
// {id: 10, image_games: {src: "../src/The_Sims.png", alt: "The Sims", title: "The Sims"}, name_games: "The Sims", release_games: "04/02/2000", platform_games: ["Life-Simulation"], description_games: "The Sims is a life-building simulation with emphasis on intimate details of individual characters rather than expansion of an entire society or civilization. You are in control of nearly every aspect of the lives of the individuals who make up your chosen population in the neighborhood. Characters are developed from the ground up and you infuse and mold them with personalities, looks, desires, moods, urges, living arrangements, career and personal choices, life styles, and reactions.", score_games: "Metascore: 92, User Score. 7.9 (According to metacritic.com", USK_games: "../src/USK_6.png", beatingTime_games: {main_game_or_story: "35 hours", hundred_percent: null}}