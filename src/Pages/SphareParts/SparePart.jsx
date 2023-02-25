import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import { GiShoppingBag } from "react-icons/gi";
import Typography from "@mui/joy/Typography";

import { Link, useNavigate } from "react-router-dom";

const SparePart = ({ part }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/purchase/${part._id}`);
  };
  return (
    <Card
      sx={{ width: 300, boxShadow: "1px 1px 20px #FFE9EC", margin: "0 auto" }}
    >
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={part.img} loading="lazy" alt="" />
      </AspectRatio>
      <Box>
        <div>
          <Typography fontSize="lg" fontWeight="lg">
            {part.name.slice(0, 45) + "..."}
          </Typography>
          <p className="mt-5">
            <span className="font-bold">Minimum Order: </span>
            {part.min_order}{" "}
          </p>{" "}
          <p>
            <span className="font-bold">Available Quantity: </span>
            {part.available_quantity}
          </p>
          <Typography sx={{ marginTop: "10px" }} fontSize="lg" fontWeight="lg">
            ${part.price}
          </Typography>
        </div>
        <Button
          onClick={handleNavigate}
          variant="solid"
          size="lg"
          style={{
            color: "#FF0000",
            backgroundColor: "#FEC002",
            marginTop: "10px",
            width: "100%",
            display: "flex",
            padding: "15px",
          }}
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          Purchase <GiShoppingBag className="ml-3" />
        </Button>
      </Box>
    </Card>
  );
};

export default SparePart;
