import { Customer } from "../types/customer";

const customers: Customer[] = [
	{
		name: "Tushar Nevase",
		address: {
			addressLine: "A/p Karanjkhop",
			taluka: "Koregoan",
			city: "satara",
			pinCode: "451000",
		},
		machine: [
			{
				model: "Mahindra",
				name: "Jio",
				modelYear: "2022",
			},
		],

		communication: {
			email: "tusharnevase@example.com",
			contactNumber: "9970048603",
			countryCode: "+91",
		},
	},
	{
		name: "Santosh Jagtap",
		address: {
			addressLine: "A/p pargaon",
			taluka: "Khandala",
			city: "satara",
			pinCode: "451000",
		},
		machine: [
			{
				model: "swaraj",
				name: "801",
				modelYear: "2012",
			},
		],
		communication: {
			email: "santoshjagtap@example.com",
			contactNumber: "999999999",
			countryCode: "+91",
		},
	},
	{
		name: "Rajendra Tripute",
		address: {
			addressLine: "A/p Budh",
			taluka: "Khatav",
			city: "satara",
			pinCode: "451000",
		},
		machine: [
			{
				model: "Kubota",
				name: "801",
				modelYear: "2012",
			},
		],
		communication: {
			email: "rajendratripute@example.com",
			contactNumber: "784125211",
			countryCode: "+91",
		},
	},
];

export { customers };
