import { Image, Flex, Link, HStack } from "@chakra-ui/react";
import { NavLink} from 'react-router-dom'
import logoIgnite from "../assets/Logo.svg"
import {Timer, Scroll} from "phosphor-react"
export function Header(){
    return (
        <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Image src={logoIgnite} alt=""/>
            <HStack spacing={"1rem"} justifyContent={"center"} alignItems={"center"}>
                <Link title="Timer" as={NavLink} to='/' p={2} borderTop="3px solid transparent" borderBottom="3px solid transparent"
                _hover={{
                    borderBottom: "3px solid green"
                }}
                _activeLink={{
                    color: "green.500"
                }}
                ><Timer size={24}/></Link>
                <Link title="Historico" as={NavLink} to='/history'  p={2} borderTop="3px solid transparent" borderBottom="3px solid transparent"
                _hover={{
                    borderBottom: "3px solid green"
                }}
                _activeLink={{
                    color: "green.500"
                }}
                ><Scroll size={24}/></Link>
            </HStack>
            
        </Flex>
    )
}