import { query } from "express";
import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js";

export const createHotel = async(req, res, next) =>{
     const newHotel = new Hotel(req.body);

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel) //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}

export const updateHotel = async(req, res, next) =>{
     try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel) //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}

export const deleteHotel = async(req, res, next) =>{
     try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted") //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}

export const getHotel = async(req, res, next) =>{
     try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel) //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}

export const getAllHotel = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 9999999},
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "apartment" });
    const apartmentCount = await Hotel.countDocuments({ type: "boathouse" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "hotel" });

    res.status(200).json([
      { type: "apartments", count: hotelCount },
      { type: "boathouses", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "hotels", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};



