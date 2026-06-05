import Image from "next/image";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoArrowBackSharp, IoCalendarOutline } from "react-icons/io5";
import { Button } from "@heroui/react";
import Link from "next/link";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import BookingCard from "@/components/BookingCard";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

  console.log(destination, "single id details");
  console.log(id, "id");
  const {
    _id,
    destinationName,
    imageUrl,
    country,
    price,
    duration,
    description,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <div className="grid items-center justify-center">
        <h1 className="text-2xl font-bold">Destination Details</h1>
        <div className="flex justify-between items-center">
          <Link href={"/destinations"}>
            <Button variant="ghost" className="rounded-xl mb-3">
              <IoArrowBackSharp /> Back Destinations
            </Button>
          </Link>
          {/* *** */}
          {/* <Button variant="outline" className="rounded-xl mb-3">
            <FaRegEdit /> Edit
          </Button> */}
          <div className="flex justify-between items-center gap-5">
            <EditModal destination={destination}></EditModal>
            <DeleteAlert destination={destination}></DeleteAlert>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={destinationName}
          width={500}
          height={300}
          className="w-full h-90"
        />

        <div className="flex justify-between">
          <div className="mt-5 gap-3">
            <p className="flex items-center gap-3">
              {" "}
              <FiMapPin />
              {country}
            </p>

            <div className="mt-2">
              <h1 className="font-bold text-xl">{destinationName}</h1>
            </div>
            <p>
              <span className="font-bold text-[20px]">Overview: </span>
              {description}
            </p>
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
          <BookingCard destination={destination}></BookingCard>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
