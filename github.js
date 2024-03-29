class Github{
    constructor(){
        this.client_id='b3da58c52ee19faa25e5';
        this.client_secret='d992a8b8ecebefad7e45533aba0f105f99d355db'
        this.repos_count=5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();
        const repos= await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}