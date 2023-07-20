const { model, Schema } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    image: {
      type: String,
      default: "/",
    },
    rating: String,

    deliveryTime: String,

    // relations
    menuItems: [{ type: Schema.Types.ObjectId, ref: "MenuItems" }],
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

module.exports = model("Restaurant", restaurantSchema);
