import React from "react";
import { IPropsResultList } from "./types";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listElement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "5px 0",
  },
  list: {
    padding: "5px",
  },
}));

export const ResultList = (props: IPropsResultList) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h3 style={{ padding: "10px" }}>
        {props.title}: {props.results?.itemsCount}
      </h3>

      {props.results?.loading ? <div>"Loadding..."</div> : ""}

      <List component="nav" aria-label="contacts" className={classes.list}>
        {props.results.data.map((element, index) => {
          return (
            <ListItem
              key={props.prefixIndex + index}
              className={classes.listElement}
            >
              <a target="_blank" rel="noopener noreferrer" href={element.link}>
                {element.title}
              </a>
              <p>{element.snippet}</p>
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};
