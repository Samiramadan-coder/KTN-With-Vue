import Vue from "vue";

// Make UpperCase
Vue.filter('uppercase', function(v) {
	return v.toUpperCase();
});

// Make Revers
Vue.filter('reversing', function(v) {
	return v.split("").reverse().join("");
});

// Shorten The Text
Vue.filter('shorten', function(v) {
	return v.substring(0, 15) + "...";
});