$(document).ready(function(){
    
    $('#submitBtn').click(function(){
        let name = $("input[name=full_name]").val();
        
        if(name != null && name.length > 0){
            let coffeeType = $("input[name=coffee_type]").val();
            let extras = [];
            $("input[name=extras]:checked").each(function(){
                extras.push($(this).val());
            });

            let total = 0;

            let coffeeTypeFull = '';
            //adding cost of coffee to total variable
            if(coffeeType === 'turkish'){
                total += 3;
                coffeeTypeFull = "- $3.00 Turkish Coffee";
            }else if(coffeeType === 'american'){
                total += 5;
                coffeeTypeFull = "- $5.00 American Coffee";
            }else{
                total += 7;
                coffeeTypeFull = "- $7.00 Iced Lattee";
            }

            let extrasFull = "";
            //adding cost of extras to total variable
            for(let i=0; i < extras.length; i++){
                let extra = extras[i];
                
                if(extra === 'extra_coffee'){
                    extrasFull += "<br>- $1.50 Extra Coffee";
                    total += 1.5;
                }else if(extra === 'whipped_cream'){
                    extrasFull += "<br>- $2.00 Whipped Cream";
                    total += 2;
                }else{
                    extrasFull += "<br>- $3.00 Extra Caramel";
                    total += 3;
                }
            }
            //create report
            let report = `Hi, ${name}! Thank you for your order: <br>${coffeeTypeFull} ${extrasFull} <br>Total: $${total}`;
            //console.log(report);
            $('#report_container').css('display','block');
            $('#report_data').html(report);
        }
        else{ //no name was entered
            $('#name-label').text('Name ** You must enter a name to order');
            $('input[name=full_name]').css('border','1px solid red');
            $('#name-label').css('color','red');
        }
    });

    //when the name is typed into, make sure the error message is gone
    $('input[name=full_name]').on('input', function(){

        $('#name-label').text('Name');
        $('input[name=full_name]').css('border','1px solid grey');
        $('#name-label').css('color','black');

    });
});