import React, { Fragment } from "react";
import {
	Box,
	Flex,
	Center,
	Avatar,
	Input,
	FormControl,
	FormLabel,
	Button,
} from "@chakra-ui/react";

function Login() {
	return (
		<Fragment>
			<Flex justify="center" mt="6.5%">
				<Flex
					direction={"column"}
					border={"solid 1px gray"}
					borderRadius="8px"
					boxShadow={"0 0 15px gray"}
					width={["90vw", "300px"]}
					p="25"
					font-family="Inter"
					color={"#64666a"}
				>
					<Center p="3">
						<Avatar size="lg" bg="teal.500" />
					</Center>
					<Box p="3" fontSize={"xl"} fontWeight="extrabold">
						Login to Rapid propsal
					</Box>
					<FormControl p="3">
						<FormLabel htmlFor="username" fontSize={"small"}>
							Username:
						</FormLabel>
						<Input type="text" placeholder="Username" />
						<FormLabel htmlFor="password" fontSize={"small"} pt="5">
							Password:
						</FormLabel>

						<Input type="password" placeholder="Password" />
					</FormControl>
					<Button
						variant={"solid"}
						bgColor="#ff5722"
						color="white"
						_hover={{ bgColor: "#ff784d" }}
						m="2"
					>
            Login
            
					</Button>
				</Flex>
			</Flex>
		</Fragment>
	);
}

export default Login;
