const { model, Schema } = require("mongoose");

const categorySchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    image: {
      type: String,
      default: "/",
    },
    // relations
    restaurants: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
    menuItems: [{ type: Schema.Types.ObjectId, ref: "MenuItem" }],
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
