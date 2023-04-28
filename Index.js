//Playing with array and object in javascript
//FriendBook
//We are going to make a friendbook , where the user will be able to record the data of their friend.
//In order to record the data in friendbook,we are goinng to use Array which will store all the data.
// We will be using Object to store the personal information respective to each friend , where we will record friend's name,age,city,hobby,foodlikes
// and some other information.

//Sample Object will look something like this;
// let obj = {
//     name: "xyz",
//     age: 12,
//     city: "banglore",
//     foodlikes: "maggie",
//     hobby:"travelling"

// }

// We are going to make firendbook using the array .
let FriendBook = [];

// Task 1:We have to insert new entries in the friendbook;
let friend1_info = {
    name: "xyz",
    age: 20,
    city: "banglore",
    foodlikes: "maggie",
    hobby:"travelling"

}
let friend2_info = {
    name: "abc",
    age: 18,
    city: "mumbai",
    foodlikes: "noodle",
    hobby:"trekking"

}
let friend3_info = {
    name: "sameer",
    age: 18,
    city: "mumbai",
    foodlikes: "maggie",
    hobby:"cycling"

}
FriendBook.push(friend1_info);
FriendBook.push(friend2_info);
FriendBook.push(friend3_info)
// console.log(FriendBook);

// Task2: similarly insert atleast 5 more data ;
//Task3:While inserting the data ,we forgot to create a field for class , now we have to create this field in each friend's data and default value
// will be 12

FriendBook.forEach((frienddata)=>{
    frienddata.class = 12;
})
// console.log("added the new field class", FriendBook);

// Task4:While we inserted the field class earlier, we forgot that our friend sameer is in class 10, somehow we have to correct this mistake in our friendbook.
FriendBook.forEach((frienddata) => {
    if (frienddata.name.toLowerCase() === "sameer") {
        frienddata.class=10
    }
})
// console.log("succeccfully altered the class of sameer", FriendBook)

//Task 5:We have to find out those friends who are from mumbai, and than create a copy of data of this friend separately;
let Friend_list_from_mumbai = FriendBook.filter((frienddata) => frienddata.city.toLowerCase() === "mumbai");

// Note:we are using filter here as filter returns as a new array, which is different from original array

// console.log("successfully created a new copy of friendata only from mumbai", Friend_list_from_mumbai);


//Task 6: Our friend xyz has recenlty found out that he started to taken a liking to swimming rather than travelling,so we need to update this in out friendbook;

FriendBook.forEach((frienddata) => {
    if (frienddata.name.toLowerCase() === "xyz") {
        frienddata.hobby="swimming"
    }
})

console.log("updated the hobby of our friend xyz",FriendBook);