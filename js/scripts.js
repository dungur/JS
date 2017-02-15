/* global $ */
$(document).ready(function() {
  var answer = $('#answer');
  var operation = $('#operation');
  var equals = $('#equals');
  var plus = $('#plus');
  var substract = $('#subtract');
  var divide = $('#divide');
  var multiply = $('#multiply');
  var mminus = $('#mminus');
  var mplus = $('#mplus');
  var clean = $('#C');
  var numbers = $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#dot');
  var mr = $('#mr');
  var cache = [];
  var memCache = 0;
  var mrcClickCount = 0;
  var win = window;
  numbers.click(function() {
    var v = $(this).val();
    answer.val(answer.val() + v);
  });
  clean.click(function() {
    answer.val('');
    operation.val('');
    operation.removeClass('activeAnswer');
    equals.attr('onclick', '');
  });
  plus.click(function() {
    if (answer.val() === '') {
      return false;
    } else if (operation.attr('class') === 'activeAnswer') {
      operation.val(operation.val() + plus.val());
      answer.val('');
      equals.attr('onclick', '');
    } else {
      operation.val(operation.val() + answer.val() + plus.val());
      answer.val('');
      equals.attr('onclick', '');
    }
  });
  substract.click(function() {
    if (answer.val() === '') {
      return false;
    } else if (operation.attr('class') === 'activeAnswer') {
      operation.val(operation.val() + substract.val());
      answer.val('');
      equals.attr('onclick', '');
    } else {
      operation.val(operation.val() + answer.val() + substract.val());
      answer.val('');
      equals.attr('onclick', '');
    }
  });
  divide.click(function() {
    if (answer.val() === '') {
      return false;
    } else if (operation.attr('class') === 'activeAnswer') {
      operation.val(operation.val() + divide.val());
      answer.val('');
      equals.attr('onclick', '');
    } else {
      operation.val(operation.val() + answer.val() + divide.val());
      answer.val('');
      equals.attr('onclick', '');
    }
  });
  multiply.click(function() {
    if (answer.val() === '') {
      return false;
    } else if (operation.attr('class') === 'activeAnswer') {
      operation.val(operation.val() + multiply.val());
      answer.val('');
      equals.attr('onclick', '');
    } else {
      operation.val(operation.val() + answer.val() + multiply.val());
      answer.val('');
      equals.attr('onclick', '');
    }
  });

  equals.click(function() {
    if (equals.attr('onclick') !== 'return false') {
      var a = answer.val();
      var b = operation.val();
      var c = b.concat(a);
      answer.val(win.eval(c));
      operation.val(win.eval(c));
      operation.addClass('activeAnswer');
      equals.attr('onclick', 'return false');
    }
  });
  mr.click(function() {
    if (mrcClickCount > 0) {
      memCache = 0;
      cache = [];
      answer.val('');
    } else {
      answer.val(memCache);
      cache = [];
      cache[0] = memCache;
      mrcClickCount++;
    }
  });
  mminus.click(function() {
    mrcClickCount = 0;
    if (memCache) {
      memCache -= parseFloat(answer.val());
    } else if (cache.length > 0) {
      memCache -= parseFloat(cache[0]);
    } else {
      memCache = 0 - parseFloat(answer.val());
    }
  });
  mplus.click(function() {
    mrcClickCount = 0;
    if (memCache) {
      memCache += parseFloat(answer.val());
    } else if (cache.length === 0) {
      memCache = parseFloat(answer.val());
    } else {
      memCache += parseFloat(cache[0]);
    }
  });
});

