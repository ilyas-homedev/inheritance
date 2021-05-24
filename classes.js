// Base class ES5 with common methods
function Base(value) {
    this.value = value;
}

Base.prototype.plus = function(...values) {
    this.value = this.value + values.reduce((a, b) => a + b);
    return this;
}

Base.prototype.minus = function(...values) {
    if (values.length === 1) {
        for (val of values) {
            this.value = this.value.slice(0, this.value.length - val);
        }
        return this;
    }

    this.value = this.value - values.reduce((a, b) => a + b);
    return this;
}

Base.prototype.multiple = function(number) {
    if (typeof this.value === 'string') {
        this.value = this.value.repeat(number);
        return this;
    }

    this.value = this.value * number;
    return this;
}

Base.prototype.devide = function(number) {
    if (typeof this.value === 'string') {
        const letters = Math.floor(this.value.length / number);
        this.value = this.value.slice(0, letters);
        return this;
    }

    this.value = this.value / number;
    return this;
}

Base.prototype.get = function() {
    return this.value;
}


// StringBuilder class ES5 -----------------------------------------------------------------------------------------------
function StringBuilder(value) {
    Base.call(this, value);
}

// Getting access for StringBuilder to prototype methods of Base class
StringBuilder.prototype = Object.create(Base.prototype);

// Adding methods to StringBuilder
StringBuilder.prototype.remove = function(str) {
    while (this.value.includes(str)) {
        this.value = this.value.slice(0, this.value.indexOf(str)) + this.value.slice(this.value.indexOf(str) + str.length);
    }
    return this;
}

StringBuilder.prototype.sub = function(from, n) {
    this.value = this.value.substring(from, from + n);
    return this;
}


// IntBuilder class ES6 ----------------------------------------------------------------------------------------------------
class IntBuilder extends Base {
    constructor(value) {
        super(value);
    }

    mod(number) {
        this.value = this.value % number;
        return this;
    }

    static random(from, to) {
        return Math.floor(Math.random() * (to - (from + 1)) + from);
    }
}
val1 = new IntBuilder(5)
val2 = new StringBuilder('test')

bla = val1.plus(5, 10).minus(2, 4, 6).multiple(10).devide(4).mod(7).get()
// console.log(IntBuilder.random(40, 100))
// val2.plus(' yourself').minus(5).multiple(10).devide(4).remove('out').sub(2, 4);
console.log(val1.toString())
// console.log(val2)
console.log(bla)



