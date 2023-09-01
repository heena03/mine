function talk(){
    var know = {
    "Who are you" : "I am hk the helper ",
    "who are you":" I am hk the helper",
    "how are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "Hello" : "Hii, hk here",
    "hello":"hey, hk here",
    "what is your name" : "my name is hk",
    "hii":"hello, what can i do for you"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }