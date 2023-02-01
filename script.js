$(function () {
    var $mainMenuItems = $("#main-menu ul").children("li");
    var totalMainMenuItems = $mainMenuItems.length;
    var openedIndex = -1;

/*    var init = function () {

        $mainMenuItems.children(".images").click(function () {
            var newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex),
            $colorImage = $item.find(".color");

            $colorImage.animate({left:"0px"},250);

            $item.animate({width:"420px"},250);
        });
    };
*/


    var init = function () {

        $mainMenuItems.children(".images").click(function () {
            var newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex),
            $colorImage = $item.find(".color");

            if (openedIndex === newIndex)
            {
                animateItem($item,false,250);
                openedIndex = -1;
            }
            else
            {
                if ((newIndex>=0) && (newIndex <totalMainMenuItems) )
                {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);                         
                    openedIndex = newIndex;
                    animateItem($item, true, 250); 
                }
            }
                   
        });
    };
    animateItem = function($item,toOpen,speed)
    {
        var $colorImage = $item.find(".color"),
        itemParam,colorImageParam;

        if (toOpen)
        {
            itemParam ={width:"420px"};
            colorImageParam ={left:"0px"}
        }
        else
        {
            itemParam ={width:"140px"};
            colorImageParam ={left:"140px"}
        }
        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,250);  
    }
    init();
});
    

$(function(){
    $('#A1').click(function(){

        $('#d1').children('p').css('visibility','visible');
    })
    $('#A2').click(function(){
        $('#d2').children('p').css('visibility','visible');
    })
    $('#A3').click(function(){
        $('#d3').children('p').css('visibility','visible');
    })
    $('#A4').click(function(){
        $('#d4').children('p').css('visibility','visible');
    })
    $('#A5').click(function(){
        $('#d5').children('p').css('visibility','visible');
    })
}); 


//Function to display List of music
// $(function(){
//     var $play_Button= $('#main-menu ul li div p').children();
//     var totalButPlay=$play_Button.length; 
//     var played=-1; 

// });

// $(function(){
//     var $list_Button= $('#main-menu ul li div h3').children();
//     var totalListPlay=$list_Button.length; 
//     var clicked=-1; 

//     var initB1=function(){
//         $list_Button.click(function(){
//             var newIndex1=$(this).parent().parent().index();// index cua the div co class la description
//             var $new_Item=$list_Button.parent().parent().eq(newIndex1);
//             if(clicked===newIndex1){
//                 animateList($new_Item,false);
//                 clicked=-1; 
//             }
//             else{
//                 if((newIndex1>=0) && (newIndex1 < totalListPlay)){
//                     clicked=newIndex1; 
//                     animateList($new_Item, true);
//                 }
//             }
//         });
//     };
//     animateList=function($new_Item, toShow){
//         if(toShow){
//             $new_Item.children('p').css('visibility','visible'); 
//         }
//         else{
//             $new_Item.children('p').css('visibility','hidden'); 
//         }
//     };
// });






