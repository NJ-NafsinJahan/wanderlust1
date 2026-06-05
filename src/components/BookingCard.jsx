"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { Card } from "@heroui/react";
// import { date } from "better-auth";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  //   console.log(session);
  const user = session?.user;
  //   console.log(user);

  const { _id, price, destinationName, imageUrl, country, duration } =
    destination;

  const [departureDate, setDepartureDate] = useState(null);
  //   console.log(new Date(departureDate));

  //   function for handle booking
  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user.image,
      userName: user.name,
      destinationId: _id,
      destinationName,
      imageUrl,
      price,
      country,
      departureDate: new Date(departureDate),
    };

    // console.log(bookingData);

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    // console.log(data, "from bookingData");
    if (data) {
      toast.success("Destination Booked successfully");
      //   redirect("/");
    }
  };

  return (
    <Card className="border rounded-none mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h1 className="text-2xl font-bold text-cyan-500">${price}</h1>
      <p className="text-sm text-muted">Per person</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        className={"w-full rounded-none bg-cyan-500"}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
