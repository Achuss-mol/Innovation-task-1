let player = {
  playerName: "Sneha",
  playerAge: 21
};

let { playerName, playerAge } = player;
console.log(playerName);
console.log(playerAge);

let account = {
  username: "Arav"
};

let { username, password = "1234" } = account;
console.log(username);
console.log(password);

let settings = {
  userId: "user789",
  locationInfo: {
    place: "Trichy",
    postal: 620001
  }
};

let { userId, locationInfo: { place, postal } } = settings;
console.log(userId);
console.log(place);
console.log(postal);

let gadget = {
  company: "Realme",
  type: "Smartphone"
};

let copyGadget = { ...gadget };
console.log(copyGadget);

let objOne = { a1: 5 };
let objTwo = { b1: 15 };

let mergedObj = { ...objOne, ...objTwo };
console.log(mergedObj);