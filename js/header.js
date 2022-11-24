let nav = document.createElement('nav');
    let a_index = document.createElement('a');
        a_index.href = 'index.html';
    let logo = document.createElement('img');
        logo.src = "src/Logo.jpeg";
        logo.height = "88.375";
        logo.width = "58.6875";
        logo.alt = "mein Logo";
        logo.title = "logo";
        logo.className = 'logo';
        a_index.appendChild(logo);
    let index = nav.appendChild(a_index);
        
    let ul = document.createElement('ul');
        let u_database = document.createElement('u');
        let a_database = document.createElement('a');
            a_database.href ='database.html';
            a_database.appendChild(u_database);
        let title2_database = document.createElement('h2');
            title2_database.appendChild(a_database);
        let li_database = document.createElement('li');
            li_database.appendChild(title2_database);
        let database = ul.append(li_database);

        let u_suggestion = document.createElement('u');
        let a_suggestion = document.createElement('a');
            a_suggestion.href ='suggestion.html';
            a_suggestion.appendChild(u_suggestion);
        let title2_suggestion = document.createElement('h2');
            title2_suggestion.appendChild(a_suggestion);
        let li_suggestion = document.createElement('li');
            li_suggestion.appendChild(title2_suggestion);
        let suggestion = ul.append(li_suggestion);
        
        let select = document.createElement('select');
            select.name = "more";
                let u_p1 = document.createElement('u');
                let title2_p1 = document.createElement('h2');
                    title2_p1.appendChild(u_p1);
                let option_p1 = document.createElement('option');
                    option_p1.value = "p1";
                    option_p1.appendChild(title2_p1);
                select.append(option_p1);

                let u_p2 = document.createElement('u');
                let title2_p2 = document.createElement('h2');
                    title2_p2.appendChild(u_p2);
                let option_p2 = document.createElement('option');
                    option_p2.value = "p2";
                    option_p2.appendChild(title2_p2);
                select.append(option_p2);

                let u_p3 = document.createElement('u');
                let a_about = document.createElement('a');
                    a_about.href = 'about.html';
                    a_about.appendChild(u_p3);
                let title2_p3 = document.createElement('h2');
                    title2_p3.appendChild(a_about);
                let option_p3 = document.createElement('option');
                    option_p3.value = "p3";
                    option_p3.appendChild(title2_p3);
                select.append(option_p3);
        let more = ul.append(select);

        let title2_search = document.createElement('h2');
        let li_search = document.createElement('li');
            li_search.appendChild(title2_search);
        let search = ul.appendChild(li_search);

        let u_up = document.createElement('u');
        let a_up = document.createElement('a');
            a_up.href = 'sign_up.html';
            a_up.appendChild(u_up);
        let title2_up = document.createElement('h2');
            title2_up.className = "up";
            title2_up.appendChild(a_up);
        let li_up = document.createElement('li');
            li_up.appendChild(title2_up);
        let sign_up = ul.append(li_up);

        let u_in = document.createElement('u');
        let a_in = document.createElement('a');
            a_in.href = 'sign_in.html';
            a_in.appendChild(u_in);
        let title2_in = document.createElement('h2');
            title2_in.appendChild(a_in);
            title2_in.className="in";
        let li_in = document.createElement('li');
            li_in.appendChild(title2_in);
        let sign_in = ul.append(li_in);
        nav.appendChild(ul);
let header = document.querySelector('header');
    header.appendChild(nav);
    
console.log(header);


