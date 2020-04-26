window.onload = () => {
	const FORM_WRAPPER = document.querySelector(`.column_type_input`);
	const ratingArray = [];
	let countedRating = 20;


	const renderSearch = (allItemsData) => {

		PageEnum.SiteWrapper.SEARCH.innerHTML = ``;

		const searchComponent = new Search();

		PageEnum.SiteWrapper.SEARCH.appendChild(searchComponent.render());

		searchComponent.onChange = (value) => {
			const filteredItems = allItemsData.filter((currentItem) => currentItem._names.includes(value));
			PageEnum.SiteWrapper.rating.innerHTML = ``;
			value === `` ? ratingRender(countedRating, allItemsData) : ratingUpdate(filteredItems);
		};
		
	};

	const ratingRender = (ratingAmount, ratingArray) => {
		for (let i = 0; i < ratingAmount; i++) {
			ratingArray[i] = new PersonRating(returnRandomData());
		}
  	return	ratingUpdate(ratingArray);
	};

	const ratingUpdate = (ratingArray) => {
		ratingArray.forEach((item) => {
			PageEnum.SiteWrapper.rating.appendChild(item.render());
		});
		if (ratingArray.length === 0) {
			PageEnum.SiteWrapper.rating.innerHTML = `Rating list is empty`
		}
	};

	const renderForm = () => {
		const formComponent = new Form();
		FORM_WRAPPER.appendChild(formComponent.render());

		formComponent.onSubmit = (evt) => {
			evt.preventDefault();
			const name = document.querySelector(`input[name=name]`).value;
			const cat = document.querySelector(`input[name=cat]`).value;
			const rest = document.querySelector(`input[name=rest]`).value;
			const money = document.querySelector(`input[name=money]`).value;
			const Man = new Person(name); // here will be better to use const name Person
			if (cat === 'yes') {
				Man.hasCat();
			}
			if (rest === 'yes') {
				Man.hasRest(); 
			}
			if (money === 'yes') {
				Man.hasMoney();
			}
			Man.isSunny()
				.then((happiness) => {
					Man._valueElement.innerHTML = name;
					if (happiness === 4) { 
						Man._iconElement.innerHTML = '😆';
					} else if (happiness === 3 || happiness === 2) {
						Man._iconElement.innerHTML = '😐';
					} else {
						Man._iconElement.innerHTML = '☹️';
					}
				});
		}
	};

	renderForm();
	renderSearch(ratingArray);
	ratingRender(countedRating, ratingArray);
};


/*
### IMPLEMENTED FUNCTIONALITY:

Mistake:
Form doesn't work.❗

Why:
Code has some troubles in Form class and in Person class.

Solution:
I don't tell you the answer try to solve by yourself. But I can give a hint.
Method isSunny of class Person return undefined.
Figured out why it returns undefined and what consequences it has.
And second, there is something wrong with how you read data from a form input,
figure out what your inputs form return and what consequences it has.

------------------------------

Mistake:
Search with a filter doesn't work.❗

Why:
Code has Trouble in Search class.

Solution: as with the first mistake I don't tell you the answer,
try to solve by yourself. But a hint, of course, I give you.
In the class search method, setEventLister doesn't trigger
you need to figure out why it doesn't trigger.

*/


/* 
### CODE ORGANIZATION:	

Warning:⚠️
Files doesn't have a clear structure.

Why:
All files are located in the root directory,
and as it gets more files it will be difficult to manage all of this.

Solution:
A good decision will be here to use MVC architecture.
You just need to separate your model and view and connect them with a controller.
Read about it here https://www.guru99.com/mvc-tutorial.html.

*/

/*
### VARIABLE NAMING CONVENTIONS.

Success:✅
Naming conventions of the code quite good.
I just marked some variables in the code, that can be improved.

General notes:
Read this amazing article about the variable convention. 
https://www.w3schools.com/js/js_conventions.asp.
it's a really important topic in programming general.

*/

