import React, { Fragment } from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const companyData = [
	["ACME1", "Opp 01", "Skid 1", "Lead", "1-May"],
	["ACME2", "Opp 02", "Skid 2", "Contact-made", "3-May"],
	["ACME3", "Opp 03", "Skid 3", "Lead", "20-Apr"],
	["ACME4", "Opp 04", "Skid 4", "Lead", "28-Apr"],
	["ACME5", "Opp 05", "Skid 5", "Lead", "10-Apr"],
];

function ClientDetails({ heading, data }) {
	return (
		<Fragment>
			{heading
				? data.map((label, i) => (
						<Box
							key={i}
							bg="gray.200"
							border="solid 1px gray"
							height={"50px"}
							overflow="hidden"
							p="2"
							textAlign={"center"}
						>
							{label}
						</Box>
				  ))
				: data.map((label, i) => (
						<Box
							key={i}
							border="solid 1px gray"
							height="35px"
							p="2"
            textAlign={"center"}
            fontSize='sm'
						>
							{label}
						</Box>
				  ))}
		</Fragment>
	);
}

function Client() {
	return (
		<Fragment>
			<Box>
				<SimpleGrid
					columns="5"
          templateRows={`repeat(${companyData.length+1},auto)`}
          
					border="solid 1px gray"
          height="fit-content"
          m='2'
				>
					<ClientDetails
						heading
						data={["Company", "Proposal Title", "Scope", "Status", "Date"]}
					/>

					{companyData.map((company, i) => (
						<ClientDetails data={company} key={i} />
					))}
				</SimpleGrid>
			</Box>
		</Fragment>
	);
}

export default Client;
