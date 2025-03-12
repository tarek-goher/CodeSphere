import React, { createContext, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// إنشاء الـ Context
export const ThemeContext = createContext();

// ThemeContextProvider الذي سيحتوي على الـ Provider للمكونات الأخرى
export const ThemeContextProvider = ({ children }) => {
  // جلب القيمة المحفوظة في localStorage أو استخدام 'light' كقيمة افتراضية
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? savedMode : "light";
  });

  // التبديل بين الوضع الليلي والنهاري
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // تحديث localStorage عندما يتغير الـ mode
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // إنشاء الثيم بناءً على الوضع الحالي
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#426dc5" : "#5f9ae4",
          },
          secondary: {
            main: mode === "light" ? "#5dc2bc" : "#7adad4",
          },
          background: {
            default: mode === "light" ? "#f5f8fc" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#333333" : "#e0e0e0",
            secondary: mode === "light" ? "#666666" : "#b0b0b0",
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === "light" ? "rgba(255, 255, 255, 0.85)" : "rgba(30, 30, 30, 0.85)",
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: mode === "light" ? "rgba(255, 255, 255, 0.95)" : "rgba(30, 30, 30, 0.95)",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
