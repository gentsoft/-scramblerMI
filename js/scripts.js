function shifruem() {

    let arrMain = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','.',',',';',':','-','+','/','*','=','(',')','[',']','{','}','!','@','%','$','&','?','|',' ','_','а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я','А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'],['194','196','198','200','202','204','206','208','210','212','214','216','218','220','222','224','226','228','230','232','234','236','238','240','242','244','246','248','250','252','254','256','258','260','262','264','266','268','270','272','274','276','278','280','282','284','286','288','290','292','294','296','298','300','302','304','306','308','310','312','314','316','318','320','322','324','326','328','330','332','334','336','338','340','342','344','346','348','350','352','354','356','358','360','362','364','366','368','370','372','374','376','378','380','382','384','386','388','390','392','394','396','398','400','402','404','406','408','410','412','414','416','418','420','422','424','426','428','430','432','434','436','438','440','442','444','446','448','450','452','454','456','458','460','462','464','466','468','470','472','474','476','478','480','482','484','486','488','490','492','494','496','498']];

    let output = function(text) {
        allSelect[5].innerHTML = `${text}`
    }

    let erorIn = 'ошибка ввода';

    let allSelect = document.querySelectorAll('.allSelect');
    console.log(allSelect);

    let arrKye = arrMain[0],
        arrVal = arrMain[1];

    let kalk = function(textR,passR) {

        if(!textR || !passR) return;

        let numString = '';
        let numString2 = '';
        let numStringOut = '';

        for(let i = 0; i < textR.length;i++){
            for(let u = 0;u < arrKye.length;u++){
                if (textR[i] === arrKye[u]){
                    numString = numString + arrVal[u];
                }else{
                    output(erorIn);
                }
            }
        }

        for(let i = 0; i < passR.length;i++){
            for(let u = 0;u < arrKye.length;u++){
                if (passR[i] == arrKye[u]){
                    numString2 = numString2 + arrVal[u];
                }else{
                    output(erorIn);
                }
            }
        }

        for(let i = 0,u=0; i < numString.length;){

            let numS_1= +(+numString[i] +numString[i+1] +numString[i+2]);
            let numS_2= +(+numString2[u] +numString2[u+1] +numString2[u+2]);
            let numS_3= (numS_1 + numS_2) / 2;
            i = i+3;
            if(u >= numString2.length-3){ u = 0;
            }else{
                u=u+3;
            };

            if(numS_3 % 2 == 0){
                for(let i = 0; i < arrVal.length;i++){
                    if(numS_3+''==arrVal[i]){numStringOut = numStringOut + arrKye[i]}
                };
            }else{
                numS_3 = numS_3 +1;
                for(let i = 0; i < arrVal.length;i++){
                    if(numS_3+''==arrVal[i]){numStringOut = numStringOut + '^' + arrKye[i]}
                }
            }

        }
        
        output(numStringOut);
    }

    let unkalk = function(textR,passR) {
        if(!textR || !passR) return;

        let numString = '';
        let numString2 = '';
        let numStringOut = '';
        let numTrans= 0;

        for(let i = 0; i < textR.length;i++){
            if(textR[i]==='^'){
                numTrans = 1;
            }else{
                for(let u = 0;u < arrKye.length;u++){
                    if (textR[i] === arrKye[u]){
                        numString = numString + ((+arrVal[u]-numTrans)+'');
                        numTrans= 0;
                    }else{
                        output(erorIn);
                    }
                }
            }
        }

        for(let i = 0; i < passR.length;i++){
            for(let u = 0;u < arrKye.length;u++){
                if (passR[i] == arrKye[u]){
                    numString2 = numString2 + arrVal[u];
                }else{
                    output(erorIn);
                }
            }
        }

        for(let i = 0,u=0; i < numString.length;){

            let numS_1= (+(+numString[i] +numString[i+1] +numString[i+2]))*2;
            let numS_2= +(+numString2[u] +numString2[u+1] +numString2[u+2]);
            let numS_3= numS_1 - numS_2;
            i = i+3;
            if(u >= numString2.length-3){ u = 0;
            }else{
                u=u+3;
            };

            console.log(typeof(numS_1),numS_1);
            console.log('голова:',typeof(numS_2),numS_2);
            console.log('итог:',typeof(numS_3),numS_3);

            for(let i = 0; i < arrVal.length;i++){
                if(numS_3+''==arrVal[i]){numStringOut = numStringOut + arrKye[i]}
            };

        }

    output(numStringOut);

    };



    let work_1 = function(key){
            pass = allSelect[1].value,
            text = allSelect[3].value;

        kalk(text,pass)
    };

    let work_2 = function(key){
        pass = allSelect[1].value,
        text = allSelect[3].value;

    unkalk(text,pass)
};

    allSelect[7].addEventListener("click",work_1);
    allSelect[8].addEventListener("click",work_2);

}

shifruem();