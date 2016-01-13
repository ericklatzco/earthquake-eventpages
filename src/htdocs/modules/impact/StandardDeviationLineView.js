'use strict';

var d3 = require('d3'),
    ClassList = require('d3/ClassList'),
    D3LineView = require('d3/D3LineView'),
    D3SubView = require('d3/D3SubView'),
    Util = require('util/Util');


var StandardDeviationLineView = function (options) {
  var _this,
      _initialize,

      _data,
      _el,
      _histograms,
      _legend,
      _legendLine,
      _lineView,
      _x,
      _y;

  _this = D3SubView(options);

  _initialize = function (options) {

    ClassList.polyfill(_this.el);
    _this.el.classList.add('StandardDeviationLineView');
    _el = d3.select(_this.el);

    _histograms = _el.append('g');
    _lineView = D3LineView(Util.extend({}, options, {
      el: _el.append('g').node(),
      legend: _this.legend
    }));

    _data = options.histogram;
    _x = _this.view.model.get('xAxisScale');
    _y = _this.view.model.get('yAxisScale');

  };

  _this.render = function () {
    _x = _this.view.model.get('xAxisScale');
    _y = _this.view.model.get('yAxisScale');

    _lineView.render();
    _histograms.empty();

    if (_data.length === 0) {
      return;
    }

    // update standard deviation for each point
    _data.forEach(function (point) {
      var el,
          px, p0y, p1y,
          width;

      if (point.stdev === 0) {
        return;
      }

      width = 5;
      el = _histograms.append('path').attr('class', 'standard-deviation');
      px = _x(point.x);
      p0y = _y(point.y - point.stdev);
      p1y = _y(point.y + point.stdev);
      el.attr('d',
          'M ' + (px - width) + ' ' + p0y +
          'L ' + (px + width) + ' ' + p0y +
          'M ' + (px - width) + ' ' + p1y +
          'L ' + (px + width) + ' ' + p1y +
          'M ' + px + ' ' + p0y +
          'L ' + px + ' ' + p1y
      );
    });

    // update legend 
    if (_lineView.legend) {
      ClassList.polyfill(_this.legend);
      _legend = d3.select(_this.legend);
      _legendLine = _legend.select('path');
      _legendLine.empty();
    }
  };

  /**
   * Unbind event listeners and free references.
   */
  _this.destroy = Util.compose(function () {
    if (_this === null) {
      return;
    }

    _initialize = null;
    _this = null;
  }, _this.destroy);

  _initialize(options);
  options = null;
  return _this;
};


module.exports = StandardDeviationLineView;
