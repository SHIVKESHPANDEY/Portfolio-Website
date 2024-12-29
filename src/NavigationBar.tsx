import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
  const theme = useTheme(); // Removed explicit typing, as `useTheme` automatically infers the type from MUI's theme.
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  const linkVariants = {
    hover: { scale: 1.1, color: "#f50057" },
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "#111111",
          transition: "opacity 0.5s",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "start",
              marginTop: isMobile ? "0.5rem" : 0,
              marginBottom: isMobile ? "0.5rem" : 0,
              marginRight: isMobile ? "0" : "auto",
            }}
          >
            <Tooltip title="GitHub">
              <GitHub
                onClick={() => openLink("https://github.com/shivkeshpandey")}
                sx={{
                  color: "#ebdddd",
                  cursor: "pointer",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  width: isMobile ? "2rem" : "2.25rem",
                  height: isMobile ? "2rem" : "2.25rem",
                  marginLeft: isMobile ? "1rem" : "-1.5rem",
                  marginRight: isMobile ? "1rem" : "1.5rem",
                }}
              />
            </Tooltip>
            <Tooltip title="LinkedIn">
              <LinkedIn
                onClick={() =>
                  openLink(
                    "https://de.linkedin.com/in/shivkesh-pandey-22b73a1a7"
                  )
                }
                sx={{
                  color: "#ebdddd",
                  cursor: "pointer",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  width: isMobile ? "2.4rem" : "2.6rem",
                  height: isMobile ? "2.4rem" : "2.6rem",
                }}
              />
            </Tooltip>
          </Box>
          <Box sx={{ display: "flex", gap: "0.8rem" }}>
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Skills", href: "/skills" },
              { label: "Projects", href: "/projects" },
              {
                label: "Contact",
                href: "mailto:shivkeshpandey26@gmail.com",
              },
            ].map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                variants={linkVariants}
                whileHover="hover"
                className="nav-link"
                style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
              >
                {label}
              </motion.a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
