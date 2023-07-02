'use client'

import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar'

import MuiDrawer from '@mui/material/Drawer'
import {styled} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {SidebarItems} from './navigationItems'
import React, {FC, ReactNode, useState} from 'react'
import {useUser} from "@auth0/nextjs-auth0/client";
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import ProfileIcon from "@/app/profileIcon";

type TemplateProps = {
  children: ReactNode
}


const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

const Template: FC<TemplateProps> = ({children}) => {
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  const [profileActionsAnchorEl, setProfileActionsAnchorEl] = React.useState<null | HTMLElement>(null);
  const openProfileActions = Boolean(profileActionsAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileActionsAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setProfileActionsAnchorEl(null);
  };
  const { user, error, isLoading } = useUser();

  const logout = (): void => {
    window.location.href = "/api/auth/logout";
  }

  return <Box sx={{display: 'flex'}}>
    <CssBaseline/>
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && {display: 'none'}),
          }}
        >
          <MenuIcon/>
        </IconButton>
        <Box>
          <Button onClick={handleClick}>
            {!isLoading &&
                <Avatar alt={user?.name!} src={user?.picture!} />
            }
          </Button>

          <Menu
              id="basic-menu"
              anchorEl={profileActionsAnchorEl}
              open={openProfileActions}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
          >
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        </Box>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{flexGrow: 1}}
        >
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon/>
        </IconButton>
      </Toolbar>
      <Divider/>
      <List component="nav">
        <SidebarItems/>
      </List>
    </Drawer>
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar/>
      <Container>
        {children}
      </Container>
    </Box>
  </Box>
}

export default Template