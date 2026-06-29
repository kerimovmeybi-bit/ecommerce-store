import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface CategoryFilterProps {
  category: string;
  setCategory: (value: string) => void;
}

function CategoryFilter({
  category,
  setCategory,
}: CategoryFilterProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>

      <Select
        value={category}
        label="Category"
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <MenuItem value="">
          All Categories
        </MenuItem>

        <MenuItem value="electronics">
          Electronics
        </MenuItem>

        <MenuItem value="jewelery">
          Jewelery
        </MenuItem>

        <MenuItem value="men's clothing">
          Men's Clothing
        </MenuItem>

        <MenuItem value="women's clothing">
          Women's Clothing
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default CategoryFilter;