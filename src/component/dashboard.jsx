import React, { Fragment } from "react";
import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	ListItem,
	SimpleGrid,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { RiAlarmFill } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { MdWarningAmber } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

function SummaryCard({ heading, color, icon, text }) {
	return (
		<Flex
			direction="column"
			bg="white"
			borderRadius="10px"
			pt="1"
			pl="2"
			pr="8"
			pb="8"
			
		>
			<Flex pt="2" pb="2" alignItems={"center"}>
				<Box mr="9">{icon}</Box>
				<Heading as={"h5"} size="sm" color={color}>
					{heading}
				</Heading>
			</Flex>
			<Box fontSize={'xs'}>
				<UnorderedList>
					{text && text?.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
				</UnorderedList>
			</Box>
		</Flex>
	);
}

function Revenue({ dayRange, amount }) {
	return (
		<Fragment>
			<Box textAlign={'right'}>
				<Text> {dayRange}</Text>
			</Box>
			<Box>
				<Text>{amount}</Text>
			</Box>
		</Fragment>
	);
}

function Dashboard() {
	return (
		<Fragment>
			<SimpleGrid
				columns="2"
				templateColumns={"auto max-content"}
				p="5"
				bg={"#a7a7e9"}
				fontFamily={"Inter"}
			>
				<Box>
					<SimpleGrid
						columns={[1, 1, 2]}
						columnGap="35"
						templateColumns={["auto", "auto", "max-content auto"]}
					>
						<Flex
							direction={"column"}
							border="solid 1px #949399"
							borderRadius={"18px"}
							overflow="hidden"
							maxWidth="250px"
							ml="2"
						>
							<Center p="3" bg="#80808094" fontWeight={"semibold"}>
								Revenue
							</Center>
							<SimpleGrid
								columns="2"
								columnGap={"5"}
								rowGap="18"
								textAlign={"right"}
								bg="white"
								p="2"
								pt="4"
								pb="4"
								justifyContent={["center", "initial"]}
							>
								<Revenue dayRange={"0-30 days"} amount={"$1,250,000"} />
								<Revenue dayRange={"31-60 days"} amount={"$2,700,000"} />
								<Revenue dayRange={"61-90 days"} amount={"$1,800,000"} />
								<Revenue dayRange={"Total"} amount={"$5,750,000"} />
							</SimpleGrid>
						</Flex>
						<Flex border="solid 1px #949399" borderRadius={"18px"}>
							<Box >Pie</Box>
							<Box>Chart</Box>
						</Flex>
					</SimpleGrid>

					<Box p="4" pb="0" fontWeight={"bold"}>
						Weekly Summary
					</Box>
					<SimpleGrid
						columns={[1, 2, 3]}
						columnGap="8"
						p={[2, 2, 4]}
						pl="0"
						rowGap={[10, 10, 0]}
						templateColumns={["max-content", "auto auto", "33% 33% 33%"]}
						justifyContent={["center",'initial', "initial"]}
					>
						<SummaryCard
							icon={<RiAlarmFill color="blue" />}
							color="blue"
							heading="Proposals Pending"
							text={["ACME201_CO2 Capture", "ACME234_H2S System"]}
						/>
						<SummaryCard
							icon={<GrAnnounce color="blue" />}
							color="blue"
							heading="Actions"
							text={["ACME201_CO2 Capture", "ACME234_H2S System"]}
						/>
						<SummaryCard
							icon={<MdWarningAmber color="red" size="1.2rem" />}
							color="red"
							heading="At Risk"
							text={["ACME201_CO2 Capture", "ACME234_H2S System"]}
						/>
					</SimpleGrid>

					<Flex ml='2' pt='5'>
						<Button colorScheme={"purple"} mr="6">
							Analytics
						</Button>
						<Button colorScheme={"telegram"}>Customize</Button>
					</Flex>
				</Box>
				<Box p="3">
					<IoIosSettings size={"1.5rem"} />
				</Box>
			</SimpleGrid>
		</Fragment>
	);
}

export default Dashboard;
