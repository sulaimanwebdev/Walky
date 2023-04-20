import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const App = () => {

  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default App;
