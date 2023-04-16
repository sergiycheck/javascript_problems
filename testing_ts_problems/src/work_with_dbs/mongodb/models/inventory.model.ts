import mongoose from 'mongoose';
const { Schema } = mongoose;

const inventory = new Schema(
  {
    _id: Number,
    item: { name: String, code: String },
    gty: Number,
    tags: [String],
  },
  { collection: 'inventory' }
);

export const InventoryModel = mongoose.model('inventory', inventory);
