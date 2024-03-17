function make_album (artist: string ,title :string,tracks?:number){

const album : {artist: string ,title :string, tracks?:number} ={
artist : artist,
title :title

}
if(tracks !== undefined){
    album.tracks = tracks;
}
return album;
}
const album01 = make_album('artist 01' ,'albumtitle 01')
console.log(album01)
const album02 = make_album('artist 02' ,'albumtitle 02')
console.log(album02)
const album03 = make_album('artist 03' ,'albumtitle 03' ,12)
console.log(album03);



