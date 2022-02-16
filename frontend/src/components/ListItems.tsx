import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LayersIcon from "@material-ui/icons/Layers";
import CalendarTodayOutlined from "@material-ui/icons/CalendarTodayOutlined";
import { Link as RouterLink } from "react-router-dom";

export const mainListItems = (
  <>
    <div>
      <ListItem button component={RouterLink} to="/shift">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Shift" />
      </ListItem>
    </div>
    <div>
      <ListItem button component={RouterLink} to="/calendar">
        <ListItemIcon>
          <CalendarTodayOutlined />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </div>
  </>
);
