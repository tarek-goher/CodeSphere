import { useEffect, useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePreview = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const navigate = useNavigate();

  // لزيادة عدد الزوار عند كل تحميل للصفحة
  useEffect(() => {
    // تحقق مما إذا كان المستخدم قد زار الموقع من قبل
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (!hasVisitedBefore) {
      // هذه هي الزيارة الأولى للمستخدم
      localStorage.setItem("hasVisitedBefore", "true"); // تسجيل أن المستخدم قد زار الموقع
      setIsFirstVisit(true); // تغيير الحالة لعرض صفحة الزوار لأول مرة

      // تحديث عدد الزوار في localStorage
      const currentVisitorCount = localStorage.getItem("visitorCount") || 0;
      const newVisitorCount = parseInt(currentVisitorCount) + 1;
      localStorage.setItem("visitorCount", newVisitorCount);
      setVisitorCount(newVisitorCount);
    } else {
      // إذا كان قد زار من قبل، فقط استرجع عدد الزوار من localStorage
      const currentVisitorCount = localStorage.getItem("visitorCount") || 0;
      setVisitorCount(parseInt(currentVisitorCount));
    }
  }, []); // نستخدم [] ليتم تنفيذه مرة واحدة فقط عند أول تحميل للصفحة

  const handleReturnHome = () => {
    navigate("/"); // العودة إلى الصفحة الرئيسية
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        minHeight: "100vh",
        backgroundColor: "#f0f0f5",
      }}
    >
      {/* لوحة عدد الزوار */}
      <Paper
        sx={{
          padding: 3,
          backgroundColor: "#fff",
          boxShadow: 3,
          borderRadius: 3,
          marginBottom: 4,
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          عدد الزوار الحالي: {visitorCount}
        </Typography>
        {isFirstVisit ? (
          <Typography
            variant="h6"
            sx={{
              color: "#388e3c",
              textAlign: "center",
              marginBottom: 3,
              fontStyle: "italic",
            }}
          >
            مرحبًا بك في أول زيارة لك!
          </Typography>
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: "#f57c00",
              textAlign: "center",
              marginBottom: 3,
              fontStyle: "italic",
            }}
          >
            لقد زرت الموقع من قبل
          </Typography>
        )}
      </Paper>

      {/* زر العودة إلى الصفحة الرئيسية */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          padding: "10px 30px",
          fontSize: "16px",
          backgroundColor: "#1976d2",
          '&:hover': {
            backgroundColor: "#1565c0",
          },
        }}
        onClick={handleReturnHome}
      >
        العودة إلى الصفحة الرئيسية
      </Button>

      {/* عرض عدد الزوار في مكان ثابت أعلى الصفحة */}
      <Box
        sx={{
          position: "fixed",
          top: 10,
          right: 10,
          padding: 2,
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "50px",
          boxShadow: 3,
        }}
      >
        <Typography variant="h6">
          عدد الزوار: {visitorCount}
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePreview;
