# 🎬 Movie Info Website Features (Using TMDB API)

## 1. **Homepage (Landing Page)**
- 🌟 Show **Trending Movies**, **Trending TV Shows**, and **Latest Releases** as horizontal lists.
- 🧑‍💻 Fetch data from TMDB API using **TanStack Query** or **Axios**.
- 🎨 Add **Skeleton Loaders** while data is being fetched.
- 🧱 Use **React.memo** to avoid unnecessary re-renders for static lists.

---

## 2. **Search Page**
- 🔍 Allow users to search for **movies** and **TV shows**.
- 🔁 Use **debouncing** to minimize API calls while the user types.
- 📦 Fetch results using TMDB’s search API.
- 🧠 Implement **pagination** with **TanStack Query** to handle large datasets.

---

## 3. **Movie/TV Show Detail Page**
- 🔗 Use **`useParams()`** to get movie/show ID from URL.
- 📄 Fetch detailed information using the TMDB detail API.
- 🛠️ Use **React.lazy() + Suspense** for **code-splitting**.
- ⚠️ Handle **error states** with a fallback UI (e.g., when the API fails).

---

## 4. **Favorites (No Database)**
- ❤️ Save favorite movies/shows to **localStorage**.
- 📂 Create a **Favorites Page** that shows saved items.
- 🧠 Manage state of favorites using **Context API** globally.

---

## 5. **Authentication (Optional)**
- 🔐 Integrate **JWT authentication** for login (use Firebase or mock authentication).
- 🌐 Store **JWT tokens** in **localStorage** for session management.
- 🛡️ Protect routes like **Favorites** and **User Profile**.

---

## 6. **User Profile Page (Optional)**
- 👤 Display user-specific info like saved movies.
- 💾 Update and store favorite movies in **localStorage**.
- ⚙️ Use **`useMutation()`** from TanStack Query to simulate updating data.

---

## 7. **Theme Switcher (Dark/Light Mode)**
- 🌙 Implement a **dark/light mode toggle**.
- 🌟 Store theme preference in **localStorage** for persistence across sessions.

---

## 8. **Pagination and Infinite Scroll**
- 📄 Implement **pagination** or **infinite scroll** for long lists (e.g., trending movies).
- 🔄 Use **TanStack Query**'s pagination support or **Intersection Observer** for infinite scrolling.

---

## 9. **Toast Notifications**
- 🛎️ Use **react-toastify** or **sonner** for showing notifications.
- ✅ Show success messages when movies are added to favorites.

---

## 10. **SEO Optimization**
- 🔍 Use **react-helmet** to dynamically set the **title** and **meta tags**.
- 🌐 Improve SEO for each movie/show page for better search engine ranking.

---

## 11. **Code Splitting & Lazy Loading**
- 📦 Use **React.lazy()** and **Suspense** to **lazy load** heavy components like movie/show details.
- 🚀 Enhance site performance and reduce initial load time.

---

## 12. **Deployment**
- 🌍 Deploy your movie website on **Vercel** or **Netlify**.
- 🔐 Use **environment variables** to securely store your **TMDB API key**.
- 🌐 Ensure **API requests** are properly secured when deploying.

---

## Optional Advanced Features
### 📌 **Filters**:
- 🎬 Add filters by **genre**, **release year**, etc., for movie lists.

### 📽️ **Video Trailers**:
- 🎥 Embed trailers (YouTube or TMDB API) for each movie/show.

### 🌍 **Language Support**:
- 🌐 Implement **i18n** (multiple languages) using **react-i18next**.

### 🔄 **Related Movies**:
- 🔗 Use the TMDB API to show **related movies** or **similar TV shows** based on the selected movie/show.

### 📅 **Watch List**:
- 🗂️ Create a **Watch Later** list to save movies/shows for future viewing.

---

## Example Architecture (No Database)

1. **Home Page**: Fetch **Trending Movies**, **TV Shows**, and **Latest Releases** from TMDB API using **TanStack Query**.
2. **Search Page**: Allow users to search for **movies** and **TV shows**. Implement **debouncing** and **pagination**.
3. **Movie Detail Page**: Fetch detailed information using **`useParams()`** and **React.lazy() + Suspense**.
4. **Favorites**: Store user favorites in **localStorage** and show them on a separate page.
5. **Authentication** (Optional): Use **JWT** for secure login and store user data in **localStorage**.
6. **Error Handling**: Provide a fallback UI or error message when API fails.

---

