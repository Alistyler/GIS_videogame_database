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
            u_database.textContent = "Database";
        let a_database = document.createElement('a');
            a_database.href ='database.html';
            a_database.appendChild(u_database);
        let title2_database = document.createElement('h2');
            title2_database.appendChild(a_database);
        let li_database = document.createElement('li');
            li_database.appendChild(title2_database);
        let database = ul.append(li_database);

        let u_suggestion = document.createElement('u');
            u_suggestion.textContent = "Suggestion";
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
                    u_p1.textContent = "List";
                let title2_p1 = document.createElement('h2');
                    title2_p1.appendChild(u_p1);
                let option_p1 = document.createElement('option');
                    option_p1.value = "p1";
                    option_p1.appendChild(title2_p1);
                select.append(option_p1);

                let u_p2 = document.createElement('u');
                    u_p2.textContent = "History";
                let title2_p2 = document.createElement('h2');
                    title2_p2.appendChild(u_p2);
                let option_p2 = document.createElement('option');
                    option_p2.value = "p2";
                    option_p2.appendChild(title2_p2);
                select.append(option_p2);

                let u_p3 = document.createElement('u');
                    u_p3.textContent = "About me";
                let a_about = document.createElement('a');
                    a_about.href = 'about.html';
                    a_about.appendChild(u_p3);
                let title2_p3 = document.createElement('h2');
                    title2_p3.appendChild(a_about);
                let option_p3 = document.createElement('option');
                    option_p3.value = "p3";
                    option_p3.appendChild(title2_p3);
                select.append(option_p3);
            let li_select = document.createElement('li');
                li_select.appendChild(select);
        let more = ul.append(li_select);

        let title2_search = document.createElement('h2');
            title2_search.textContent = "Search";
        let li_search = document.createElement('li');
            li_search.appendChild(title2_search);
        let search = ul.appendChild(li_search);

        let u_up = document.createElement('u');
            u_up.textContent = "SIGN UP";
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
            u_in.textContent = "SIGN IN";
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