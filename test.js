// API Read Access Token (v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzFlYzQzZWIxMzQ1N2Y1NTI5MWVkNjE4NzQ3M2JmMCIsInN1YiI6IjYwZDlhYTI4ZDExZTBlMDA1ZmFhYTVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QVS7DEMuUkfminu6Jhp9n-JvOttD3hx6iRoCnHJCjXM
// Example API Request            : https://api.themoviedb.org/3/movie/550?api_key=371ec43eb13457f55291ed6187473bf0
// API Key (v3 auth)              : 371ec43eb13457f55291ed6187473bf0

var t1=document.getElementById("t1");
var t2= document.getElementById("t2");
setInterval(myheading,2000);

function myheading(){
       t1.innerHTML="Scroll Down For";
       t2.innerHTML="More Hits";
    
}

setInterval(myheading2,4000);

function myheading2(){
    t1.innerHTML="STREAM ALL THE POPULAR";
    t2.innerHTML="MOVIES ON THE GO";
 
}


var search=document.getElementById("searchbox");
var imgArr=document.getElementsByClassName("movie_img");
var infoArr=document.getElementsByClassName("name");

search.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    console.log("pressed enter");
    getQuery(search.value)
        .then(function(results){
            console.log("results :",results);
            var filteredResults=results.filter(result=>result.backdrop_path);
            for(let i=0; i<8;i++){
                imgArr[i].src="https://image.tmdb.org/t/p/w500"+filteredResults[i].backdrop_path;
                infoArr[i].innerHTML=`<strong>${filteredResults[i].original_title}</strong>`;
            }
        })
        .catch(err=>console.error(err));
  }
}); 

const getQuery=async function(query){ 
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=371ec43eb13457f55291ed6187473bf0&query=${query}`);
    const data=await response.json();
    if(response.status!==200){
        throw new Error("===== Can't reach TMDB =====");
    }
    return data.results;
}

const getQueryDetails=async function(query){ 
    const response=await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=371ec43eb13457f55291ed6187473bf0&query=${query}`);
    const data=await response.json();
    if(response.status!==200){
        throw new Error("===== Can't reach TMDB =====");
    }
    return data.results;
}

