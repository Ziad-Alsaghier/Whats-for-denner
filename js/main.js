// JavaScript code for the main application

/*
    =====================================================================================
   | In This File We Make All Cases For The Recipes Page Change Food Dynamically 
   | This file handles all the dynamic changes for the recipes page, 
   | including updating Just Interface Content =>  images, titles, descriptions,
   | and other recipe details based on Click Button Try Another Recipe =>  data changes.
    =====================================================================================

*/



// Function Get Randome Number Based On Length Array


function updateRecipeContent() {

    //  Get Random Item Index Based On Length Array
    function getRandomItemIndex(length) {
        return Math.floor(Math.random() * length);
    }
    // Function Get Random Recipe Data
    function getRandomRecipeData() {
        oldRecipes = [];

        var recipes = [

            /* 1️⃣ Moussaka – Greece */
            {
                title: "Moussaka – Greek Dish",
                description: "A classic Greek baked dish made with layers of eggplant, minced meat, and creamy béchamel sauce.",
                image: "./images/food/moussaka.jpg",
                level: "Medium",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 3.4, members: "300" },
                ingredients: ["2 large eggplants", "500g minced beef", "1 onion, chopped", "2 cups béchamel sauce", "2 tomatoes, sliced"],
                instructions: ["Slice and grill the eggplants until soft.", "Cook minced meat with onion and spices.", "Layer eggplant, meat, and béchamel in a baking dish.", "Bake until golden and set."],
                nutritionFacts: [
                    { name: "Calories", value: "460 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "28 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "34 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "24 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "6 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "780 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Salt eggplants before cooking to remove bitterness.", "Let moussaka rest before slicing for clean layers."],
                'preparationDetailes': [{ prepTime: { time: "45 mins", icon: "", name: "Prep Time" }, cookTime: { time: "60 mins", icon: "", name: "Cook Time" }, servings: { count: "6 people", icon: "", name: "Servings" } }]
            },

            /* 2️⃣ Ramen – Japan */
            {
                title: "Ramen – Japanese Dish",
                description: "A Japanese noodle soup with rich broth, noodles, meat, and vegetables.",
                image: "./images/food/ramen.jpg",
                level: "Medium",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.0, members: "200" },
                ingredients: ["200g ramen noodles", "4 cups chicken broth", "2 boiled eggs", "100g sliced beef or chicken"],
                instructions: ["Heat broth and season well.", "Cook noodles separately.", "Assemble noodles, broth, meat, and eggs in a bowl."],
                nutritionFacts: [
                    { name: "Calories", value: "430 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "22 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "15 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "56 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "3 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "1600 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Use fresh noodles if possible.", "Serve ramen immediately while hot."],
                'preparationDetailes': [{ prepTime: { time: "20 mins", icon: "", name: "Prep Time" }, cookTime: { time: "15 mins", icon: "", name: "Cook Time" }, servings: { count: "2 people", icon: "", name: "Servings" } }]
            },

            /* 3️⃣ Hamburger – United States */
            {
                title: "Hamburger – American Dish",
                description: "A grilled beef patty served in a bun with classic toppings.",
                image: "./images/food/burger.jpg",
                level: "Easy",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.9, members: "1200" },
                ingredients: ["500g ground beef", "Burger buns", "Cheese slices", "Lettuce and tomato"],
                instructions: ["Form beef into patties.", "Grill until desired doneness.", "Assemble burger with toppings."],
                nutritionFacts: [
                    { name: "Calories", value: "520 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "30 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "36 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "33 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "2 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "950 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Do not over-press the patty while grilling.", "Toast buns lightly for better texture."],
                'preparationDetailes': [{ prepTime: { time: "15 mins", icon: "", name: "Prep Time" }, cookTime: { time: "10 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            },

            /* 4️⃣ Couscous – Morocco */
            {
                title: "Couscous – Moroccan Dish",
                description: "Steamed semolina grains served with vegetables and meat.",
                image: "./images/food/couscous.jpg",
                level: "Medium",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 2.5, members: "100" },
                ingredients: ["2 cups couscous", "Mixed vegetables", "500g lamb or chicken"],
                instructions: ["Steam couscous until fluffy.", "Cook meat and vegetables with spices.", "Serve couscous topped with stew."],
                nutritionFacts: [
                    { name: "Calories", value: "380 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "14 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "6 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "65 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "8 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "420 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Fluff couscous with a fork.", "Add broth gradually for best texture."],
                'preparationDetailes': [{ prepTime: { time: "30 mins", icon: "", name: "Prep Time" }, cookTime: { time: "50 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            },

            /* 5️⃣ Curry – India */
            {
                title: "Curry – Indian Dish",
                description: "A rich and spicy dish made with aromatic spices and sauce.",
                image: "./images/food/curry.jpg",
                level: "Medium",
                type: "Main Course",
                warning: { status: true, title: "Spicy Dish", description: "This dish can be very spicy." },
                review: { rate: 1.2, members: "200" },
                ingredients: ["500g chicken", "Onion, garlic, ginger", "Curry spices"],
                instructions: ["Sauté onion, garlic, and spices.", "Add chicken and cook until tender.", "Simmer until thick."],
                nutritionFacts: [
                    { name: "Calories", value: "470 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "26 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "29 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "31 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "5 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "980 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Toast spices before adding liquids.", "Adjust chili to taste."],
                'preparationDetailes': [{ prepTime: { time: "20 mins", icon: "", name: "Prep Time" }, cookTime: { time: "40 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            },

            /* 6️⃣ Paella – Spain */
            {
                title: "Paella – Spanish Dish",
                description: "A Spanish rice dish with seafood, meat, and saffron.",
                image: "./images/food/paella.jpg",
                level: "Hard",
                type: "Main Course",
                warning: { status: true, title: "Long Cooking Time", description: "Requires careful timing." },
                review: { rate: 3.9, members: "600" },
                ingredients: ["2 cups rice", "Seafood mix", "Saffron threads"],
                instructions: ["Cook rice with broth and saffron.", "Add seafood near the end.", "Let rest before serving."],
                nutritionFacts: [
                    { name: "Calories", value: "440 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "24 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "14 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "52 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "4 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "870 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Do not stir rice once cooking starts.", "Use wide pan for even cooking."],
                'preparationDetailes': [{ prepTime: { time: "25 mins", icon: "", name: "Prep Time" }, cookTime: { time: "45 mins", icon: "", name: "Cook Time" }, servings: { count: "5 people", icon: "", name: "Servings" } }]
            },

            /* 7️⃣ Tacos – Mexico */
            {
                title: "Tacos – Mexican Dish",
                description: "Soft tortillas filled with meat and toppings.",
                image: "./images/food/tacos.jpg",
                level: "Easy",
                type: "Main Course",
                review: { rate: 3.2, members: "400" },
                warning: { status: false, title: "", description: "" },
                ingredients: ["Tortillas", "Ground beef", "Cheese and salsa"],
                instructions: ["Cook meat with spices.", "Warm tortillas.", "Assemble and serve."],
                nutritionFacts: [
                    { name: "Calories", value: "350 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "18 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "16 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "32 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "5 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "820 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Warm tortillas for flexibility.", "Serve immediately."],
                'preparationDetailes': [{ prepTime: { time: "15 mins", icon: "", name: "Prep Time" }, cookTime: { time: "15 mins", icon: "", name: "Cook Time" }, servings: { count: "3 people", icon: "", name: "Servings" } }]
            },

            /* 8️⃣ Koshari – Egypt */
            {
                title: "Koshari – Egyptian Dish",
                description: "A hearty Egyptian mix of rice, lentils, pasta, and tomato sauce.",
                image: "./images/food/koshari.jpg",
                level: "Easy",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 5.0, members: "2200" },
                ingredients: ["Rice", "Lentils", "Pasta"],
                instructions: ["Cook all ingredients separately.", "Mix together and top with sauce."],
                nutritionFacts: [
                    { name: "Calories", value: "400 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "13 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "8 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "70 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "9 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "610 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Keep ingredients separate until serving.", "Extra crispy onions add flavor."],
                'preparationDetailes': [{ prepTime: { time: "20 mins", icon: "", name: "Prep Time" }, cookTime: { time: "30 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            },

            /* 9️⃣ Sushi – Japan */
            {
                title: "Sushi – Japanese Dish",
                description: "Vinegared rice rolled with fish and vegetables.",
                image: "./images/food/sushi.jpg",
                level: "Medium",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 3.9, members: "800" },
                ingredients: ["Sushi rice", "Nori sheets", "Fresh fish"],
                instructions: ["Prepare rice.", "Roll with fillings.", "Slice and serve."],
                nutritionFacts: [
                    { name: "Calories", value: "300 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "20 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "7 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "42 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "3 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "650 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Use sushi-grade fish.", "Keep knife wet while slicing."],
                'preparationDetailes': [{ prepTime: { time: "35 mins", icon: "", name: "Prep Time" }, cookTime: { time: "25 mins", icon: "", name: "Cook Time" }, servings: { count: "3 people", icon: "", name: "Servings" } }]
            },

            /* 🔟 Pizza – Italy */
            {
                title: "Pizza – Italian Dish",
                description: "Baked dough topped with tomato sauce and cheese.",
                image: "./images/food/pizza.jpg",
                level: "Easy",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 5.0, members: "50000" },
                ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese"],
                instructions: ["Preheat oven.", "Add toppings.", "Bake until golden."],
                nutritionFacts: [
                    { name: "Calories", value: "480 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "19 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "20 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "58 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "4 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "1100 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Use hot oven for crispy crust.", "Do not overload toppings."],
                'preparationDetailes': [{ prepTime: { time: "20 mins", icon: "", name: "Prep Time" }, cookTime: { time: "15 mins", icon: "", name: "Cook Time" }, servings: { count: "2 people", icon: "", name: "Servings" } }]
            },

            /* 1️⃣1️⃣ Okra – Middle Eastern Dish */
            {
                title: "Okra – Middle Eastern Dish",
                description: "A traditional okra stew cooked with tomato sauce and spices.",
                image: "./images/food/okra.png",
                level: "Easy",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.9, members: "1200" },
                ingredients: ["500g okra", "2 cups tomato sauce", "3 cloves garlic", "300g beef"],
                instructions: ["Sauté garlic.", "Add meat and brown.", "Simmer with sauce and okra."],
                nutritionFacts: [
                    { name: "Calories", value: "320 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "21 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "14 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "28 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "7 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "540 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Do not overcook okra.", "Fry okra lightly first."],
                'preparationDetailes': [{ prepTime: { time: "15 mins", icon: "", name: "Prep Time" }, cookTime: { time: "40 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            },

            /* --- NEW RECIPES WITH URL IMAGES --- */

            /* 1️⃣2️⃣ Pad Thai – Thailand */
            {
                title: "Pad Thai – Thai Dish",
                description: "Stir-fried rice noodles with eggs, tofu, peanuts, and lime.",
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
                level: "Medium",
                type: "Main Course",
                warning: { status: true, title: "Allergy Alert", description: "Contains peanuts." },
                review: { rate: 4.7, members: "1500" },
                ingredients: ["Rice noodles", "Shrimp or Tofu", "Bean sprouts", "Peanuts", "Tamarind paste"],
                instructions: ["Soak noodles.", "Stir-fry protein and sprouts.", "Mix in noodles and sauce.", "Garnish with peanuts."],
                nutritionFacts: [
                    { name: "Calories", value: "357 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "15 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "12 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "48 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "3 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "850 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Don't overcook noodles; keep them 'al dente'.", "Use fresh lime for acidity."],
                'preparationDetailes': [{ prepTime: { time: "20 mins", icon: "", name: "Prep Time" }, cookTime: { time: "10 mins", icon: "", name: "Cook Time" }, servings: { count: "2 people", icon: "", name: "Servings" } }]
            },

            /* 1️⃣3️⃣ Beef Wellington – United Kingdom */
            {
                title: "Beef Wellington – British Dish",
                description: "Tender beef fillet coated in pâté and duxelles, wrapped in puff pastry.",
                image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
                level: "Hard",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.8, members: "450" },
                ingredients: ["Beef fillet", "Mushrooms", "Puff pastry", "Prosciutto"],
                instructions: ["Sear the beef.", "Coat with mushroom duxelles.", "Wrap in pastry.", "Bake until golden."],
                nutritionFacts: [
                    { name: "Calories", value: "720 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "45 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "52 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "18 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "2 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "920 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Let the beef rest before wrapping.", "Brush with egg wash for shine."],
                'preparationDetailes': [{ prepTime: { time: "60 mins", icon: "", name: "Prep Time" }, cookTime: { time: "40 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            },

            /* 1️⃣4️⃣ Falafel – Middle East */
            {
                title: "Falafel – Middle Eastern Dish",
                description: "Deep-fried balls made from ground chickpeas and fresh herbs.",
                image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop",
                level: "Easy",
                type: "Appetizer",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.6, members: "3100" },
                ingredients: ["Dried chickpeas", "Parsley", "Garlic", "Cumin"],
                instructions: ["Soak chickpeas overnight.", "Blend with herbs and spices.", "Form into balls.", "Deep fry until brown."],
                nutritionFacts: [
                    { name: "Calories", value: "330 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "13 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "18 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "32 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "8 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "290 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Do not use canned chickpeas.", "Chill the mixture before frying."],
                'preparationDetailes': [{ prepTime: { time: "12 hrs", icon: "", name: "Prep Time" }, cookTime: { time: "15 mins", icon: "", name: "Cook Time" }, servings: { count: "6 people", icon: "", name: "Servings" } }]
            },

            /* 1️⃣5️⃣ Ratatouille – France */
            {
                title: "Ratatouille – French Dish",
                description: "A stewed vegetable dish featuring eggplant, zucchini, and bell peppers.",
                image: "https://images.unsplash.com/photo-1572453800999-e8d2d4d0c712?q=80&w=800&auto=format&fit=crop",
                level: "Medium",
                type: "Side Dish",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.3, members: "880" },
                ingredients: ["Zucchini", "Eggplant", "Tomato sauce", "Bell peppers", "Herbs"],
                instructions: ["Slice vegetables thinly.", "Layer over tomato sauce.", "Drizzle with oil and herbs.", "Bake until tender."],
                nutritionFacts: [
                    { name: "Calories", value: "120 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "3 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "6 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "15 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "5 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "310 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Use a mandoline for even slices.", "Cover with parchment paper while baking."],
                'preparationDetailes': [{ prepTime: { time: "30 mins", icon: "", name: "Prep Time" }, cookTime: { time: "45 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            },

            /* 1️⃣6️⃣ Chicken Tikka Masala – India/UK */
            {
                title: "Chicken Tikka Masala – Indian Dish",
                description: "Roasted marinated chicken chunks in a spiced, creamy orange sauce.",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
                level: "Medium",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.9, members: "4200" },
                ingredients: ["Chicken breast", "Yogurt", "Garam Masala", "Heavy cream", "Tomato puree"],
                instructions: ["Marinate chicken in yogurt/spices.", "Grill the chicken.", "Simmer in tomato cream sauce.", "Serve with naan."],
                nutritionFacts: [
                    { name: "Calories", value: "510 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "32 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "34 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "12 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "2 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "880 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Marinate for at least 4 hours.", "Finish with a touch of honey for balance."],
                'preparationDetailes': [{ prepTime: { time: "4 hrs", icon: "", name: "Prep Time" }, cookTime: { time: "30 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            },

            /* 1️⃣7️⃣ Poutine – Canada */
            {
                title: "Poutine – Canadian Dish",
                description: "French fries topped with cheese curds and brown gravy.",
                image: "https://images.unsplash.com/photo-1586805608485-add336722759?q=80&w=800&auto=format&fit=crop",
                level: "Easy",
                type: "Snack",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.2, members: "950" },
                ingredients: ["Potatoes", "Cheese curds", "Beef gravy", "Oil for frying"],
                instructions: ["Fry potatoes until crispy.", "Place curds over hot fries.", "Pour hot gravy over everything.", "Serve immediately."],
                nutritionFacts: [
                    { name: "Calories", value: "510 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "16 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "32 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "44 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "4 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "1100 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Use real cheese curds for the 'squeak'.", "Ensure gravy is piping hot."],
                'preparationDetailes': [{ prepTime: { time: "15 mins", icon: "", name: "Prep Time" }, cookTime: { time: "20 mins", icon: "", name: "Cook Time" }, servings: { count: "2 people", icon: "", name: "Servings" } }]
            },

            /* 1️⃣8️⃣ Bibimbap – Korea */
            {
                title: "Bibimbap – Korean Dish",
                description: "A warm bowl of rice topped with sautéed vegetables, chili paste, and a fried egg.",
                image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop",
                level: "Medium",
                type: "Main Course",
                warning: { status: true, title: "Spicy Sauce", description: "Gochujang paste is spicy." },
                review: { rate: 4.8, members: "1900" },
                ingredients: ["Rice", "Spinach", "Carrots", "Beef strips", "Egg", "Gochujang"],
                instructions: ["Cook rice.", "Sauté each vegetable separately.", "Fry the egg.", "Assemble and mix with paste."],
                nutritionFacts: [
                    { name: "Calories", value: "490 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "24 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "14 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "68 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "6 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "760 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Use sesame oil for authentic aroma.", "The egg should be sunny-side up."],
                'preparationDetailes': [{ prepTime: { time: "30 mins", icon: "", name: "Prep Time" }, cookTime: { time: "20 mins", icon: "", name: "Cook Time" }, servings: { count: "1 person", icon: "", name: "Servings" } }]
            },

            /* 1️⃣9️⃣ Lasagna – Italy */
            {
                title: "Lasagna – Italian Dish",
                description: "Stacked layers of pasta alternated with sauces and cheese.",
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
                level: "Hard",
                type: "Main Course",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.7, members: "3400" },
                ingredients: ["Lasagna sheets", "Bolognese sauce", "Ricotta", "Mozzarella", "Parmesan"],
                instructions: ["Prepare meat sauce.", "Layer pasta, sauce, and cheese.", "Repeat layers.", "Bake until bubbly."],
                nutritionFacts: [
                    { name: "Calories", value: "600 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "34 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "32 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "45 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "4 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "980 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Let it rest for 15 mins after baking.", "Use high-quality mozzarella."],
                'preparationDetailes': [{ prepTime: { time: "40 mins", icon: "", name: "Prep Time" }, cookTime: { time: "45 mins", icon: "", name: "Cook Time" }, servings: { count: "8 people", icon: "", name: "Servings" } }]
            },

            /* 2️⃣0️⃣ Ceviche – Peru */
            {
                title: "Ceviche – Peruvian Dish",
                description: "Fresh raw fish cured in fresh citrus juices and spiced with chili.",
                image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=800&auto=format&fit=crop",
                level: "Medium",
                type: "Appetizer",
                warning: { status: true, title: "Raw Seafood", description: "Requires very fresh fish." },
                review: { rate: 4.5, members: "720" },
                ingredients: ["White fish", "Lime juice", "Red onion", "Cilantro", "Chili"],
                instructions: ["Cut fish into cubes.", "Marinate in lime juice.", "Add onions and chili.", "Serve cold with sweet potato."],
                nutritionFacts: [
                    { name: "Calories", value: "180 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "28 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "2 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "12 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "2 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "420 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Keep fish on ice while prepping.", "Use 'Leche de Tigre' for marinade."],
                'preparationDetailes': [{ prepTime: { time: "20 mins", icon: "", name: "Prep Time" }, cookTime: { time: "0 mins", icon: "", name: "Cook Time" }, servings: { count: "2 people", icon: "", name: "Servings" } }]
            },

            /* 2️⃣1️⃣ Churros – Spain/Mexico */
            {
                title: "Churros – Sweet Dish",
                description: "Fried dough pastry dusted in sugar and cinnamon.",
                image: "https://images.unsplash.com/photo-1544710153-f77e68b92b60?q=80&w=800&auto=format&fit=crop",
                level: "Easy",
                type: "Dessert",
                warning: { status: false, title: "", description: "" },
                review: { rate: 4.9, members: "2500" },
                ingredients: ["Flour", "Water", "Butter", "Sugar", "Cinnamon"],
                instructions: ["Boil water and butter.", "Mix in flour to form dough.", "Pipe into hot oil.", "Roll in cinnamon sugar."],
                nutritionFacts: [
                    { name: "Calories", value: "320 kcal", icon: "fire", icon_color: "main-color", bg_icon: "bg-sub" },
                    { name: "Protein", value: "4 g", icon: "dumbbell", icon_color: "text-primary", bg_icon: "bg-opacity-primary" },
                    { name: "Fat", value: "18 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-danger" },
                    { name: "Carbohydrates", value: "36 g", icon: "seedling", icon_color: "text-success", bg_icon: "bg-opacity-wheat-dark" },
                    { name: "Fiber", value: "1 g", icon: "droplet", icon_color: "text-danger", bg_icon: "bg-opacity-success" },
                    { name: "Sodium", value: "150 mg", icon: "cube", icon_color: "text-purple-light", bg_icon: "bg-purple" }
                ],
                chefsTipsList: ["Serve with warm chocolate sauce.", "Ensure oil is at 180°C."],
                'preparationDetailes': [{ prepTime: { time: "15 mins", icon: "", name: "Prep Time" }, cookTime: { time: "15 mins", icon: "", name: "Cook Time" }, servings: { count: "4 people", icon: "", name: "Servings" } }]
            }

        ];

        var index = getRandomItemIndex(recipes.length);
        return recipes[index];
    }


    /*
    =========================================================
        Function Featch And Update Recipe Content In The Page
    =========================================================
    */
    function updateMainImage(image) {
        var mainImage = document.getElementById('recipes-image');
        mainImage.src = image;

    }
    //  Function return Ui HTML After Update Ingredients List
    function returnUiHtmlAfterUpdateIngredientsList(data) {
        var ingredientsList = document.getElementById("ingredients-list");
        ingredientsList.innerHTML = "";

        //  Make For Loop and Add Ingredients To The List
        for (var i = 0; i < data.length; i++) {
            var ingredient = data[i];
            var html = `
            <div class="d-flex align-items-center mb-3">
                <span
                  class="ingredient-index bg-main text-white me-4 rounded-circle d-inline-flex align-items-center justify-content-center">
                  ${i + 1}
                </span>
                <span>${ingredient}</span>
              </div>`;
            ingredientsList.innerHTML += html;

        }
        return ingredientsList;
    }
    // Function Featch Nutrition Facts Data
    function featchnutritionFacts(data) {
        var nutritionFactsList = document.getElementById("nutrition-info");
        nutritionFactsList.innerHTML = "";

        //  Make For Loop and Add Nutrition Facts To The List
        for (var i = 0; i < data.length; i++) {
            var fact = data[i];
            var html = `<div class="col-lg-6 col-12 mb-3 p-0">
                          <div class="inner m-3">
                            <div class="card  bg-white-dark border-0 shadow-sm rounded-4 ">
                              <div class="row">
                                <div class="col-6 p-2">
                                  <div class="d-flex ">
                                    <span class="icon-circle rounded-4 ms-3 p-3 ${fact.bg_icon}">
                                      <i class="fa-solid fa-${fact.icon} fs-6 ${fact.icon_color}"></i>
                                    </span>
                                    <div
                                      class="nutrition-type ms-3 fw-droplet d-flex align-items-center justify-content-center">
                                                <span>${fact.name}</span>
                                    </div>
                                  </div>
                                </div>
                                <!-- Ratio Calories -->
                                <div class="col-6 d-flex align-items-center justify-content-center" id="calories">
                                  <div class="inner p-3 text-center">
                                    <h5 class="fw-bold mb-1" id="ratio-calories"> <span>${fact.value}</span></h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`;
            nutritionFactsList.innerHTML += html;
        }

    }

    // Update Instructions Featch data In Ui 
    function updateInstructionsList(data) {
        var instructionsList = document.getElementById("instructions-list");
        instructionsList.innerHTML = "";
        //  Make For Loop and Add Instructions To The List
        for (var i = 0; i < data.length; i++) {
            var instruction = data[i];
            var html = `<li class="list-group-item border-0 mb-3 d-flex align-items-center gap-2 px-2">
                        <span
                          class="ingredient-index bg-main text-white rounded-4 fs-4 me-2 py-4 px-4 d-inline-flex align-items-center justify-content-center">
                          ${i + 1}
                        </span>
                        <span>
                            ${instruction}
                        </span>
                      </li>`;
            instructionsList.innerHTML += html;
        }
        return instructionsList;
    }


    // Update Chef's Tips In Ui
    function updateChefsTips(data) {
        var chefsTipsList = document.getElementById("chefs-tips-list");
        chefsTipsList.innerHTML = "";

        //  Make For Loop and Add Instructions To The List
        for (var i = 0; i < data.length; i++) {
            var tip = data[i];
            var html = `
            <div
                class="alert alert-light-orange d-flex border border-light-orange align-items-center gap-2 py-3 px-3 mb-4"
                role="alert">
                
                <span
                    class="ingredient-index bg-purple-dark text-white rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-check"></i>
                </span>

                <div class="small text-dark ">
                    <h6 class="text-dark m-0 text-light-gold">${tip}</h6>
                </div>
            </div>
        `;
            chefsTipsList.innerHTML += html;
        }

    }

    //  Finally Start Make Function Click Action Try Recipe 💫
    function fetchAndUpdateRecipeContent() {
        var recipeData = getRandomRecipeData();

        // Update the recipe content in the HTML
        document.getElementById("recipe-title").innerText = recipeData.title;
        document.getElementById("recipe-description").innerText = recipeData.description;
        document.getElementById("recipes-image").src = recipeData.image;
        document.getElementById("recipe-level").innerText = recipeData.level;
        document.getElementById("recipe-type").innerText = recipeData.type;
        // Start Update Main Image 
        //  Update Section Extended Preparation Time
        warning(recipeData.warning);
        // Update ingredients list
        returnUiHtmlAfterUpdateIngredientsList(recipeData.ingredients);
        //  Update Nutritions Facts 
        featchnutritionFacts(recipeData.nutritionFacts);
        // Review Update Function and pass Data
        review(recipeData.review);
        // Update instructions list
        updateInstructionsList(recipeData.instructions);
        // Updating Chef's Tips 
        updateChefsTips(recipeData.chefsTipsList)

        // Update Preperation Details
        updatePreparationDetails(recipeData.preparationDetailes);

    }

    // Review Update UI
    function review(review) {
        reviewElement = document.getElementById('recipes-rate');

        html = `<div class="d-inline-flex align-items-center gap-1 bg-white rounded-5 shadow px-2 py-2">
                  <i class="fa-solid fa-star text-warning"></i>
                  <span class="fw-bold text-dark" id="resipes-rate-count">${review.rate}</span>
                  <span class="text-muted small">
                    ( <span id="count-reviews">${review.members}</span> reviews )
                  </span>
                </div>`;

        reviewElement.innerHTML = html;


    }
    //  Updae Section Extended Preparation Time If True or False
    function warning(warnin) {
        var alert = document.getElementById('warnin-alert');

        if (warnin.status) {
            html = `
                 <div
                    class="alert alert-danger d-flex border  border-danger-left  align-items-center gap-2 py-3 px-3 mb-4"
                    role="alert" id="preparation-time-alert">
                        <i class="fa-solid fa-triangle-exclamation text-danger fs-5"></i>
                     <div class="small text-dark">
                          <!-- warning Note -->
                          <h6 class=" text-danger m-0">Extended Preparation Time</h6>
                          <span id="preparation-time" class="text-danger">
                            This recipe requires more than 45 minutes to prepare. Plan accordingly!
                          </span>
                    </div>
                </div>`;
            console.log(warnin.status);

            alert.innerHTML = html;
        } else {
            alert.innerHTML = '';

        }
        console.log(warnin.status);

    }


    function updatePreparationDetails(preparation) {
        const container = document.getElementById('preparation-list');
        let html = '';

        // Loop through each item in preparationDetailes
        // Prep Time
        console.log(preparation);
        for (let i = 0; i < preparation.length; i++) {

            html += `<div class="col-md-4 col-6">
                    <div class="inner text-center ms-3">
                        <span class="text-center text-sub-color block fs-4">
                            <i class="fa-solid fa-clock"></i>
                        </span>
                        <span class="text-center text-muted d-block">${preparation[i].prepTime.name}</span>
                        <span class="text-center d-block fw-bold f-6">${preparation[i].prepTime.time}</span>
                    </div>
                 </div>`;

            // Cook Time
            html += `<div class="col-md-4 col-6">
                    <div class="inner text-center ms-3">
                        <span class="text-center main-color block fs-4">
                            <i class="fa-solid fa-fire-burner"></i>
                        </span>
                        <span class="text-center text-muted d-block">${preparation[i].cookTime.name}</span>
                        <span class="text-center d-block fw-bold f-6">${preparation[i].cookTime.time}</span>
                    </div>
                 </div>`;

            // Servings
            html += `<div class="col-md-4 col-6">
                    <div class="inner text-center ms-3">
                        <span class="text-center text-primary block fs-4">
                            <i class="fa-solid fa-users"></i>
                        </span>
                        <span class="text-center text-muted d-block">${preparation[i].servings.name}</span>
                        <span class="text-center d-block fw-bold f-6">${preparation[i].servings.count}</span>
                    </div>
                 </div>`;
        }


        container.innerHTML = html;
    }


    // Initial fetch and update
    fetchAndUpdateRecipeContent();
}








