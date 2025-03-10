import { Box, Stack, Typography, Divider, Container, Link } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function About() {
  return (
    <Box sx={{ bgcolor: '#131F2F', width: '100%', position: 'relative' }}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 6, 
          position: 'relative', 
          overflow: 'visible',
          minHeight: 'auto',
          mb: 4
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '33%',
            height: '85%',
            backgroundColor: '#131F2F',
            right: 60,
            top: 20,
            zIndex: 0,
            display: { xs: 'none', sm: 'block' }
          }}
        />

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 6, md: 10 }} 
          justifyContent="space-between"
          height={'auto'}
          gap={10}
        >
          <Stack direction="column" spacing={3} sx={{ maxWidth: 600 }} width={'100%'}>
            {/* خط قبل About Us */}
            <Divider sx={{ width: 80, borderColor: '#BAD7F5', borderWidth: 2, mb: 2 }} />
            
            <Typography 
              variant="h5" 
              sx={{ 
                color: "#fff", 
                fontWeight: 'bold',
                mb: 1 
              }}
            >
              About Us
            </Typography>

            <Typography 
              variant="h5" 
              sx={{ 
                color: '#BAD7F5', 
                fontWeight: 'bold',
                fontSize: '2.5rem',
                mb: 2
              }}
            >
              Insights About Our Company
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                color: '#95A4B2',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                mb: 3
              }}
            >
              We specialize in crafting innovative desktop, mobile, and web applications tailored 
              to your business needs. Our team focuses on delivering intuitive, high-performance 
              solutions with exceptional UI/UX design. We are committed to driving success through 
              technology and customer-centric approaches.
            </Typography>

            <Link
              href="#" 
              underline="none"
              sx={{ 
                color: '#BAD7F5', 
                fontSize: '1rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                width: 'fit-content',
                '&:hover': {
                  color: '#fff'
                }
              }}
            >
              <ArrowForwardIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              Learn more
            </Link>

            <Stack 
              direction="row" 
              spacing={6} 
              sx={{ 
                mt: 4,
                pt: 3,
                borderTop: '1px solid rgba(186, 215, 245, 0.2)',
                justifyContent:'space-between'
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'medium', mb: 1 }}>
                  Projects
                </Typography>
                <Typography sx={{ color: '#BAD7F5', fontSize: '2rem', fontWeight: 'bold' }}>
                  27
                </Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'medium', mb: 1 }}>
                  Campaigns
                </Typography>
                <Typography sx={{ color: '#BAD7F5', fontSize: '2rem', fontWeight: 'bold' }}>
                  18
                </Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'medium', mb: 1 }}>
                  Events
                </Typography>
                <Typography sx={{ color: '#BAD7F5', fontSize: '2rem', fontWeight: 'bold' }}>
                  56
                </Typography>
              </Box>
            </Stack>
          </Stack>

          {/* صورة */}
          <Box 
            sx={{ 
              minHeight: 450,
              maxWidth: { xs: '100%', md: '40%' },
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
              mt: { xs: 2, md: 8 }, 
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.78)'
            }}
          >
            <img 
              src="https://i.pinimg.com/474x/32/10/a5/3210a5d359f9ce04743688df67eeb716.jpg" 
              alt="About our company" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </Box>
        </Stack>
        {/* إضافة عنصر وهمي للتأكد من انتهاء تأثير العائم */}
        <Box sx={{ clear: 'both', width: '100%', height: '1px' }} />
      </Container>
    </Box>
  );
}