import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function DefaultLayout(){
    return (
        <Box maxW={"74rem"} height={"90vh"} m={"5rem auto"} p={"2.5rem"} 
            backgroundColor={"gray.800"} borderRadius={"8px"} display={"flex"} flexDirection={"column"}>
            <Header/>
            <Outlet/>
        </Box>
    )
}