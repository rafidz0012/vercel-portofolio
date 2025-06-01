import React from "react";
import NotFoundImg from "../asset/Notfound.svg";
import { useNavigate } from "react-router-dom";
import { Heading, Box, Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box className="error-page">
      <Heading as="h1" className="heading">
        4<img src={NotFoundImg} className="notfound-img" />4 | Not Found
      </Heading>

      <p>
        Halaman yang ada cari tidak tersedia silakan klik tombil dibawah untuk
        kembali kehalaman semula
      </p>
      <Button onClick={handleBack} className="btn-error">
        Take me Back
      </Button>
    </Box>
  );
};

export default NotFound;
