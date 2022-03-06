//This is a very old script, so it's not done very conveniently here.
//Perhaps this script will be updated
    print("//help");
    print("[Server IAT] Loading...");
    print("By @Ni6H7");
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function chatHook(text) {
    if(text == "//info") {
    	print("Retrieving Server Information...");
    	clientMessage("§b[Server §aIAT§b] §lServer Info");
        clientMessage("§b[Server §aIAT§b] §4§lIP - " + Server.getAddress());
        clientMessage("§b[Server §aIAT§b] §a§lPort - " + Server.getPort());
        clientMessage("§b[Server §aIAT§b] §e§lBiome - " + Level.getBiomeName());
        clientMessage("§b[Server §aIAT§b] §e§lDifficulty - " + Level.getDifficulty());
        clientMessage("§b[Server §aIAT§b] §e§lServer Time - " + Level.getTime());
        clientMessage("§b[Server §aIAT§b] §c§lWorld Name - " + Level.getWorldName());
        clientMessage("§b[Server §aIAT§b] §e§lBiome ID - " + Level.getBiome());
        clientMessage("§b[Server §aIAT§b] §c§lData - " + Level.getData());
        clientMessage("§b[Server §aIAT§b] §e§lXYZ - " + Player.getX() + " " +  Player.getY() + " " +  Player.getZ());
        clientMessage("§b[Server §aIAT§b] §c§lWorld location - §4Error #1");
		clientMessage("§b[Server §aIAT§b] §6§lEntity - " + Entity.getAll());
		clientMessage("§b[Server §aIAT§b] §6§lPlayers - " + Server.getAllPlayers());
		//clientMessage("§b[Server §aIAT§b] §eBrightness - " +// Level.getBrightness());
		clientMessage("§b[Server §aIAT§b] §aYour Nick on the server §r- " + Player.getName(Player.getEntity()));
		clientMessage("§b[Server §aIAT§b] §o§lThe script does not guarantee complete accurate information");
}
if(text=="//test") {
Player.addItemInventory(175, 1, 6); 
Player.addItemInventory(162, 1, 15); 
Player.addItemInventory(105, 1, 0); 
clientMessage("§b[Server §aIAT§b] §e§lIssued Items for errors TallGrass.php , Wood2.php , MelonStem.php");
clientMessage("§b[Server §aIAT§b] §e§lVulnerability check core...");
}
if(text=="//help") {
	clientMessage("§e===[Help Menu]==="); 
	clientMessage("§e[Server IAT]§l //info - Shows information about the server");
	clientMessage("§e[Server IAT]§l //Tinfo - Shows information about the server as a pop-up message");
	clientMessage("§e[Server IAT]§l //ip check - checks the ip server in Google");
	clientMessage("§e[Server IAT]§l //test - Testing the server for known vulnerabilities");
	//clientMessage("§b§e[Server IAT]§l //spamtest - Checking the Server for Spam Protection");
	clientMessage("§e[Server IAT]§l //color - Shows what the colors mean in messages");
	clientMessage("§e[Server IAT]§l //about - Authors, Version,update information §b[Server §aIAT§b]");
}
if(text=="//color") {
	clientMessage("§b===[Color Info]===");
	clientMessage("§e[Server IAT]§e§l All colors in SIAT have their own meaning (only in //info)");
	clientMessage("§e[Server IAT]§e§l colored prefixes and titles don't matter color");
	clientMessage("§e[Server IAT]§4§l Color Dark Red - Hidden information that can harm the server");
	clientMessage("§e[Server IAT]§c§l Color Light Red - Hidden Information that can and cannot harm the server");
	clientMessage("§e[Server IAT]§e§l Color Yellow -  Hidden Information that cannot harm the server");
	clientMessage("§e[Server IAT]§a§l Light Green - Not hidden information that in no way can harm the server");
	clientMessage("§e[Server IAT]§6§l Color Orange - Between the colors §eYellow§6 And §cLight Red§6");
	}
	if(text=="//about") {
	clientMessage("§b[Server §aIAT§b]§l Server Information And Testing");
	clientMessage("§b[Server §aIAT§b]§l VERSION - 1.3.0 old (GitHub Public)");
	clientMessage("§b[Server §aIAT§b]§l Update Information - added commands '//Tinfo' shows information in a pop-up message");
	clientMessage("§b[Server §aIAT§b]§l Authors - @Ni6H7");
	clientMessage("§b[Server §aIAT§b] §l§oPurpose of the script Show all information about the server and its vulnerability");
	clientMessage("§b[Server §aIAT§b] §l§oWe recommend using this Script for Server Creators");
	clientMessage("[@Ni6H7] I hope my script helped you with problems");
	clientMessage("§cThe creator of the script is not responsible for your server, Device, etc. By using this Script, you are solely responsible For all servers, Devices, etc.");
	}
	if(text=="//Tinfo") {
		clientMessage("§b[Server §aIAT§b]§e info -> pop-up message");
		print("[Server IAT]\nServer Info\nIp - " + Server.getAddress() + "\nPort - " + Server.getPort() + "\nBiome - " + Level.getBiomeName() + "\nDifficulty - " + Level.getDifficulty() + " \nServer Time - " + Level.getTime() + "\nWorld Name - " + Level.getWorldName() + "\nBiome iD - " + Level.getBiome() + "\nData - " + Level.getData() + "\nXYZ - " + Player.getX() + " " + Player.getY() + " " + Player.getZ() + "\nEntity - " + Entity.getAll() + "\nPlayers - " + Server.getAllPlayers() + "\nNickname - " + Player.getName(Player.getEntity()));
}
    if(text=="//ip check") {
    	clientMessage ("§b[Server §aIAT§b] §l§f§oIP Checking........");
    ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://google.com/search?q=' + Server.getAddress());
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
    }
}