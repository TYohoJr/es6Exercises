"use strict";

var _talkingHead = require("./talkingHead.js");

var _talkingHead2 = _interopRequireDefault(_talkingHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LedZepSong = function (_Song) {
  _inherits(LedZepSong, _Song);

  //edits go into the args of the constructor and super methods below
  function LedZepSong(title) {
    _classCallCheck(this, LedZepSong);

    return _possibleConstructorReturn(this, (LedZepSong.__proto__ || Object.getPrototypeOf(LedZepSong)).call(this, "Led Zeppelin", title));
  }

  return LedZepSong;
}(_talkingHead2.default);

//Exercise:
//grab the song class from talkingHead.js using the es6 import method
//Editing only the constructor arguments and super arguments, make the
//code below console.log "title is: black dog by Led Zep"

var blackDog = new LedZepSong("black dog");
console.log(blackDog.getTitle());

//Exercise:
//put a "static" method on the ledzepsong subclass. It doesn't matter what it does, but
//prove that it is static method using the console.