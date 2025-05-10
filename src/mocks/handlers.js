import { http, HttpResponse } from 'msw';
import { categories as initialCategories } from '../constants/shopCon';


const user = {
  email: 'space@pt.com',
  password: 'tester',
  first_name: 'test',
  last_name: 'test'
};

const authToken = {
  token: "f1e693ca6c9fa6a1b72aff028c7880d90a613ea817feeba3cf41644037380748"
};


let categories = [...initialCategories]; // local memory variable

const catURL = '/categories' 

export const handlers = [
    //Get all categories
    http.get(catURL, () => {
        return HttpResponse.json(categories);
      }),
]


const loginURL = '/login'
export const authHandlers = [
  http.post(loginURL, async ({request}) => {
    const info = await request.json()

    if (info.email === user.email && info.password === user.password) {
      return HttpResponse.json({
        "expiry": "2025-05-12T00:00:31.816093Z",
        "token": "f1e693ca6c9fa6a1b72aff028c7880d90a613ea817feeba3cf41644037380748",
        "user": {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email
        }
    })
    } else {
      return HttpResponse.json({ message: 'Invalid email or password' },
        { status: 401 });
    };
  })
];

const tokenURL = '/token'
export const validateToken = [
  http.post(tokenURL, async ({request}) => {
    const tokenInfo = await request.json()

    if (tokenInfo.token === authToken.token) {
      return HttpResponse.json(true)
    } else {
      return HttpResponse.json({ message: 'session timeout kindly login again' },
        { status: 401 });
    }
  })
]