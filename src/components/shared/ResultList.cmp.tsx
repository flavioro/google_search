import React from "react";
import { IPropsResultList } from "./types";
import { Button, List, ListItem } from "@material-ui/core";
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
  loadding: {
    display: "flex",
    justifyContent: "center",
  },
  contBtns: {
    display: "flex",
    justifyContent: "space-around",
  },
  contTitle: {
    padding: "10px",
  },
}));

export const ResultList = (props: IPropsResultList) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h3 className={classes.contTitle}>
        {props.title}: {props.results?.itemsCount}
      </h3>

      {props.results.loading ? (
        <div className={classes.loadding}>Loadding...</div>
      ) : (
        ""
      )}

      <List component="nav" aria-label="contacts" className={classes.list}>
        {props.results.data.map((element, index) => {
          return (
            <ListItem
              key={props.prefixIndex + index}
              className={classes.listElement}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.prefixIndex === "G" ? element.link : element.url}
              >
                {props.prefixIndex === "G" ? element.title : element.name}
              </a>
              <p>{element.snippet}</p>
            </ListItem>
          );
        })}
      </List>
      <div className={classes.contBtns}>
        {props.results.page > 1 && (
          <Button
            onClick={() => props.onHandleChangePage(props.prefixIndex, "prev")}
          >
            {"< Previous"}
          </Button>
        )}
        {props.results.itemsCount > 10 && (
          <Button
            onClick={() => props.onHandleChangePage(props.prefixIndex, "next")}
          >
            {"Next >"}
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};
