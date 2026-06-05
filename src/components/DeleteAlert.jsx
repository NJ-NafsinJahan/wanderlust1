"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";

export function DeleteAlert({ destination }) {
  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const data = await res.json();
    redirect("/destinations");
  };
  return (
    <AlertDialog>
      <Button variant="danger" className="rounded-xl mb-3">
        <FaRegTrashAlt /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete This Awesome Destination
                <strong className="text-cyan-700 text-lg">
                  {" "}
                  {destinationName}
                </strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              {/* cancel button */}
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              {/* delete button */}
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
