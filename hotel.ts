interface Reservation {
    name: string;
    guests: number;
}

function checkIn(reservation: Reservation) {
    console.log(`The party ${reservation.name} has checked in.`);
    console.log(`They have ${reservation.guests} guests.`);
}

checkIn({
    name: "Jones Family",
    guests: 2
});
