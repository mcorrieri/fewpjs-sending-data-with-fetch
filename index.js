// Add your code here
// fetch(destinationURL, configurationObject);
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });

function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${userName}`,
      email: `${userEmail}`,
    }),
  })
    .then(function (res) {
      return res.json;
    })
    .then(function (object) {
      let body = document.querySelector("body");
      body.append(object.id);
    })
    .catch(function (error) {
      let body = document.querySelector("body");
      body.append(error.message);
    });
}
