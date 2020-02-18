class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML=`
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_black" class="btn btn-primary btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
        <span class="badge badge-success">Folowers:${user.followers}</span>
        <span class="badge badge-info">Public Repos:${user.following}</span>
        <br><br>
        <ul class="list-group">
        <li class="list-group-item list-group-item-action ">Company:${user.company}</li>
        <li class="list-group-item list-group-item-action">Website/Blog:${user.blog}</li>
        <li class="list-group-item list-group-item-action">location:${user.location}</li>
        <li class="list-group-item list-group-item-action">Member Since:${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        <h3 class ="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos){
        let output='';
        repos.forEach(function(repo){
            output+=`
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers:${repo.watchers_count}</span>
        <span class="badge badge-success">Forks:${repo.forks_count}</span>
            </div>
            </div>
            </div>
            `;
        });
        //update in ui
        document.getElementById('repos').innerHTML=output;
    }
//show alert message
    showAlert(message, className){
        //clear any remaning alert
        this.clearAlert();
        //create dic
        const div= document.createElement('div');
        //add class
        div.className= className;

        //add text
        div.appendChild(document.createTextNode(message));

        //parent
        const container= document.querySelector('.searchContainer');

        //get the search box
        const search = document.querySelector('.search');
        //insert the alert
        container.insertBefore(div,search);

        //timeout after 3 sec
        setTimeout(()=>{
            this.clearAlert()
        },3000);
    }

    //clear alert message
    clearAlert(){
        const currentAlert=document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    //clear profile
    clearProfile(){
        this.profile.innerHTML='';
    }
}