import {
  Card,
  CardContent,
  Skeleton,
} from "@mui/material";

function ProductSkeleton() {
  return (
    <Card>
      <Skeleton
        variant="rectangular"
        height={220}
      />

      <CardContent>
        <Skeleton height={40} />

        <Skeleton
          width="60%"
          height={30}
        />

        <Skeleton
          variant="rectangular"
          height={40}
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
}

export default ProductSkeleton;