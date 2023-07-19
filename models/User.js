const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    firstName: { type: String, unique: true },
    lastName: { type: String, unique: true },
    password: { type: String, required: true },
    image: {
      type: String,
      default: "/",
    },

    // relations
    recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
