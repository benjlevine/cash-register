$(function() {

	// Prime ENTRIES array and TOTAL
	var entries = [];
	var total = parseFloat(0);

	// Override form submit from refreshing page
	$('#entry').submit(function(e) {
		e.preventDefault();

		// Save form submit to ENTRY, add to ENTRIES array
		var entry = parseFloat( $('input#newEntry').val() );
		entries.push(entry);
		console.log(entries);

		// Add ENTRY to the ticker tape
		$('tbody#entries').append('<tr><td colspan="2">$' + entry.toFixed(2) + '</td></tr>');

		// Add ENTRY to TOTAL
    total = total + entry;
		console.log('total: ' + total);

		// Print TOTAL in th#total
		$('th#total').html( '$' + total.toFixed(2) );

		// Reset form
		$('#entry').trigger('reset');
	});
});
