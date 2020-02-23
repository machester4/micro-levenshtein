# Micro Levenshtein

Spell check and sanatizer based on contexts where each context has its dictionary.

## Getting Started

### Requirements

```
Node >= 8
Yarn | NPM
```

### Installing

Install dependencies

```
yarn | npm install
```

Run the project

```
yarn start | npm start
```

The service starts on port **3000** by default if you do not set the _PORT_ environment variable

## Usage

Send a **GET** request to http://localhost:3000

### Headers

At the moment there are no security validations

```
Content-Type application/json
```

### Body

You can change the dict parameter for your own dictionary

```javascript
{
	"text": "chivitooooo comn de jamon con muzarela yyyyyyyy rucula #~#@#~|@#|@ con 1kg de requesoooooon",
	"dict": "chivito"
}
```

### Output

You will get a clean text and the suggestions to the words with possible grammatical errors ordered by best match

```javascript
{
    "suggestions": [
        "chivito",
        [
            "común",
            "con",
            "lomo",
            "jamón",
            "carne",
            "pan"
        ],
        "de",
        [
            "jamón",
            "dijon",
            "salmón",
            "común",
            "con",
            "lomo",
            "pan"
        ],
        "con",
        [
            "muzzarella"
        ],
        "y",
        [
            "rúcula",
            "rusa"
        ],
        "con",
        "1kg",
        "de",
        [
            "queso"
        ]
    ]
}
```

### Add your own dictionary

Add a new .dic file in the dict folder. Each word must be separated by a line break and must not contain spaces at the end of it

## TODO

Improve effectiveness and speed and much more

## Built With

- [Micro](https://github.com/zeit/micro) - Asynchronous HTTP microservices
