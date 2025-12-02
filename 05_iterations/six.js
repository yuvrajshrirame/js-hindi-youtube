// const coding = ["apple", "banana", "cherry", "pineapple", "strawberry"]

// const values = coding.forEach((item) => {
//   // console.log(item);
//   return item; // forEach loop does not return any values, it is used just for looping purposes.
// })

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((nums)=>{
//   return nums > 4;
// });

// // u dont need return keyword if your are writing in one line
// const newNums = myNums.filter((nums)=> nums > 4)

// // console.log(newNums);


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const historyBooks = books.filter((bks)=>{
  return bks.genre == "History";
})

console.log(historyBooks);