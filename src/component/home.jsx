import React,{Fragment} from "react";
import {
	Flex,
	Center,
	SimpleGrid,
} from "@chakra-ui/react";
import Dashboard from "./dashboard";
import Proposals from "./proposals";
import Client from "./crm";

function Navigation({text}) {
  return (
    <Fragment>
      
			<Flex
				justify={"center"}
				direction="column"
				align="center"
				cursor="pointer"
        border="solid 1px gray"
        bg='gray.100'
       
       
			>
				{text}
			</Flex>
		</Fragment>
	);
}


function Home() {


  return (
    <Fragment>
      
      {/* Head Area containing Logo and Heading  */}
      <Flex
				h="12vh"
				bg={"gray.200"}
        justify="space-around"
        width='100vw'
        fontFamily={'Inter'}
			>
				<Center>Logo</Center>

				<Center align="center" textAlign={"center"} justifySelf='center'>
					Rapid Proposal
				</Center>
      </Flex>
      

      {/* Side panel containing navigation */}
      

			<SimpleGrid
				columns={[1,1,2]}
				templateColumns={["auto","auto", "150px auto"]}
				h="88vh"
			>
				<SimpleGrid
					columns={1}
					maxW={["150px"]}
					border="solid 1px gray"
					templateRows={"3rem 3rem 3rem"}
					rowGap="1"
					display={["none", 'none',"grid"]}
				>
					<Navigation text="DashBoard" />
					<Navigation text="Proposals" />
					<Navigation text="CRM" />
				</SimpleGrid>
      <Dashboard />
			</SimpleGrid>
      {/* <Client/> */}
      {/* <Proposals /> */}
		</Fragment>
	);
  
}

export default  Home