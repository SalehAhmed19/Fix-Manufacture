import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { AspectRatio, Box, Button, Card, Typography } from "@mui/joy";

const Part = ({ part }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/purchase/${part._id}`);
  };
  return (
    <Card
      variant=""
      sx={{
        width: 300,
        margin: "0 auto",
        boxShadow: "1px 1px 20px #FFE9EC",
      }}
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

export default Part;
