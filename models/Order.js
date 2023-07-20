const { model, Schema } = require("mongoose");

const cartSchema = new Schema(
  {
    totalCost: { type: Number, required: true },
    restaurant_id: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    itemsInfo: [
      {
        item_id: { type: Schema.Types.ObjectId, ref: "MenuItem" },
      },
    ],
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = model("Cart", cartSchema);
