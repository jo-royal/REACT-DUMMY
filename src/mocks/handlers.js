import { http, HttpResponse } from 'msw';
import { categories as initialCategories } from '../constants/shopCon';

let categories = [...initialCategories]; // local memory variable

const catURL = '/categories' 

export const handlers = [
    //Get all categories
    http.get(catURL, () => {
        return HttpResponse.json(categories);
      }),
]
