interface Party {
    name: string;
    guests: number;
}

function checkIn(party: Party) {
    console.log(`The party ${party.name} has checked in.`);
    console.log(`They have ${party.guests} guests.`);
}

checkIn({
    name: "Jones Family",
    guests: 2
});
