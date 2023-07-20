const { model, Schema } = require("mongoose");

const menuItemSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    image: {
      type: String,
      default: "/",
    },
    price: { type: Number, required: true },
    // relations
    ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  { timestamps: true }
);

module.exports = model("MenuItem", menuItemSchema);
