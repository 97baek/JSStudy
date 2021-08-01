function Song(title, writer, singer, released) {
  this.title = title;
  this.writer = writer;
  this.singer = singer;
  this.released = released;
}

const song1 = new Song('Lose Yourself', 'Eminem', 'Eminem', '2002-01-01');
const song2 = new Song('Love Yourself', 'Jusin Bieber', 'Jusin Bieber', '2015-01-01');

console.log(song1, song2);
