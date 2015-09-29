/*global define, $ */
define(function (require) {
	'use strict';
	var hljs = require('hljs');
	var EmployeesCollection = require('js/components/EmployeesCollection');
	function EmployeesView(nodes) {
		//this.collection = collection;
		this.textareaButton = nodes.textareaButton;
		this.inputForWebButton = nodes.inputForWebButton;
		this.getInfoButton = nodes.getInfoButton;
		this.getTopNames = nodes.getTopNames;
		this.topNamesInput = nodes.topNamesInput;
		this.getLastIdsButton = nodes.getLastIdsButton;
		this.lastIdsInput = nodes.lastIdsInput;
		this.inputForWeb = nodes.inputForWeb;
		this.textarea = nodes.textarea;
		this.output = nodes.output;
	}
	EmployeesView.prototype.init = function() {
		var collection = new EmployeesCollection();
		var _this = this;
		function decorateWithHighlight() {
			$('code').each(function(i, block) {
				hljs.highlightBlock(block);
			});
		}

		this.textareaButton.click(function() {
			if(_this.textarea.val()) {
				collection.fetchData('html', _this.textarea.val());
				_this.output.append($('<div><code class="hljs json">' + JSON.stringify(collection.employees) + '</code></div>'));
			}
			decorateWithHighlight();
		});
		this.inputForWebButton.click(function() {
			function cb () {
				_this.output.append($('<div><code class="hljs json">' + JSON.stringify(collection.employees) + '</code></div>'));
				decorateWithHighlight();
			}
			collection.fetchData('json', _this.inputForWeb.val(), cb);
		});
		this.getInfoButton.click(function() {
			_this.output.append($('<div><code class="hljs json">' + JSON.stringify(collection.getInfo()) + '</code></div>'));
			decorateWithHighlight();
		});
		this.getTopNames.click(function() {
			_this.output.append($('<div><code class="hljs">' + JSON.stringify(collection.getTopNames(_this.topNamesInput.val())) + '</code></div>'));
			decorateWithHighlight();
		});
		this.getLastIdsButton.click(function() {
			_this.output.append($('<div><code class="hljs">' + JSON.stringify(collection.getLastIds(_this.lastIdsInput.val())) + '</code></div>'));
			decorateWithHighlight();
		});
	};
	return EmployeesView;
});