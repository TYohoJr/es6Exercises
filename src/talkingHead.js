class Song {

  constructor(artist, title){
    this.artist = artist;
    this.title = title;
  }

  getTitle(){
    return "title is: " + this.title + " by " + this.artist;
  }
}

var testSong = new Song("testArtist", "testTitle");
var stevieWonder = new Song("Stevie Wonder", "Song");

//console.log(testSong.getTitle());
//console.log(stevieWonder.getTitle());

export default Song;

//Exercise:

//Add a method to the Song class that returns the string "title is {title} by {artist}.
//Next, create an instance of it with your favorite Talking Heads song and
//use the method you just created to log the title of the song. Then, 
//create another instance of it with your favorite Stevie Wonder song and
//log the title of the song. Export the class using the es6 export method.
