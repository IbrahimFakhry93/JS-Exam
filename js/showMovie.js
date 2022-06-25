export class ShowMovie{
    constructor(){
        this.moviesGrid=document.getElementById("moviesGrid");
        this.movieName=document.getElementById("searchMovie"); 
        this.movieSearch=document.getElementById("movieSearch"); 
        this.NowPlaying=document.getElementById("NowPlaying");
        this.Popular=document.getElementById("Popular");
        this.TopRated=document.getElementById("TopRated");
        this.Trending=document.getElementById("Trending");
        this.Upcoming=document.getElementById("Upcoming");
        this.contactUs=document.getElementById("ContactUs");

        this.getNowPlayingMovies();

        this.NowPlaying.addEventListener('click',this.getNowPlayingMovies.bind(this));
        this.Popular.addEventListener('click',this.getPopularMovies.bind(this));
        this.TopRated.addEventListener('click',this.getTopRatedMovies.bind(this));
        this.Upcoming.addEventListener('click',this.getUpcomingMovies.bind(this));
        this.Trending.addEventListener('click',this.getTrendingMovies.bind(this));

        
            
          
           
        
      // this.contactUs.addEventListener('click',this.scroll.bind(this));
        
       this.contactUs.addEventListener('click',function(e){
        let selectItem=e.target;
        console.log(selectItem);
        this.scroll(selectItem);
       });

        this.movieName.addEventListener('keyup',this.search.bind(this));
        this.movieSearch.addEventListener('keyup',this.searchMovie.bind(this));
        this.movieName.addEventListener('input',this.emptyInput.bind(this));
        this.movieSearch.addEventListener('input',this.emptyInput.bind(this));
     
    }
    scroll(selectItem){
        console.log(selectItem)
        let clickItem=$(selectItem).attr('href');
        console.log(clickItem);
        let ContactSection=$(clickItem).offset().top;
        console.log(ContactSection);
        $("html,body").animate({scrollTop:ContactSection},500);
    }

    displayMovies(response){
       // console.log("hello method");
       let box=``;
       for (let i = 0; i <response.length; i++) {
          box+=`<div class="col-md-4">
                <div class="item position-relative bg-success overflow-hidden">
                    <img src="https://image.tmdb.org/t/p/w500/${response[i].poster_path}" class="w-100">
                    <div class="img-caption text-center py-5 px-1 d-flex justify-content-center align-items-center">
                    <div class="content">
                       <h2 class="mb-3">${response[i].original_title}</h2>
                       <p class="mb-3">${response[i].overview}</p>
                       <p class=" mb-3"><span class="d-inline-block pe-1">rate:</span>${response[i].vote_average}</p>
                       <p class="mb-3">${response[i].release_date}</p>
                     </div>
                     </div>
                </div>
                </div>
                `
       }
       this.moviesGrid.innerHTML=box;
    }
    async getNowPlayingMovies(){
        let API=`https://api.themoviedb.org/3/movie/now_playing?api_key=82793e81263e46c8b3bd8d8908202838`;
      let response = await this.fetchAPI(API);// declare response array to receive the API result array 
     
    //    console.log(response);
        this.displayMovies(response);
        return response;

    }
    async getPopularMovies(){
        
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
        let API=`https://api.themoviedb.org/3/movie/popular?api_key=82793e81263e46c8b3bd8d8908202838`;
        let response = await this.fetchAPI(API);// declare response array to receive the API result array 
       // console.log(response);
        this.displayMovies(response)
    }
    async getTopRatedMovies(){
        let API=`https://api.themoviedb.org/3/movie/top_rated?api_key=82793e81263e46c8b3bd8d8908202838`;
        let response = await this.fetchAPI(API);// declare response array to receive the API result array 
      
        this.displayMovies(response)
    }
    async getTrendingMovies(){
        let API=`https://api.themoviedb.org/3/trending/all/day?api_key=82793e81263e46c8b3bd8d8908202838`;
        let response = await this.fetchAPI(API);// declare response array to receive the API result array 
        
        this.displayMovies(response)
    }
    async getUpcomingMovies(){
        let API=`https://api.themoviedb.org/3/movie/upcoming?api_key=82793e81263e46c8b3bd8d8908202838`;
        let response = await this.fetchAPI(API);// declare response array to receive the API result array 
        
        this.displayMovies(response)
    }
    async fetchAPI(API){
        let response=await fetch(API);
        let result=await response.json(); // convert API response to JSON format
      //  console.log(result.results);   
        return result.results;     
  }
async search(){
    console.log("hi search");
    let moviesList= await this.getNowPlayingMovies();
    console.log(moviesList);
    let searchList=[];
    for (let i=0; i<moviesList.length;i++){
        if(moviesList[i].original_title.toLowerCase().includes(this.movieName.value.toLowerCase())){
            console.log("hi search");
            searchList.push(moviesList[i]);  
    }
}
console.log(searchList)
this.displayMovies(searchList);
 }
    async searchMovie(){
        let API=`https://api.themoviedb.org/3/search/movie?api_key=82793e81263e46c8b3bd8d8908202838&query=${this.movieSearch.value}`;
        let response = await this.fetchAPI(API)
        this.displayMovies(response)
    }


    emptyInput(){
        if(this.movieName.value=="" || this.movieSearch.value=="" ){
            this.getNowPlayingMovies();
        }
    }
 

}

