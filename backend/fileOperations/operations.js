let fs=require('fs');
function addPlace(place){
    let places=JSON.parse(fs.readFileSync('./databases/places.json'));/*  */
    // console.log(places);
    places[place["destinationName"]] = place;
    temp=JSON.stringify(places);
    fs.writeFileSync("./databases/places.json",temp);
    return true;
}
function getPlace(placeName){
    let places=JSON.parse(fs.readFileSync('./databases/places.json'));
    if (placeName in places) return places[placeName];

}
function deletePlace(placeName){
    let places=JSON.parse(fs.readFileSync('./databases/places.json'));
    if (placeName in places){
        updatedPlaces={};
        for (let [key,value] of Object.entries(places) ){
            if (key==placeName) continue;
            updatedPlaces[key]=value;
        }
        updatedPlaces=JSON.stringify(updatedPlaces);
        fs.writeFileSync("./databases/places.json",updatedPlaces);
        return true
    }
    else return false
}
function getPlaces(){
    let places=JSON.parse(fs.readFileSync("./databases/places.json"));
    return places;
}

exports.addPlace=addPlace;
exports.getPlace=getPlaces;
exports.getPlaces=getPlaces;
exports.deletePlace=deletePlace;