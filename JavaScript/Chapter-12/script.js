// async keyword
async function greet() {
    throw "404 page not found";
    return "hello";
}

greet()
.then((result) => {
    console.log("promise success");
    console.log("result was : ", result)
})
.catch((err) => {
    console.log("promise was rejected with error : ",err);

});

let demo = async () => {
    return 5;
}

// await keyword

async function loadData() {
  try {
    const user = await getUser();
    const data = await getData(user.id);
    return data;
  } catch (err) {
    throw err;
  }
}
