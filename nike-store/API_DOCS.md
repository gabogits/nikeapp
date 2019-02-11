# API Docs

### 1. Shoes – GET `/shoes`

_Example: [https://nikeapi.herokuapp.com/api/v1/shoes](https://nikeapi.herokuapp.com/api/v1/shoes)_

Returns by default a list of 10 items.

### 2. Shoes – GET `/shoes?all=true`

_Example: [https://nikeapi.herokuapp.com/api/v1/shoes?all=true](https://nikeapi.herokuapp.com/api/v1/shoes?all=true)_

Returns all records found.

### 3. Shoes – GET `/shoes?price=VALUE`

_Example: [https://nikeapi.herokuapp.com/api/v1/shoes?price=cheap](https://nikeapi.herokuapp.com/api/v1/shoes?price=cheap)_

|#|Keyword|Description|
|-|-------|-----------|
|1|cheap|Shoes under $50 USD|
|2|regular|Shoes between $51 USD and $150 USD|
|3|expensive|Shoes up to $150 USD|

### 4. Shoes – GET `/shoes?sport=VALUE`

_Example: [https://nikeapi.herokuapp.com/api/v1/shoes?sport=lifestyle](https://nikeapi.herokuapp.com/api/v1/shoes?sport=lifestyle)_

|#|Keyword|Description|
|-|-------|-----------|
|1|lifestyle|Shoes from the *Lifestyle* category|
|2|running|Shoes from the *Running* category|
|3|basketball|Shoes from the  *Basketball* category|
|3|soccer|Shoes from the *Soccer* category|
|3|training|Shoes from the *Training & GYM* category|

### 5. Shoes – GET `/shoes?type=VALUE`

_Example: [https://nikeapi.herokuapp.com/api/v1/shoes?type=click](https://nikeapi.herokuapp.com/api/v1/shoes?type=click)_

|#|Keyword|Description|
|-|-------|-----------|
|1|click|Shoes with a *Click* closure type|
|2|slipon|Shoes with a *Slip On* closure type|
|3|strap|Shoes with a  *Strap* closure type|

### 6. Shoes – GET `/shoes?color=VALUE`

_Example: [https://nikeapi.herokuapp.com/api/v1/shoes?color=green](https://nikeapi.herokuapp.com/api/v1/shoes?color=green)_

|#|Keyword|Description|
|-|-------|-----------|
|1|white|Shoes in white color|
|2|silver|Shoes in silver color|
|3|yellow|Shoes in yellow color|
|4|gold|Shoes in gold color|
|5|orange|Shoes in orange color|
|6|green|Shoes in green color|
|7|blue|Shoes in blue color|
|8|pink|Shoes in pink color|
|9|olive|Shoes in olive color|
|10|red|Shoes in red color|
|11|purple|Shoes in purple color|
|12|grey|Shoes in grey color|

### 7. Shoes – GET `/shoes?size=VALUE`

_Example: [https://nikeapi.herokuapp.com/api/v1/shoes?size=3](https://nikeapi.herokuapp.com/api/v1/shoes?size=3)_

|#|Keyword|Description|
|-|-------|-----------|
|1|3|Shoes of 3”|
|2|3.5|Shoes of 3.5”|
|3|4|Shoes of 4”|
|4|4.5|Shoes of 4.5”|
|5|5|Shoes of 5”|
|6|5.5|Shoes of 5.5”|
|7|6|Shoes of 6”|
|8|6.5|Shoes of 6.5”|
|9|7|Shoes of 7”|
|10|7.5|Shoes of 7.5”|
|11|8|Shoes of 8”|
|12|8.5|Shoes of 8.5”|
|13|9|Shoes of 9”|
|14|9.5|Shoes of 9.5”|
|15|10|Shoes of 10”|
|16|10.5|Shoes of 10.5”|
|17|11|Shoes of 11”|
|18|11.5|Shoes of 11.5”|
|19|12|Shoes of 12”|
|20|12.5|Shoes of 12.5”|
|21|13|Shoes of 13”|
|22|13.5|Shoes of 13.5”|
|23|14|Shoes of 14”|
|24|14.5|Shoes of 14.5”|
|25|15|Shoes of 15”|
|26|16|Shoes of 16”|
|27|17|Shoes of 17”|
|28|18|Shoes of 18”|
|29|19|Shoes of 19”|
|30|20|Shoes of 20”|
|31|21|Shoes of 21”|

#### Notes

You can mix query params from endpoints, for example:

_Example: [https://nikeapi.herokuapp.com/api/v1/shoes?price=expensive&all=true](https://nikeapi.herokuapp.com/api/v1/shoes?price=expensive&all=true)_
