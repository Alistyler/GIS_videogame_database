let div_image_games = document.createElement('div');
    div_image_games.id = "image";
    let image_games = document.createElement('img');
        image_games.src = "src/Among_us.png";
        image_games.alt = "Among us";
        image_games.title = "Among us";
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
                    let name_games = game[];
                    br_name_games.appendChild(name_games);
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
                    let release_games =  game[];
                    br_release_games.appendChild(release_games);
                u_release_games.appendChild(br_release_games);
            let h3_release_games = document.createElement('h3');
                h3_release_games.appendChild(u_release_games);
            let p_release_games = document.createElement('p');
                p_release_games.appendChild(h3_release_games);
            div_grid_item_essential2_games.append(p_release_games);

        let div_grid_item_essential3_games = document.createElement('div');
            div_grid_item_essential3_games.className = "grid-essential";
            let u_platform_games = document.createElement('u');
                let br_platform_games = document.createElement('br');
                    let platform_games = game[];
                    br_platform_games.appendChild(platform_games);
                u_platform_games.appendChild(br_platform_games);
                u_platform_games.textContent = "Platform(s)";
            let h3_platform_games = document.createElement('h3');
                h3_platform_games.className = "platform";
                h3_platform_games.appendChild(u_platform_games);
            let p_platform_games = document.createElement('p');
                p_platform_games.appendChild(h3_platform_games);
            let ul_games = document.createElement('ul');
                let li_games = document.createElement('li');
                    let Android = "Android";
                    let iOS = "iOS";
                    let Windows = "Microsoft Windows";
                    let Switch = "Nintendo Switch";
                    let PS4 = "Playstation 4";
                    let PS5 = "Playstation 5";
                    let One = "Xbox One";
                    let X_S = "Xbox Series X/S";
                    li_games.append(Android, iOS, Windows, Switch, PS4, PS5, One, X_S);
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
                    let br_descripton_games = document.createElement('br');
                        let description_games = game[];
                        br_descripton_games.appendChild(description_games);
                    u_description_games.appendChild(br_description_games);
                let h3_description_games = document.createElement('h3');
                    h3_description_games.appendChild(u_description_games);
                let p_description_games = document.createElement('p');
                    p_description_games.appendChild(h3_description_games);
            div_grid_item_further1_games.appendChild(p_description_games);
            let div_grid_item_further2_games = document.createElement('div');
                div_grid_item_further2_games.className = "grid-item-further";
                let u_score_games = document.createElement('u');
                    u_score_games.textContent = "Score";
                    let br_score_games = document.createElement('br');
                        let score_games = game[];
                        br_descripton_games.appendChild(score_games);
                    u_description_games.appendChild(br_score_games);
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
                        let genre_games = game[];
                        br_genre_games.appendChild(genre_games);
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
                        let USK_games = game[];
                        br_USK_games.appendChild(USK_games);
                    u_description_games.appendChild(br_USK_games);
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
                        let beatingTime_games = game[];
                        br_beatingTime_games.appendChild(beatingTime_games);
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

let div_games = document.querySelector('div');
    div_games.id = "Among_us";
    div_games.append(div_image_games, div_essential_games, div_further_games, div_trailer);

console.log(div_games);

//Array for games information
const game[{
    id: 1,
    name_games: "Among us", 
    release_games: "01/01/2000",
},
{
    id: 2,
    name_games: "Assassin's Creed",
    release_games: "01/01/2000",
},
{
    id: 3,
    name_games: "Frogger",
    release_games: "01/01/2007",
},
{
    id: 4,
    name_games: "Gotham Knights",
    release_games: "01/01/2000",
},
{
    id: 5,
    name_games: "Metal Gear Solid",
    release_games: "01/01/2000",
},
{
    id: 6,
    name_games: "Monster Hunter World",
    release_games: "01/01/2000",
},
{
    id: 7,
    name_games: "Red Dead Redemption 2",
    release_games: "01/01/2000",
},
{
    id: 8,
    name_games: "Star Wars Knight of the old Republic",
    release_games: "01/01/2000",
},
{
    id: 9,
    name_games: "The Last of Us",
    release_games: "01/01/2000",
},
{
    id: 10,
    name_games: "The Sims",
    release_games: "01/01/2000",
}
] 

//Funktion, um eentsprechendes Spiel anzuzeigen
start.addEventListener('click', changeText);

function Games(event){
    
}