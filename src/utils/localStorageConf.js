export const loadCategories = () => {
    const data = localStorage.getItem('categories');
    if (data) {
      return JSON.parse(data);
    }
    return []; // fallback if empty
  };
  
  export const saveCategories = (categories) => {
    localStorage.setItem('categories', JSON.stringify(categories));
  };
  