import { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Grid, Typography, Avatar, Stack, Link, AppBar, Toolbar, Button, Drawer, Divider, IconButton } from '@mui/material';
import { Phone, Email, LocationOn, GitHub, Menu, Close, Download } from '@mui/icons-material';
import heroImg from './assets/hero.jpeg';
import cvPdf from './assets/cv.pdf';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.title = 'ISHIMWE JEAN DAMOUR - Portfolio';
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navItems = [
    { label: 'About', ref: aboutRef },
    { label: 'Skills', ref: skillsRef },
    { label: 'Experience', ref: experienceRef },
    { label: 'Projects', ref: projectsRef },
    { label: 'Education', ref: educationRef },
    { label: 'Contact', ref: contactRef }
  ];

  const summary = "I studied Software Development at EAV KIVUMU TSS where I received my A2 qualification. Currently pursuing Information Technology at RP KARONGI COLLEGE. I have completed internships at NAVA and EVA MULTI SERVICE. Proficient in React, Node.js, JavaScript, PHP, Python, C, C++, Bootstrap, and Tailwind CSS. I developed the Doctor Appointment System, a responsive web application for booking doctor appointments, deployed at ishimwe.surge.sh.";

  const experiences = [
    { title: 'Internship', company: 'EVA MULTI SERVICE', period: 'Recent', description: 'Gained practical experience in software development, working on various projects and learning modern development practices.', details: ['Worked on multiple React projects', 'Collaborated with development team', 'Learned modern web development practices'] },
    { title: 'Internship', company: 'NAVA', period: 'Recent', description: 'Contributed to development projects and collaborated with the team to deliver quality software solutions.', details: ['Contributed to web development projects', 'Database management experience', 'Team collaboration'] }
  ];

  const education = [
    { degree: 'Information Technology', school: 'RP KARONGI COLLEGE', period: 'Currently Studying' },
    { degree: 'A2 Certificate in Software Development', school: 'EAV KIVUMU TSS', period: 'Completed' }
  ];

  const skills = ['React', 'JavaScript (ES6+)', 'Node.js', 'PHP', 'Python', 'C', 'C++', 'Tailwind CSS', 'Bootstrap', 'Git', 'Database Design', 'HTML/CSS'];

  const projects = [
    { title: 'Doctor Appointment System', description: 'Developed a responsive web application for booking doctor appointments. Built the user interface using HTML, Tailwind CSS, and Bootstrap. Implemented interactive features using React. Managed appointment data using browser localStorage for temporary storage. Designed forms for scheduling and viewing appointments. Deployed the application online using Surge.', live: 'https://ishimwe.surge.sh', github: 'https://github.com/ishdeveloper001-cmyk/ishimwe' },
    { title: 'My Profile', description: 'Personal portfolio website showcasing my skills, projects, and experience. Built with React and Vite for optimal performance and great user experience.', live: '#', github: 'https://github.com/ishdeveloper001-cmyk/portfolio' }
  ];

  const languages = ['English', 'Kinyarwanda'];

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 50%, #faf5ff 100%)', minHeight: '100vh', pb: 4, position: 'relative' }}>
      {/* Background decorative elements */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)', zIndex: 0 }} />
      {/* Fixed Header with Navigation and Profile */}
      <AppBar position="fixed" sx={{ backgroundColor: '#a855f7', boxShadow: '0 8px 32px rgba(168, 85, 247, 0.2)', width: '100%', zIndex: 1200, background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 }, py: { xs: 0.5, md: 1 }, minHeight: { xs: 60, md: 80 } }}>
          {/* Profile Image */}
          <Avatar src={heroImg} sx={{ width: { xs: 45, sm: 55, md: 70 }, height: { xs: 45, sm: 55, md: 70 }, border: '3px solid white', boxShadow: 2, flexShrink: 0 }} alt="ISHIMWE JEAN DAMOUR" />

          {/* Title and Subtitle */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: { xs: 0.5, sm: 1 }, mb: 0, color: '#1a3a3a', fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1.1rem' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              ISHIMWE JEAN DAMOUR
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 600, color: '#2d5a5a', fontSize: { xs: '0.55rem', sm: '0.7rem', md: '0.8rem' }, display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              WEB DEVELOPER | PROGRAMMER | DB DEVELOPER
            </Typography>
          </Box>

          {/* Navigation Links - Desktop Only */}
          <Stack direction="row" spacing={{ xs: 0.25, md: 0.5 }} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button key={item.label} onClick={() => scrollToSection(item.ref)} sx={{ color: '#ffffff', fontWeight: 600, fontSize: { md: '0.75rem', lg: '0.85rem' }, px: { lg: 1 }, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, textTransform: 'none' }}>
                {item.label}
              </Button>
            ))}
            <Button component="a" href={cvPdf} download="ISHIMWE_JEAN_DAMOUR_CV.pdf" sx={{ color: '#ffffff', fontWeight: 600, fontSize: { md: '0.75rem', lg: '0.85rem' }, px: { lg: 1 }, ml: 1, backgroundColor: 'rgba(255, 255, 255, 0.25)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.35)' }, textTransform: 'none', display: 'flex', alignItems: 'center', gap: 0.5, borderRadius: '4px' }}>
              <Download sx={{ fontSize: '0.95rem' }} />
              Download CV
            </Button>
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff' }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <Close /> : <Menu />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="top" open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{ display: { xs: 'block', md: 'none' }, zIndex: 1100 }}>
        <Box sx={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', width: '100%', pt: 2 }}>
          <Stack spacing={0}>
            {navItems.map((item) => (
              <Button key={item.label} fullWidth onClick={() => scrollToSection(item.ref)} sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', py: 1.5, justifyContent: 'flex-start', pl: 3, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.15)' }, textTransform: 'none' }}>
                {item.label}
              </Button>
            ))}
            <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', my: 1 }} />
            <Button component="a" href={cvPdf} download="ISHIMWE_JEAN_DAMOUR_CV.pdf" fullWidth sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', py: 1.5, justifyContent: 'flex-start', pl: 3, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.15)' }, textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1 }}>
              <Download sx={{ fontSize: '1.2rem' }} />
              Download CV
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* Spacer to account for fixed header */}
      <Box sx={{ height: { xs: 65, sm: 75, md: 100 } }} />

      <Container maxWidth="lg" sx={{ mt: { xs: 1, sm: 2, md: 3 }, px: { xs: 1.5, sm: 2, md: 3 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Box ref={aboutRef} sx={{ mb: { xs: 3, md: 4 } }}>
              <Box sx={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, mb: 2, borderRadius: '8px 8px 0 0', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: { xs: 0.5, sm: 1 }, color: '#ffffff', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>ABOUT ME</Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#333', textAlign: 'justify', px: { xs: 1.5, sm: 2 }, fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>{summary}</Typography>
            </Box>

            <Box ref={contactRef} sx={{ mb: { xs: 3, md: 4 } }}>
              <Box sx={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, mb: 2, borderRadius: '8px 8px 0 0', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: { xs: 0.5, sm: 1 }, color: '#ffffff', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>CONTACT</Typography>
              </Box>
              <Stack spacing={{ xs: 1, sm: 1.5 }} sx={{ px: { xs: 1.5, sm: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Phone sx={{ fontSize: { xs: 18, sm: 20 }, color: '#a855f7', flexShrink: 0 }} />
                  <Link href="tel:+250792538516" underline="hover" sx={{ color: '#333' }}>
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>+250 792 538 516</Typography>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Email sx={{ fontSize: { xs: 18, sm: 20 }, color: '#a855f7', flexShrink: 0 }} />
                  <Link href="mailto:ishdeveloper001@gmail.com" underline="hover" sx={{ color: '#333', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>ishdeveloper001@gmail.com</Typography>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <GitHub sx={{ fontSize: { xs: 18, sm: 20 }, color: '#a855f7', flexShrink: 0 }} />
                  <Link href="https://github.com/ishdeveloper001-cmyk" target="_blank" underline="hover" sx={{ color: '#333', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>github.com/ishdeveloper001-cmyk</Typography>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOn sx={{ fontSize: { xs: 18, sm: 20 }, color: '#a855f7', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>Kigali, Rwanda</Typography>
                </Box>
              </Stack>
            </Box>

            <Box ref={skillsRef} sx={{ mb: { xs: 3, md: 4 } }}>
              <Box sx={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, mb: 2, borderRadius: '8px 8px 0 0', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: { xs: 0.5, sm: 1 }, color: '#ffffff', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>SKILLS</Typography>
              </Box>
              <Stack spacing={{ xs: 0.8, sm: 1 }} sx={{ px: { xs: 1.5, sm: 2 } }}>
                {skills.map((skill) => (<Typography key={skill} variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#333', fontSize: { xs: '0.8rem', sm: '0.9rem' }, '&:before': { content: '"\u2022"', mr: 1.5, color: '#a855f7', fontWeight: 700, fontSize: '1rem' } }}>{skill}</Typography>))}
              </Stack>
            </Box>

            <Box sx={{ mb: 0 }}>
              <Box sx={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, mb: 2, borderRadius: '8px 8px 0 0', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: { xs: 0.5, sm: 1 }, color: '#ffffff', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>LANGUAGES</Typography>
              </Box>
              <Stack spacing={{ xs: 0.8, sm: 1 }} sx={{ px: { xs: 1.5, sm: 2 } }}>
                {languages.map((lang) => (<Typography key={lang} variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#333', fontSize: { xs: '0.8rem', sm: '0.9rem' }, '&:before': { content: '"\u2022"', mr: 1.5, color: '#a855f7', fontWeight: 700, fontSize: '1rem' } }}>{lang}</Typography>))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box ref={experienceRef} sx={{ mb: { xs: 3, md: 4 } }}>
              <Box sx={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, flexWrap: 'wrap', borderRadius: '8px 8px 0 0', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: { xs: 0.5, sm: 1 }, color: '#ffffff', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>WORK EXPERIENCE</Typography>
                <Box sx={{ width: { xs: 30, sm: 40 }, height: 2, backgroundColor: '#ffffff', display: { xs: 'none', sm: 'block' } }} />
              </Box>
              <Stack spacing={{ xs: 2.5, sm: 3 }}>
                {experiences.map((exp, idx) => (<Box key={idx} sx={{ px: { xs: 1.5, sm: 2 } }}><Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.95rem' } }}>{exp.title} | {exp.company}</Typography><Typography variant="body2" sx={{ color: '#a855f7', fontWeight: 600, mb: 1, fontSize: { xs: '0.8rem', sm: '0.85rem' } }}>{exp.period}</Typography><Typography variant="body2" sx={{ color: '#333', mb: 1, lineHeight: 1.6, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>{exp.description}</Typography><Stack spacing={0.5}>{exp.details && exp.details.map((detail, i) => (<Typography key={i} variant="body2" sx={{ color: '#555', display: 'flex', alignItems: 'flex-start', fontSize: { xs: '0.75rem', sm: '0.85rem' }, '&:before': { content: '"\u2022"', mr: 1.5, color: '#a855f7', fontWeight: 700 } }}>{detail}</Typography>))}</Stack></Box>))}
              </Stack>
            </Box>

            <Box ref={projectsRef} sx={{ mb: { xs: 3, md: 4 } }}>
              <Box sx={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, flexWrap: 'wrap', borderRadius: '8px 8px 0 0', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: { xs: 0.5, sm: 1 }, color: '#ffffff', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>FEATURED PROJECTS</Typography>
                <Box sx={{ width: { xs: 30, sm: 40 }, height: 2, backgroundColor: '#ffffff', display: { xs: 'none', sm: 'block' } }} />
              </Box>
              <Stack spacing={{ xs: 2.5, sm: 3 }}>
                {projects.map((project, idx) => (<Box key={idx} sx={{ px: { xs: 1.5, sm: 2 } }}><Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1a1a2e', mb: 1, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' } }}>{project.title}</Typography><Typography variant="body2" sx={{ color: '#333', lineHeight: 1.6, mb: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>{project.description}</Typography><Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, flexWrap: 'wrap' }}><Link href={project.live} target="_blank" underline="hover"><Typography variant="body2" sx={{ color: '#a855f7', fontWeight: 600, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>Visit</Typography></Link><Link href={project.github} target="_blank" underline="hover"><Typography variant="body2" sx={{ color: '#a855f7', fontWeight: 600, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>GitHub</Typography></Link></Box></Box>))}
              </Stack>
            </Box>

            <Box ref={educationRef}>
              <Box sx={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', py: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, flexWrap: 'wrap', borderRadius: '8px 8px 0 0', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: { xs: 0.5, sm: 1 }, color: '#ffffff', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>EDUCATION</Typography>
                <Box sx={{ width: { xs: 30, sm: 40 }, height: 2, backgroundColor: '#ffffff', display: { xs: 'none', sm: 'block' } }} />
              </Box>
              <Stack spacing={{ xs: 1.5, sm: 2 }}>
                {education.map((edu, idx) => (<Box key={idx} sx={{ px: { xs: 1.5, sm: 2 } }}><Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.95rem' } }}>{edu.degree}</Typography><Typography variant="body2" sx={{ color: '#a855f7', fontWeight: 600, mb: 0.5, fontSize: { xs: '0.8rem', sm: '0.85rem' } }}>{edu.school}</Typography><Typography variant="body2" sx={{ color: '#666', fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>{edu.period}</Typography></Box>))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ mt: { xs: 4, sm: 5, md: 6 }, pt: { xs: 3, sm: 4 }, background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.08) 100%)', borderTop: '2px solid #a855f7', textAlign: 'center', px: { xs: 1.5, sm: 2 }, position: 'relative', zIndex: 1 }}>
        <Typography variant="body2" sx={{ color: '#666', fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' } }}>
          &copy; 2024 ISHIMWE JEAN DAMOUR | Built with React & Material-UI
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
