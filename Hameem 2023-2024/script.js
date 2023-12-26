// API FROM TMBD

const api="api_key=53eaf0bf8647e9116400dafcf8e67115";

// base url of the site

const BaseUrl="https://api.themoviedb.org/3";
const banner_url="https://image.tmdb.org/t/p/original";

const Image_url="https://image.tmdb.org/t/p/w300";




//requests for moviees data

const requests={
    fetchTrending:`${BaseUrl}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals:`${BaseUrl}/discover/tv?${api}&with_network=213`,
    fetchActionMovies:`${BaseUrl}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies:`${BaseUrl}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies:`${BaseUrl}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies:`${BaseUrl}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries:`${BaseUrl}/discover/movie?${api}&with_genres=99`,

};

// used to truncate the string

function truncate(str,n){
    return str?.length>n?str.substr(0,n-1) + "...":str;    // agar string ziyada bada hoga tou string ko substring mai tood denge using terenary opertaor//
    
}

//banner

fetch(requests.fetchNetflixOriginals)
.then((res)=>res.json())                 // hamara jo data aaraha hai through netflix origginals usko json format mai convert karay ge

.then((data)=>{
    const setMovie=
            data.results[Math.floor(Math.random() * data.results.length-1)];        // background video ko randomly change krne ke liye

            var banner=document.getElementById("banner");
            var banner_title=document.getElementById("banner_title");
            var banner_desc=document.getElementById("banner_description");

            banner.style.backgroundImage=
            "url(" + banner_url + setMovie.backdrop_path+")";         //backdrop will set the path of the images or video ki ye aa kaha sai raha hai     
            banner_desc.innerText=truncate(setMovie.overview,150);
            banner_title.innerText=setMovie.name;
            
});

//movies rows

fetch(requests.fetchNetflixOriginals)
.then((res)=>res.json())

.then((data)=>{
    const headrow=document.getElementById("headrow");       // here we are creating a divison if movies that will change again adn again after we referesh our page
    const row=document.createElement("div");

    row.className="row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title=document.createElement("h2");

    title.className="row_title";
    title.innerText="NETFLIX ORIGINALS";

    row.appendChild(title);


    const row_posters=document.createElement("div");             //ye hamne banaya taki hamri images jo hain movie ki wo aati rahay aur change hoti rahay 
    row_posters.className="row_posters";
    row.appendChild(row_posters);


 // now abh hamay aik loop chalana hai jo ki khud movies aur posters ko replace krta jaye ga
 data.results.forEach((movie)=>{
    const poster=document.createElement("img");
    poster.className="row_posterLarge";    // image ka naam rakha

    var s=movie.name.replace(/\s+/g,""); // ye ham kar rahay hain taki movies jo hain wo idhar udhar na aaye

    poster.id=s;
    poster.src=Image_url+movie.poster_path;
    row_posters.appendChild(poster);
 });
});

// Fetching trending page

fetch(requests.fetchTrending)

.then((res)=> res.json())

.then((data)=>{
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");

    // const title=document.createElement("h2");
    row.className="row";
    headrow.appendChild(row);
    const title=document.createElement("h2");
    title.className="row_title";
    title.innerText="Top Rated";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);


    data.results.forEach((movie)=>{
        const poster=document.createElement("img");
        poster.className="row_posterLarge";    // image ka naam rakha
    
        var s2=movie.id; 
    
        poster.id=s2;
        poster.src=Image_url+movie.poster_path;
        row_posters.appendChild(poster);
     });




});

//action movies
fetch(requests.fetchActionMovies)

.then((res)=> res.json())

.then((data)=>{
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);
    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Action Movies";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);


    data.results.forEach((movie)=>{
        const poster=document.createElement("img");
        poster.className="row_poster";    
    
        var s2=movie.id; 
    
        poster.id=s2;
        poster.src=Image_url+movie.backdrop_path;              // for different images we have different backdrop path thats why we have given it in a loop for every image
        row_posters.appendChild(poster);
     });

});

//comedy movies

fetch(requests.fetchComedyMovies)

.then((res)=> res.json())

.then((data)=>{
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Comedy Movies";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);


    data.results.forEach((movie)=>{
        const poster=document.createElement("img");
        poster.className="row_poster";    
    
        var s2=movie.id; 
    
        poster.id=s2;
        poster.src=Image_url+movie.backdrop_path;
        row_posters.appendChild(poster);
     });
});

//horror movies
fetch(requests.fetchHorrorMovies)

.then((res)=> res.json())

.then((data)=>{
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Horror Movies";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);


    data.results.forEach((movie)=>{
        const poster=document.createElement("img");
        poster.className="row_poster";    
    
        var s2=movie.id; 
    
        poster.id=s2;
        poster.src=Image_url+movie.backdrop_path;
        row_posters.appendChild(poster);
     });
});

//Romance

fetch(requests.fetchRomanceMovies)

.then((res)=> res.json())

.then((data)=>{
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Romance Movies";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);


    data.results.forEach((movie)=>{
        const poster=document.createElement("img");
        poster.className="row_poster";    
    
        var s2=movie.id; 
    
        poster.id=s2;
        poster.src=Image_url+movie.backdrop_path;
        row_posters.appendChild(poster);
     });
});

//documenteries
fetch(requests.fetchDocumentaries)

.then((res)=> res.json())

.then((data)=>{
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Documentries";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);


    data.results.forEach((movie)=>{
        const poster=document.createElement("img");
        poster.className="row_poster";    
    
        var s2=movie.id; 
    
        poster.id=s2;
        poster.src=Image_url+movie.backdrop_path;
        row_posters.appendChild(poster);
     });
});


