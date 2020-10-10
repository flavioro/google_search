import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ResultList from "../shared/ResultList.container";

const useStyles = makeStyles((theme) => ({
  conteiner: {
    paddingBottom: 65,
    paddingTop: 80,
    display: "flex",
    justifyContent: "center",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
  },
  gridSearchCont: {
    display: "flex",
    width: "80%",
    "& .search-field": {
      flex: 2,
    },
    "& .searcher-selector": {
      flex: 1,
    },
  },
  listCont: {
    width: "100%",
  },
}));

const GOOGLE = "GOOGLE";
const BING = "BING";
const BOTH = "BOTH";

export const SearcherView = (props) => {
  const classes = useStyles();
  const [searcher, setSearcher] = useState(GOOGLE);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearcher = (event) => setSearcher(event.target.value);

  const onBlurSearchField = (event) => setSearchValue(event.target.value);

  const onHandleSearch = (event) => {
    if (searchValue.trim() === "") return;

    switch (searcher) {
      case BOTH:
        props.onGoogleSearch(searchValue);
        props.onBingSearch(searchValue);
        break;
      case BING:
        props.onBingSearch(searchValue);
        break;
      case GOOGLE:
        props.onGoogleSearch(searchValue);
        break;
      default:
        break;
    }
  };

  return (
    <Container maxWidth="md" className={classes.conteiner}>
      <Grid container={true} className={classes.grid} spacing={2}>
        <Grid item={true} xs={12} className={classes.gridSearchCont}>
          <TextField
            id="search_value"
            label="Search"
            variant="outlined"
            className="search-field"
            onBlur={onBlurSearchField}
          />
          <Select
            variant="outlined"
            id="searcher"
            className="searcher-selector"
            value={searcher}
            onChange={onChangeSearcher}
          >
            <MenuItem value={GOOGLE}>Google</MenuItem>
            <MenuItem value={BING}>Bing</MenuItem>
            <MenuItem value={BOTH}>Both</MenuItem>
          </Select>
          <Button variant="contained" color="primary" onClick={onHandleSearch}>
            Search
          </Button>
        </Grid>

        <Grid item={true} xs={12} className={classes.listCont}>
          <Paper>
            <ResultList
              title={"Google results"}
              results={props.googleResults}
              prefixIndex={"G"}
            />
          </Paper>
        </Grid>
        <Grid item={true} xs={12} className={classes.listCont}>
          <Paper>
            <ResultList
              title={"Bing results"}
              results={props.bingResults}
              prefixIndex={"B"}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
