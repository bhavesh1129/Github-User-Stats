const searchBox = document.querySelector("input[type='text']");
const searchButton = document.querySelector("button");
const RepoCount = document.querySelector(".repo-num");
const Followers = document.querySelector(".followers");
const Following = document.querySelector(".following");


searchButton.onclick = () => {
    let userName = searchBox.value.toLowerCase();
    let url = 'https://api.github.com/users/' + userName;

    axios.get(url)
        .then(function(res) {
            console.log(res);

            let totalRepo = res.data.public_repos;
            RepoCount.innerHTML = totalRepo;

            let followersCount = res.data.followers;
            Followers.innerHTML = followersCount;

            let followingCount = res.data.following;
            Following.innerHTML = followingCount;
        })
        .catch(function(err) {
            console.log(err);
            alert("Invalid Username!");
        });

    searchBox.value = "";
}