
var number_of_tickets = 120;
var player_name = "Nick";

console.log("Welcome" + player_name, "you have collected", + number_of_tickets, "tickets");

if(number_of_tickets > 100) {
    console.log(player_name, "you can purchase a blow up hammer");
}else if(number_of_tickets > 20 && number_of_tickets < 50) {
    console.log(player_name, "you can purchase a stick of gum");
}else if(number_of_tickets > 50 && number_of_tickets < 100) {
    console.log(player_name, "you can purchase a fake wig");
}else if(number_of_tickets > 10) {
    console.log(player_name, "you can purchase a troll doll");
}


