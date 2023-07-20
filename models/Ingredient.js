const { model, Schema } = require("mongoose");

const ingredientSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },

    // relations
    menuItems: [{ type: Schema.Types.ObjectId, ref: "MenuItem" }],
  },
  { timestamps: true }
);

module.exports = model("Ingredient", ingredientSchema);
