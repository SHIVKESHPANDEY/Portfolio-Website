import {
  Box,
  Container,
  Card,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import Footer from "./Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavigationBar from "./NavigationBar";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Flip-Assist Web Application ",
      description:
        "Extract Trends from Twitter, Developed a cutting edge algorithm that can extract trending keywords in real time from twitter which can be used to maintain inventory of E-Commerce Bussiness",
      githubLink: "https://github.com/yourusername/project1",
      image: "./f-assist.png", // Placeholder image
      techStack: ["React", "Node.js", "Twitter API", "Material-UI"],
    },
    {
      id: 2,
      title: "AI Assistant - Jarvis",
      description:
        "Designed a fully functional Software for windows system which allows user to interact with the windows machine through their hand gesture and voice command and can perform multiple tasks simultaneously",
      githubLink: "https://github.com/yourusername/project2",
      image: "./jarvis.png", // Placeholder image
      techStack: ["Python", "OpenCV", "Speech Recognition", "TensorFlow"],
    },
    {
      id: 3,
      title: "Inventory Management System",
      description:
        "This application helps businesses manage inventory with features like real-time updates, dashboard, and custom alerts. Users can view recent orders and their status, add, delete, update products and stock levels, The system simplifies inventory control, order management, and reporting",
      githubLink: "https://github.com/yourusername/project3",
      image: "./inventory.png", // Placeholder image
      techStack: ["React", "Node.js", "MongoDB", "Material-UI"],
    },
    {
      id: 4,
      title: "Employee Engagement System",
      description:
        "This project is an internal web application that tracks and analyzes employee engagement with learning materials, including courses, quizzes, and discussions. It aims to provide both employees and administrators with insightful metrics on user progress and engagement, helping the organization to enhance learning outcomes and offer personalized intervention strategies for low engagement",
      githubLink: "https://github.com/yourusername/project4",
      image: "./learning.png", // Placeholder image
      techStack: ["React", "Node.js", "MySQL", "Material-UI"],
    },
  ];

  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "95%",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            transition={{ delay: 0.5, duration: 1.5 }}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#232526",
                boxShadow: 3,
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 16px rgba(255, 0, 0, 0.5)", // Red shadow on hover
                },
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              <CardMedia
                component="img"
                alt={project.title}
                height="200"
                image={project.image} // Image source
              />
              <CardContent sx={{ minHeight: 220 }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    color: "#fff",
                    marginTop: "1rem",
                    height: "90px", // Limit height to keep descriptions consistent
                    overflow: "hidden", // Hide overflow text
                    textOverflow: "ellipsis", // Add ellipsis for overflowed text
                  }}
                >
                  {project.description}
                </Typography>
                {/* Tech Stack Tags */}
                <Box sx={{ marginTop: "1rem" }}>
                  {project.techStack.map((tech, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        display: "inline-block",
                        marginRight: "0.5rem",
                        marginBottom: "0.5rem",
                        padding: "0.25rem 0.75rem", // Reduced padding for smaller width
                        fontSize: "0.75rem", // Smaller font size
                        borderRadius: "20px",
                        border: `1px solid ${
                          index % 2 === 0 ? "#FF5733" : "#4CAF50"
                        }`, // Different border colors for odd/even
                        color: "#fff",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor:
                            index % 2 === 0 ? "#FF5733" : "#4CAF50",
                          borderColor: "#fff",
                        },
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "1rem",
                  }}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      backgroundColor: "#414345",
                      "&:hover": {
                        backgroundColor: "#232526",
                      },
                    }}
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <GitHubIcon />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
      <Box sx={{ position: "fixed", zIndex: 1, bottom: 0, left: 0, right: 0 }}>
        <Footer />
      </Box>
    </Container>
  );
};

export default Projects;
