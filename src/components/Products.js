import Sidenav from "./Sidenav";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import ProductsList from "../Products/ProductsList";

export default function Products() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ProductsList />
        </Box>
      </Box>
    </>
  );
}
