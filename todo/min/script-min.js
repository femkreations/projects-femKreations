$(document).ready(function(){$("#button").click(function(){var i=$("input[name=checkListItem]").val();$(".list").append("<div class='item'>"+i+"</div>")}),$(".list").click(function(){})}),$(document).on("click",".item",function(){$(this).remove()});