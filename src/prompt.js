import { dummyData } from "./models.js";

//concat to create prompt string
export function constructPrompt(reqBody) {
  const peersList = dummyData();

  const peerDescriptions = peersList
    .map((peer) => `${peer.name}: ${peer.descriptors.join(", ")}`)
    .join("; ");

  return `Given ${peerDescriptions}, give me the name of the person whose descriptors match ${reqBody} the most. If tied, pick one random person.`;
}

//hard-coded teammate selector
export function pickTeammate() {
  const dummyDataEntries = dummyData();

  if (!Array.isArray(dummyDataEntries) || dummyDataEntries.length === 0) {
    return null;
  }

  const chosenIndex = Math.floor(Math.random() * dummyDataEntries.length);
  return dummyDataEntries[chosenIndex];
}