## Additional Notes
- **API Limitations**: TMDB API has **rate limits** (e.g., 40 requests per 10 seconds). Use **retry mechanisms** or **backoff strategies** to avoid exceeding limits.
- **API Key Security**: Ensure your **API key** is not exposed publicly. Use **proxy servers** if necessary to hide the key.
- **Caching**: **TanStack Query** can help cache API results and reduce redundant requests.

---



---

# Things to learn during this project

# 🚀 Advanced React Developer Roadmap (In Order)

> Start here if you already know React basics: components, props, state, hooks, and routing.

---

## 🧱 1. Data Fetching (Foundational)
- [ ] Learn `fetch()` for basic API calls
- [ ] Learn `axios` (retry, timeout, interceptors)
- [ ] Handle loading (`isLoading`) and error manually
- [ ] Show spinner or “Loading...” while fetching

🔧 Practice: Create a movie list using fetch/axios from TMDB API.

---

## 📦 2. useParams & Dynamic Routing
- [ ] Learn `useParams()` to extract route parameters
- [ ] Create detail pages like `/movie/:id`

🔧 Practice: Show movie detail page using ID.

---

## 🎨 3. Skeleton Loaders

- [x] Show placeholders while data loads use Skeleton library

🔧 Practice: Add skeleton to movie cards.

---

## 🧠 4. React.lazy & Suspense
- [ ] Learn `React.lazy()` and `<Suspense />` for code-splitting
- [ ] Lazy-load pages or components

🔧 Practice: Lazy-load detail page or long component.

---

## 🔁 5. Debouncing & Search Input
- [ ] Use `setTimeout` or `useDebounce` custom hook
- [ ] Improve UX by delaying search until user stops typing

🔧 Practice: Search movie input with delay and API call.

---

## ⚙️ 6. Custom Hooks
- [ ] Create at least 2 reusable hooks (`useDebounce`, `useWindowWidth`)
- [ ] Understand hook reusability and separation of logic

🔧 Practice: Build your own `useFetch` or `useDarkMode`.

---

## 🚀 7. TanStack Query (React Query)
- [ ] Learn `useQuery`, `useMutation`, `queryClient`
- [ ] Handle caching, refetching, and pagination
- [ ] Use Devtools to monitor requests

🔧 Practice: Replace fetch/axios logic with `useQuery` for movies, auto-refetch on window focus.

---

## 🔧 8. Axios Interceptors & API Layer
- [ ] Centralize API in `api.js`
- [ ] Add interceptor to auto-attach token to requests

🔧 Practice: Add token to header on every call.

---

## 🧰 9. React.memo, useMemo, useCallback
- [ ] Optimize performance
- [ ] Avoid unnecessary re-renders

🔧 Practice: Optimize filter/search rendering.

---

## 🌳 10. Context API
- [ ] Use `createContext`, `useContext`
- [ ] Share auth or theme globally

🔧 Practice: Store login info with Context.

---

## 🔐 11. Auth & Protected Routes
- [ ] Create Login Page
- [ ] Store JWT in localStorage
- [ ] Show/hide routes based on login

🔧 Practice: Block `/dashboard` if not logged in.

---

## 📝 12. Form Handling
- [ ] Use `react-hook-form`
- [ ] Add Zod or Yup validation

🔧 Practice: Signup form with validation errors.

---

## 🧠 13. Compound Component Pattern
- [ ] Learn how to create components like `<Tabs>`, `<TabPanel>`

🔧 Practice: Create custom UI components.

---

## 📊 14. Redux Toolkit (or Zustand)
- [ ] Create slices, dispatch actions, use selectors
- [ ] Use devtools

🔧 Practice: Add cart state with Redux Toolkit.

---

## 🛠️ 15. Error Handling & Boundaries
- [ ] Use Error Boundaries
- [ ] Show fallback UI on crash

🔧 Practice: Catch and show error for broken API call.

---

## 🧪 16. Testing (Jest + RTL)
- [ ] Write unit test for button
- [ ] Test form and API behavior

🔧 Practice: Test search input & form submission.

---

## 🌍 17. SEO & Deployment
- [ ] Add `react-helmet` for dynamic `<title>`
- [ ] Deploy with Vercel or Netlify

🔧 Practice: Set dynamic titles, then deploy.

---

## 🎯 18. Bonus: Polishing
- [ ] Add toast notifications
- [ ] Add dark mode toggle
- [ ] Add accessibility (ARIA labels)
- [ ] Try TypeScript in small part of app
- [ ] Try `i18n` for multilingual apps
