import React, { useEffect, useState } from "react";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Title from "./Component/Title";
import HotelsScroll from "./Component/HotelsScroll";
import HotelDetail from "./Component/HotelDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Title />
          <HotelsScroll />
        </>
      ),
    },
    {
      path: "/:id",
      element: (
        <>
          <Title />
          <HotelDetail />
        </>
      ),
    },
  ]);

  return (
  
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
