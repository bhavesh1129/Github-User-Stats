const searchBox = document.querySelector("input[type='text']");
const searchButton = document.querySelector("button");
const RepoCount = document.querySelector(".repo-num");
const Followers = document.querySelector(".followers");
const Following = document.querySelector(".following");


// Search Button
searchButton.onclick = () => {

    // Entered Username
    let userName = searchBox.value.toLowerCase();

    // Required url
    let url = 'https://api.github.com/users/' + userName;

    // Fetching data through axios
    axios.get(url)
        .then(function(res) {

            //Whole data
            console.log(res);

            //Repositries Count
            let totalRepo = res.data.public_repos;
            RepoCount.innerHTML = totalRepo;

            //Followers Count
            let followersCount = res.data.followers;
            Followers.innerHTML = followersCount;

            //Following Count
            let followingCount = res.data.following;
            Following.innerHTML = followingCount;
        })

    //Error
    .catch(function(err) {
        console.log(err);

        //If username is incorrect
        alert("Invalid Username!");
    });

    //Re-initialise the search box to empty string
    searchBox.value = "";
}
