class Peer {
  constructor(name, descriptors) {
    this.name = name;
    this.descriptors = descriptors;
  }
}

//dummy data
function dummyData(){
  const peersList = [];

  const peer1 = new Peer("John Doe", ["Python", "AI/LLM", "Data Scientist"]);
  peersList.push(peer1);

  const peer2 = new Peer("Jane Smith", [
    "JavaScript",
    "Prompt engineer",
    "MongoDB",
  ]);
  peersList.push(peer2);

  const peer3 = new Peer("Another Person", ["Engineer", "AI/LLM", "Hackathon"]);
  peersList.push(peer3);
}