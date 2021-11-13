		function playNotes(){
			var addr = getAddr();

			const synth = new Tone.Synth().toMaster();
			synth.triggerAttackRelease("C5", "4n");
			
			var octave = 0
			for (let i = 0; i < addr.length; i++){
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
			        alert(addr[i]);
			    }
			}    
			        /*
			    elif Addr[i].isalpha():
			        #time.sleep(0.05)
			        if octave == -2:
			            if Addr[i].lower() == 'a':
			                fluidsynth.play_Note(33,0,100)
			            if Addr[i].lower() == 'b':
			                fluidsynth.play_Note(35,0,100)
			            if Addr[i].lower() == 'c':
			                fluidsynth.play_Note(36,0,100)
			            if Addr[i].lower() == 'd':
			                fluidsynth.play_Note(38,0,100)
			            if Addr[i].lower() == 'e':
			                fluidsynth.play_Note(40,0,100)
			            if Addr[i].lower() == 'f':
			                fluidsynth.play_Note(41,0,100)
			            if Addr[i].lower() == 'g':
			                fluidsynth.play_Note(43,0,100)
			        elif octave == -1:
			            if Addr[i].lower() == 'a':
			                fluidsynth.play_Note(45,0,100)
			            if Addr[i].lower() == 'b':
			                fluidsynth.play_Note(47,0,100)
			            if Addr[i].lower() == 'c':
			                fluidsynth.play_Note(48,0,100)
			            if Addr[i].lower() == 'd':
			                fluidsynth.play_Note(50,0,100)
			            if Addr[i].lower() == 'e':
			                fluidsynth.play_Note(52,0,100)
			            if Addr[i].lower() == 'f':
			                fluidsynth.play_Note(53,0,100)
			            if Addr[i].lower() == 'g':
			                fluidsynth.play_Note(55,0,100)
			        elif octave == 0:
			            if Addr[i].lower() == 'a':
			                fluidsynth.play_Note(57,0,100)
			            if Addr[i].lower() == 'b':
			                fluidsynth.play_Note(59,0,100)
			            if Addr[i].lower() == 'c':
			                fluidsynth.play_Note(60,0,100)
			            if Addr[i].lower() == 'd':
			                fluidsynth.play_Note(62,0,100)
			            if Addr[i].lower() == 'e':
			                fluidsynth.play_Note(64,0,100)
			            if Addr[i].lower() == 'f':
			                fluidsynth.play_Note(65,0,100)
			            if Addr[i].lower() == 'g':
			                fluidsynth.play_Note(67,0,100)
			        elif octave == 1:
			            if Addr[i].lower() == 'a':
			                fluidsynth.play_Note(69,0,100)
			            if Addr[i].lower() == 'b':
			                fluidsynth.play_Note(71,0,100)
			            if Addr[i].lower() == 'c':
			                fluidsynth.play_Note(72,0,100)
			            if Addr[i].lower() == 'd':
			                fluidsynth.play_Note(74,0,100)
			            if Addr[i].lower() == 'e':
			                fluidsynth.play_Note(76,0,100)
			            if Addr[i].lower() == 'f':
			                fluidsynth.play_Note(77,0,100)
			            if Addr[i].lower() == 'g':
			                fluidsynth.play_Note(79,0,100)
			        elif octave == 2:
			            if Addr[i].lower() == 'a':
			                fluidsynth.play_Note(81,0,100)
			            if Addr[i].lower() == 'b':
			                fluidsynth.play_Note(83,0,100)
			            if Addr[i].lower() == 'c':
			                fluidsynth.play_Note(84,0,100)
			            if Addr[i].lower() == 'd':
			                fluidsynth.play_Note(86,0,100)
			            if Addr[i].lower() == 'e':
			                fluidsynth.play_Note(88,0,100)
			            if Addr[i].lower() == 'f':
			                fluidsynth.play_Note(89,0,100)
			            if Addr[i].lower() == 'g':
			                fluidsynth.play_Note(91,0,100)
			        print(Addr[i])
			    i += 1
			*/
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
    		alert(addr);
    		return addr;
		}

		function isNumber(n) {
  			return !isNaN(parseFloat(n)) && isFinite(n);
		}
