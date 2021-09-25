const userInput = document.getElementById("user-input");
const submit = document.getElementById("submit");
const table = document.getElementById("table");

submit.addEventListener("click", event => {
    event.preventDefault();
    console.log('Clicked')
    if(
        !userInput.value
    ){
        window.alert('You need to provide a value')
    }else{
        let url = `http://localhost:5000/subreddit/${userInput.value}`
        window.alert(url)
        // axios.get(url).then(res => console.log(res))
    }
});
