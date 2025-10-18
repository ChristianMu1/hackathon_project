class Peer {
  constructor(name, descriptors) {
    this.name = name;
    this.descriptors = descriptors;
  }
}

const peersList = [];

//person 1
const peer1 = new Peer("John Doe", ["Python", "AI/LLM", "Data scientist"]);
peersList.push(peer1);

//person 2
const peer2 = new Peer("Jane Smith", [
  "JavaScript",
  "Prompt engineer",
  "MongoDB",
]);
peersList.push(peer2);

//person 3
const peer3 = new Peer("Another Person", "Engineer", "AI/LLM", "Hackathon");
