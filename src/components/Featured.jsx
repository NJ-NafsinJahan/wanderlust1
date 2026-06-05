import { Button } from "@heroui/react";
import React from "react";
import DestinationCard from "./DestinationCard";
import Link from "next/link";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const destinations = await res.json();
  console.log(destinations, "from featured section");
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center m-3 mx-2">
        <div>
          <h1 className="text-2xl font-bold">Featured Destinations</h1>
          <p className="text-muted">
            Lorem ipsum dolor sit consectetur ut quia!
          </p>
        </div>
        <Link href={"/destinations"}>
          <Button variant="outline" className={""}>
            {" "}
            All Destinations
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
