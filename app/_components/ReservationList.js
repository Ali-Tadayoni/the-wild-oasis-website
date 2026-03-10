"use client";

import { useOptimistic } from "react";
import { deleteReservation } from "../_lib/actions";
import ReservationCard from "./ReservationCard";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    // in here the second parameter(bookingId) is what ever we pass to optimisticDelete
    // actually the second parameter is a value that will help us to determine the next optimistic state
    // the first value is the current state
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard booking={booking} onDelete={handleDelete} key={booking.id} />
      ))}
    </ul>
  );
}
export default ReservationList;
