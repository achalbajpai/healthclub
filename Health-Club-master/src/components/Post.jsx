import {
  ArrowDownward,
  ArrowDownwardOutlined,
  ArrowUpward,
  ArrowUpwardOutlined,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
export function Post() {
  return (
    <Card sx={{ margin: { xs: 2, md: 5 }, marginLeft: 0 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      {/* <CardMedia
        component="img"
        height="200"
        image="https://spanishsabores.com/wp-content/uploads/2020/05/Seafood-Paella-1851-Blog.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ py: 0, alignItems: "center" }}>
        <IconButton aria-label="Upvote" sx={{ p: 0 }}>
          <Checkbox
            icon={<ArrowUpwardOutlined />}
            checkedIcon={<ArrowUpward />}
          />
        </IconButton>
        <Box
          display={"flex"}
          height={"full"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Typography fontSize={"small"} textAlign={"center"}>
            10
          </Typography>
        </Box>
        <IconButton aria-label="Downvote" sx={{ p: 0 }}>
          <Checkbox
            icon={<ArrowDownwardOutlined />}
            checkedIcon={<ArrowDownward />}
          />
        </IconButton>
        {/* <IconButton aria-label="share">
          <Share />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
