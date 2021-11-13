		function sleep(ms) {
	        return new Promise(resolve => setTimeout(resolve, ms));
	    }

		async function playNotes(){
			var addr = getAddr();

			const synth = new Tone.PolySynth().toMaster();
			//synth.triggerAttackRelease("C5", "4n");
			
			var octave = 0
			for (let i = 0; i < addr.length; i++){
				
				document.getElementById('iteration').innerHTML += i;
				//print(Addr[i].isnumeric())
			    if (isNumber(addr[i])){
			        if (addr[i] == 0 || addr[i] == 1){
			            octave = -2
			        }else if (addr[i] == 2 || addr[i] == 3){
			            octave = -1
			        }else if (addr[i] == 4 || addr[i] == 5){
			            octave = 0
			        }else if (addr[i] == 6 || addr[i] == 7){
			            octave = 1
			        }else if (addr[i] == 8){
			            octave = 2
			        }
			        //alert(addr[i]);
			    } else if (!isNumber(addr[i])) {
			    	await sleep(200);
			        //alert(addr[i].toLowerCase() );
			        if (octave == -2){
			            if (addr[i].toLowerCase() == 'a'){
			                synth.triggerAttackRelease("A2", "4n");
			            }
			            if (addr[i].toLowerCase() == 'b'){
			            	synth.triggerAttackRelease("B2", "4n");
			            }
			            if (addr[i].toLowerCase() == 'c'){
			            	synth.triggerAttackRelease("C2", "4n");
			            }
			            if (addr[i].toLowerCase() == 'd'){
			            	synth.triggerAttackRelease("D2", "4n");
			            }
			            if (addr[i].toLowerCase() == 'e'){
			            	synth.triggerAttackRelease("E2", "4n");
			            }
			            if (addr[i].toLowerCase() == 'f'){
			            	synth.triggerAttackRelease("F2", "4n");
			            }
			            if (addr[i].toLowerCase() == 'g'){
			            	synth.triggerAttackRelease("G2", "4n");
			            }
			        } else if (octave == -1){
			           if (addr[i].toLowerCase() == 'a'){
			                synth.triggerAttackRelease("A3", "4n");
			            }
			            if (addr[i].toLowerCase() == 'b'){
			            	synth.triggerAttackRelease("B3", "4n");
			            }
			            if (addr[i].toLowerCase() == 'c'){
			            	synth.triggerAttackRelease("C3", "4n");
			            }
			            if (addr[i].toLowerCase() == 'd'){
			            	synth.triggerAttackRelease("D3", "4n");
			            }
			            if (addr[i].toLowerCase() == 'e'){
			            	synth.triggerAttackRelease("E3", "4n");
			            }
			            if (addr[i].toLowerCase() == 'f'){
			            	synth.triggerAttackRelease("F3", "4n");
			            }
			            if (addr[i].toLowerCase() == 'g'){
			            	synth.triggerAttackRelease("G3", "4n");
			            }
			        } else if (octave == 0){
			            			           if (addr[i].toLowerCase() == 'a'){
			                synth.triggerAttackRelease("A4", "4n");
			            }
			            if (addr[i].toLowerCase() == 'b'){
			            	synth.triggerAttackRelease("B4", "4n");
			            }
			            if (addr[i].toLowerCase() == 'c'){
			            	synth.triggerAttackRelease("C4", "4n");
			            }
			            if (addr[i].toLowerCase() == 'd'){
			            	synth.triggerAttackRelease("D4", "4n");
			            }
			            if (addr[i].toLowerCase() == 'e'){
			            	synth.triggerAttackRelease("E4", "4n");
			            }
			            if (addr[i].toLowerCase() == 'f'){
			            	synth.triggerAttackRelease("F4", "4n");
			            }
			            if (addr[i].toLowerCase() == 'g'){
			            	synth.triggerAttackRelease("G4", "4n");
			            }
			        }  else if (octave == 1){
			           	if (addr[i].toLowerCase() == 'a'){
			                synth.triggerAttackRelease("A5", "4n");
			            }
			            if (addr[i].toLowerCase() == 'b'){
			            	synth.triggerAttackRelease("B5", "4n");
			            }
			            if (addr[i].toLowerCase() == 'c'){
			            	synth.triggerAttackRelease("C5", "4n");
			            }
			            if (addr[i].toLowerCase() == 'd'){
			            	synth.triggerAttackRelease("D5", "4n");
			            }
			            if (addr[i].toLowerCase() == 'e'){
			            	synth.triggerAttackRelease("E5", "4n");
			            }
			            if (addr[i].toLowerCase() == 'f'){
			            	synth.triggerAttackRelease("F5", "4n");
			            }
			            if (addr[i].toLowerCase() == 'g'){
			            	synth.triggerAttackRelease("G5", "4n");
			            }
			        } else if (octave == 2){
			            if (addr[i].toLowerCase() == 'a'){
			                synth.triggerAttackRelease("A6", "4n");
			            }
			            if (addr[i].toLowerCase() == 'b'){
			            	synth.triggerAttackRelease("B6", "4n");
			            }
			            if (addr[i].toLowerCase() == 'c'){
			            	synth.triggerAttackRelease("C6", "4n");
			            }
			            if (addr[i].toLowerCase() == 'd'){
			            	synth.triggerAttackRelease("D6", "4n");
			            }
			            if (addr[i].toLowerCase() == 'e'){
			            	synth.triggerAttackRelease("E6", "4n");
			            }
			            if (addr[i].toLowerCase() == 'f'){
			            	synth.triggerAttackRelease("F6", "4n");
			            }
			            if (addr[i].toLowerCase() == 'g'){
			            	synth.triggerAttackRelease("G6", "4n");
			            }
			        }    
			    }    
			}    
			        
			   
		}

		function getAddr(){
			//temporary address, Replace with MM call
			let t_Addr = "0x035032655b5B3784D359b56eb82C803BD971C582"; 
			var addr = t_Addr.split('').slice(2,42);
			
			//convert 9's to 'g' for notes :] unnecessary but hey
			for (let i = 0; i < addr.length; i++){
				if (addr[i] == "9"){
        			addr[i] = "g"
        		}
			}
    		//alert(addr);
    		return addr;
		}

		function isNumber(n) {
  			return !isNaN(parseFloat(n)) && isFinite(n);
		}
