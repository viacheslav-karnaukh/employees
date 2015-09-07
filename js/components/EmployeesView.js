define(['jquery', 'components/EmployeesCollection', 'lib/highlight'], function ($, EmployeesCollection, hljs) {
	'use strict';
	function EmployeesView(nodes) {
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
		function decorateWithHighlight() {
			$('code').each(function(i, block) {
				hljs.highlightBlock(block);
			});
		}

		this.textareaButton.click(function() {
			if(this.textarea.val()) {
				collection.getData('html', this.textarea.val());
				this.output.append($('<div><code class="hljs json">' + JSON.stringify(collection.employees) + '</code></div>'));
			}
			decorateWithHighlight();
		}.bind(this));
		this.inputForWebButton.click(function() {
			function cb () {
				this.output.append($('<div><code class="hljs json">' + JSON.stringify(collection.employees) + '</code></div>'));
				decorateWithHighlight();
			};
			collection.getData('json', this.inputForWeb.val(), cb.bind(this));
		}.bind(this));
		this.getInfoButton.click(function() {
			this.output.append($('<div><code class="hljs json">' + JSON.stringify(collection.getInfo()) + '</code></div>'));
			decorateWithHighlight();
		}.bind(this));
		this.getTopNames.click(function() {
			this.output.append($('<div><code class="hljs">' + JSON.stringify(collection.getTopNames(this.topNamesInput.val())) + '</code></div>'));
			decorateWithHighlight();
		}.bind(this));
		this.getLastIdsButton.click(function() {
			this.output.append($('<div><code class="hljs">' + JSON.stringify(collection.getLastIds(this.lastIdsInput.val())) + '</code></div>'));
			decorateWithHighlight();
		}.bind(this));
	};
	return EmployeesView;
});