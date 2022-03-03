import React, { Fragment } from "react";
import { Box, SimpleGrid, Input, Button, Flex } from "@chakra-ui/react";

const companyData = [
	[
		"ACME123",
		"23-Apr-21",
		"ACME_123_skid",
		"$72,500",
		"Pending",
		"75%",
		"30-Apr-21",
		"N/A",
	],
	[
		"ACME456",
		"15-Apr-21",
		"ACME_456_injector",
		"$1,500,000",
		"Rejected (comments)",
		"50%",
		"20-Apr-21",
		"Resubmit",
	],
	[
		"ACME789",
		"5-Apr-21",
		"ACME_789_pump",
		"$1,275,000",
		"Approved",
		"100%",
		"12-Apr-21",
		"Release to Client",
	],
];

function HeadingBox({ headings }) {
	return (
		<Fragment>
			{headings.map((name, i) => (
				<Box
					key={i}
					bg="#a086d9"
					border="solid 1px gray"
					fontSize={"sm"}
					p="1"
					textAlign={"center"}
				>
					{name}
				</Box>
			))}
		</Fragment>
	);
}



function Company({ data }) {
	return (
		<Fragment>
			{data.map((data, i) => (
				<Box
					key={i}
					border="solid 1px gray"
					p="2"
					textAlign={"center"}
					fontSize="xs"
				>
					{data}
				</Box>
			))}
		</Fragment>
	);
}

function Proposals() {
	return (
		<Fragment>
			<Box>
				<SimpleGrid
					columns="8"
					border="solid 1px gray"
					templateRows={` repeat(${companyData.length + 1},45px)`}
					height="max-content"
					m="2"
				>
					<HeadingBox
						headings={[
							"Company",
							"Assigned on",
							"Proposal",
							"Revenue",
							"Approval Status",
							"% Completed",
							"Due date",
							"Action",
						]}
					/>
					{companyData.map((company, i) => (
						<Company key={i} data={company} />
					))}
				</SimpleGrid>

				<Flex p="5" pl="2" mt="10">
					<Input placeholder="Proposals" size="md" width="2xs" />
					<Button variant={"outline"} colorScheme="linkedin">
						Search
					</Button>
				</Flex>
				<Flex p="5" pl="2">
					<Button variant={"outline"} colorScheme="linkedin" mr='6'>
						New Proposals
					</Button>
					<Button variant={"outline"} colorScheme="linkedin">
						Proposals Folder
					</Button>
				</Flex>
			</Box>
		</Fragment>
	);
}

export default Proposals;
