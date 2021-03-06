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
import { ITEM_PER_PAGE, PREFIX_GOOGLE, PREFIX_BING } from "../constants";

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

enum Searchers {
  GOOGLE = "GOOGLE",
  BING = "BING",
  BOTH = "BOTH",
}

export const SearcherView = (props) => {
  const classes = useStyles();
  const [searcher, setSearcher] = useState(Searchers.GOOGLE);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearcher = (event) => setSearcher(event.target.value);

  const onBlurSearchField = (event) => setSearchValue(event.target.value);

  const onHandleSearch = (event) => {
    if (searchValue.trim() === "") return;

    switch (searcher) {
      case Searchers.BOTH:
        props.onGoogleSearch(searchValue);
        props.onBingSearch(searchValue);
        break;
      case Searchers.BING:
        props.onBingSearch(searchValue);
        break;
      case Searchers.GOOGLE:
        props.onGoogleSearch(searchValue);
        break;
      default:
        break;
    }
  };

  const onHandleChangePage = (searcherType: string, direction: string) => {
    if (searcherType === PREFIX_GOOGLE) {
      const googlePage =
        direction === "next"
          ? props.googleResults.page + 1
          : props.googleResults.page - 1;
      props.onGoogleSearch(searchValue, googlePage);
    } else {
      const bingPage =
        direction === "next"
          ? props.bingResults.page + 1
          : props.bingResults.page - 1;
      props.onBingSearch(searchValue, bingPage);
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
            <MenuItem value={Searchers.GOOGLE}>Google</MenuItem>
            <MenuItem value={Searchers.BING}>Bing</MenuItem>
            <MenuItem value={Searchers.BOTH}>Both</MenuItem>
          </Select>
          <Button variant="contained" color="primary" onClick={onHandleSearch}>
            Search
          </Button>
        </Grid>

        {props.googleResults &&
          (props.googleResults.loading ||
            props.googleResults.itemsCount > 0) && (
            <Grid item={true} xs={12} className={classes.listCont}>
              <Paper>
                <ResultList
                  title={"Google results"}
                  results={props.googleResults}
                  prefixIndex={PREFIX_GOOGLE}
                  onHandleChangePage={onHandleChangePage}
                />
              </Paper>
            </Grid>
          )}
        {props.bingResults &&
          (props.bingResults.loading ||
            props.bingResults.itemsCount > ITEM_PER_PAGE) && (
            <Grid item={true} xs={12} className={classes.listCont}>
              <Paper>
                <ResultList
                  title={"Bing results"}
                  results={props.bingResults}
                  prefixIndex={PREFIX_BING}
                  onHandleChangePage={onHandleChangePage}
                />
              </Paper>
            </Grid>
          )}
      </Grid>
    </Container>
  );
};
