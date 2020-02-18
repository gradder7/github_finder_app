//initialise
const github=new Github;
const ui= new UI;

//search input
const searchUser=document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup',(e)=>{
    //get input text
    const userText=e.target.value;
    if(userText!==''){
    //make http call
    github.getUser(userText)
    .then(data=>{
        if(data.profile.message==='Not Found'){
            //show alert
            ui.showAlert('user not found', 'alert alert-dismissible alert-warning');

        }else{
            //show the profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
    })
    } else{
        //clear the profile.
        ui.clearProfile();
    }
});