import {
  Box,
  Chip,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { keyframes } from "@mui/system";

// Animation for timeline items (fade-in and slide from left effect)
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);  // Start from left side
  }
  to {
    opacity: 1;
    transform: translateX(0);  // End at original position
  }
`;

const calculateAge = (birthDateString: string) => {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasBirthdayPassed) {
    age -= 1;
  }
  return age;
};

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const age = calculateAge("2003-03-12");

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
      <Box sx={{ mt: 10, px: 2, marginLeft: isMobile ? "0" : "-1rem" }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ebdddd", maxWidth: "75ch", mb: 2 }}
          >
            Hi, I’m Shivkesh, a {age}-year-old Software Engineer with a passion
            for building scalable solutions and solving challenging problems. I
            specialize in full-stack development, data engineering, and
            inventory management, with expertise in technologies like Fabric,
            Azure Data Factory, Snowflake, dbt, Prisma, PostgreSQL, Advanced
            SQL, React, Material-UI, C++, and Data Structures. My experience
            spans exploratory data analysis, feature engineering, and model
            development, coupled with a strong ability to design and optimize
            complex systems. Driven by curiosity and a commitment to innovation,
            I strive to deliver impactful, data-driven solutions. Let’s create
            something exceptional together!
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Work Experience
          </Typography>
          <TimelineSection>
            <WorkExperience
              title="Jman Group"
              date="07.2024 - present"
              label="Software Engineer"
            />
            <WorkExperience
              title="Data Analyst Intern"
              date="01.2024 - 06.2024"
              label="Intern"
            />
            <WorkExperience
              title="Microsoft"
              date="02.2023 - 04.2023"
              label="Azure Internship"
            />
          </TimelineSection>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Education
          </Typography>
          <TimelineSection>
            <Education
              title="Chandigarh University"
              date="2020 - 2024"
              label="Bachelor's Degree in Computer Science"
            />
            <Education
              title="Raj Montessori School"
              date="2016 - 2018"
              label="Higher Secondary Education"
            />
            <Education
              title="Raj Montessori Inter College"
              date="2018 - 2020"
              label="Secondary School Education"
            />
          </TimelineSection>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

const TimelineSection = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      paddingLeft: "2rem",
      position: "relative",
      opacity: 0,
      animation: `${slideInLeft} 0.6s ease-out forwards`,
      animationDelay: "0.3s",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        left: "1.5rem",
        top: 0,
        bottom: 0,
        borderLeft: "3px solid #FF5733", // Timeline color
      }}
    />
    {children}
  </Box>
);

interface WorkExperienceProps {
  title: string;
  date: string;
  label: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  title,
  date,
  label,
}) => (
  <Box
    sx={{
      position: "relative",
      opacity: 0,
      animation: `${slideInLeft} 0.6s ease-out forwards`,
      animationDelay: "0.6s",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "2.5rem",
      }}
    >
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20", marginBottom: "1rem" }}
      />
      <Typography
        variant="body1"
        sx={{ color: "#fff", fontWeight: "bold", opacity: 0.9 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#fff", opacity: 0.7, fontSize: 14, mt: 1 }}
      >
        {date}
      </Typography>
    </Box>
  </Box>
);

const Education = ({
  title,
  date,
  label,
}: {
  title: string;
  date: string;
  label: string;
}) => (
  <Box
    sx={{
      position: "relative",
      opacity: 0,
      animation: `${slideInLeft} 0.6s ease-out forwards`,
      animationDelay: "0.9s",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "2.5rem",
      }}
    >
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20", marginBottom: "1rem" }}
      />
      <Typography
        variant="body1"
        sx={{ color: "#fff", fontWeight: "bold", opacity: 0.9 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#fff", opacity: 0.7, fontSize: 14, mt: 1 }}
      >
        {date}
      </Typography>
    </Box>
  </Box>
);

export default About;
