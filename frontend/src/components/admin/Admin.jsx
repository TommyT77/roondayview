import React from 'react';
import { Box, Container } from '@mui/system';
import { Link, Outlet } from 'react-router-dom';

import { Button } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';


export const Admin = () => {
  const classes = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  return (
    <div className='adminuser'>
      <Container>
        <Box sx={{ my: 5 }}>
          <h1>Admin</h1>
          <div className='admin__nav'>
            <Link to="/admin/users">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<PersonIcon />}
                size="large"
                sx={{ mr: 2}}
              >
                Manage User
              </Button>
            </Link>
            <Link to="/admin/blogs">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<ArticleIcon />}
                size="large"
                sx={{ mr: 2}}
              >
                Manage Blogs
              </Button>
            </Link>
            <Link to="/admin/messages">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<EmailIcon />}
                size="large"
                sx={{ mr: 2}}
              >
                Messages
              </Button>
            </Link>
          </div>
          <Outlet/>
        </Box>
      </Container>
    </div>
  )
}
