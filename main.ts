//Question # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.

let fetchGreeting = () => {
    setTimeout(() => {
        console.log("Eid Mubarak 🌙✨")
    }, 2000);
console.log("Hello everyone!👋😊");
}
fetchGreeting();

//Question # 2

//Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

let simulates = () => {
    setTimeout(() => {
        console.log("Task completed!💪🎉");
    }, 1000)
console.log("Task started!✨📝");
}
simulates();

//Question # 3

//Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.

let fetchData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("After delay 1 second!🕒⏳");
        }, 1000)
        resolve("Data fetched successfully!🎉📈");
    })
}
fetchData().then((result) => {
    console.log(result);
})

//Question # 4

//Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch

let fetchWithError = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!🎉📈");
        }, 1000)
        reject("Data fetched failed!❌⚠️");
    })
}
fetchWithError().then((result) => console.log(result)).catch((error) => console.log(error));

//Question # 5

//Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.

let fetchData = () => {
    return new Promise ((resolve, reject) => {
        resolve("Data fetch successfully!🎉✅");
    })
}
let processData = () => {
    return new Promise ((resolve, reject) => {
        reject("Data processing failed!🚨❌");
    })
}
function executeSequentially(){
    fetchData().then((result) => {
        console.log(result);
        return fetchData()
    }).catch((error) => {
        console.log(error);
        return (processData);
    })
}
executeSequentially()