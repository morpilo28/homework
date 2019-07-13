$(document).ready(function () {
    /* 1 */
    $('#target1').css('color', 'red');

    /* 2 */
    $('div#target2 span').text('changed')

    /* 3 */
    $('div#target3').clone().appendTo('#ex3').addClass('je-html-area');

    /* 4 */
    $('div.target4:nth-child(2)').css('background-color', 'violet');

    /* 5 */
    $('div.target5').attr("disabled", true);

    /* 6 */
    $('div.target6 input').removeAttr('checked');

    /* 7 */
    $('#parent1 #child').detach().appendTo('#parent2');

    /* 8 */
    $('#target8 input').attr('readonly', 'true');

    /* 9 */
    $('#target9 select option:nth-child(2)').attr('selected', true);

    /* 10 */
    //$('#target10').width(300).height(200);
    $('#target10').css('width', '300px');
    $('#target10').css('height', '200px');

    /* 11 */
    $('#target11').empty();

    /* 13 */
    $('#target13').click(
        function () {
            alert("(ex13) target13's number of div children is: " + ($('#target13 .child').length));
        }
    )

    /*
        ----------- only div children (without click) -----------
      alert("(ex13) target13's number of div children is: " + ($('#target13 > div').length));
  
      ----------- all children (including br and text element) -----------
          alert("(ex13) target13's number of div children is: " + ($('#target13').contents()).length);     */


    /* 14*/
    $('#target14').hover(
        function () {
            $(this).animate({
                width: "300px",
                height: "200px"
            })
        },
        function () {
            $(this).animate({
                width: '150px',
                height: '100px'
            });
        }
    );

    /* 15 */
    setInterval(function () {
        $('#target15 select option:even').css('background-color', generateEvenColors());
        $('#target15 select option:odd').css('background-color', generateOddColors());
    }, 2000);

    function generateEvenColors() {
        let colors = ['aqua', 'aquamarine', 'brown', 'burlywood', 'fuchsia', 'gray', 'greenyellow', 'indianred', 'ivory', 'khaki', 'lightblue',
            'lightgreen', 'mediumpurple'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function generateOddColors() {
        let colors = ['olivedrab', 'palegoldenrod', 'peachpuff', 'powderblue', 'royalblue', 'tomato', 'violet', 'yellow', 'coral', 'chartreuse',
            'blueviolet', 'cornflowerblue', 'red'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});