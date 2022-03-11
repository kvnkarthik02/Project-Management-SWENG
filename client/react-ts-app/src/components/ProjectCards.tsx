import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
// Styles

export type ProjItem = {
    id: number;
    description: string;
}

const dataString='[{id:1,description:"frontend"},{id:1,description:"backend"}]';
const data = JSON.parse(dataString);

const ProjectCards = () => {
  return (
    <Grid container spacing={3}>
        
    </Grid>
  )
}

export default ProjectCards