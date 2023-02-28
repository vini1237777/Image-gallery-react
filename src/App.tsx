import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainRouter from "./Router";
import './App.css'
import ThemeProvider from "./component/ThemeProvider/ThemeProvider";
function App() {
  return (
      <ThemeProvider>
       <div className="App">
       <BrowserRouter>
        <MainRouter />
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            className:
              "flex items-center p-4 max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 p-5 text-sm font-normal",
          }}
        />
    </div>
      </ThemeProvider>
  );
}

export default App;
