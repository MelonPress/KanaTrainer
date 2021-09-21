const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'こんにちは, わたし KanaTrainer !! --- For more information --> [/help] Kana Trainer ', type: 0} });
    console.log("Bot prêt !");

    answered= true;
    cAnswer = "";
    userAnswer = "";
    
});

// Insérez le token du bot Discord
bot.login('???');

bot.on('message', message => {

    //Le bot renvoie les kana après la commmande ---- en hiragana,katakana,kanji pls
    
	// HIRAGANA

    if (message.author.bot) return false;

    if (message.content === "ping"){ message.reply("pong");}
        
    if (message.content === "a en hiragana pls"){ message.reply("あ");}

    if (message.content === "i en hiragana pls"){ message.reply("い");}
        
    if (message.content === "u en hiragana pls"){ message.reply("う");}
        
    if (message.content === "e en hiragana pls"){ message.reply("え");}

    if (message.content === "o en hiragana pls"){ message.reply("お");}
        
    if (message.content === "ka en hiragana pls"){ message.reply("か");}

    if (message.content === "ki en hiragana pls"){ message.reply("き");}
        
    if (message.content === "ku en hiragana pls"){ message.reply("く");}

    if (message.content === "ke en hiragana pls"){ message.reply("け");}

    if (message.content === "ko en hiragana pls"){ message.reply("こ");}

    if (message.content === "sa en hiragana pls"){ message.reply("さ");}
       
    if (message.content === "shi en hiragana pls"){ message.reply("し");}

    if (message.content === "su en hiragana pls"){ message.reply("す");}

    if (message.content === "se en hiragana pls"){ message.reply("せ");}

    if (message.content === "so en hiragana pls"){ message.reply("そ");}
       
    if (message.content === "ta en hiragana pls"){ message.reply("た");}
       
    if (message.content === "chi en hiragana pls"){ message.reply("ち");}

    if (message.content === "tsu en hiragana pls"){ message.reply("つ");}

    if (message.content === "te en hiragana pls"){ message.reply("て");}	

    if (message.content === "to en hiragana pls"){ message.reply("と");}

    if (message.content === "na en hiragana pls"){ message.reply("な");}

    if (message.content === "ni en hiragana pls"){ message.reply("に");}

    if (message.content === "nu en hiragana pls"){ message.reply("ぬ");}	

    if (message.content === "ne en hiragana pls"){ message.reply("ね");}

    if (message.content === "no en hiragana pls"){ message.reply("の");}

    if (message.content === "ha en hiragana pls"){ message.reply("は");}

    if (message.content === "hi en hiragana pls"){ message.reply("ひ");}

    if (message.content === "fu en hiragana pls"){ message.reply("ふ");}

    if (message.content === "he en hiragana pls"){ messsage.reply("へ");}

    if (message.content === "ho en hiragana pls"){ message.reply("ほ");}

    if (message.content === "ma en hiragana pls"){ message.reply("ま");}

    if (message.content === "mi en hiragana pls"){ message.reply("み");}

    if (message.content === "mu en hiragana pls"){ message.reply("む");}

    if (message.content === "me  en hiragana pls"){ message.reply("め");}	

    if (message.content === "mo en hiragana pls"){ message.reply("も");}

    if (message.content === "ya en hiragana pls"){ message.reply("や");}
    	
    if (message.content === "yu en hiragana pls"){ message.reply("ゆ");}

    if (message.content === "yo en hiragana pls"){ message.reply("よ");}

    if (message.content === "ra en hiragana pls"){ message.reply("ら");}

    if (message.content === "ri en hiragana pls"){ message.reply("リ, り");}

    if (message.content === "ru en hiragana pls"){ message.reply("る");}
    	
    if (message.content === "re en hiragana pls"){ message.reply("れ");}
    	
    if (message.content === "ro en hiragana pls"){ message.reply("ろ");}

    if (message.content === "wa en hiragana pls"){ message.reply("わ");}
    
    if (message.content === "wo en hiragana pls"){ message.reply("を");}
    	
    if (message.content === "n en hiragana pls"){ message.reply("ん");}
    
    // Fin HIRAGANA

    // Début KATAKANA

    if (message.content === "a en katakana pls"){ message.reply("ア");}

    if (message.content === "i en katakana pls"){ message.reply("イ");}
        
    if (message.content === "u en katakana pls"){ message.reply("ウ");}
    
    if (message.content === "e en katakana pls"){ message.reply("エ");}

    if (message.cotent === "o en katakana pls"){ message.reply("オ");}
        
    if (message.content === "ka en katakana pls"){ message.reply("カ");}

    if (message.content === "ki en katakana pls"){ message.reply("キ");}
        
    if (message.content === "ku en katakana pls"){ message.reply("ク");}

    if (message.content === "ke en katakana pls"){ message.reply("ケ");}

    if (message.content === "ko en katakana pls"){ message.reply("コ");}

    if (message.content === "sa en katakana pls"){ message.reply("サ");}
       
    if (message.content === "shi en katakana pls"){ message.reply("シ");}

    if (message.content === "su en katakana pls"){ message.reply("ス");}

    if (message.content === "se en katakana pls"){ message.reply("セ");}

    if (message.content === "so en katakana pls"){ message.reply("ソ");}
       
    if (message.content === "ta en katakana pls"){ message.reply("タ");}
       
    if (message.content === "chi en katakana pls"){ message.reply("チ");}

    if (message.content === "tsu en katakana pls"){ message.reply("ツ");}

    if (message.content === "te en katakana pls"){ message.reply("テ");}	

    if (message.content === "to en katakana pls"){ message.reply("ト");}

    if (message.content === "na en katakana pls"){ message.reply("ナ");}

    if (message.content === "ni en katakana pls"){ message.reply("ニ");}

    if (message.content === "nu en katakana pls"){ message.reply("ヌ");}	

    if (message.content === "ne en katakana pls"){ message.reply("ネ");}

    if (message.content === "no en katakana pls"){ message.reply("ノ");}

    if (message.content === "ha en katakana pls"){ message.reply("ハ");}

    if (message.content === "hi en katakana pls"){ message.reply("ヒ");}

    if (message.content === "fu en katakana pls"){ message.reply("フ");}

    if (message.content === "he en katakana pls"){ messsage.reply("ヘ");}

    if (message.content === "ho en katakana pls"){ message.reply("ホ");}

    if (message.content === "ma en katakana pls"){ message.reply("マ");}

    if (message.content === "mi en katakana pls"){ message.reply("ミ");}

    if (message.content === "mu en katakana pls"){ message.reply("ム");}

    if (message.content === "me  en katakana pls"){ message.reply("メ");}	

    if (message.content === "mo en katakana pls"){ message.reply("モ");}

    if (message.content === "ya en katakana pls"){ message.reply("ヤ");}
    	
    if (message.content === "yu en katakana pls"){ message.reply("ユ");}

    if (message.content === "yo en katakana pls"){ message.reply("ヨ");}

    if (message.content === "ra en katakana pls"){ message.reply("ラ");}

    if (message.content === "ri en katakana pls"){ message.reply("リ");}

    if (message.content === "ru en katakana pls"){ message.reply("ル");}
    	
    if (message.content === "re en katakana pls"){ message.reply("レ");}
    	
    if (message.content === "ro en katakana pls"){ message.reply("ロ");}

    if (message.content === "wa en katakana pls"){ message.reply("ワ");}
    
    if (message.content === "wo en katakana pls"){ message.reply("ヲ");}
    	
    if (message.content === "n en katakana pls"){ message.reply("ン");}
        
    // FIN KATAKANA

    //Embed de la commande help
    if (message.content === prefix+ "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#CC6600')
            .addField("**Commandes du bot !**", "  **-/help : Affiche les commandes du bot !**")
            .addField("**Interaction**", "**ping : Le bot répond pong !**")
            .addField("**Commande pour le tableau des Hiragana**", "  **-/hiragana : affiche le tableau des Hiragana**")
            .addField("**Commande pour le tableau des Katakana**", "  **-/katakana : affiche le tableau des Katakana**")
            .addField("**Commande pour le quiz**", "  **-qh : lance le quiz pour les hiragana ! -qk : lance le quiz pour les katakana** (**- tout en miniscule**)")
            .setFooter("C'est tout pour le moment ! Bot crée par Melon Pressé")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée !");
    }

    //Embed Tableau Hiragana
    if (message.content === prefix+ "hiragana"){
        var hiragana_embed = new Discord.RichEmbed()
        .setColor('#ff8e4a') //Couleur de l'embed
        .addField("Voici tout les hiraganas !", " Pour info il y a 46 hiragana sans les particules")
        .addField("Première ligne :", "  あ(a) い(i) う(u) え(e) お(o)")
        .addField("Deuxième ligne :", "  か(ka) き(ki) く(ku) け(ke) こ(ko)")
        .addField("Troisième Ligne :", " さ(sa) し(shi) す(su) せ(se) そ(so)")
        .addField("Quatrième Ligne :", " た(ta) ち(chi) つ(tsu) て(te) と(to)")
        .addField("Cinquième Ligne", " な(na) に(ni) ぬ(nu) ね(ne) の(no)")
        .addField("Sixième Ligne :", " は(ha) ひ(hi) ふ(fu) へ(he) ほ(ho)")
        .addField("Septième Ligne :", "ま(ma) み(mi) む(mu) め(me) も(mo)")
        .addField("Huitième Ligne :", "や(ya) ゆ(yu) よ(yo)")
        .addField("Neuvième Ligne :", "ら(ra) り(ri) る(ru) れ(re) ろ(ro)")
        .addField("Dixième Ligne :", "わ(wa) を(wo)")
        .addField("Onzième Ligne :", "ん(n)")
    message.channel.sendEmbed(hiragana_embed);
    message.reply("Voici les hiragana !");
    }

    //Embed Tableau Katakana
    if (message.content === prefix+ "katakana"){
        var hiragana_embed = new Discord.RichEmbed()
        .setColor('#c80069') //Couleur de l'embed
        .addField("Voici tout les hiraganas !", " Pour info il y a 46 katakana sans les particules")
        .addField("Première ligne :", "  ア(a) イ(i) ウ(u) エ(e) オ(o)")
        .addField("Deuxième ligne :", "  カ(ka) キ(ki) ク(ku) ケ(ke) コ(ko)")
        .addField("Troisième Ligne :", " サ(sa) シ(shi) ス(su) セ(se) ソ(so)")
        .addField("Quatrième Ligne :", " タ(ta) チ(chi) ツ(tsu) テ(te) ト(to)")
        .addField("Cinquième Ligne", " ナ(na) ニ(ni) ヌ(nu) ネ(ne) ノ(no)")
        .addField("Sixième Ligne :", " ハ(ha) ヒ(hi) フ(fu) ヘ(he) ホ(ho)")
        .addField("Septième Ligne :", "マ(ma) ミ(mi) ム(mu) メ(me) モ(mo)")
        .addField("Huitième Ligne :", "ヤ(ya) ユ(yu) ヨ(yo)")
        .addField("Neuvième Ligne :", "ラ(ra) リ(ri) ル(ru) レ(re) ロ(ro)")
        .addField("Dixième Ligne :", "ワ(wa) ヲ(wo)")
        .addField("Onzième Ligne :", "ン(n)")
    message.channel.sendEmbed(hiragana_embed);
    message.reply("Voici les katakana !");
    }
    
    //Début Hiraganapart (Particules)
    if (message.content === prefix+ "hiraganapart"){
        var dakuten_embed = new Discord.RichEmbed()
        .setColor('#ff8e4a')
        .addField("Voici tout les dakuten ! ", "Pour info il y a 20 hiragana avec particules")
        .addField("Première Ligne :", "Série des K qui se transforme en G > が(ga) ぎ(gi) ぐ(gu) げ(ge) ご(go)")
        .addField("Deuxième Ligne :", "Série des S qui se transforme en Z > ざ(za) じ(ji) ず(zu) ぜ(ze) ぞ(zo)")
        .addField("Troisème Ligne :", "Série des T qui se transforme en D > だ(da) ぢ(ji(di)) づ(zu(du possiblité ず)) で(de) ど(do)")
        .addField("Quatrième Ligne :", "Série des H qui se transforme en B > ば(ba) び(bi) ぶ(bu) べ(be) ぼ(bo)")
    message.channel.sendEmbed(dakuten_embed);
    //message.channel.sendMessage("Voici les dakuten");
    console.log("Console Dakuten demandé !");
    }
    //Fin Katakanapart (Particules)
    /* Début Katakanapart (Particules)
    if (message.content === prefix+ "katakanapart"){
        var dakuten_embed = new Discord.RichEmbed()
        .setColor('#99FF99')
        .addField("Voici tout les dakuten ! ", "Pour info il y a 20 katakana avec particules")
        .addField("Première Ligne :", "Série des K qui se transforme en G > が(ga) ぎ(gi) ぐ(gu) げ(ge) ご(go)")
        .addField("Deuxième Ligne :", "Série des S qui se transforme en Z > ざ(za) じ(ji) ず(zu) ぜ(ze) ぞ(zo)")
        .addField("Troisème Ligne :", "Série des T qui se transforme en D > だ(da) ぢ(ji(di)) づ(zu(du possiblité ず)) で(de) ど(do)")
        .addField("Quatrième Ligne :", "Série des H qui se transforme en B > ば(ba) び(bi) ぶ(bu) べ(be) ぼ(bo)")
    message.channel.sendEmbed(dakuten_embed);
    //message.channel.sendMessage("Voici les dakuten");
    console.log("Console Dakuten demandé !");
    }
    Fin Katakanapart (Particules)*/
    
    //Début bot discussion
    if (message.content === "Konnichiwa, o genki desu ka KanaTrainer ?"){
        random();

        if (randnum == 1){
        	message.reply("Watashi wa totemo genki desu ^^");
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("i am sad :(");
            console.log(randnum);
        }
            
    }
    //Fin bot discussion

    //Quiz HIRAGANA, KATAKANA, KANJI etc..
    if (answered == false) {
        userAnswer = message;
        if (userAnswer == cAnswer) {
            message.reply ("C'est ça :smile:");
        }
        else {
            message.reply ("C'est pas ça :stuck_out_tongue_winking_eye:");
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }
    
    // - Quiz HIRAGANA
    if (message.content === "qh"){
        number = 46;
        var random = Math.floor (Math.random() * (number -1 + 1)) +1;
        switch (random) {
            case 1: message.channel.send ("あ"); cAnswer = "a"; break;
            case 2: message.channel.send ("い"); cAnswer = "i"; break;
            case 3: message.channel.send ("う"); cAnswer = "u"; break;
            case 4: message.channel.send ("え"); cAnswer = "e"; break;
            case 5: message.channel.send ("お"); cAnswer = "o"; break;
            case 6: message.channel.send ("か"); cAnswer = "ka"; break;
            case 7: message.channel.send ("き"); cAnswer = "ki"; break; 
            case 8: message.channel.send ("く"); cAnswer = "ku"; break; 
            case 9: message.channel.send ("け"); cAnswer = "ke"; break; 
            case 10: message.channel.send ("こ"); cAnswer = "ko"; break; 
            case 11: message.channel.send ("さ"); cAnswer = "sa"; break; 
            case 12: message.channel.send ("し"); cAnswer = "shi"; break;
            case 13: message.channel.send ("す"); cAnswer = "su"; break;
            case 14: message.channel.send ("せ"); cAnswer = "se"; break;
            case 15: message.channel.send ("そ"); cAnswer = "so"; break;
            case 16: message.channel.send ("た"); cAnswer = "ta"; break;
            case 17: message.channel.send ("ち"); cAnswer = "chi"; break;
            case 18: message.channel.send ("つ"); cAnswer = "tsu"; break;
            case 19: message.channel.send ("て"); cAnswer = "te"; break;
            case 20: message.channel.send ("と"); cAnswer = "to"; break;
            case 21: message.channel.send ("な"); cAnswer = "na"; break;
            case 22: message.channel.send ("に"); cAnswer = "ni"; break;
            case 23: message.channel.send ("ぬ"); cAnswer = "nu"; break;
            case 24: message.channel.send ("ね"); cAnswer = "ne"; break;
            case 25: message.channel.send ("の"); cAnswer = "no"; break;
            case 26: message.channel.send ("は"); cAnswer = "ha"; break;
            case 27: message.channel.send ("ひ"); cAnswer = "hi"; break;
            case 28: message.channel.send ("ふ"); cAnswer = "fu"; break;
            case 29: message.channel.send ("へ"); cAnswer = "he"; break;
            case 30: message.channel.send ("ほ"); cAnswer = "ho"; break;
            case 31: message.channel.send ("ま"); cAnswer = "ma"; break;
            case 32: message.channel.send ("み"); cAnswer = "mi"; break;
            case 33: message.channel.send ("む"); cAnswer = "mu"; break;
            case 34: message.channel.send ("め"); cAnswer = "me"; break;
            case 35: message.channel.send ("も"); cAnswer = "mo"; break;
            case 36: message.channel.send ("や"); cAnswer = "ya"; break;
            case 37: message.channel.send ("ゆ"); cAnswer = "yu"; break;
            case 38: message.channel.send ("よ"); cAnswer = "yo"; break;
            case 39: message.channel.send ("ら"); cAnswer = "ra"; break;
            case 40: message.channel.send ("リ, り"); cAnswer = "ri"; break;
            case 41: message.channel.send ("る"); cAnswer = "ru"; break;
            case 42: message.channel.send ("れ"); cAnswer = "re"; break;
            case 43: message.channel.send ("ろ"); cAnswer = "ro"; break;
            case 44: message.channel.send ("わ"); cAnswer = "wa"; break;
            case 45: message.channel.send ("を"); cAnswer = "wo"; break;
            case 46: message.channel.send ("ん"); cAnswer = "n"; break;
        }
        answered = false;
    }
    // Fin Quiz HIRAGANA

    // - KATAKANA
    if (message.content === "qk"){
        number = 46;
        var random = Math.floor (Math.random() * (number -1 + 1)) +1;
        switch (random) {
            case 1: message.channel.send ("ア"); cAnswer = "a"; break;
            case 2: message.channel.send ("イ"); cAnswer = "i"; break;
            case 3: message.channel.send ("ウ"); cAnswer = "u"; break;
            case 4: message.channel.send ("エ"); cAnswer = "e"; break;
            case 5: message.channel.send ("オ"); cAnswer = "o"; break;
            case 6: message.channel.send ("カ"); cAnswer = "ka"; break;
            case 7: message.channel.send ("キ"); cAnswer = "ki"; break; 
            case 8: message.channel.send ("ク"); cAnswer = "ku"; break; 
            case 9: message.channel.send ("ケ"); cAnswer = "ke"; break; 
            case 10: message.channel.send ("コ"); cAnswer = "ko"; break; 
            case 11: message.channel.send ("サ"); cAnswer = "sa"; break; 
            case 12: message.channel.send ("シ"); cAnswer = "shi"; break;
            case 13: message.channel.send ("ス"); cAnswer = "su"; break;
            case 14: message.channel.send ("セ"); cAnswer = "se"; break;
            case 15: message.channel.send ("ソ"); cAnswer = "so"; break;
            case 16: message.channel.send ("タ"); cAnswer = "ta"; break;
            case 17: message.channel.send ("チ"); cAnswer = "chi"; break;
            case 18: message.channel.send ("ツ"); cAnswer = "tsu"; break;
            case 19: message.channel.send ("テ"); cAnswer = "te"; break;
            case 20: message.channel.send ("ト"); cAnswer = "to"; break;
            case 21: message.channel.send ("ナ"); cAnswer = "na"; break;
            case 22: message.channel.send ("ニ"); cAnswer = "ni"; break;
            case 23: message.channel.send ("ヌ"); cAnswer = "nu"; break;
            case 24: message.channel.send ("ネ"); cAnswer = "ne"; break;
            case 25: message.channel.send ("ノ"); cAnswer = "no"; break;
            case 26: message.channel.send ("ハ"); cAnswer = "ha"; break;
            case 27: message.channel.send ("ヒ"); cAnswer = "hi"; break;
            case 28: message.channel.send ("フ"); cAnswer = "fu"; break;
            case 29: message.channel.send ("ヘ"); cAnswer = "he"; break;
            case 30: message.channel.send ("ホ"); cAnswer = "ho"; break;
            case 31: message.channel.send ("マ"); cAnswer = "ma"; break;
            case 32: message.channel.send ("ミ"); cAnswer = "mi"; break;
            case 33: message.channel.send ("ム"); cAnswer = "mu"; break;
            case 34: message.channel.send ("メ"); cAnswer = "me"; break;
            case 35: message.channel.send ("モ"); cAnswer = "mo"; break;
            case 36: message.channel.send ("ヤ"); cAnswer = "ya"; break;
            case 37: message.channel.send ("ユ"); cAnswer = "yu"; break;
            case 38: message.channel.send ("ヨ"); cAnswer = "yo"; break;
            case 39: message.channel.send ("ラ"); cAnswer = "ra"; break;
            case 40: message.channel.send ("リ"); cAnswer = "ri"; break;
            case 41: message.channel.send ("ル"); cAnswer = "ru"; break;
            case 42: message.channel.send ("レ"); cAnswer = "re"; break;
            case 43: message.channel.send ("ロ"); cAnswer = "ro"; break;
            case 44: message.channel.send ("ワ"); cAnswer = "wa"; break;
            case 45: message.channel.send ("ヲ"); cAnswer = "wo"; break;
            case 46: message.channel.send ("ン"); cAnswer = "n"; break;
        }
        answered = false;
    }
    //Fin Quiz KATAKANA
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

//By Melon Pressé 2018-2019
