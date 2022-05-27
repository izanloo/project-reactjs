import Box from '@mui/material/Box';
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";

export default function Carousell() {
  return (
    <Box w="100%" p={4} color="white">
      <ImageSlider slides={SlideData} />
    </Box>
  );
}
