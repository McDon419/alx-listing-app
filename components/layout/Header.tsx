import React from "react";
import Image from "next/image";

const accommodationTypes = [
	"Rooms",
	"Mansion",
	"Countryside",
	"Apartment",
	"Villa",
];

const Header: React.FC = () => {
	return (
		<header className="w-full bg-white shadow-md py-4 px-8 flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Image src={"https://www.pinterest.com/pin/305048574774288455/"} alt="Logo" width={48} height={48} className="rounded-full" />
					  <Image src="https://www.pinterest.com/pin/305048574774288455/" alt="Logo" width={48} height={48} className="rounded-full" />
				</div>
				<div className="flex gap-2">
					<button className="px-4 py-2 border rounded hover:bg-gray-100">Sign In</button>
					<button className="px-4 py-2 border rounded bg-blue-600 text-white hover:bg-blue-700">Sign Up</button>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<Image src="https://www.pinterest.com/pin/305048574774288455/" alt="Logo" width={48} height={48} className="rounded-full" />
				<input
					type="text"
					placeholder="Search accommodations..."
					className="flex-1 px-4 py-2 border rounded"
				/>
				<button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Search</button>
			</div>
			<nav className="flex gap-6 mt-2">
				{accommodationTypes.map((type) => (
					<span key={type} className="cursor-pointer hover:text-blue-600 font-medium">
						{type}
					</span>
				))}
			</nav>
		</header>
	);
};

export default Header;
