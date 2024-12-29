import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const VisitorCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const docRef = doc(db, "visitorCount", "count");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      }
    };

    fetchVisitorCount();
  }, []);

  return count ? `Total visitors: ${count}` : null;
};

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#ebdddd",
        }}
      >
        <VisitorCount />
      </Typography>
      <a
        href="/impressum"
        style={{
          fontSize: "16px",
          color: "#ebdddd",
          fontWeight: "normal",
          marginTop: "1rem",
        }}
      >
        Thanks for Coming :)
      </a>
      <Typography
        variant="body2"
        sx={{
          color: "#ebdddd",
          marginTop: "0.3rem",
        }}
      >
      </Typography>
    </Box>
  );
};

export default Footer;
