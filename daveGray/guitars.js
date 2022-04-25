// Modules : don't have use 'use strict'

export function playGuitar() {
  return "Play guitar";
}

export const shredding = () => {
  return "Shredding some licks";
};

export const plucking = () => {
  return "Plucking the string";
};

// export default playGutar;
// export {shredding, plucking}

export const post = fetch("https://jsonplaceholder.typicode.com/posts/");
