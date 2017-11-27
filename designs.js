// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//function to ake grid
function makeGrid() {

for(var i=1;i<input.byid('input_height').value;i++)
        {
            $('table').append('<tr class='color'></tr>');
            for(var j=1;j<input.byid('input_width');j++)
            {
                $('tr').append('<td class='color'></td>');
            };
        };

};
function cleargrid(){
	$('.color').remove();
};
$('#make-grid').click(function(){
	cleargrid();
	makegrid();
});
//color elemnt
$('.color').click(function(){
	('this').css('background-color','input.byid('colorPicker').value');
});