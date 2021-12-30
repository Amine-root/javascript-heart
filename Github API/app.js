const APICall = 'https://api.github.com/users/';

const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');

async function dataGithub(utilisateur) {
    const response = await fetch(`${APICall}${utilisateur}`);
    const data = await response.json();
    //console.log(data);
    creationCarte(data);
}
//dataGitHub("Amine-root");

function creationCarte(user){
    
    const carteHTML = `
    <div class="carte">
        <img src="${user.avatar_url}" alt="icon-avatar" class="avatar">
        <h2>${user.name}</h2>
        <ul class="cont-infos">
            <li class="followers"> Followers : ${user.followers}</li>
            <li class="etoile"> Stars : ${user.public_repos}</li>
            <li class="bio"> Bio : ${user.bio}</li>
        </ul>
    </div> 
    `;
    affichage.innerHTML= carteHTML;
}

function logEvent (event) {
    event.preventDefault();
    if(inpRecherche.value.length > 0){

        dataGithub(inpRecherche.value);
        inpRecherche.value = "";
    }
  }
  
form.addEventListener('submit', logEvent);


/* form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inpRecherche.value.length > 0){

        dataGithub(inpRecherche.value);
        inpRecherche.value = "";
    }
}) */

