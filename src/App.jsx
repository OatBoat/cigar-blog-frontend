import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostPage } from "./PostPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;



 const router = createBrowserRouter([
   {
     element: (
       <div>
         <Header />
         <Outlet />
         <Footer />
       </div>
     ),
     children: [
       {
         path: "/",
         element: <PostPage />,
       },
       {
         path: "/signup",
         element: <SignupPage />,
       },
       {
         path: "/login",
         element: <LoginPage />,
       },
     ],
   },
 ]);



// const email = localStorage.getItem("email");
//   return (
//     <div className="container">
//       <Header />
//              {!email && (
//           <>
//             <SignupPage />
//             <LoginPage />
//           </>
//          )}
//       <PostPage />
//       <Footer />
//     </div>
//   )
function App() {
return <RouterProvider router={router} />;
 }
export default App