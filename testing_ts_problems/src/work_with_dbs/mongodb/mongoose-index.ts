import mongoose from 'mongoose';

import { ArtistModel } from './models/artist.model';
import { InventoryModel } from './models/inventory.model';

async function findAllArtists() {
  const artists = await ArtistModel.find({});
  console.log(artists);
}

async function findAllInventories() {
  const inventories = await InventoryModel.find({});
  console.log(inventories);
}

export async function mainMongooseTests() {
  try {
    await mongoose.connect(
      'mongodb://user:user_password@localhost:27020/?authMechanism=DEFAULT'
    );
  } catch (error) {
    console.error(error);
  }

  await findAllArtists();

  await findAllInventories();
}
