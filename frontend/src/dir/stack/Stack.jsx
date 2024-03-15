import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error from "../pages/Errors";
import Loader from "../components/Loader";
import Dex from "../pages/Dex";
import NotificationModal from "../components/NotificationModal";

function Stack() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dex />} />
          <Route path="*" element={<Error />} />
          <Route path="/Goal" element={<NotificationModal />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Stack;
