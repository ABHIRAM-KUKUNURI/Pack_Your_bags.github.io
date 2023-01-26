// const cors = require('cors');

const { addPlace } = require("./backend/fileOperations/operations");

const { addPlaceEndPoint,editPlaceEndPoint,deletePlaceEndPoint,getPlaceEndPoint,getPlacesEndPoint } = require("./backend/endPoints/endPointOperatios");

const express=require('express');

//places
const app=require("express")();
// app.use(cors());
app.use(express.static("Pack_Your_bags"));
app.use(express.json());

app.post("/api/place",addPlaceEndPoint);
app.put("/api/place/:placeName",editPlaceEndPoint);
app.delete("/api/place/:placeName",deletePlaceEndPoint);
app.get("/api/place/:placeName",getPlaceEndPoint);
app.get("/api/places",getPlacesEndPoint);







app.listen(3666);

//users
