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

class CoupleReservation {
    givenName: string;
    beds = "single" as const;
    guests = 2;

    get name() {
        return `${this.givenName} Family`;
    }

    constructor(givenName: string) {
        this.givenName = givenName;
    }
}


checkIn(new CoupleReservation("Jones"));
