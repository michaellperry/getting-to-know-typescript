interface Reservation {
    beds: "single" | "double" | "suite";
    name: string;
    guests: number;
}

function checkIn(reservation: Reservation) {
    console.log(`The party ${reservation.name} has checked in.`);
    console.log(`They have ${reservation.guests} guests.`);
    switch (reservation.beds) {
        case "single":
            return "Room 101";
        case "double":
            return "Room 201";
        case "suite":
            return "Room 301";
        default:
            throw new Error("Unknown bed type");
    }
}

checkIn({
    beds: "single",
    name: "Jones Family",
    guests: 2
});
