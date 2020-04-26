class Person extends Component {
    constructor(name) {
        super();
        this.name = name;
        this._happiness = 0;
        this._valueElement = document.querySelector(`.column__value-name`);
        this._iconElement = document.querySelector(`.column__value-icon`);
    }

    hasCat() { 
        return this._happiness++;
    }

    hasRest() {
        return this._happiness++; 
    }

    hasMoney() {
        return this._happiness++; 
    }

    isSunny() {
        const APIKey = '28c7d687accc7c75aabbc7fb71173feb';
        const city = 'Москва';
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                if (res.main.temp - 273 > 15) { 
                    return this._happiness++;
                } 
            });
      }
}

/*
### PROMISE:

Mistake:
Сode doesn't contain a method for handling errors.❗

Why:
Server can send response with status error
and code doesn't have method that will be responsible for handle error.

Solution:
Promise, which returns fetch (),
goes into the rejected state only when a network error occurs
or if something prevents the completion of the request.
Otherwise, the resolved state occurs, and if the HTTP status corresponds to an error,
for example 400 or 500, the ok property is set to false.
Therofe you should check if promise is rejected.
Use Promise.reject() and use method catch(error)

General notes:
Read something about async await
because I see fetch promise will be quite cumbersome,
If suppose you need to add another async operation.
So async await will reduce code here.

*/

/*
### SECURITY PROBLEMS

Mistake:
API key should't be here.❗

Why:
We can't store API key here as it leads to public access

Solution:
Credentials and keys should be in .env file. 
Read this article if you're not familliar with this topic.
https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p

*/