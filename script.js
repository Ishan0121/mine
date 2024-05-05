let select = document.querySelector('#select');
  let file;
  const reader = new FileReader();
  const ring = new Audio();
  let audioURL;
  select.addEventListener('click',()=>{
      file = document.getElementById('audioInput').files[0];
      reader.addEventListener('load', function() {
          audioURL = reader.result;
          
      ring.src = audioURL;
      });
      reader.readAsDataURL(file);
      // audioURL = reader.result;
      
  });
        // variables  for alarm
        let alarmListArr = [];
        const selectMenu = document.querySelectorAll("select");
        const setAlarmBtn = document.querySelector("#set");
        let alarmCount = 0;
        let alarmTime;
        // let ring = new Audio();
        // ring.src = audioURL;
        // ring.play;
        // audio.preload = "auto";

        let hr = document.querySelector('#hrs');
        let mn = document.querySelector('#min');
        let sc = document.querySelector('#sec');

        setInterval(()=>{
            let day = new Date();
            let hh = day.getHours()*30;
            let mm = day.getMinutes()*6;
            let ss = day.getSeconds()*6;

            hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;

            //digital clock
            let hour = document.getElementById('hour');
            let minutes = document.getElementById('minutes');
            let seconds = document.getElementById('seconds');
            let ampm = document.getElementById('ampm');

            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();
            
            

            var am = h>=12?'PM':'AM';

            if(h>12){
                h-=12;
            }
            h=(h<10)?"0"+h:h;
            m=(m<10)?"0"+m:m;
            s=(s<10)?"0"+s:s;

            hour.innerHTML = h;
            minutes.innerHTML = m;
            seconds.innerHTML = s;
            ampm.innerHTML = am;

            //theme auto change according to time
            if(auto.innerHTML=='on'){
                if((am=='PM')){
                    mode.innerHTML='dark';
                    mod();
                }
                if((am=='AM')){
                    mode.innerHTML='light';
                    mod();
                }
            }

            for(let i=0; i<alarmListArr.length;i++){
                // ring.loop = false;
                if(alarmListArr[i]==`${h}:${m}:${s} ${am}`){
                    console.log("Alarm ringing...");
                    ring.play();
                    // ring.loop=true;
                    document.querySelector(".alarm-container").style.visibility= "visible";
                }
            }
        },100)

        let h = new Date().getHours();
        let s = new Date().getSeconds();
        let m = new Date().getMinutes();
        // code for changing theme button
        let mode = document.querySelector('#btn');
            mode.addEventListener('click',()=>{
            mod();
        });

        // auto theme change button
        let auto = document.querySelector('#auto');
        
        auto.addEventListener('click',()=>{
            if(auto.innerHTML=='on'){
                auto.innerHTML='off';
            }else if(auto.innerHTML=='off'){
                auto.innerHTML='on';
            }
        });
        
        //theme function
        function mod(){
            if(mode.innerHTML=='dark'){
                mode.innerHTML = 'light';
                document.querySelector('.numbers').style.background = '#0b1727';
                document.querySelector('.numbers').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('#time').style.background = '#0b1727';
                document.querySelector('#time').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('#auto').style.background = '#0b1727';
                document.querySelector('#auto').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('#btn').style.background = '#0b1727';
                document.querySelector('#btn').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('#ampm').style.background = '#0b1727';
                document.querySelector('#ampm').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('body').style.background = '#232f3a';
                document.querySelector('body').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('.clock').style.background = '#1a2129';
                document.querySelector('.clock').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('#alarm').style.background = '#0b1727';
                document.querySelector('#alarm').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                
                document.querySelector('.h3').style.color = '#fff';
                document.querySelector('.h3').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('.container').style.color = '#fff';
                document.querySelector('.container').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
                document.querySelector('.alarm-container').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(33, 31, 31, 0.55),-9px -9px 15px rgb(13, 13, 13)';
            }else if(mode.innerHTML=='light'){
                mode.innerHTML = 'dark';
                document.querySelector('.numbers').style.background = '#3b639b';
                document.querySelector('.numbers').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 7px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255, 1)';
                document.querySelector('#time').style.background = '#3b639b';
                document.querySelector('#time').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 7px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255, 1)';
                document.querySelector('#auto').style.background = '#3b639b';
                document.querySelector('#auto').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255,1)';
                document.querySelector('#btn').style.background = '#3b639b';
                document.querySelector('#btn').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255,1)';
                document.querySelector('#ampm').style.background = '#3b639b';
                document.querySelector('#ampm').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255,1)';
                document.querySelector('body').style.background = '#acbcca';
                document.querySelector('body').style.boxShadow = '45px 45px 45px -15px rgba(0, 0, 0, 0.15),inset 15px 15px 10px rgba(255, 255, 255, 0.75),-15px -15px 35px rgba(255, 255, 255, 0.55),inset -2px -2px 15px rgba(0, 0, 0, 0.2)';
                document.querySelector('.clock').style.background = '#c9d5e0';
                document.querySelector('.clock').style.boxShadow = '45px 45px 45px -15px rgba(0, 0, 0, 0.15),inset 15px 15px 10px rgba(255, 255, 255, 0.75),-15px -15px 35px rgba(255, 255, 255, 0.55),inset -2px -2px 15px rgba(0, 0, 0, 0.2)';
                document.querySelector('#alarm').style.background = '#3b639b';
                document.querySelector('#alarm').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255,1)';
                document.querySelector('.h3').style.color = '#0b1727';
                document.querySelector('.h3').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255,1)';
                document.querySelector('.container').style.color = '#0b1727';
                document.querySelector('.container').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255,1)';
                document.querySelector('.alarm-container').style.boxShadow = '7px 7px 22px #152b4a,inset 7px 7px 10px rgba(255, 255, 255, 0.55),-9px -9px 15px rgba(255, 255, 255,1)';
            }
        }
        //alarm screen
        let alarm = document.querySelector('#alarm');
        let container = document.querySelector('.container');
        
        alarm.addEventListener('click',()=>{
            if(container.style.display == 'block'){
                container.style.display = 'none'
            }else{
                container.style.display = 'block';
            }
        });

        let back = document.querySelector('.bk-btn');
        
        back.addEventListener('click',()=>{
            container.style.display = 'none';
        });
         
        //alarm part

        
        //Set Alarm section
        for(let i=12;i>0;i--){
            i = i<10 ? "0"+i : i;
            let option = `<option value="${i}">${i}</option>`;
            selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
        }

        for(let i=59;i>0;i--){
            i = i<10 ? "0"+i : i;
            let option = `<option value="${i}">${i}</option>`;
            selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
        }

        for(let i=2;i>0;i--){
            let ampm = i==1 ? "AM" : "PM";
            let option = `<option value="${ampm}">${ampm}</option>`;
            selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
        }

        //add alarm 


        function setAlarm(){
            let time = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;
            if(time.includes("setHour") || time.includes("setMinute") || time.includes("AM/PM")){
                alert("Please, Select Valide Input");
            }else{
                alarmCount++;
                document.querySelector(".alarmList").innerHTML += `
                <div class="alarmLog" id="alarm${alarmCount}">
                    <span id="span${alarmCount}">${time}</span>
                    <button class="btn-delete" id="${alarmCount}" onClick="deleteAlarm(this.id)">Delete</button>
                </div>`;

                alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;
                alarmListArr.push(alarmTime);
                console.log(document.querySelector(".btn-delete").value);
            }

        }

        setAlarmBtn.addEventListener("click",setAlarm);


        function deleteAlarm(click_id){
            var element = document.getElementById("alarm"+click_id);
            var deleteIndex = alarmListArr.indexOf(document.querySelector("#span"+click_id).innerText);
            alarmListArr.splice(deleteIndex,1);
            element.remove();
        }

        function stopAlarm(){
            ring.pause();
            document.querySelector(".alarm-container").style.visibility= "hidden";

        }
        select.addEventListener('click',()=>{
            document.querySelector(".tone").style.visibility= "hidden";
        });