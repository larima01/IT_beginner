// let post1 = { 
//     content: 'This is my super post', 
//     likes: 300, 
//     shares: 20
// }

// let post2 = { 
//     content: 'This is my bit boring post', 
//     likes: 200, 
//     shares: 20
// }

// let post3 = { 
//     content: 'This is Mike post', 
//     likes: 200, 
//     shares: 20
// }
// let facebookUserOne = {
//     userName: 'lukas',
//     password: 'aminoacid@1',
//     email: 'lukasaminu@gmail.com',
//     profileImage: 'reference_image1',
//     friends: ['Olamide', 'faruq', 'taofeeq', 'abdulqudus'],  
//     posts: [post1, post2],
//     birthDate: "1996/08/18"
// }

// let facebookUserTwo = {
//     userName: 'larima',
//     password: 'amino@1',
//     email: 'lukmon.aminu.msme@gmail.com',
//     profileImage: 'reference-image',
//     friends: ['Precious', 'Taiwo', 'Mahmud', 'Bolu'],  
//     posts: [post3],
//     birthDate: "2003/03/21"
// }

// function getAge(birthDateString) {
//     let today = new Date();
//    let birthDate = new Date(birthDateString);

//    let age = today.getFullYear() - birthDate.getFullYear();

//    let birthdayMonthInFuture = today.getMonth() < birthDate.getMonth();

//    let sameMonthDateInFuture = today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate();

//    if(birthdayMonthInFuture || sameMonthDateInFuture){
//     age--
//    }
 
//     return age;

// }


// let users = [facebookUserOne, facebookUserTwo];
//     for(user of users){
//         user.age = getAge(user.birthDate);

//     }
//     console.log(users);


function handleCreatePost(){
    document.getElementById("post-form-container").style.display = "block";
}

function hidePostForm(){
    document.getElementById("post-form-container").style.display = "none";
}
