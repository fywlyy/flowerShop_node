webpackJsonp([0],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(70);

var _api = __webpack_require__(119);

var _api2 = _interopRequireDefault(_api);

var _util = __webpack_require__(71);

var _util2 = _interopRequireDefault(_util);

var _header = __webpack_require__(232);

var _header2 = _interopRequireDefault(_header);

__webpack_require__(234);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this2 = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

        _this2.state = {
            userList: []
        };
        _this2.addUserData = {};
        return _this2;
    }

    _createClass(HomePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            this.getUserList(function (data) {
                _this.setState({
                    userList: data
                });
            });
        }
    }, {
        key: 'getUserList',
        value: function getUserList(callback) {
            _util2.default.ajaxRequest({
                url: _api2.default.getUserList,
                type: 'GET',
                successCbk: function successCbk(req) {
                    console.log(req);
                    callback && callback(req);
                }
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e, type) {
            this.addUserData[type] = e.target.value;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this = this;
            var _addUserData = this.addUserData,
                name = _addUserData.name,
                phoneNum = _addUserData.phoneNum;


            if (!name) {
                _util2.default.alertMessage('请输入用户姓名！');
                return;
            }
            if (!phoneNum) {
                _util2.default.alertMessage('请输入用户手机号！');
                return;
            }

            _util2.default.ajaxRequest({
                url: _api2.default.addUser,
                type: 'POST',
                data: {
                    name: name,
                    phoneNum: phoneNum
                },
                successCbk: function successCbk(req) {
                    _util2.default.alertMessage('新增用户成功！');
                    _this.getUserList(function (data) {
                        _this.setState({
                            userList: data
                        });
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var userList = this.state.userList;

            return _react2.default.createElement(
                'div',
                { className: 'container hasFixed home-page' },
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'form-module' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            '\u7528\u6237\u540D\uFF1A'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'name', onChange: function onChange(e) {
                                return _this3.handleChange(e, 'name');
                            }, placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D' })
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            '\u7528\u6237\u624B\u673A\u53F7\uFF1A'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'phoneNum', onChange: function onChange(e) {
                                return _this3.handleChange(e, 'phoneNum');
                            }, placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u624B\u673A\u53F7' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-module' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn primary', onClick: function onClick(e) {
                                    return _this3.handleSubmit(e);
                                } },
                            '\u65B0\u589E\u7528\u6237'
                        )
                    )
                ),
                _react2.default.createElement(
                    'h2',
                    { className: 'user-list-title' },
                    '\u7528\u6237\u5217\u8868'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'user-list' },
                    userList.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { className: 'clearFix', key: index },
                            _react2.default.createElement(
                                'span',
                                { className: 'name fl' },
                                item.name
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'phoneNum fl' },
                                item.phoneNum
                            )
                        );
                    })
                )
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component);

exports.default = HomePage;


module.exports = HomePage;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(233);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'header-layout' },
                '\u9876\u90E8\u5BFC\u822A'
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header-layout":"header-layout"};

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home-page":"home-page","form-module":"form-module","title":"title","btn-module":"btn-module","btn":"btn","user-list-title":"user-list-title","user-list":"user-list"};

/***/ })

});