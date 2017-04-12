class Note < ActiveRecord::Base

  belongs_to(
    :recipe,
    class_name: "Recipe",
    primary_key: :id,
    foreign_key: :recipe_id
  )

end