/* header games*/
/*let nav_games = document.createElement('nav');
    let a_index_games = document.createElement('a');
        a_index_games.href = '../index.html';
    let logo_games = document.createElement('img');
        logo_games.src = "../src/Logo.jpeg";
        logo_games.height = "88.375";
        logo_games.width = "58.6875";
        logo_games.alt = "mein Logo";
        logo_games.title = "logo";
        logo_games.className = 'logo';
        a_index_games.appendChild(logo);
    let index_games = nav_games.appendChild(a_index_games);
        
    let ul_games = document.createElement('ul');
        let u_database_games = document.createElement('u');
        let a_database_games = document.createElement('a');
            a_database_games.href ='../database.html';
            a_database_games.appendChild(u_database_games);
        let title2_database_games = document.createElement('h2');
            title2_database_games.appendChild(a_database_games);
        let li_database_games = document.createElement('li');
            li_database_games.appendChild(title2_database_games);
        let database_games = ul_games.append(li_database_games);

        let u_suggestion_games = document.createElement('u');
        let a_suggestion_games = document.createElement('a');
            a_suggestion_games.href='../suggestion.html';
            a_suggestion_games.appendChild(u_suggestion_games);
        let title2_suggestion_games = document.createElement('h2');
            title2_suggestion_games.appendChild(a_suggestion_games);
        let li_suggestion_games = document.createElement('li');
            li_suggestion_games.appendChild(title2_suggestion_games);
        let suggestion_games = ul_games.append(li_suggestion_games);
        
        let select_games = document.createElement('select');
            select_games.name = "more";
                let u_p1_games = document.createElement('u');
                let title2_p1_games = document.createElement('h2');
                    title2_p1_games.appendChild(u_p1_games);
                let option_p1_games = document.createElement('option');
                    option_p1_games.value = "p1";
                    option_p1_games.appendChild(title2_p1_games);
                select_games.append(option_p1_games);

                let u_p2_games = document.createElement('u');
                let title2_p2_games = document.createElement('h2');
                    title2_p2_games.appendChild(u_p2_games);
                let option_p2_games = document.createElement('option');
                    option_p2_games.value = "p2";
                    option_p2_games.appendChild(title2_p2_games);
                select_games.append(option_p2_games);

                let u_p3_games = document.createElement('u');
                let a_about_games = document.createElement('a');
                    a_about_games.href = '../about.html';
                    a_about.appendChild(u_p3_games);
                let title2_p3_games = document.createElement('h2');
                    title2_p3_games.appendChild(a_about_games);
                let option_p3_games = document.createElement('option');
                    option_p3_games.value = "p3";
                    option_p3_games.appendChild(title2_p3_games);
                select_games.append(option_p3_games);
        let more_games = ul_games.append(select_games);

        let title2_search_games = document.createElement('h2');
        let li_search_games = document.createElement('li');
            li_search_games.appendChild(title2_search_games);
        let search_games = ul_games.appendChild(li_search_games);

        let u_up_games = document.createElement('u');
        let a_up_games = document.createElement('a');
            a_up_games.href = '../sign_up.html';
            a_up_games.appendChild(u_up_games);
        let title2_up_games = document.createElement('h2');
            title2_up_games.className = "up";
            title2_up_games.appendChild(a_up_games);
        let li_up_games = document.createElement('li');
            li_up_games.appendChild(title2_up_games);
        let sign_up_games = ul_games.append(li_up_games);

        let u_in_games = document.createElement('u');
        let a_in_games = document.createElement('a');
            a_in_games.href = '../sign_in.html';
            a_in_games.appendChild(u_in_games);
        let title2_in_games = document.createElement('h2');
            title2_in_games.appendChild(a_in_games);
            title2_in_games.className="in";
        let li_in_games = document.createElement('li');
            li_in_games.appendChild(title2_in_games);
        let sign_in_games = ul_games.append(li_in_games);
        nav_games.appendChild(ul_games);
let header_games = document.querySelector('header');
    header_games.appendChild(nav_games);
    
console.log(header_games);*/


/* document.getElementById('header').innerHTML = 
`<nav>
<a href = "index.html">
<img
    src = "src/Logo.jpeg"
    height = "88.375"
    width = "58.6875"
    alt = "mein Logo"
    title = "Logo"
    class = "logo"
/></a>
<ul>
    <li><h2><a href = "database.html"><u>Database</u></a></h2></li>
    <li><h2><a href = "suggestion.html"><u>Suggestion</u></h2></a></li>
    <li><h2><u>More</u></h2>
    <select name = "auswahl">
        <option value = "p1"><h2><u>List</u></h2></option>
        <option value = "p2"><h2><u>History</u></h2></option>
        <option value = "p3"><h2><a href = "about.html"><u>About me</u></a></h2></option>
    </select></li>
    <li><h2>Search</h2></li>
    <li><h2 class = "up"><a href = "sign_up.html"><u>SIGN UP</u></a></h2></li>
    <li><h2 class = "in"><a href = "sign_in.html"><u>SIGN IN</u></a></h2></li>
</ul>
</nav>`*/