/**
 * Convert an array of words/tokens to a set of n-grams, for a given n, possibly with a gap:
 */
export default function (numOfWords, gap, grams, features) {
	for (var i = 0; i < numOfWords - 1 - (gap ? 1 : 0); ++i) {
		grams.unshift("[start]");
		grams.push("[end]");
	}
	for (var i = 0; i <= grams.length - numOfWords; ++i) {
		let sliceOfWords = grams.slice(i, i + numOfWords);
		if (gap) sliceOfWords[1] = "-";
		let feature = sliceOfWords.join(" ");
		features[feature.trim()] = 1;
	}
	for (var i = 0; i < numOfWords - 1 - (gap ? 1 : 0); ++i) {
		grams.pop();
		grams.shift();
	}
};