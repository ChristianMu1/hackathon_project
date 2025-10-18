//concat to create prompt
function constructPrompt(reqBody,dummyData) {
  const peerDescriptions = dummyData
    .map((peer) => `${peer.name}: ${peer.descriptors.join(", ")}`)
    .join("; ");

  return `Given ${peerDescriptions}, give me the name of the person whose descriptors match ${reqBody} the most. If tied, pick one random person.`;
}

//hard-coded teammate selector
function pickTeammate(dummyData){
  if (!Array.isArray(dummyData) || dummyData.length === 0) {
    return null;
  }

  const chosenIndex = Math.floor(Math.random() * dummyData.length);
  return dummyData[chosenIndex];
}