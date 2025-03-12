import { log } from 'console';
import { addUser, logWorkout, getAllWorkoutsOf, getAllWorkoutsByType, getUsers, getUser, updateUser } from './tracker';


//adding new users
const userId1 = addUser({
    name: 'Mohan',
    age: 24,
    weight: 75,
    height: 175
});

const userId2 = addUser({
    name: 'Mahesh',
    age: 28,
    weight: 65,
    height: 179
});

const userId3 = addUser({
    name: 'Yoga',
    age: 25,
    weight: 85,
    height: 140
});

console.log('\nAll users: \n');
console.log(getUsers());




//logging workouts for users
logWorkout(userId1, { type: 'Running', duration: 30, caloriesBurned: 300, date: '2021-09-01' });
logWorkout(userId1, { type: 'Cycling', duration: 45, caloriesBurned: 400, date: '2021-09-02' });
logWorkout(userId1, { type: 'Swimming', duration: 60, caloriesBurned: 600, date: '2021-09-03' });  

logWorkout(userId2, { type: 'Running', duration: 45, caloriesBurned: 450, date: '2021-09-01' });
logWorkout(userId2, { type: 'Cycling', duration: 60, caloriesBurned: 500, date: '2021-09-02' });
logWorkout(userId2, { type: 'Swimming', duration: 75, caloriesBurned: 700, date: '2021-09-03' });

//userID4 is not defined which throws "User not found!" error
try {
    console.log("\nRunning workouts of Mohan:");
    console.log(getAllWorkoutsByType("userId4", 'yoga')); 
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error:", error);
    }
}

//now, proper userID is defined, that is userID1
try {
    console.log("\nCycling workouts of Mahesh:");
    console.log(getAllWorkoutsByType(userId2, 'yoga')); 
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error:", error);
    }
}


//getting all workouts of a user
console.log('\nAll workouts of user with id: ' + userId1 + '\n');   
console.log(getAllWorkoutsOf(userId1));

//getting all workouts of a user by type
console.log('\nAll running workouts of user with id and workout: ' + userId1 + '\n');
console.log(getAllWorkoutsByType(userId1, 'Running'));
console.log('\nAll running workouts of user with id and workout: ' + userId2 + '\n');
console.log(getAllWorkoutsByType(userId2, 'Running'));  

//updating user details
updateUser(userId1, { age: 25, weight: 70, height: 180 });
console.log('\nUpdated user details: \n');
console.log(getUser(userId1));