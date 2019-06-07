console.log("this is working");

$('#js-shopping-list-form').submit((e)=>{
    e.preventDefault();
    console.log("submit");
    const value = $('#shopping-list-entry').val() 
    console.log(value);
    $('.shopping-list').append(`<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    $('#shopping-list-entry').val('')
});

//for check addClass and removeClass from jQuery

function lineThroughItem(){
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
        //why no . for the shopping-item_checked
		$(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	})
};

function deleteItem(){
	$('.shopping-list').on('click', '.shopping-item-delete', function(e){
		$(e.target).closest('li').remove();
	})
};


//for the delete .remove()

//in both cases .parent() to get to the element that you want
//use $(this)

/*$( "#x" ).prop( "checked", false );*/

$(lineThroughItem)
$(deleteItem)
