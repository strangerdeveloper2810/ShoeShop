import * as React from "react";
import { NavLink } from "react-router-dom";
import { ProductModel } from "../../redux/types/ProductType";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RelatedProduct } from "../../redux/types/ProductDetailType";

type Props = {
  product?: ProductModel | RelatedProduct;
};
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ product }: Props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="mb-5">
      <CardMedia
        component="img"
        height="194"
        image={
          product?.image
            ? product.image
            : "https://shop.cyberlearn.vn/images/adidas-prophere.png"
        }
        alt={product?.name}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className="fw-semibold fs-5"
        >
          {product?.name ? product.name : "Product 1"}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="buy now">
          <NavLink
            to={`/detail/${product?.id ? product.id : "1"}`}
            className="btn btn-outline-primary"
          >
            <ShoppingCartIcon />
            Buy Now
          </NavLink>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="h4" className="text-info">
            Price: {product?.price ? product.price : "1000"} $
          </Typography>
          <Typography paragraph>
            {product?.description
              ? product.description
              : "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement"}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
