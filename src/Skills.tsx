import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import Footer from "./Footer";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "100vh",
        marginBottom: "2%",
      }}
    >
      <NavigationBar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          fontWeight={700}
          fontSize={isMobile ? 32 : 40}
          variant="h2"
          sx={{
            textAlign: isMobile ? "center" : "start",
            color: "#ebdddd",
            marginTop: isMobile ? "12%" : "12.5%",
            marginBottom: isMobile ? "20%" : "10%",
          }}
        >
          Tech Stack
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={isMobile ? 2 : 4}
        justifyContent="start"
        sx={{ marginBottom: "5%" }}
      >
        {[
          { imageSrc: "./react.svg", alt: "React", text: "React", rating: 3 },
          {
            imageSrc: "./typescript.svg",
            alt: "TypeScript",
            text: "TypeScript",
            rating: 3,
          },
          {
            imageSrc:
              "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
            alt: "Git",
            text: "Git",
            rating: 3,
          },
          {
            imageSrc: "./mui.svg",
            alt: "Material-UI",
            text: "Material-UI",
            rating: 3,
          },
          {
            imageSrc: "./javascript.svg",
            alt: "JavaScript",
            text: "JavaScript",
            rating: 3,
          },

          {
            imageSrc: "./sql.svg",
            alt: "SQL",
            text: "SQL",
            rating: 4,
          },
          {
            imageSrc: "./powerbi.svg",
            alt: "Power BI",
            text: "Power BI",
            rating: 5,
          },
          {
            imageSrc: "./snowflake.svg",
            alt: "Snowflake Cloud",
            text: "Snowflake Cloud",
            rating: 5,
          },
          {
            imageSrc: "./fabric.svg",
            alt: "Microsoft Fabric",
            text: "Microsoft Fabric",
            rating: 4,
          },
          {
            imageSrc: "./azure.svg",
            alt: "Microsoft Azure",
            text: "Microsoft Azure",
            rating: 5,
          },
          {
            imageSrc: "./dbt.svg",
            alt: "DBT",
            text: "DBT",
            rating: 4,
          },
          { imageSrc: "./c++.svg", alt: "C++", text: "C++", rating: 5 },
          {
            imageSrc: "./python.svg",
            alt: "Python",
            text: "Python",
            rating: 4,
          },
          {
            imageSrc: "./prisma.svg",
            alt: "Prisma ORM",
            text: "Prisma ORM",
            rating: 5,
          },
          {
            imageSrc: "./sequelize.svg",
            alt: "Sequelize.js",
            text: "Sequelize.js",
            rating: 5,
          },
          {
            imageSrc: "./devops.svg",
            alt: "Azure DevOps",
            text: "Azure DevOps",
            rating: 4,
          },
          {
            imageSrc: "./firebase.svg",
            alt: "Firebase",
            text: "Firebase",
            rating: 4,
          },
          { imageSrc: "./aws.svg", alt: "AWS", text: "AWS", rating: 3 },
        ].map((skill, index) => (
          <Grid item xs={6} sm={3} md={3} key={index}>
            <SkillBox {...skill} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ backgroundColor: "#ebdddd" }} />

      <Box sx={{ marginTop: "5%", marginBottom: "10%" }}>
        <motion.div
          style={{
            color: "#ebdddd",
            fontSize: isMobile ? 14 : 20,
            fontWeight: 400,
            textAlign: "start",
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
        >
          <b>Disclaimer: </b>
          <br />
          Obviously I'm not an experienced developer yet, so I'm not a master in
          any of these technologies. But I'm trying to improve myself and learn
          new things about these technologies every day.
        </motion.div>
      </Box>
      <Footer />
    </Container>
  );
};

const SkillBox = ({
  imageSrc,
  alt,
  text,
  rating,
}: {
  imageSrc: string;
  alt: string;
  text: string;
  rating: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <motion.img
          animate={{ opacity: 1, y: -40 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
          src={imageSrc}
          alt={alt}
          style={{ width: 100, height: 100, margin: 5 }}
        />
        <Typography sx={{ color: "#ebdddd", fontSize: 20 }}>{text}</Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}
        >
          {Array.from({ length: 5 }, (_, index) =>
            index < rating ? (
              <StarIcon key={index} sx={{ color: "#ebdddd" }} />
            ) : (
              <StarBorderIcon key={index} sx={{ color: "#ebdddd" }} />
            )
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Skills;