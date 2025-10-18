import {Peer} from "./models.js"
export function constructPrompt(reqBody) {
  //dummy data
  const peersList = [];

  const peer1 = new Peer("John Doe", ["HTML", "REST", "Database Integration"]);
  peersList.push(peer1);

  const peer2 = new Peer("Jane Smith", [
    "Express",
    "UI/UX",
    "Tailwind",
  ]);
  peersList.push(peer2);

  const peer3 = new Peer("Another Person", ["Authentification", "REST", "React"]);
  peersList.push(peer3);

  //concat to create prompt string
  const peerDescriptions = peersList
    .map((peer) => `${peer.name}: ${peer.descriptors.join(", ")}`)
    .join("; ");

  return `Given ${peerDescriptions}, give me the name of the person whose descriptors match the most. If tied, pick one random person.`;
}
