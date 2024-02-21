// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function ()
{
    $('#calculate').click(function ()
    {
        var hours = parseFloat($('#hours').val());
        var rate = 35; // hourly rate

        if (isNaN(hours) || hours < 0)
        {
            alert('Please enter a positive number of hours.');
        }
        else
        {
            var total = hours * rate;
            $('#total').val('$' + total.toFixed(2));
        }
    });
});
