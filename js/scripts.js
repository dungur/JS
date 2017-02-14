$(document).ready(function (e) {
    var answer = $('#answer'),
        operation = $('#operation'),
        equals = $('#equals'),
        plus = $('#plus'),
        substract = $('#subtract'),
        divide = $('#divide'),
        multiply = $('#multiply'),
        mminus = $('#mminus'),
        mplus = $('#mplus'),
        clean = $('#C'),
        numbers = $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#dot'),
        mr = $('#mr'),
        cache = [],
        memCache = 0,
        mrcClickCount = 0;
    numbers.click(function () {
        var v = $(this).val();
        answer.val(answer.val() + v);
    });
    clean.click(function () {
        answer.val('');
        operation.val('');
        operation.removeClass('activeAnswer');
        equals.attr('onclick', '');
    });
    plus.click(function (e) {
        if (answer.val() == '') {
            return false;
            equals.attr('onclick', '');
        }
        else if (operation.attr('class') == 'activeAnswer') {
            operation.val(operation.val() + plus.val());
            answer.val('');
            equals.attr('onclick', '');
        }
        else {
            operation.val(operation.val() + answer.val() + plus.val());
            answer.val('');
            equals.attr('onclick', '');
        }
    });
    substract.click(function (e) {
        if (answer.val() == '') {
            return false;
            equals.attr('onclick', '');
        }
        else if (operation.attr('class') == 'activeAnswer') {
            operation.val(operation.val() + substract.val());
            answer.val('');
            equals.attr('onclick', '');
        }
        else {
            operation.val(operation.val() + answer.val() + substract.val());
            answer.val('');
            equals.attr('onclick', '');
        }
    });
    divide.click(function (e) {
        if (answer.val() == '') {
            return false;
            equals.attr('onclick', '');
        }
        else if (operation.attr('class') == 'activeAnswer') {
            operation.val(operation.val() + divide.val());
            answer.val('');
            equals.attr('onclick', '');
        }
        else {
            operation.val(operation.val() + answer.val() + divide.val());
            answer.val('');
            equals.attr('onclick', '');
        }
    });
    multiply.click(function (e) {
        if (answer.val() == '') {
            return false;
            equals.attr('onclick', '');
        }
        else if (operation.attr('class') == 'activeAnswer') {
            operation.val(operation.val() + multiply.val());
            answer.val('');
            equals.attr('onclick', '');
        }
        else {
            operation.val(operation.val() + answer.val() + multiply.val());
            answer.val('');
            equals.attr('onclick', '');
        }
    });
    equals.click(function () {
        if (equals.attr('onclick') != 'return false') {
            var a = answer.val();
            var b = operation.val();
            var c = b.concat(a);
            answer.val(eval(c));
            operation.val(eval(c));
            operation.addClass('activeAnswer');
            equals.attr('onclick', 'return false');
        }
    });
    mr.click(function () {
        if (mrcClickCount > 0) {
            memCache = 0;
            cache = [];
            answer.val('');
        } else {
            answer.val(memCache);
            cache = [];
            cache[0]= memCache;
            mrcClickCount++;
        }
    });
    mminus.click(function () {
        mrcClickCount = 0;
        if(memCache){
            memCache = memCache - parseFloat(answer.val());
        } else {
        if (cache.length !== 0) {
            memCache = memCache - parseFloat(cache[0]);
        } else {
            memCache = 0 - parseFloat(answer.val());
        }
        }
    });
    mplus.click(function () {
        mrcClickCount = 0;
        if(memCache){
            memCache = memCache + parseFloat(answer.val());
        } else {
        if (cache.length === 0) {
            memCache = parseFloat(answer.val());
        } else {
            memCache =  memCache + parseFloat(cache[0]);
        }
        }

    });
});

