import mongoose from 'mongoose';
const { Schema } = mongoose;

const artist = new Schema(
  {
    _id: Number,
    last_name: String,
    first_name: String,
    year_born: Number,
    year_died: Number,
    nationality: String,
  },
  { collection: 'artists' }
);

export const ArtistModel = mongoose.model('artists', artist);
