let div_games = document.querySelector('div');

const games1 = [];

//Array for game information (JSON)
const game = [{
    id: 1,
    image_games: {
        src: "../src/Among_us.png",
        alt: "Among us",
        title: "Among us",
    },
    name_games: "Among us",
    release_games: "01/01/2000",
    platform_games: ["Android, iOS", "Microsoft Windows", "Nintendo Switch", "Playstation 4", "Playstation 5", "Xbox One", "Xbox Series X/S"],
    description_games: "Among us is an online and local party game of teamwork and betrayal for 4 - 15 players in space. You and your crewmates have to work together to find your way back into civilization, <strong>but</strong> be careful... Two of your teammates are dangerous and backstabbing shapeshifter. The objective as an imposter: to eliminate the rest of the crewmates. These two will sabotage the ship and sneak through the ventilation shaft. In addition they will gaslight you so they are able to continue their chain of murders. Your objective as a crewmate is to fulfill some tasks and to find the imposters.",
    score_games: "Metascore: 85, User Score: 6.9 (According to metacritic.com)",
    genre_games: "Party; Social deduction",
    USK_games: "../src/USK_6.png",
    beatingTime_games: {
        main_game_or_story: "17-18 hours",
        hundred_percent: null,
    }
},
{
    id: 2,
    image_games: {
        src: "../src/AC.png",
        alt: "Assassin's Creed",
        title: "AC",
    },
    name_games: "Assassin's Creed",
    release_games: "13/11/2007",
    platform_games: ["Microsoft Windows", "Playstation 3", "Xbox 360"],
    description_games: "We are in year 1191 A.D. The third crusade tears apart the Holy Land. You - as Altaïr - have to stop the hostility by taking on both parties to the conflict.",
    score_games: "Metascore: 81, User Score: 7.6 (According to metacritic.com)",
    genre_games: "Adventure; Platform",
    USK_games: "../src/USK_16.png",
    beatingTime_games: {
        main_game_or_story: "15 hours",
        hundred_percent: "31 hours",
    }
},
{
    id: 3,
    image_games: {
        src: "../src/Frogger.png",
        alt: "Frogger",
        title: "Frogger",
    },
    name_games: "Frogger",
    release_games: "05/06/1981",
    platform_games: ["Arcade"],
    description_games: "The object of the game is to direct frogs to their homes one by one. To do this, each frog must avoid cars while crossing a busy road and navigate a river full of hazards. Skillful players may obtain some bonuses along the way.",
    score_games: null,
    genre_games: "Action",
    USK_games: "../src/USK_0.png",
    beatingTime_games: {
        main_game_or_story: "21 minutes",
        hundred_percent: "2 hours",
    }
},
{
    id: 4,
    image_games: {
        src: "../src/Gotham_Knights.png",
        alt: "Gotham Knights",
        title: "Gotham Knights",
    },
    name_games: "Gotham Knights",
    release_games: "21/10/2021",
    platform_games: ["PlayStation 5", "Xbox Series", "Microsoft Windows"],
    description_games: "Introducing an original story set in DC’s Batman Universe, Gotham Knights offers a dynamic and interactive Gotham City where an exploding criminal element has swept through the streets. With the Belfry as their base of operations, this new era of heroes will solve mysteries that connect the darkest chapters in the city’s history and must defeat notorious villains in epic confrontations. Players must save Gotham from a descent into chaos and reinvent themselves into their own version of the Dark Knight.",
    score_games: "Metascore: 65, User Score: 4.8 (According to metacritic.com)",
    genre_games: "Fighting game, Action-RPG, Adventure",
    USK_genre: "../src/USK_16.png",
    beatingTime_games: {
        main_game_or_story: "16 hours",
        hundred_percent: "43 hours",
    }
},
{
    id: 5,
    image_games: {
        src: "../src/Metal_gear_solid.png",
        alt: "Metal Gear Solid",
        title: "Metal Gear Solid",
    },
    name_games: "Metal Gear Solid",
    release_games: "03/09/1998",
    platform_games: ["PlayStation", "PlayStation 3", "Microsoft Windows"],
    description_games: "Metal Gear Solid is a stealth game created by Hideo Kojima which follows the MSX2 video game Metal Gear and Metal Gear 2: Solid Snake. Despite a transition to 3D, Metal Gear Solid's gameplay remains similar to his predecessors. The game utilizes a traditional top-down view and the player must navigate the protagonist Solid Snake through the game's areas without being detected. Detection will set off an alarm which draws armed enemies to his location. Conversations with Snake's allies and cutscenes are used extensively to advance the plot and gain more insight into it. Metal Gear Solid is regarded as one of the greatest and most important video game of all time, and helped popularize the stealth genre and in-engine cinematic cutscenes.",
    score_games: "Metascore: 94, User Score: 8.3 (According to metacritic)",
    genre_games: "Stealth, Shooter, Action-Adventure",
    USK_games: "../src/USK_12.png",
    beatingTime_games: {
        main_game_or_story: "11.5 hours",
        hundred_percent: "16 hours",
    }
},
{
    id: 6,
    image_games: {
        src: "../src/Monster_Hunter_World.png",
        alt: "Monster Hunter World",
        title: "Monster Hunter World",
    },
    name_games: "Monster Hunter World",
    release_games: "26/01/2018",
    platform_games: ["PlayStation 4", "Xbox One", "Microsoft Windows"],
    description_games: "Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!",
    score_games: "Metascore: 90, User Score: 7.7 (According to metacritic.com)",
    genre_games: "Action-RPG, Shooter, Fighting Game, Action-Adventure",
    USK_games: "../src/USK_12.png",
    beatingTime_games: {
        main_game_or_story: "48 hours",
        hundred_percent: "392 hours",
    }
},
{
    id: 7,
    image_games: {
        src: "../src/Red_Dead_Redemption_2.png",
        alt: "Read Dead Redemption 2",
        title: "RDR2",
    },
    name_games: "Red Dead Redemption 2",
    release_games: "26/10/2018",
    platform_games: ["PlayStation 4", "Xbox One", "Microsoft Windows"],
    description_games: "Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
    score_games: "Metascore: 97, User Score: 8.6 (According to metacritic.com)",
    genre_games: "Action-Adventure, Open World",
    USK_games: "../src/USK_18.png",
    beatingTime_games: {
        main_game_or_story: "50 hours",
        hundred_percent: "175 hours",
    }
},
{
    id: 8,
    image_games: {
        src: "../src/Star_Wars_KOTOR.png",
        alt: "Star Wars: Knights of the old Republic",
        title: "Star Wars KOTOR",
    },
    name_games: "Star Wars Knight of the old Republic",
    release_games: "18/11/2003",
    platform_games: ["Microsoft Windows", "Xbox", "macOS", "iOS", "Android", "Linux", "PlayStation 5", "Nintendo Switch"],
    description_games: "Choose Your Path! Set 4,000 years before the Galactic Empire, you are the last hope for the Jedi Order and the Republic - can you master the ways of the Force to become their savior? Or will you fall to the dark side and achieve ultimate power? Hero, villain, peacekeeper, or chaos-bringer... you and your party will determine the fate of the galaxy! Star Wars: Knights of the Old Republic is a role-playing video game. Players will be able to create their own characters and be able to choose what gender, appearance, class, skills, attributes, and feats they have throughout the game - no two characters will be the same!",
    score_games: "Metascore: 93, User Score: 9.0 (According to metacriti.com)",
    USK_games: "../src/USK_12.png",
    beatingTime_games: {
        main_game_or_story: "29 hours",
        hundred_percent: "36 hours",
    }
},
{
    id: 9,
    image_games: {
        src: "../src/TLOU.png",
        alt: "The Last of Us",
        title: "TLOU",
    },
    name_games: "The Last of Us",
    release_games: "14/06/2013",
    platform_games: ["PlayStation 3", "PlayStation 4", "PlayStation 5"],
    description_games: "A third person shooter/stealth/survival hybrid, in which twenty years after the outbreak of a parasitic fungus which takes over the neural functions of humans, Joel, a Texan with a tragic familial past, finds himself responsible with smuggling a fourteen year old girl named Ellie to a militia group called the Fireflies, while avoiding strict and deadly authorities, infected fungal hosts and other violent survivors.",
    score_games: "Metascore: 95, User Score. 9.2 (According to metacritic.com)",
    USK_games: "../src/USK_18.png",
    beatingTime_games: {
        main_game_or_story: "15 hours",
        hundred_percent: "22 hours",
    }
},
{
    id: 10,
    image_games: {
        src: "../src/The_Sims.png",
        alt: "The Sims",
        title: "The Sims",
    },
    name_games: "The Sims",
    release_games: "04/02/2000",
    platform_games: ["Life-Simulation"],
    description_games: "The Sims is a life-building simulation with emphasis on intimate details of individual characters rather than expansion of an entire society or civilization. You are in control of nearly every aspect of the lives of the individuals who make up your chosen population in the neighborhood. Characters are developed from the ground up and you infuse and mold them with personalities, looks, desires, moods, urges, living arrangements, career and personal choices, life styles, and reactions.",
    score_games: "Metascore: 92, User Score. 7.9 (According to metacritic.com",
    USK_games: "../src/USK_6.png",
    beatingTime_games: {
        main_game_or_story: "35 hours",
        hundred_percent: null,
    }
}
]
// const params = new URLSearchParams(localStorage.setItem(div_games, game[id]));
// const id = params.get('id');
// const id = 0;
console.log(id);

