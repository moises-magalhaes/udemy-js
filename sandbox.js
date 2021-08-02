//template strings

const title = " Best reads of 2019";
const author = "Mario";
const likes = 30;

//  concatenation way
// let result =
// 	" the blog called " + title + " by " + author + " has " + likes + " likes ";

//TEMPLATE STRING WAY

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating Html templates

let html = `
<h2> ${title} </h2>
<p>${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);
