// services/petsService.js
import Pet from '../dao/models/Pet';

export const create = async (petData) => {
    const newPet = new Pet(petData);
    await newPet.save();
    return newPet;
};

export const getAll = async () => {
    return await Pet.find();
};
