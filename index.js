$(function() {
    /* adds a new item to the list that the user types in the box */
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const newListItem = $(this).find('#shopping-list-entry');
        $('ul').append(
            '<li>' + '<span class="shopping-item">' + $(newListItem).val()+ '</span>' +
            '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">' + 'check' + '</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
            '<span class="button-label">' + 'delete<' + '/span>' +
            '</button>' +
            '</div>'
    )
    });

    /* toggles a strikethrough on the item name when the "check" button is clicked */
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
          $(this).parent().prev().toggleClass('shopping-item__checked');
    });

    /* removes the item when the "delete" button is clicked */
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
});