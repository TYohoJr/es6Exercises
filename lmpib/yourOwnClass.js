"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//create a class-subclass structure and implement it using javascript classes.
//be sure each have at least one method on them.
//Export the parent class in one file and import the child class in another
var mySubClass = function () {
    function mySubClass(test) {
        _classCallCheck(this, mySubClass);

        this.test = test;
    }

    _createClass(mySubClass, [{
        key: "testFunction",
        value: function testFunction() {
            return this.test;
        }
    }]);

    return mySubClass;
}();

var myClass = function (_mySubClass) {
    _inherits(myClass, _mySubClass);

    function myClass(test) {
        _classCallCheck(this, myClass);

        return _possibleConstructorReturn(this, (myClass.__proto__ || Object.getPrototypeOf(myClass)).call(this, test));
    }

    return myClass;
}(mySubClass);

var testTest = new myClass("testtest");
console.log(testTest.testFunction());