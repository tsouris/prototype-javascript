const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

// const mango = {
//     name: 'mango',
//     password: 'qwerty',
// };

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

User.prototype.changePassword = function (newPassword) {
  this.password = newPassword;
};

const mango = new User({ email: "mango", password: "qwerty" });
mango.changePassword("123oko456");
const poly = new User({ email: "poly", password: "qwertyuio" });
const ajax = new User();

console.log(mango);
console.log(poly);
console.log(ajax);
console.log(User.prototype);

function Review(productName, username, text, rating) {
  this.productName = productName;
  this.username = username;
  this.text = text;
  this.rating = rating;
  this.date = new Date();
}

Review.prototype.editText = function (newText) {
  this.text = newText;
};

Review.prototype.editRating = function (newRating) {
  this.rating = newRating;
};

Review.prototype.getDetails = function () {
  return `{this.username} wrote a review on ${this.productName} with the rating of
    ${this.rating} and text: ${this.text}. Date of the review: ${this.date}`;
};

const review1 = new Review("Iphone15", "John", "Nice! Well built", 5);

console.log(review1.getDetails());

review1.editText("It's actually not a good phone, after 3 years the call function stopped working");
