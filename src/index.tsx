import React from "react";
import { createRoot } from "react-dom/client";
import createSagaMiddleware from "redux-saga";
import reducers from "./redux/reducers";
import App from "./App";
import sagas from "./redux/sagas";
import { configureStore } from "@reduxjs/toolkit";

import "./styles/index.scss";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

const root = createRoot(document.getElementById("root")!);

root.render(<App store={store} />);
