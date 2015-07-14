$(function() {

	// Prime TOTAL variable, make it a number
	var total = 0.0;

	// Override form submit from refreshing page
	$('#entry').submit(function(e) {
		e.preventDefault();

		// Save form submit to ENTRY
		var entry = parseFloat( $('input#newEntry').val() );
		console.log('entry: ' + entry);

		// Print ENTRY to the bottom of the ticker tape
		$('tbody#entries').append('<tr><td colspan="2">$' + entry.toFixed(2) + '</td></tr>');

		// Add ENTRY to TOTAL
    total = total + entry;
		console.log('total: ' + total);

		// Print TOTAL
		$('th#total').html( '$' + total.toFixed(2) );

		// Reset form
		$('#entry').trigger('reset');
	});
});
