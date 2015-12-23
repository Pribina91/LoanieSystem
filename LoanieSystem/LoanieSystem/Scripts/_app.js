$( document ).ready( function()	{
	var details = "";
	$( ".details" ).each( function()	{
		details += '<tr class="details">' + $( this ).html() + '</tr>';
	} ).remove();
	
	$( "body" ).on( "click", "tbody tr:not(.details)", function( e )	{
		e.preventDefault();
		if( $( this ).next( ".details" ).length == 0 )	{
			$( ".details" ).remove();
			$( this ).after( details );
		} else	{
			$( ".details" ).remove();
		}
	} );
	
	$("body").on( "click", "[href=#close]", function( e )	{
		$( ".details" ).remove();
	} );
	
	$( "[href=#add_debt], [href=#add_payment]" ).click( function( e ) {
		e.preventDefault();
		var last_row = $( "tbody tr:last-child" );
		last_row.after( last_row.clone() );
	} );
} );