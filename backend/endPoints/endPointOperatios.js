const { getPlace, addPlace, deletePlace, getPlaces } = require("../fileOperations/operations");

function addPlaceEndPoint(req,res){
    let place=req.body;
    addPlace(place);
    res.json({"success":"true","message":"successfully added"})

}

function editPlaceEndPoint(req,res){
    let places=getPlaces()
    let place=req.params["placeName"];
    if (place in places){
        addPlace(place);
    }else{

        res.json({"sucess":'false',"message":"place not found"})
    }

}

function deletePlaceEndPoint(req,res){
    let place=req.params.placeName;
    let places=getPlaces();
    if (place in places){
        deletePlace(place);
        res.json({"success":"true","message":"successfully Deleted"});
    }else{
        res.json({"success":"false","message":"place not found"});
    }


}

function getPlaceEndPoint(req,res){
    let place=req.params["placeName"];
    let temp=getPlace(place);
    res.json(temp);
}

function getPlacesEndPoint(req,res){
    res.json({"sucess":'true',data:getPlaces()});
}

exports.addPlace=addPlace;
exports.getPlace=getPlace;
exports.getPlaces=getPlaces;
exports.deletePlace=deletePlace;
exports.getPlaceEndPoint=getPlaceEndPoint;
exports.getPlacesEndPoint=getPlacesEndPoint;
exports.deletePlaceEndPoint=deletePlaceEndPoint;
exports.addPlaceEndPoint=addPlaceEndPoint;
exports.editPlaceEndPoint=editPlaceEndPoint;