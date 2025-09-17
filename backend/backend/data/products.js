  const products = [
    //south indian dishes :
  {
    name: "Masala Dosa",
    description: "Crispy rice and lentil crepe stuffed with a spiced potato filling, served with chutney and sambar.",
    cuisineType: "South Indian",
    images: ["https://example.com/masala-dosa.jpg"],
    isVeg: true,
    prepTime: 30,
    ingredients: ["Rice", "Urad Dal", "Potato", "Onion", "Green Chili", "Spices"],
    price: 80
  },
  {
    name: "Idli Sambar",
    description: "Steamed rice cakes served with a flavorful lentil-based vegetable stew and coconut chutney.",
    cuisineType: "South Indian",
    images: ["https://example.com/idli-sambar.jpg"],
    isVeg: true,
    prepTime: 25,
    ingredients: ["Rice", "Urad Dal", "Tamarind", "Drumstick", "Curry Leaves", "Spices"],
    price: 60
  },
  {
    name: "Vegetable Upma",
    description: "Savory semolina porridge cooked with vegetables, curry leaves, and mild spices.",
    cuisineType: "South Indian",
    images: ["https://example.com/vegetable-upma.jpg"],
    isVeg: true,
    prepTime: 20,
    ingredients: ["Semolina", "Carrot", "Beans", "Onion", "Green Chili", "Curry Leaves"],
    price: 50
  },
  {
    name: "Lemon Rice",
    description: "Tangy and aromatic rice dish flavored with lemon juice, curry leaves, and green chilies.",
    cuisineType: "South Indian",
    images: ["https://example.com/lemon-rice.jpg"],
    isVeg: true,
    prepTime: 20,
    ingredients: ["Rice", "Lemon", "Green Chili", "Curry Leaves", "Mustard Seeds"],
    price: 70
  },
  {
    name: "Curd Rice",
    description: "Comforting dish of rice mixed with yogurt and tempered with curry leaves, chilies, and spices.",
    cuisineType: "South Indian",
    images: ["https://example.com/curd-rice.jpg"],
    isVeg: true,
    prepTime: 15,
    ingredients: ["Rice", "Curd", "Green Chili", "Curry Leaves", "Mustard Seeds"],
    price: 60
  },
  {
    name: "Chicken Chettinad",
    description: "Spicy, aromatic chicken curry from Tamil Nadu made with a special blend of roasted spices.",
    cuisineType: "South Indian",
    images: ["https://example.com/chicken-chettinad.jpg"],
    isVeg: false,
    prepTime: 45,
    ingredients: ["Chicken", "Onion", "Tomato", "Coconut", "Spices"],
    price: 200
  },
  {
    name: "Mutton Curry (Andhra Style)",
    description: "Fiery mutton curry from Andhra Pradesh, slow-cooked with red chilies and earthy spices.",
    cuisineType: "South Indian",
    images: ["https://example.com/mutton-andhra.jpg"],
    isVeg: false,
    prepTime: 60,
    ingredients: ["Mutton", "Onion", "Tomato", "Red Chili", "Ginger Garlic Paste", "Spices"],
    price: 250
  },
  {
    name: "Fish Fry",
    description: "Crispy pan-fried fish marinated in South Indian spices and shallow fried until golden.",
    cuisineType: "South Indian",
    images: ["https://example.com/fish-fry.jpg"],
    isVeg: false,
    prepTime: 30,
    ingredients: ["Fish", "Turmeric", "Chili Powder", "Curry Leaves", "Oil"],
    price: 180
  },
  {
    name: "Egg Curry",
    description: "Hard-boiled eggs simmered in a spicy onion-tomato gravy with curry leaves.",
    cuisineType: "South Indian",
    images: ["https://example.com/egg-curry.jpg"],
    isVeg: false,
    prepTime: 25,
    ingredients: ["Eggs", "Onion", "Tomato", "Green Chili", "Curry Leaves", "Spices"],
    price: 120
  },
  {
    name: "Prawn Masala",
    description: "Juicy prawns cooked in a rich onion-tomato masala with coconut and spices.",
    cuisineType: "South Indian",
    images: ["https://example.com/prawn-masala.jpg"],
    isVeg: false,
    prepTime: 40,
    ingredients: ["Prawns", "Onion", "Tomato", "Coconut", "Green Chili", "Spices"],
    price: 220
  },


  // North Indian Dishes:
  {
    name: "Paneer Butter Masala",
    description: "Rich and creamy curry made with paneer cubes simmered in a buttery tomato-based gravy.",
    cuisineType: "North Indian",
    images: ["https://example.com/paneer-butter-masala.jpg"],
    isVeg: true,
    prepTime: 35,
    ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Spices"],
    price: 180
  },
  {
    name: "Chole Bhature",
    description: "Classic Punjabi dish of spicy chickpea curry served with deep-fried fluffy bread.",
    cuisineType: "North Indian",
    images: ["https://example.com/chole-bhature.jpg"],
    isVeg: true,
    prepTime: 40,
    ingredients: ["Chickpeas", "Onion", "Tomato", "Flour", "Spices"],
    price: 120
  },
  {
    name: "Dal Makhani",
    description: "Slow-cooked black lentils and kidney beans simmered in a creamy, buttery sauce.",
    cuisineType: "North Indian",
    images: ["https://example.com/dal-makhani.jpg"],
    isVeg: true,
    prepTime: 50,
    ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Cream", "Spices"],
    price: 150
  },
  {
    name: "Aloo Paratha",
    description: "Whole wheat flatbread stuffed with a spiced potato filling, served with butter and pickle.",
    cuisineType: "North Indian",
    images: ["https://example.com/aloo-paratha.jpg"],
    isVeg: true,
    prepTime: 25,
    ingredients: ["Wheat Flour", "Potato", "Green Chili", "Butter", "Spices"],
    price: 80
  },
  {
    name: "Rajma Chawal",
    description: "Comforting combo of kidney bean curry served with steamed basmati rice.",
    cuisineType: "North Indian",
    images: ["https://example.com/rajma-chawal.jpg"],
    isVeg: true,
    prepTime: 45,
    ingredients: ["Kidney Beans", "Onion", "Tomato", "Rice", "Spices"],
    price: 130
  },
  {
    name: "Butter Chicken",
    description: "World-famous dish of tender chicken pieces simmered in a creamy tomato-butter gravy.",
    cuisineType: "North Indian",
    images: ["https://example.com/butter-chicken.jpg"],
    isVeg: false,
    prepTime: 50,
    ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Spices"],
    price: 220
  },
  {
    name: "Rogan Josh",
    description: "Aromatic Kashmiri lamb curry slow-cooked with yogurt and Kashmiri chili for a rich flavor.",
    cuisineType: "North Indian",
    images: ["https://example.com/rogan-josh.jpg"],
    isVeg: false,
    prepTime: 60,
    ingredients: ["Mutton", "Yogurt", "Onion", "Tomato", "Kashmiri Chili", "Spices"],
    price: 280
  },
  {
    name: "Chicken Tikka",
    description: "Marinated chicken chunks grilled to perfection with smoky char and spices.",
    cuisineType: "North Indian",
    images: ["https://example.com/chicken-tikka.jpg"],
    isVeg: false,
    prepTime: 40,
    ingredients: ["Chicken", "Yogurt", "Lemon", "Spices"],
    price: 200
  },
  {
    name: "Nihari",
    description: "Rich, slow-cooked stew of beef or mutton simmered overnight with spices and bone marrow.",
    cuisineType: "North Indian",
    images: ["https://example.com/nihari.jpg"],
    isVeg: false,
    prepTime: 90,
    ingredients: ["Mutton/Beef", "Onion", "Ginger Garlic", "Spices", "Bone Marrow"],
    price: 300
  },
  {
    name: "Keema Matar",
    description: "Minced meat curry cooked with green peas in a spiced onion-tomato gravy.",
    cuisineType: "North Indian",
    images: ["https://example.com/keema-matar.jpg"],
    isVeg: false,
    prepTime: 45,
    ingredients: ["Minced Meat", "Green Peas", "Onion", "Tomato", "Spices"],
    price: 180
  },

  // 🍚 East India – Veg
  {
    name: "Shukto",
    description: "Traditional Bengali mixed vegetable curry with a slightly bitter taste, cooked with mustard and poppy seeds.",
    cuisineType: "East Indian",
    images: ["https://example.com/shukto.jpg"],
    isVeg: true,
    prepTime: 40,
    ingredients: ["Bitter Gourd", "Drumstick", "Potato", "Mustard Seeds", "Poppy Seeds", "Spices"],
    price: 150
  },
  {
    name: "Aloo Posto",
    description: "Classic Bengali dish of potatoes cooked with poppy seed paste, green chilies, and mustard oil.",
    cuisineType: "East Indian",
    images: ["https://example.com/aloo-posto.jpg"],
    isVeg: true,
    prepTime: 30,
    ingredients: ["Potato", "Poppy Seeds", "Green Chili", "Mustard Oil", "Spices"],
    price: 120
  },
  {
    name: "Luchi with Cholar Dal",
    description: "Deep-fried Bengali bread served with mildly spiced chana dal curry flavored with coconut and spices.",
    cuisineType: "East Indian",
    images: ["https://example.com/luchi-cholar-dal.jpg"],
    isVeg: true,
    prepTime: 35,
    ingredients: ["Flour", "Chana Dal", "Coconut", "Ghee", "Spices"],
    price: 140
  },
  {
    name: "Ghugni",
    description: "Spiced yellow or white peas curry, topped with chopped onion, green chilies, and tamarind chutney.",
    cuisineType: "East Indian",
    images: ["https://example.com/ghugni.jpg"],
    isVeg: true,
    prepTime: 35,
    ingredients: ["Yellow Peas", "Onion", "Tomato", "Green Chili", "Spices"],
    price: 100
  },
  {
    name: "Sandesh",
    description: "Delicate Bengali sweet made from fresh chenna (paneer) and sugar, often flavored with cardamom.",
    cuisineType: "East Indian",
    images: ["https://example.com/sandesh.jpg"],
    isVeg: true,
    prepTime: 25,
    ingredients: ["Paneer", "Sugar", "Cardamom"],
    price: 90
  },

  // 🍚 East India – Non-Veg
  {
    name: "Macher Jhol",
    description: "Light Bengali fish curry cooked with potatoes, tomatoes, and mustard oil for a homely taste.",
    cuisineType: "East Indian",
    images: ["https://example.com/macher-jhol.jpg"],
    isVeg: false,
    prepTime: 40,
    ingredients: ["Fish", "Potato", "Tomato", "Mustard Oil", "Turmeric", "Spices"],
    price: 200
  },
  {
    name: "Kosha Mangsho",
    description: "Spicy Bengali-style mutton curry slow-cooked in onion, tomato, and whole spices until rich and dark.",
    cuisineType: "East Indian",
    images: ["https://example.com/kosha-mangsho.jpg"],
    isVeg: false,
    prepTime: 70,
    ingredients: ["Mutton", "Onion", "Tomato", "Mustard Oil", "Spices"],
    price: 280
  },
  {
    name: "Chingri Malai Curry",
    description: "Prawns cooked in a creamy coconut milk gravy flavored with mustard and spices, a Bengali delicacy.",
    cuisineType: "East Indian",
    images: ["https://example.com/chingri-malai.jpg"],
    isVeg: false,
    prepTime: 50,
    ingredients: ["Prawns", "Coconut Milk", "Mustard", "Turmeric", "Spices"],
    price: 260
  },
  {
    name: "Chicken Rezala",
    description: "Mild and aromatic Mughlai-influenced Bengali chicken curry with yogurt and cashew paste.",
    cuisineType: "East Indian",
    images: ["https://example.com/chicken-rezala.jpg"],
    isVeg: false,
    prepTime: 45,
    ingredients: ["Chicken", "Yogurt", "Cashews", "Onion", "Spices"],
    price: 220
  },
  {
    name: "Bengali Egg Curry",
    description: "Boiled eggs simmered in a light onion-tomato curry with mustard oil and Bengali spices.",
    cuisineType: "East Indian",
    images: ["https://example.com/bengali-egg-curry.jpg"],
    isVeg: false,
    prepTime: 30,
    ingredients: ["Eggs", "Onion", "Tomato", "Mustard Oil", "Spices"],
    price: 120
  },

  // 🍛 West India – Veg
  {
    name: "Pav Bhaji",
    description: "Mumbai’s iconic street food of buttery mashed vegetable curry served with toasted pav bread.",
    cuisineType: "West Indian",
    images: ["https://example.com/pav-bhaji.jpg"],
    isVeg: true,
    prepTime: 35,
    ingredients: ["Potato", "Tomato", "Onion", "Capsicum", "Butter", "Spices"],
    price: 100
  },
  {
    name: "Dhokla",
    description: "Steamed Gujarati snack made with fermented gram flour batter, soft and spongy in texture.",
    cuisineType: "West Indian",
    images: ["https://example.com/dhokla.jpg"],
    isVeg: true,
    prepTime: 30,
    ingredients: ["Gram Flour", "Yogurt", "Green Chili", "Mustard Seeds"],
    price: 80
  },
  {
    name: "Undhiyu",
    description: "Seasonal Gujarati mixed vegetable curry slow-cooked with spices and fenugreek dumplings.",
    cuisineType: "West Indian",
    images: ["https://example.com/undhiyu.jpg"],
    isVeg: true,
    prepTime: 60,
    ingredients: ["Potato", "Yam", "Beans", "Fenugreek Dumplings", "Spices"],
    price: 160
  },
  {
    name: "Sev Tameta",
    description: "Sweet and tangy Gujarati curry made from tomatoes, spices, and topped with crispy sev.",
    cuisineType: "West Indian",
    images: ["https://example.com/sev-tameta.jpg"],
    isVeg: true,
    prepTime: 25,
    ingredients: ["Tomato", "Onion", "Green Chili", "Sev", "Spices"],
    price: 90
  },
  {
    name: "Goan Vegetable Xacuti",
    description: "Vegetable curry from Goa cooked in a rich coconut and roasted spice masala base.",
    cuisineType: "West Indian",
    images: ["https://example.com/veg-xacuti.jpg"],
    isVeg: true,
    prepTime: 40,
    ingredients: ["Mixed Vegetables", "Coconut", "Onion", "Spices"],
    price: 140
  },

  // 🍛 West India – Non-Veg
  {
    name: "Goan Fish Curry",
    description: "Popular Goan curry with fish simmered in coconut milk, tamarind, and Goan spices.",
    cuisineType: "West Indian",
    images: ["https://example.com/goan-fish-curry.jpg"],
    isVeg: false,
    prepTime: 40,
    ingredients: ["Fish", "Coconut Milk", "Tamarind", "Onion", "Spices"],
    price: 220
  },
  {
    name: "Chicken Cafreal",
    description: "Goan specialty of chicken marinated in green masala paste and pan-fried or grilled.",
    cuisineType: "West Indian",
    images: ["https://example.com/chicken-cafreal.jpg"],
    isVeg: false,
    prepTime: 50,
    ingredients: ["Chicken", "Green Chili", "Coriander", "Garlic", "Spices"],
    price: 240
  },
  {
    name: "Mutton Vindaloo",
    description: "Fiery Goan curry made with mutton marinated in vinegar, chili, and spices, slow cooked until tender.",
    cuisineType: "West Indian",
    images: ["https://example.com/mutton-vindaloo.jpg"],
    isVeg: false,
    prepTime: 70,
    ingredients: ["Mutton", "Vinegar", "Chili", "Onion", "Garlic", "Spices"],
    price: 280
  },
  {
    name: "Bombil Fry",
    description: "Crispy Bombay duck fish fry marinated with chili, turmeric, and shallow fried until golden.",
    cuisineType: "West Indian",
    images: ["https://example.com/bombil-fry.jpg"],
    isVeg: false,
    prepTime: 25,
    ingredients: ["Bombil Fish", "Chili Powder", "Turmeric", "Oil"],
    price: 180
  },
  {
    name: "Kolhapuri Chicken",
    description: "Spicy chicken curry from Kolhapur with fiery red chili masala and aromatic spices.",
    cuisineType: "West Indian",
    images: ["https://example.com/kolhapuri-chicken.jpg"],
    isVeg: false,
    prepTime: 60,
    ingredients: ["Chicken", "Onion", "Tomato", "Kolhapuri Masala", "Spices"],
    price: 230
  },

  // 🌍 Continental – Veg
  {
    name: "Margherita Pizza",
    description: "Classic pizza topped with tomato sauce, mozzarella, and fresh basil. Requires oven.",
    cuisineType: "Continental",
    images: ["https://example.com/margherita-pizza.jpg"],
    isVeg: true,
    prepTime: 30,
    ingredients: ["Pizza Base", "Tomato Sauce", "Mozzarella", "Basil"],
    price: 300
  },
  {
    name: "Vegetable Lasagna",
    description: "Layers of pasta, vegetables, tomato sauce, and cheese baked to perfection. Requires oven.",
    cuisineType: "Continental",
    images: ["https://example.com/veg-lasagna.jpg"],
    isVeg: true,
    prepTime: 50,
    ingredients: ["Lasagna Sheets", "Tomato Sauce", "Mixed Vegetables", "Cheese"],
    price: 350
  },
  {
    name: "Mushroom Soup",
    description: "Creamy soup made with fresh mushrooms, herbs, and a touch of cream.",
    cuisineType: "Continental",
    images: ["https://example.com/mushroom-soup.jpg"],
    isVeg: true,
    prepTime: 25,
    ingredients: ["Mushrooms", "Onion", "Garlic", "Cream", "Herbs"],
    price: 180
  },
  {
    name: "Greek Salad",
    description: "Refreshing salad of cucumbers, tomatoes, olives, feta cheese, and olive oil dressing.",
    cuisineType: "Continental",
    images: ["https://example.com/greek-salad.jpg"],
    isVeg: true,
    prepTime: 15,
    ingredients: ["Cucumber", "Tomato", "Olives", "Feta Cheese", "Olive Oil"],
    price: 160
  },

  // 🌍 Continental – Non-Veg
  {
    name: "Grilled Chicken Breast",
    description: "Lean chicken breast marinated with herbs and grilled until juicy and tender.",
    cuisineType: "Continental",
    images: ["https://example.com/grilled-chicken.jpg"],
    isVeg: false,
    prepTime: 35,
    ingredients: ["Chicken Breast", "Olive Oil", "Garlic", "Herbs"],
    price: 280
  },
  {
    name: "Spaghetti Bolognese",
    description: "Italian pasta dish with spaghetti served in a slow-cooked meat and tomato sauce.",
    cuisineType: "Continental",
    images: ["https://example.com/spaghetti-bolognese.jpg"],
    isVeg: false,
    prepTime: 45,
    ingredients: ["Spaghetti", "Minced Meat", "Tomato Sauce", "Onion", "Garlic"],
    price: 300
  },
  {
    name: "Roast Chicken",
    description: "Whole chicken roasted with herbs and butter, crispy outside and juicy inside. Requires oven.",
    cuisineType: "Continental",
    images: ["https://example.com/roast-chicken.jpg"],
    isVeg: false,
    prepTime: 70,
    ingredients: ["Whole Chicken", "Butter", "Garlic", "Herbs"],
    price: 450
  },
  {
    name: "Fish and Chips",
    description: "Classic British dish of battered deep-fried fish served with crispy potato fries.",
    cuisineType: "Continental",
    images: ["https://example.com/fish-chips.jpg"],
    isVeg: false,
    prepTime: 40,
    ingredients: ["Fish Fillet", "Flour", "Potato", "Oil"],
    price: 280
  },
  {
    name: "Chicken Caesar Salad",
    description: "Crisp romaine lettuce topped with grilled chicken, croutons, parmesan, and Caesar dressing.",
    cuisineType: "Continental",
    images: ["https://example.com/chicken-caesar.jpg"],
    isVeg: false,
    prepTime: 20,
    ingredients: ["Chicken", "Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    price: 220
  },
  {
    name: "Prawn Alfredo Pasta",
    description: "Creamy Alfredo pasta tossed with prawns, garlic, and parmesan cheese.",
    cuisineType: "Continental",
    images: ["https://example.com/prawn-alfredo.jpg"],
    isVeg: false,
    prepTime: 40,
    ingredients: ["Pasta", "Prawns", "Cream", "Garlic", "Parmesan"],
    price: 320
  },


  {
    name: "",
    description: "",
    cuisineType: "",
    images: [""],
    isVeg: false,
    prepTime: 60,
    ingredients: ["", "", "", ""],
    price: [0],
  },
  
];

export default products;
