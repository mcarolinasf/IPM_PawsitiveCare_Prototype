import React from "react";
import ReactDOMClient from "react-dom/client";
import { CalendarSwipe } from "./screens/CalendarSwipe";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CalendarSwipe />);
