import React from "react";
import Image from "next/image";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { Button } from "@heroui/react";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const { _id, destinationName, imageUrl, country, price, duration } =
    destination;
  return (
    <div className="border m-4 p-3">
      {/* <h1>Destination Card</h1> */}

      <Image src={imageUrl} alt={destinationName} width={400} height={400} />

      <div className="mt-5">
        <p className="flex items-center gap-3">
          {" "}
          <FiMapPin />
          {country}
        </p>

        <div className="mt-2">
          <h1 className="font-bold text-xl">{destinationName}</h1>
        </div>

        <div className="flex items-center gap-7 mt-3">
          <p className="flex items-center gap-3">
            <IoCalendarOutline />
            {duration} Days
          </p>
          <p className="flex items-center">
            <span className="font-bold text-[16px]">${price}</span>/person
          </p>
        </div>
      </div>

      {/* button href */}

      <Link href={`/destinations/${_id}`}>
        <Button
          fullWidth
          className="mt-3 bg-cyan-400 text-black font-semibold text-[16px]"
        >
          {" "}
          Book Now <FiArrowUpRight />
        </Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
