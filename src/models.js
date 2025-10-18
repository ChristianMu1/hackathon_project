export class Peer {
  constructor(name, descriptors) {
    this.name = name;
    this.descriptors = descriptors;
  }
}

//dummy data
export function dummyData() {
  const peersList = [];

  const peer1 = new Peer("John Doe", ["HTML", "REST", "Database Integration"]);
  peersList.push(peer1);

  const peer2 = new Peer("Jane Smith", ["Express", "UI/UX", "Tailwind"]);
  peersList.push(peer2);

  const peer3 = new Peer("Another Person", [
    "Authentification",
    "REST",
    "React",
  ]);
  peersList.push(peer3);

  return peersList;
}
