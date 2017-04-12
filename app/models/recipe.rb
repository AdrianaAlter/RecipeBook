class Recipe < ActiveRecord::Base

  belongs_to(
    :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id
  )

  has_many(
    :ingredients,
    class_name: "Ingredient",
    primary_key: :id,
    foreign_key: :recipe_id
  )

  has_many(
    :steps,
    class_name: "Step",
    primary_key: :id,
    foreign_key: :recipe_id
  )

  has_many(
    :notes,
    class_name: "Note",
    primary_key: :id,
    foreign_key: :recipe_id
  )

  has_many(
    :pictures,
    class_name: "Picture",
    primary_key: :id,
    foreign_key: :recipe_id
  )

end
