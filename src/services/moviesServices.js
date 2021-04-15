const movies = [{
    _id: "1",
    title: "hiphop",
    name:"Am not Afraid",
    status:"Activated"
   },
   {
    _id: "2",
    title: "Rnb",
    name:"Am in love",
    status:"Activated" 
   }];

   export function getMovies(){
       return movies;
   }
   export function getMovie(id){
       return movies.find(m => m._id ===id);
   }