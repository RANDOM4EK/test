var UserDay;
(function (UserDay) {
    UserDay[UserDay["Monday"] = 1] = "Monday";
    UserDay[UserDay["Tuesday"] = 2] = "Tuesday";
    UserDay[UserDay["Wednesday"] = 3] = "Wednesday";
    UserDay[UserDay["Thursday"] = 4] = "Thursday";
    UserDay[UserDay["Friday"] = 5] = "Friday";
    UserDay[UserDay["Saturday"] = 6] = "Saturday";
    UserDay[UserDay["Sunday"] = 7] = "Sunday";
})(UserDay || (UserDay = {}));
let day = UserDay.Saturday;
console.log(day);
export {};
