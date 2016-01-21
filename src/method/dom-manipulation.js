/**
 * jQuery's `.html()` method is the equivalent of the `innerHTML` property of
 * an element.
 */
$.fn.html = function (html) {
	if (html) {
		return this.each((i, el) => el.innerHTML = html);
	}

	return this[0].innerHTML;
};

/**
 * The `textContent` property contains the text of an element.
 *
 * Note: `innerText` does exist, but is non-standard and does something
 * slightly different: it shouldn't be used.
 */
$.fn.text = function (text) {
	if (text) {
		return this.each((i, el) => el.textContent = text);
	}

	return this[0].textContent;
};

/**
 * We use `parentElement` to find the parent element, and then `removeChild` to
 * remove the element. JavaScript doesn't allow elements to remove themselves.
 */
$.fn.remove = function (selector) {
	this.each(function () {
		if (!selector || this.matches(selector)) {
			this.parentElement.removeChild(this);
		}
	});
};

/**
 * Add a class using the classList API.
 */
$.fn.addClass = function (className = '') {
	this.each(function () {
		this.classList.add(className);
	});
}

/**
 * Remove a class from an element using the classList API.
 */
$.fn.removeClass = function (className = '') {
	this.each(function () {
		this.classList.remove(className);
	});
}

/**
 * Toggle a class from an element using the classList API.
 */
$.fn.toggleClass = function (className = '') {
	this.each(function () {
		this.classList.toggle(className);
	});
}
