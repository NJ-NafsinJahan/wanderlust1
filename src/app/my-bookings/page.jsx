import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  //   console.log(user);

  // bring server component jwt token
  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(tokenData, "jwt token");
  const token = tokenData?.token || tokenData?.accessToken;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const bookings = await res.json();
  console.log("Data from MyBooKings:", bookings);
  return (
    <div className="w-full max-w-5xl mx-auto px-4 border">
      <h1 className="text-3xl font-bold text-center">My Bookings</h1>
      <div className="space-y-5">
        {bookings.map((booking) => (
          <div key={booking._id} className="flex border gap-5 p-5">
            <Image
              src={booking.imageUrl}
              alt="image"
              width={200}
              height={200}
              //   className="w-full h-90"
            />

            <div>
              <h1 className="font-bold text-2xl text-cyan-600">
                {booking.destinationName}
              </h1>
              <p>
                {" "}
                Departure Date:{" "}
                {new Date(booking.departureDate).toLocaleDateString()}
              </p>
              <p className="text-2xl text-cyan-600 font-bold">
                ${booking.price}
              </p>
              <p>Booking id: {booking._id}</p>
              {/* button */}
              <BookingCancelAlert bookingId={booking._id}></BookingCancelAlert>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
