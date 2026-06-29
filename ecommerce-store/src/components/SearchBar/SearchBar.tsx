import { TextField } from "@mui/material";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <TextField
      fullWidth
      label="Search products"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;