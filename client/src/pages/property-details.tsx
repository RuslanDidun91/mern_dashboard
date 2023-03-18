import { Typography, Box, Stack } from "@mui/material";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useParams, useNavigate } from "react-router-dom";
import { ChatBubble, Delete, Edit, Phone, Place, Star } from "@mui/icons-material";
import { CustomButton } from "components";

const PropertyDetails = () => {

  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  //for quick deletion
  const { mutate } = useDelete();
  //getting data from backend to get info of unit
  const { queryResult } = useShow();
  const { data, isLoading, isError } = queryResult;

  const propertyDetails = data?.data ?? {};

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return (
    <Box borderRadius="15px" padding="20px" bgcolor="#FCFCFC" width="fit-content">
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Details
      </Typography>
      <Box mt="20px" display="flex" flexDirection={{ xs: "column", lg: "row" }} gap={4}>
        <Box flex={1} maxWidth={764}>
          <img
            src={propertyDetails.photo}
            alt="property_details-img"
            height={546}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            className="property_details-img"
          />
          <Box mt="15px">
            <Stack direction="row" justifyContent="space-between" flexWrap="wrap"
              alignItems="center" >
              <Typography fontSize={18} fontWeight={500} color="#11142D"
                textTransform="capitalize" >
                {propertyDetails.propertyType}
              </Typography>
              <Box>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={`star-${item}`} sx={{ color: "#F2C94C" }} />
                ))}
              </Box>
            </Stack>
            
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PropertyDetails;