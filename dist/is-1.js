"use strict";

/**

    This utils are created by Leclerc Kevin (leclerc.kevin@gmail.com)

    There is extension of javascript & jquery.

    Thera is simple functions too encapsulated under sf.

*/
(function (window) {

    var _is = (function () {

        /**
         * Check if the item in parameter is a date
         * Value parameter - required. All other parameters are optional.
         * @param   {string}   value    [[Description]]
         * @param   {number} dayIdx   [[Description]]
         * @param   {number} monthIdx [[Description]]
         * @param   {number} yearIdx  [[Description]]
         * @returns {boolean}  [[Description]]
         */
        function isDate(value, dayIdx, monthIdx, yearIdx) {
            try {
                //Change the below values to determine which format of date you wish to check. It is set to dd/mm/yyyy by default.
                var DayIndex = dayIdx !== undefined ? dayIdx : 0;
                var MonthIndex = monthIdx !== undefined ? monthIdx : 0;
                var YearIndex = yearIdx !== undefined ? yearIdx : 0;

                value = value.replace(/-/g, "/").replace(/\./g, "/");
                var SplitValue = value.split("/");

                var OK = true;
                if (!(SplitValue[DayIndex].length == 1 || SplitValue[DayIndex].length == 2)) {
                    OK = false;
                }
                if (OK && !(SplitValue[MonthIndex].length == 1 || SplitValue[MonthIndex].length == 2)) {
                    OK = false;
                }
                if (OK && SplitValue[YearIndex].length != 4) {
                    OK = false;
                }

                if (OK) {
                    var Day = parseInt(SplitValue[DayIndex], 10);
                    var Month = parseInt(SplitValue[MonthIndex], 10);
                    var Year = parseInt(SplitValue[YearIndex], 10);

                    if (OK = (Month <= 12 && Month > 0)) {

                        var LeapYear = (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0));

                        if(OK = Day > 0)
                        {
                            if (Month == 2) {
                                OK = LeapYear ? Day <= 29 : Day <= 28;
                            }
                            else {
                                if ((Month == 4) || (Month == 6) || (Month == 9) || (Month == 11)) {
                                    OK = Day <= 30;
                                }
                                else {
                                    OK = Day <= 31;
                                }
                            }
                        }
                    }

                }
                return OK;
            }
            catch (e) {
                return false;
            }
        }

        /**
         * Check if the item in parameter is a string
         * @param   {} item object to test
         * @returns {boolean} result of test
         */
        function isString(item) {
            return (typeof item === "string");
        }

        /**
         * Check if the item in parameter is an object
         * @param   {} item object to test
         * @returns {boolean} result of test
         */
        function isObject (item) {
            return (typeof item === "object" && !Array.isArray(item) && item !== null);
        }

        /**
         * Test if an object is a true object, not window or anything else
         * @param   {} item object to test
         * @returns {boolean} result of test
         */
        function isPlainObject(item) {
            return (someValue != null && Object.prototype.toString.call(someValue) === "[object Object]");
        }

        /**
         * [[Description]]
         * @param   {} str object to test
         * @returns {boolean} result of test
         */
        function isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }

        /**
         * @param   {} item object to test
         * @returns {boolean} result of test
         */
        function isFunction (item) {
            return (typeof item === "function");
        }

        return {
            date: isDate,
            string: isString,
            object: isObject,
            json: isJson,
            function: isFunction
        };
    })();

    window._is = _is;
})(window);
