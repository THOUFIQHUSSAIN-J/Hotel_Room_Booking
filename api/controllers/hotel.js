import Hotel from "../models/Hotel.js"

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

export const getAllHotel = async(req, res, next) =>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels) //Server success.
    }catch(err){
        next(err); //Server error. Will be hanled by middleware section
    }
}