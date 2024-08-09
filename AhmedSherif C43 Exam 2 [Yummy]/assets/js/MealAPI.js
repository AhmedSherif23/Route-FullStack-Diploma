// &==> Base URL for the API requests
let baseURL = 'https://www.themealdb.com/api/json/v1/1';

// ^==========> Get Meal <==========
// !==> Function to get details of a meal by its ID
const getMealDetails = async (mealID) => {
    try {
        let response = await fetch(`${baseURL}/lookup.php?i=${mealID}`); // Fetch meal details by ID
        let data = await response.json();
        return data.meals[0];
    } catch (err) {
        console.log("error getMealDetails: ==>", err);
    }
}

// ^========> Search <========
// !==> Function to search for meals list by name
const getMealByName = async (mealName) => {
    try {
        let response = await fetch(`${baseURL}/search.php?s=${mealName}`);// Search for meals by name
        let data = await response.json();
        return data.meals;
    } catch (err) {
        console.log("error getListCategories: ==>", err);
    }
}

// !==> Function to search for meals list by first letter
const getMealByFLetter = async (fLetter) => {
    try {
        let response = await fetch(`${baseURL}/search.php?f=${fLetter}`);  // Search for meals by first letter
        let data = await response.json();
        console.log(data.meals);
        return data.meals;
    } catch (err) {
        console.log("error getMealByFLetter: ==>", err);
    }
}

// ^==========> Categories <==========
// !==> Function to get list of categories
const getListCategories = async () => {
    try {
        let response = await fetch(`${baseURL}/categories.php`);  // Fetch list of categories
        let data = await response.json();
        return data.categories;
    } catch (err) {
        console.log("error getListCategories: ==>", err);
    }
}
// !==> Function to get meals by category
const getCategoryMeals = async (category) => {
    try {
        let response = await fetch(`${baseURL}/filter.php?c=${category}`);  // Fetch meals by category
        let data = await response.json();
        return data.meals.slice(0, 20);
    } catch (err) {
        console.log("error getCategoryMeals: ==>", err);
    }
}

// ^==========> Areas <==========
// !==> Function to get list of Areas
const getListArea = async () => {
    try {
        let response = await fetch(`${baseURL}/list.php?a=list`); // Fetch list of areas
        let data = await response.json();
        return data.meals;
    } catch (err) {
        console.log("error getListArea: ==>", err);
    }
}
// !==> Function to get meals by area
const getAreaMeals = async (area) => {
    try {
        let response = await fetch(`${baseURL}/filter.php?a=${area}`); // Fetch meals by area
        let data = await response.json();
        return data.meals.slice(0, 20);
    } catch (err) {
        console.log("error getAreMeals: ==>", err);
    }
}

// ^==========> Ingredients <==========
//!==> Function to get list of Ingredients
const getIngredients = async () => {
    try {
        let response = await fetch(`${baseURL}/list.php?i=list`); // Fetch list of ingredients
        let data = await response.json();
        return data.meals.slice(0, 20);
    } catch (err) {
        console.log("error getIngredients: ==>", err);
    }
}
// !==> Function to get meals by Ingredients
const getIngredientsMeals = async (ingredients) => {
    try {
        let response = await fetch(`${baseURL}/filter.php?i=${ingredients}`);  // Fetch meals by ingredients
        let data = await response.json();
        return data.meals.slice(0, 20);
    } catch (err) {
        console.log("error getIngredientsMeals: ==>", err);
    }
}

export { getMealDetails, getMealByName, getMealByFLetter, getListCategories, getCategoryMeals, getListArea, getAreaMeals, getIngredients, getIngredientsMeals };