# CDL Code Challenge - Checkout System

## Commits Explained
[commit 1](https://github.com/627965745/CDL-checkout-system-/commit/a640bc314b6c895df38e43050b7269d09db317b8) initialises the repo with an react APP.

[commit 2](https://github.com/627965745/CDL-checkout-system-/commit/6937558ebd5fbdf7192a7046d61d1da6f92f563e) implements the required tasks which allows users to add four different items with different price to a cart. A cart list is made to show all the items and total price of items is also showed. 

[commit 3](https://github.com/627965745/CDL-checkout-system-/commit/0cd3f11bacd5138971a274ab1d5a7a72a4405eaa) implements a discount system. Item A and item B have multibuy discount, when the condition is met, the discount will reflect in the cart list and the total price also changes accordingly.

[commit 4](https://github.com/627965745/CDL-checkout-system-/commit/d08a480ac6f548538ee9b0c2b6a44b948ea3bb41) is an extension of this task which allows user to delete items from cart, the code needs to correctly delete items from cart while maintain the discount scheme, for example, if the multibuy discount applies when 3 same items are bought together, when one of them is deleted, the discount should be voided.

[commit 5](https://github.com/627965745/CDL-checkout-system-/commit/bc34b1305853d6cac66c2bd3a906496df5cc0b98) fixes some bugs in [commit 4](https://github.com/627965745/CDL-checkout-system-/commit/d08a480ac6f548538ee9b0c2b6a44b948ea3bb41) while sometimes the deletion of items does not change the discount scheme correctly. However, there are still some extreme casing this bug to happen.

[commit 6](https://github.com/627965745/CDL-checkout-system-/commit/ee61a4055b740aae8709c5fa9ac991fccba15bf9) is an alternative way of implementing the deleting function by using a new array to track discounts and UseEffect hook to update this array as well as total price.

## Key Decisions and Possible Improvements
My inital thoughts on this task is to keep it as simple as possiblem, so I want to maintain only one array, which records list of item and speical offer at the same time, it will show (item - price - discount(if applied)), so whenever the discount condition is met, the discount just reflects in the cart list with discounted price, the total price is also adjusted.
Althought it concludes the task, I felt that deletion is a key function for an application like this, I wanted to give a bit more challenge. I carried on with the original design, I check if a discount condition is broken, if it is, delete the item in cart array with its discount message, and change its price as well as total price, if not, simply delete the item from cart array. However, this design causes bugs when some items are added after deleting, when I try to delete items again, the list does not update correctly, I tried with string matching but did not help much and this approach will involve a lot code changing in the future if there is change of discount scheme or price.


## Time Estimate
While it is obivious from commit timestamp, it took me roughly 1 hour to complete the task.
And further 5 hours for some extended functionalities.

## Available Scripts

In the project directory, you can run:

### `npm install`
Installs all the dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