const id = new URLSearchParams(window.location.search).get('id');

requestTextWithGET();

async function requestTextWithGET(url) {

    const url = "http://127.0.0.1:3000" + `/getGame?id=${id}`;
    const response = await fetch(url);
    console.log('Response', response); // komplettes Response Objekt
    game = await response.json();
    console.log(game);
    generateGameInfo(game);
}

function generateGameInfo(game) {

    // let id = id;
    let div_image_games = document.createElement('div');
    div_image_games.id = "image";
    let image_games = document.createElement('img');
    image_games.src = game[id].image_games.src;
    image_games.alt = game[id].image_games.alt;
    image_games.title = game[id].image_games.title;
    let cover_image_games = div_image_games.appendChild(image_games);

    let div_essential_games = document.createElement('div');
    div_essential_games.className = "essential";
    let div_grid_essential_games = document.createElement('div');
    div_grid_essential_games.className = "grid-essential";
    let div_grid_item_essential1_games = document.createElement('div');
    div_grid_item_essential1_games.className = "grid-item-essential";
    let u_name_games = document.createElement('u');
    u_name_games.textContent = "Name:";
    let br_name_games = document.createElement('br');
    let name_games = game[id].name_games;
    br_name_games.append(name_games);
    u_name_games.appendChild(br_name_games);
    let h3_name_games = document.createElement('h3');
    h3_name_games.appendChild(u_name_games);
    let p_name_games = document.createElement('p');
    p_name_games.appendChild(h3_name_games);
    div_grid_item_essential1_games.append(p_name_games);

    let div_grid_item_essential2_games = document.createElement('div');
    div_grid_item_essential2_games.className = "grid-essential";
    let u_release_games = document.createElement('u');
    u_release_games.textContent = "Release date:";
    let br_release_games = document.createElement('br');
    let release_games = game[id].release_games;
    br_release_games.append(release_games);
    u_release_games.appendChild(br_release_games);
    let h3_release_games = document.createElement('h3');
    h3_release_games.appendChild(u_release_games);
    let p_release_games = document.createElement('p');
    p_release_games.appendChild(h3_release_games);
    div_grid_item_essential2_games.append(p_release_games);

    let div_grid_item_essential3_games = document.createElement('div');
    div_grid_item_essential3_games.className = "grid-essential";
    let u_platform_games = document.createElement('u');
    u_platform_games.textContent = "Platform(s)";
    let h3_platform_games = document.createElement('h3');
    h3_platform_games.className = "platform";
    h3_platform_games.appendChild(u_platform_games);
    let p_platform_games = document.createElement('p');
    p_platform_games.appendChild(h3_platform_games);
    let ul_games = document.createElement('ul');
    let li_games = document.createElement('li');
    let platform_games = game[id].platform_games;
    li_games.append(platform_games);
    ul_games.appendChild(li_games);
    div_grid_item_essential3_games.append(p_platform_games, ul_games);
    div_grid_essential_games.append(div_grid_item_essential1_games, div_grid_item_essential2_games, div_grid_item_essential3_games);
    div_essential_games.appendChild(div_grid_essential_games);
    let div_further_games = document.createElement('div');

    div_further_games.className = "further";
    let div_grid_further_games = document.createElement('div');
    div_grid_further_games.className = "grid-further";
    let div_grid_item_further1_games = document.createElement('div');
    div_grid_item_further1_games.className = "grid-item-further";
    let u_description_games = document.createElement('u');
    u_description_games.textContent = "Description"
    let p_description_games = document.createElement('p');
    let description_games = game[id].description_games;
    p_description_games.append(description_games);
    // u_description_games.appendChild(br_description_games);
    let h3_description_games = document.createElement('h3');
    h3_description_games.appendChild(u_description_games);
    // let p_description_games = document.createElement('p');
    // p_description_games.appendChild(h3_description_games);
    div_grid_item_further1_games.append(h3_description_games, p_description_games);

    // div_further_games.className = "further";
    // let div_grid_further_games = document.createElement('div');
    //     div_grid_further_games.className = "grid-further";
    //     let div_grid_item_further1_games = document.createElement('div');
    //         div_grid_item_further1_games.className = "grid-item-further";
    //         let u_description_games = document.createElement('u');
    //             u_description_games.textContent = "Description"
    //             let br_description_games = document.createElement('p');
    //                 let description_games = game[id].description_games;
    //                 br_description_games.append(description_games);
    //             u_description_games.appendChild(br_description_games);
    //         let h3_description_games = document.createElement('h3');
    //             h3_description_games.appendChild(u_description_games);
    //         let p_description_games = document.createElement('p');
    //             p_description_games.appendChild(h3_description_games);
    //     div_grid_item_further1_games.appendChild(p_description_games);

    let div_grid_item_further2_games = document.createElement('div');
    div_grid_item_further2_games.className = "grid-item-further";
    let u_score_games = document.createElement('u');
    u_score_games.textContent = "Score";
    let br_score_games = document.createElement('br');
    let score_games = game[id].score_games;
    br_score_games.append(score_games);
    u_score_games.appendChild(br_score_games);
    let h3_score_games = document.createElement('h3');
    h3_score_games.appendChild(u_score_games);
    let p_score_games = document.createElement('p');
    p_score_games.appendChild(h3_score_games);
    div_grid_item_further2_games.appendChild(p_score_games);

    let div_grid_item_further3_games = document.createElement('div');
    div_grid_item_further3_games.className = "grid-item-further";
    let u_genre_games = document.createElement('u');
    u_genre_games.textContent = "Genre";
    let br_genre_games = document.createElement('br');
    let genre_games = game[id].genre_games;
    br_genre_games.append(genre_games);
    u_genre_games.appendChild(br_genre_games);
    let h3_genre_games = document.createElement('h3');
    h3_genre_games.appendChild(u_genre_games);
    let p_genre_games = document.createElement('p');
    p_genre_games.appendChild(h3_genre_games);
    div_grid_item_further3_games.appendChild(p_genre_games);

    let div_grid_item_further4_games = document.createElement('div');
    div_grid_item_further4_games.className = "grid-item-further";
    let u_USK_games = document.createElement('u');
    u_USK_games.textContent = "USK";
    let br_USK_games = document.createElement('br');
    let USK_games = game[id].USK_games;
    br_USK_games.append(USK_games);
    u_USK_games.appendChild(br_USK_games);
    let h3_USK_games = document.createElement('h3');
    h3_USK_games.appendChild(u_USK_games);
    let p_USK_games = document.createElement('p');
    p_USK_games.appendChild(h3_USK_games);
    div_grid_item_further4_games.appendChild(p_USK_games);

    let div_grid_item_further5_games = document.createElement('div');
    div_grid_item_further5_games.className = "grid-item-further";
    let u_beatingTime_games = document.createElement('u');
    u_beatingTime_games.textContent = "Time to beat"
    let br_beatingTime_games = document.createElement('br');
    let beatingTime_games_main = document.createElement('h4')
    beatingTime_games_main.textContent = "Main/Story:";
    let br_beatingTime_games_main = document.createElement('br');
    let beatingTime_games_story = game[id].beatingTime_games.main_game_or_story;
    br_beatingTime_games_main.append(beatingTime_games_story);
    let beatingTime_games_hundred = document.createElement('h4')
    beatingTime_games_hundred.textContent = "100%:";
    let br_beatingTime_games_hundred = document.createElement('br');
    let br_beatingTime_games_complete = game[id].hundred_percent;
    br_beatingTime_games_hundred.append(br_beatingTime_games_complete);
    br_beatingTime_games.append(beatingTime_games_main, beatingTime_games_hundred);
    u_beatingTime_games.appendChild(br_beatingTime_games);
    let h3_beatingTime_games = document.createElement('h3');
    h3_beatingTime_games.appendChild(u_beatingTime_games);
    let p_beatingTime_games = document.createElement('p');
    p_beatingTime_games.appendChild(h3_beatingTime_games);
    div_grid_item_further5_games.appendChild(p_beatingTime_games);
    div_grid_further_games.append(div_grid_item_further1_games, div_grid_item_further2_games, div_grid_item_further3_games, div_grid_item_further4_games, div_grid_item_further5_games);
    div_further_games.appendChild(div_grid_further_games);

    let div_trailer = document.createElement('div');
    div_trailer.className = "slider";
    let u_trailer = document.createElement('u');
    u_trailer.textContent = "Trailer";
    let h1_trailer = document.createElement('h1');
    h1_trailer.appendChild(u_trailer);
    let div_slides = document.createElement('div');
    div_slides.className = "slides";
    let input1 = document.createElement('input');
    input1.type = "radio";
    input1.name = "radio-button";
    input1.id = "radio01";
    let input2 = document.createElement('input');
    input2.type = "radio";
    input2.name = "radio-button";
    input2.id = "radio02";
    let input3 = document.createElement('input');
    input3.type = "radio";
    input3.name = "radio-button";
    input3.id = "radio03";
    let div_slide1 = document.createElement('div');
    div_slide1.className = "slide first";
    let div_slide2 = document.createElement('div');
    div_slide2.className = "slide";
    let div_slide3 = document.createElement('div');
    div_slide3.className = "slide"
    div_slides.append(input1, input2, input3);
    div_slides.append(div_slide1, div_slide2, div_slide3);
    let div_navigation = document.createElement('div');
    div_navigation.className = "navigation";
    let label1 = document.createElement('label');
    label1.htmlFor = 'radio01';
    label1.className = "btn"
    let label2 = document.createElement('label');
    label2.htmlFor = 'radio02';
    label2.className = "btn";
    let label3 = document.createElement('label');
    label3.htmlFor = 'radio03';
    label3.className = "btn";
    div_navigation.append(label1, label2, label3);
    div_trailer.append(div_slides, div_navigation);

    div_games.id = game[id].id;
    div_games.append(div_image_games, div_essential_games, div_further_games, div_trailer);

    console.log(div_games);


}

