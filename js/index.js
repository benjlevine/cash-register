// HINT:
//
// When you press Enter to submit a new cash register entry, the form will
// actually submit data and reload the page. You don't want to reload the page. It
// messes up the running tab. So in order to prevent normal form submission,
// make sure your form submit handler looks like this:
//
	// $('#entry').submit(function(e) {
	// 		e.preventDefault();
	//      .... do other stuff here ....
	//
	// });


$(function() {

	// Prime 'entries' array
	var entries = [];

	// Override form submit from refreshing page
	$('#entry').submit(function(e) {
			e.preventDefault();

			// Save form submit to 'entries' array
			var entry = $('input#newEntry').val();
			entries.push(parseFloat(entry));
			console.log(entries);

			// Reset form
			$('#entry').trigger('reset');

			// Build 'entries' html in a variable 'tape'
			var tape = '';
			for( var j = 0 ; j < entries.length; j++) {
				tape = tape + '<tr><td colspan="2">$' + entries[j].toFixed(2) + '</td></tr>';
			}
			console.log(tape);

			// Insert 'tape' html in tbody#entries
			$('tbody#entries').html(tape);

			// Sum 'entries' array
			// var sum = 0;
      // for( var j = 0 ; j < rankings.length; j++) {
      //   sum = sum + rankings[j];
      //   console.log('sum: ' + sum);
			// }


	});

		// pull code from carousel
	// Save array total to variable 'total'
	// Print 'total' in th#total


});
