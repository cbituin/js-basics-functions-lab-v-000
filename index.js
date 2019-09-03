// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock) {
  let distance = Math.abs(42 - currentBlock);
  return distance;
}

function distanceFromHqInFeet(currentBlock) {
 let distance = distanceFromHqInBlocks(currentBlock) * 264;
 return distance;
}

function distanceTravelledInFeet(start, current) {
  let numBlocks = Math.abs(start - current);
  let distance = numBlocks * 264;
  return distance  
}

function calculatesFarePrice() {

}
