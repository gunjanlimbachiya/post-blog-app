import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { rootReducer } from "../redux/store";
import { PostType } from "../redux/features/Posts/types";
import { FilterType } from "./PostsList";

type PostsFilterProps = {
  show: boolean;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  filter: FilterType;
  handleFilter: () => void;
  clearFilter: () => void;
};

interface PostsState {
  posts: PostType[];
  error: string; // Specify the type of error if applicable
  isLoading: boolean;
}

const PostsFilter = ({
  show,
  setFilter,
  filter,
  handleFilter,
  clearFilter,
}: PostsFilterProps) => {
  const { posts } = useSelector(
    (state: ReturnType<typeof rootReducer>) => state.posts as PostsState
  );
  //   const inputRef = useRef<HTMLInputElement>(null);
  const allCategories = posts?.map((post) => post.category);
  const categories = [...new Set(allCategories)];

  const allAuthors = posts?.map((post) => post.author);
  const authors = [...new Set(allAuthors)];
  const [text, setText] = React.useState<string>("");

  const handleChange = (e: SelectChangeEvent) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    clearFilter();
    setText("");
  };

  const handleSearchChange = (searchValue: string) => {
    setFilter({ ...filter, search: searchValue });
  };

  /// debaunce logic

  const debounce = (func: (searchValue: string) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (searchValue: string) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(searchValue), delay);
    };
  };

  const debouncedUpdateState = debounce(handleSearchChange, 1000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setText(searchText);
    debouncedUpdateState(searchText);
  };

  return (
    <Box
      mb={2}
      sx={{
        boxSizing: "border-box",
        border: show ? "1px solid #ddd8d8" : "none",
        height: show ? "auto" : "0px",
        overflow: show ? "auto" : "hidden",
        boxShadow: "0px 5px 10px #dbd6d6",
        transition: "height .5s ease",
      }}
    >
      <form>
        <Grid container spacing={2} p={2}>
          <Grid item lg={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Search"
              variant="outlined"
              name="search"
              value={text}
              onChange={handleSearch}
              autoComplete="off"
            />
          </Grid>
          <Grid item lg={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                  name="category"
                  value={filter.category}
                >
                  <MenuItem key="all" value="">
                    All
                  </MenuItem>

                  {categories.map((category) => {
                    return (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Author</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                name="author"
                value={filter.author}
              >
                <MenuItem key="all" value="">
                  All
                </MenuItem>
                {authors.map((category) => {
                  return (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} p={2}>
          <Grid item>
            <Button onClick={() => handleFilter()} variant="contained">
              Apply
            </Button>
            <Button
              onClick={handleClear}
              sx={{ marginLeft: "1rem" }}
              variant="contained"
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default PostsFilter;
