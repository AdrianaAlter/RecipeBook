class Picture < ActiveRecord::Base
  has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }

  belongs_to(
    :recipe,
    class_name: "Recipe",
    primary_key: :id,
    foreign_key: :recipe_id
  )

end
